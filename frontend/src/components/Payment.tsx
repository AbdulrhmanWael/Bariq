import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressStep from "./checkout/ProgressStep";

interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const Payment: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/shippingInfo");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const shipping = await response.json();
        if (!shipping) navigate("/shipping");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [navigate]);

  const handleChange = (field: keyof PaymentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors: Partial<PaymentFormData> = {};

    if (!formData.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";
    if (!formData.cardName.trim())
      newErrors.cardName = "Cardholder name is required";
    if (!formData.expiryDate.trim())
      newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Save payment status
    localStorage.setItem("paymentSuccess", "true");

    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Payment
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <ProgressStep number={1} isActive={false} />
            <ProgressStep number={2} isActive={true} />
            <ProgressStep number={3} isActive={false} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border border-gray-200 p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Card Information
          </h3>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>

          {/* Card Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              value={formData.cardName}
              onChange={(e) => handleChange("cardName", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="John Doe"
            />
            {errors.cardName && (
              <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
            )}
          </div>

          {/* Expiry + CVV */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                value={formData.expiryDate}
                onChange={(e) => handleChange("expiryDate", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="MM/YY"
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                value={formData.cvv}
                onChange={(e) => handleChange("cvv", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="123"
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Complete Payment
          </button>
        </form>
      </main>
    </div>
  );
};

export default Payment;
