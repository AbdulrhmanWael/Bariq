import { useState } from 'react';
import { Heart, User, ShoppingBag, ShoppingCart, X, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

type WishlistItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function WishlistPage() {
  const [email, setEmail] = useState('');
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Golden Leaf Pendant',
      description: 'Gold, 18" Chain',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Personalized Initial Necklace',
      description: 'Silver, 20" Chain',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Custom Charm Bracelet',
      description: 'Rose Gold, Adjustable',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop'
    }
  ]);

  const recommendations = [
    {
      id: 4,
      name: 'Minimalist Gold Hoop Earrings',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Beaded Charm Bracelet',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Beaded Charm Bracelet',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Beaded Charm Bracelet',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=300&fit=crop'
    }
  ];

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item: WishlistItem) => {
    alert(`Added ${item.name} to cart!`);
  };

  const addAllToCart = () => {
    alert(`Added all ${wishlistItems.length} items to cart!`);
  };

  const clearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your wishlist?')) {
      setWishlistItems([]);
    }
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white flex items-center justify-between px-8 py-4 border-b">
        <div className="text-2xl font-bold text-pink-600">bariq</div>
        <div className="flex gap-8 text-gray-700">
          <a href="#" className="hover:text-pink-600 transition">Home</a>
          <a href="#" className="hover:text-pink-600 transition">Design Your Charm</a>
          <a href="#" className="hover:text-pink-600 transition">Shop</a>
          <a href="#" className="hover:text-pink-600 transition">About Us</a>
        </div>
        <div className="flex gap-4 text-gray-700">
          <Heart className="w-5 h-5 cursor-pointer hover:text-pink-600 transition fill-pink-600 text-pink-600" />
          <User className="w-5 h-5 cursor-pointer hover:text-pink-600 transition" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-pink-600 transition" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Wishlist Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-pink-600 fill-pink-600" />
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>
          <span className="text-gray-500">{wishlistItems.length} items</span>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="space-y-6 mb-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-6 relative">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-32 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-gray-900">${item.price.toFixed(2)}</p>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition flex items-center gap-2 font-semibold"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {wishlistItems.length > 0 && (
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={clearWishlist}
              className="text-gray-600 hover:text-gray-800 transition underline"
            >
              Clear Wishlist
            </button>
            <button
              onClick={addAllToCart}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition font-semibold"
            >
              Add All to Cart
            </button>
          </div>
        )}

        {/* You May Also Like */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-pink-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-900">{item.name}</h3>
                  <p className="text-pink-600 font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-12 px-8 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-pink-600 mb-4">bariq</div>
            <p className="text-gray-600 text-sm mb-4">
              Handcrafted jewelry, designed by you. Create one-of-a-kind pieces that tell your unique story.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
              <Facebook className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
              <Twitter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
              <Mail className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <a href="#" className="hover:text-pink-600 transition">Design Your Charm</a>
              <a href="#" className="hover:text-pink-600 transition">Shop Collection</a>
              <a href="#" className="hover:text-pink-600 transition">How it Works</a>
              <a href="#" className="hover:text-pink-600 transition">Our Story</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <a href="#" className="hover:text-pink-600 transition">FAQ</a>
              <a href="#" className="hover:text-pink-600 transition">Shipping & Returns</a>
              <a href="#" className="hover:text-pink-600 transition">Contact Us</a>
              <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <button
                onClick={handleSubscribe}
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition text-sm font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          © 2025 bariq. All rights reserved.
        </div>
      </footer>
    </div>
  );
}