import { Save, ShoppingCart } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-4 mt-10">
      <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition">
        <Save size={16} />
        Save Design
      </button>
      <button className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}
