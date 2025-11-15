import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import Input from './checkout/Input';
import Select from './checkout/Select';
import RadioCard from './checkout/RadioCard';
import CartItem from './checkout/CartItem';
import ProgressStep from './checkout/ProgressStep';

interface FormData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptSuite: string;
  city: string;
  stateProvince: string;
  zipPostalCode: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;
  shippingMethod: 'standard' | 'express';
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptSuite: '',
    city: '',
    stateProvince: '',
    zipPostalCode: '',
    country: 'Egypt',
    phoneNumber: '',
    emailAddress: '',
    shippingMethod: 'standard',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Sample order data
  const orderItems: OrderItem[] = [
    {
      id: '1',
      name: 'Gold Chain Pendant',
      price: 450.00,
      originalPrice: 450.00,
      quantity: 1,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23f3f4f6"/%3E%3Cpath d="M40 25 L30 40 L40 55 L50 40 Z" fill="%23d4af37" stroke="%23b8941f" stroke-width="2"/%3E%3C/svg%3E',
    },
    {
      id: '2',
      name: 'Pearl Stud Earrings',
      price: 560.00,
      originalPrice: 780.00,
      quantity: 1,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23f3f4f6"/%3E%3Ccircle cx="40" cy="40" r="15" fill="%23f5f5f5" stroke="%23d1d5db" stroke-width="2"/%3E%3Ccircle cx="38" cy="38" r="3" fill="%23ffffff" opacity="0.8"/%3E%3C/svg%3E',
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = formData.shippingMethod === 'standard' ? 15.00 : 25.00;
  const tax = 70.70;
  const total = subtotal + shipping + tax;

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.stateProvince.trim()) newErrors.stateProvince = 'State/Province is required';
    if (!formData.zipPostalCode.trim()) newErrors.zipPostalCode = 'ZIP/Postal code is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Navigate to payment page
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-[#E1007A]">bariq</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-[#E1007A] transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-[#E1007A] transition">About Us</a>
                <a href="#" className="text-gray-700 hover:text-[#E1007A] transition">Shop</a>
                <a href="#" className="text-gray-700 hover:text-[#E1007A] transition">Design Custom</a>
                <a href="#" className="text-gray-700 hover:text-[#E1007A] transition">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Search">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Account">
                <User className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Wishlist">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative" aria-label="Cart">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute top-0 right-0 bg-[#E1007A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Checkout</h2>
          
          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <ProgressStep number={1} isActive={true} />
            <ProgressStep number={2} isActive={false} />
            <ProgressStep number={3} isActive={false} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Shipping Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h3>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="First Name"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(value) => handleInputChange('firstName', value)}
                    error={errors.firstName}
                    required
                  />
                  <Input
                    label="Last Name"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(value) => handleInputChange('lastName', value)}
                    error={errors.lastName}
                    required
                  />
                </div>

                {/* Street Address */}
                <div className="mb-4">
                  <Input
                    label="Street Address"
                    id="streetAddress"
                    value={formData.streetAddress}
                    onChange={(value) => handleInputChange('streetAddress', value)}
                    error={errors.streetAddress}
                    required
                  />
                </div>

                {/* Apt/Suite and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Apt/Suite (Optional)"
                    id="aptSuite"
                    value={formData.aptSuite}
                    onChange={(value) => handleInputChange('aptSuite', value)}
                  />
                  <Input
                    label="City"
                    id="city"
                    value={formData.city}
                    onChange={(value) => handleInputChange('city', value)}
                    error={errors.city}
                    required
                  />
                </div>

                {/* State and ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="State/Province"
                    id="stateProvince"
                    value={formData.stateProvince}
                    onChange={(value) => handleInputChange('stateProvince', value)}
                    error={errors.stateProvince}
                    required
                  />
                  <Input
                    label="ZIP/Postal Code"
                    id="zipPostalCode"
                    value={formData.zipPostalCode}
                    onChange={(value) => handleInputChange('zipPostalCode', value)}
                    error={errors.zipPostalCode}
                    required
                  />
                </div>

                {/* Country */}
                <div className="mb-4">
                  <Select
                    label="Country"
                    id="country"
                    value={formData.country}
                    onChange={(value) => handleInputChange('country', value)}
                    options={[
                      { value: 'Egypt', label: 'Egypt' },
                      { value: 'USA', label: 'United States' },
                      { value: 'UK', label: 'United Kingdom' },
                      { value: 'Canada', label: 'Canada' },
                      { value: 'UAE', label: 'United Arab Emirates' },
                    ]}
                    required
                  />
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input
                    label="Phone Number"
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(value) => handleInputChange('phoneNumber', value)}
                    error={errors.phoneNumber}
                    required
                  />
                  <Input
                    label="Email Address"
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(value) => handleInputChange('emailAddress', value)}
                    error={errors.emailAddress}
                    required
                  />
                </div>

                {/* Shipping Method */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Method</h3>
                  
                  <div className="space-y-3">
                    <RadioCard
                      id="standard"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={(value) => handleInputChange('shippingMethod', value as 'standard' | 'express')}
                      title="Standard Shipping"
                      description="5-7 business days"
                      price="$15.00"
                    />
                    
                    <RadioCard
                      id="express"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={(value) => handleInputChange('shippingMethod', value as 'standard' | 'express')}
                      title="Express Shipping"
                      description="2-3 business days"
                      price="$25.00"
                    />
                  </div>
                </div>

                {/* Continue Button - Mobile */}
                <div className="mt-6 lg:hidden">
                  <button
                    type="submit"
                    className="w-full bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                  >
                    Continue to Payment
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {orderItems.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-300 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-sm">Secure checkout</span>
                  </div>
                  <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
                </div>

                {/* Continue Button - Desktop */}
                <div className="hidden lg:block mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                  >
                    Continue to Payment
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold text-[#E1007A] mb-4">bariq</h3>
              <p className="text-gray-600 text-sm mb-4">
                Handcrafted jewelry, designed by you. Create one-of-a-kind pieces that tell your unique story.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-600 hover:text-[#E1007A] transition" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E1007A] transition" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E1007A] transition" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E1007A] transition" aria-label="Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Design Your Charm</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Shop Collection</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Our Story</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E1007A] transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E1007A] focus:border-transparent text-sm"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="button"
                  className="bg-[#E1007A] hover:bg-[#c4006a] text-white px-4 py-2 rounded-r-lg transition"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© 2025 bariq. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
