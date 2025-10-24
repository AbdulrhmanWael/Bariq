import React, { useState } from 'react';
import { Trash2, ChevronLeft, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// Cart Item Component
const CartItemComponent: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-pink-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
          >
            +
          </button>
          <button 
            onClick={() => onRemove(item.id)}
            className="ml-2 text-gray-400 hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Order Summary Component
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

// Main Cart Component
const ShoppingCartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Gold Chain Pendant',
      price: 450.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Pearl Stud Earrings',
      price: 280.00,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Silver Star Bracelet',
      price: 175.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = (): void => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCartItems([]);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.00;
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
            <p className="text-sm text-gray-500 mb-6">Review your items before checkout</p>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button 
                  onClick={() => navigate('/')}
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="divide-y">
                  {cartItems.map(item => (
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
                    onClick={() => navigate('/')}
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
};

export default ShoppingCartPage;