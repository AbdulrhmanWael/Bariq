/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import ProgressStep from "./checkout/ProgressStep";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

interface CartItem {
  id: string;
  designId: string;
  quantity: number;
  price: number;
}

interface Design {
  id: string;
  preview: string;
  charms: { src: string }[];
}

interface Order {
  id: string;
  orderId: string;
  date: string;
  shipping: any;
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  estimatedDelivery: string;
}

const TAX = 70.7;

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [shippingInfo, setShippingInfo] = useState<any>(null);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("paymentSuccess")) {
      navigate("/payment");
    }
  }, [navigate]);

  useEffect(() => {
    const loadAll = async () => {
      const cartRes = await fetch("http://localhost:3001/cart");
      setCartItems(await cartRes.json());

      const designRes = await fetch("http://localhost:3001/designs");
      setDesigns(await designRes.json());

      const shippingRes = await fetch("http://localhost:3001/shippingInfo");
      setShippingInfo(await shippingRes.json());

      setLoading(false);
    };

    loadAll();
  }, []);

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const shippingCost = shippingInfo?.shippingMethod === "express" ? 25 : 15;
  const total = subtotal + shippingCost + TAX;

  const getDesignImage = (id: string) => {
    const d = designs.find((x) => x.id === id);
    return d?.preview || d?.charms?.[0]?.src || "";
  };

  useEffect(() => {
    if (loading) return;
    if (order) return;
    if (cartItems.length === 0 || !shippingInfo) return;

    const createOrder = async () => {
      const today = new Date();
      const delivery = new Date(today);
      delivery.setDate(
        today.getDate() + (shippingInfo.shippingMethod === "express" ? 3 : 7)
      );

      const newOrder: Order = {
        id: nanoid(),
        orderId: "ORD-" + Math.floor(Math.random() * 1e6),
        date: today.toISOString(),
        shipping: shippingInfo,
        items: cartItems,
        subtotal,
        shippingCost,
        tax: TAX,
        total,
        estimatedDelivery: delivery.toISOString(),
      };

      setOrder(newOrder);

      console.log(newOrder);

      await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      for (const item of cartItems) {
        await fetch(`http://localhost:3001/cart/${item.id}`, {
          method: "DELETE",
        });
      }

      localStorage.removeItem("paymentSuccess");
    };

    createOrder();
  }, [loading, cartItems, shippingInfo, order, shippingCost, subtotal, total]);

  if (loading || !order) {
    return <p className="text-center py-12">Loading your order...</p>;
  }
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <ProgressStep number={1} isActive={false} />
          <ProgressStep number={2} isActive={false} />
          <ProgressStep number={3} isActive={true} />
        </div>

        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Thank You for Your Order!
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Order Number: <span className="font-semibold">{order.orderId}</span>
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Order Details
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 font-medium">Order Date:</p>
              <p>{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Estimated Delivery:</p>
              <p>{new Date(order.estimatedDelivery).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-medium">Shipping Address:</p>
            <p>
              {order.shipping.firstName} {order.shipping.lastName} <br />
              {order.shipping.streetAddress}
              {order.shipping.aptSuite
                ? `, ${order.shipping.aptSuite}`
                : ""}{" "}
              <br />
              {order.shipping.city}, {order.shipping.stateProvince},{" "}
              {order.shipping.zipPostalCode} <br />
              {order.shipping.country} <br />
              Phone: {order.shipping.phoneNumber} <br />
              Email: {order.shipping.emailAddress}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-medium mb-2">Items in Order:</p>

            <ul className="space-y-2">
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={getDesignImage(item.designId)}
                      alt="design"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span>Custom Design</span>
                  </div>

                  <span>
                    {item.quantity} × ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-300 pt-4 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${order.shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-300 pt-2">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/user-dashboard")}
            className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg"
          >
            View Order History
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="w-full md:w-auto bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-3 px-6 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    </div>
  );
};

export default Confirmation;
