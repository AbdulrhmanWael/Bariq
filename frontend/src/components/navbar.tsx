import { Link } from "react-router-dom";
import { Heart, User, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold text-pink-500">
            <Link to="/">bariq</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500">
              Cart
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500">
              Contact Us
            </Link>
            <a href="#" className="text-gray-700 hover:text-pink-500">
              Design Your Charm
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500">
              About Us
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-pink-500" />
            <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-pink-500" />
            <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
