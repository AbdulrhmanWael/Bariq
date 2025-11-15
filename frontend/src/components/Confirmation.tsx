import React from 'react';
import ProgressStep from './checkout/ProgressStep';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <ProgressStep number={1} isActive={false} />
          <ProgressStep number={2} isActive={false} />
          <ProgressStep number={3} isActive={true} />
        </div>

        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#E1007A] hover:bg-[#c4006a] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Back to Home
        </button>
      </main>
    </div>
  );
};

export default Confirmation;
