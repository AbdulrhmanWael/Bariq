import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-pink-500 mb-4">bariq</div>
            <p className="text-sm text-gray-600">
              Handcrafted jewelry, designed by you. Create one-of-a-kind pieces that tell your unique story.
            </p>
            <div className="flex space-x-4 mt-4">
              <Instagram className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-500 transition-colors" />
              <Facebook className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-500 transition-colors" />
              <Twitter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-500 transition-colors" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Design Your Charm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
          © 2025 bariq. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;