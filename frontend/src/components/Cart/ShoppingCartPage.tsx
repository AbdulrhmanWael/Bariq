/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItem";
import OrderSummary from "./OrderSummary";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart + designs and merge them
  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartRes = await fetch("http://localhost:3001/cart");
        const cartData = await cartRes.json();

        const designsRes = await fetch("http://localhost:3001/designs");
        const designsData = await designsRes.json();

        // Transform cart items
        const merged: CartItem[] = cartData.map((item: any) => {
          const design = designsData.find((d: any) => d.id === item.designId);

          return {
            id: item.id,
            name: design ? `${design.chain} Custom Design` : "Custom Design",
            price: item.price,
            quantity: item.quantity,
            image: design?.preview || item.preview,
          };
        });

        setCartItems(merged);
      } catch (err) {
        console.error("Failed to load cart:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  const updateQuantity = (id: string, newQuantity: number): void => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    // Update backend
    fetch(`http://localhost:3001/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: newQuantity }),
    });
  };

  const removeItem = (id: string): void => {
    setCartItems((items) => items.filter((item) => item.id !== id));

    // Remove from backend
    fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE",
    });
  };

  const clearCart = (): void => {
    if (!confirm("Are you sure you want to clear your cart?")) return;

    setCartItems([]);

    // Clear backend
    fetch("http://localhost:3001/cart", {
      method: "DELETE",
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 15;
  const tax = 70.70;
  const total = subtotal + shipping + tax;

  if (loading) {
    return <p className="text-center py-20">Loading cart...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">
                Cart Items ({cartItems.length})
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Review your items before checkout
            </p>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => navigate("/")}
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <CartItemComponent
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
                  >
                    <ChevronLeft size={20} />
                    Continue Shopping
                  </button>

                  <button
                    onClick={clearCart}
                    className="px-6 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
