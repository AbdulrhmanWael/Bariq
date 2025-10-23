import React, { useState } from "react";
import ShoppingCartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import type { CartItem } from "./types";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ShoppingCartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Gold Chain Pendant", price: 450, quantity: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop" },
    { id: 2, name: "Pearl Stud Earrings", price: 280, quantity: 2, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop" },
    { id: 3, name: "Silver Star Bracelet", price: 175, quantity: 1, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop" }
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => setCartItems(items => items.filter(item => item.id !== id));
  const clearCart = () => { if (window.confirm("Are you sure?")) setCartItems([]); };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15;
  const tax = 82.95;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-12">Your cart is empty</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <ShoppingCartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                    Continue Shopping
                  </button>
                  <button
                    onClick={clearCart}
                    className="px-6 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
