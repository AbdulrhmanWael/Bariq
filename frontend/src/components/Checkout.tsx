import React, { useEffect, useState } from "react";
import Input from "./checkout/Input";
import Select from "./checkout/Select";
import RadioCard from "./checkout/RadioCard";
import CartItem from "./checkout/CartItem";
import ProgressStep from "./checkout/ProgressStep";
import { useNavigate } from "react-router-dom";

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
  shippingMethod: "standard" | "express";
}

interface CartType {
  id: string;
  type: string;
  entityId: string;
  quantity: number;
  price: number;
}

interface DesignType {
  id: string;
  chain: string;
  charms: { src: string; leftPct: number; topPct: number }[];
  preview: string;
  price: number;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    country: "Egypt",
    phoneNumber: "",
    emailAddress: "",
    shippingMethod: "standard",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [cart, setCart] = useState<CartType[]>([]);
  const [designs, setDesigns] = useState<DesignType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/cart").then((res) => res.json()),
      fetch("http://localhost:3001/designs").then((res) => res.json()),
    ])
      .then(([cartData, designsData]) => {
        setCart(cartData);
        setDesigns(designsData);
      })
      .finally(() => setLoading(false));
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const getImage = (designId: string) => {
    const design = designs.find((d) => d.id === designId);
    return design ? design.preview || design.charms[0]?.src : "";
  };
  const shipping = formData.shippingMethod === "standard" ? 15 : 25;
  const tax = 70.7;
  const total = subtotal + shipping + tax;

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street required";
    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.stateProvince.trim())
      newErrors.stateProvince = "State required";
    if (!formData.zipPostalCode.trim())
      newErrors.zipPostalCode = "ZIP required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone required";
    if (!formData.emailAddress.trim())
      newErrors.emailAddress = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress))
      newErrors.emailAddress = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save shipping info to json-server
    await fetch("http://localhost:3001/shippingInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        createdAt: new Date().toISOString(),
      }),
    });

    navigate("/payment");
  };

  if (loading) return <div className="text-center py-20">Loading cart...</div>;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Checkout
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <ProgressStep number={1} isActive={true} />
            <ProgressStep number={2} isActive={false} />
            <ProgressStep number={3} isActive={false} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Shipping Information
                </h3>
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="First Name"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(v) => handleInputChange("firstName", v)}
                    error={errors.firstName}
                    required
                  />
                  <Input
                    label="Last Name"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(v) => handleInputChange("lastName", v)}
                    error={errors.lastName}
                    required
                  />
                </div>
                {/* Street */}
                <Input
                  label="Street Address"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(v) => handleInputChange("streetAddress", v)}
                  error={errors.streetAddress}
                  required
                />
                {/* Apt/City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Apt/Suite (Optional)"
                    id="aptSuite"
                    value={formData.aptSuite}
                    onChange={(v) => handleInputChange("aptSuite", v)}
                  />
                  <Input
                    label="City"
                    id="city"
                    value={formData.city}
                    onChange={(v) => handleInputChange("city", v)}
                    error={errors.city}
                    required
                  />
                </div>
                {/* State/ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="State/Province"
                    id="stateProvince"
                    value={formData.stateProvince}
                    onChange={(v) => handleInputChange("stateProvince", v)}
                    error={errors.stateProvince}
                    required
                  />
                  <Input
                    label="ZIP/Postal Code"
                    id="zipPostalCode"
                    value={formData.zipPostalCode}
                    onChange={(v) => handleInputChange("zipPostalCode", v)}
                    error={errors.zipPostalCode}
                    required
                  />
                </div>
                {/* Country */}
                <Select
                  label="Country"
                  id="country"
                  value={formData.country}
                  onChange={(v) => handleInputChange("country", v)}
                  options={[
                    { value: "Egypt", label: "Egypt" },
                    { value: "USA", label: "USA" },
                    { value: "UK", label: "UK" },
                    { value: "Canada", label: "Canada" },
                    { value: "UAE", label: "UAE" },
                  ]}
                />
                {/* Phone/Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input
                    label="Phone"
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(v) => handleInputChange("phoneNumber", v)}
                    error={errors.phoneNumber}
                    required
                  />
                  <Input
                    label="Email"
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(v) => handleInputChange("emailAddress", v)}
                    error={errors.emailAddress}
                    required
                  />
                </div>
                {/* Shipping method */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Shipping Method
                  </h3>
                  <div className="space-y-3">
                    <RadioCard
                      id="standard"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === "standard"}
                      onChange={(v) =>
                        handleInputChange(
                          "shippingMethod",
                          v as "standard" | "express"
                        )
                      }
                      title="Standard Shipping"
                      description="5-7 business days"
                      price="$15.00"
                    />
                    <RadioCard
                      id="express"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === "express"}
                      onChange={(v) =>
                        handleInputChange(
                          "shippingMethod",
                          v as "standard" | "express"
                        )
                      }
                      title="Express Shipping"
                      description="2-3 business days"
                      price="$25.00"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  Continue to Payment
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={{
                        ...item,
                        name: item.entityId,
                        originalPrice: item.price,
                        image: getImage(item.entityId),
                      }}
                    />
                  ))}
                </div>
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
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
