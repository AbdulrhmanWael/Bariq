import { useState } from "react";
import ShopFilters from "./ShopFilters";
import ProductCard, { type Product } from "./ProductCard";

export default function ShopCollection() {
  const [sortBy, setSortBy] = useState("featured");

  // Sample product data - replace with actual data from API
  const products: Product[] = [
    {
      id: 1,
      name: "Golden Leaf Pendant",
      price: 145.0,
      originalPrice: 180.0,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
      badge: "20% OFF",
    },
    {
      id: 2,
      name: "Silver Chain Bracelet",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
      badge: "NEW",
    },
    {
      id: 3,
      name: "Diamond Stud Earrings",
      price: 299.0,
      originalPrice: 349.0,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
      badge: "SALE",
    },
    {
      id: 4,
      name: "Gemstone Cocktail Ring",
      price: 199.0,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    },
    {
      id: 5,
      name: "Pearl Drop Necklace",
      price: 125.0,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      badge: "NEW",
    },
    {
      id: 6,
      name: "Infinity Band Ring",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500",
      badge: "20% OFF",
    },
    {
      id: 7,
      name: "Rose Gold Hoop",
      price: 165.0,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 8,
      name: "Personalized Initial Charm",
      price: 55.0,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500",
      badge: "BESTSELLER",
    },
    {
      id: 9,
      name: "Classic Solitaire",
      price: 450.0,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-300 to-pink-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our handcrafted jewelry pieces or create your own custom
            design
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block flex-shrink-0">
            <ShopFilters />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Display Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                <span className="font-semibold">Showing:</span> {products.length}{" "}
                products
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="sort" className="text-sm text-gray-600">
                  Featured:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
