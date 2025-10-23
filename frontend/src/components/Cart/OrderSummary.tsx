import React from "react";
import { CreditCard } from "lucide-react";
import type { OrderSummaryProps } from "./types";

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shipping, tax, total }) => {
  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-6">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
        <CreditCard size={20} />
        Proceed to Checkout
      </button>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Secure checkout powered by Paymob</p>
        <p>Free shipping on orders over $100</p>
      </div>
    </div>
  );
};

export default OrderSummary;


