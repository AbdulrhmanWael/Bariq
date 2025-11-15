import React from 'react';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const hasDiscount = item.originalPrice > item.price;

  return (
    <div className="flex items-start space-x-3">
      <div className="relative shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg border border-gray-200"
        />
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {item.quantity}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
        <div className="flex items-center mt-1">
          {hasDiscount && (
            <span className="text-xs text-gray-500 line-through mr-2">
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xs text-gray-600">each</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold text-gray-900">
          ${item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
