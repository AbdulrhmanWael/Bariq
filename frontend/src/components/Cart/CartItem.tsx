import { Trash2 } from "lucide-react";
import type { CartItemProps } from "../../types";

export default function CartItemComponent({
  item,
  onUpdateQuantity,
  onRemove,
}: Readonly<CartItemProps>) {
  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-pink-600 font-semibold mt-1">
            ${item.price.toFixed(2)}
          </p>
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
}
