import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../../types";
import CartItemComponent from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function ShoppingCartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gold Chain Pendant",
      price: 450,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Pearl Stud Earrings",
      price: 280,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Silver Star Bracelet",
      price: 175,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = (): void => {
    if (globalThis.confirm("Are you sure you want to clear your cart?")) {
      setCartItems([]);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15;
  const tax = 82.95;
  const total = subtotal + shipping + tax;

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

        {/* Order Summary */}
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
