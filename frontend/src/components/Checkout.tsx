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

    
    </div>
  );
};

export default Checkout;
