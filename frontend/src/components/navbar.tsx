import React from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              bariq
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link to="/" className="text-gray-700 hover:text-pink-600">
                Home
              </Link>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                Design Custom
              </a>
              <Link to="/contact" className="text-gray-700 hover:text-pink-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={22} />
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User size={22} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart size={22} />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
