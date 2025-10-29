import { Heart, ShoppingCart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export type { Product };

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Quick Actions */}
        <div className="absolute bottom-3 w-full left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white rounded text-gray-700 px-3 py-2 w-1/2 shadow-md hover:bg-pink-50 transition-colors text-sm font-medium">
            View Details
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors">
            <Eye size={18} className="text-gray-700" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors">
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-pink-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 text-sm line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
