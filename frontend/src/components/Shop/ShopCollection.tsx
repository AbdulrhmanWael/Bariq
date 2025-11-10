import { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";
import ShopFilters from "./ShopFilters";

export default function ShopCollection() {
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState({
    categories: [] as string[],
    material: [] as string[],
    stone: [] as string[],
    priceRange: { min: 0, max: 1000 },
  });

  const products: Product[] = [
    {
      id: 1,
      name: "Golden Leaf Pendant",
      price: 145.0,
      originalPrice: 180.0,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
      badge: "20% OFF",
    },
    {
      id: 2,
      name: "Silver Chain Bracelet",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
      badge: "NEW",
    },
    {
      id: 3,
      name: "Diamond Stud Earrings",
      price: 299.0,
      originalPrice: 349.0,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
      badge: "SALE",
    },
    {
      id: 4,
      name: "Gemstone Cocktail Ring",
      price: 199.0,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    },
    {
      id: 5,
      name: "Pearl Drop Necklace",
      price: 125.0,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      badge: "NEW",
    },
    {
      id: 6,
      name: "Infinity Band Ring",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500",
      badge: "20% OFF",
    },
    {
      id: 7,
      name: "Rose Gold Hoop",
      price: 165.0,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      id: 8,
      name: "Personalized Initial Charm",
      price: 55.0,
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500",
      badge: "BESTSELLER",
    },
    {
      id: 9,
      name: "Classic Solitaire",
      price: 450.0,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const inPriceRange =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max;

    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(
        product.name.includes("Ring") ? "Rings" : "Other"
      );
    const matchesMaterial = true;
    const matchesStone = true;

    return inPriceRange && matchesCategory && matchesMaterial && matchesStone;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "featured":
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8 items-start min-h-[400px]">
        <aside className="hidden lg:block shrink-0">
          <ShopFilters selectedFilters={filters} onFilterChange={setFilters} />
        </aside>

        <div className="min-w-[880px] flex flex-col">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-48"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {sortedProducts.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
              <div className="col-span-full text-center py-20 text-gray-500">
                No products match your filters.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
