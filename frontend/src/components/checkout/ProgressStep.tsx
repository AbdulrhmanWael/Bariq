import React from 'react';

interface ProgressStepProps {
  number: number;
  isActive: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ number, isActive }) => {
  return (
    <div
      className={`
        w-10 h-10 rounded-full flex items-center justify-center font-semibold
        transition duration-200
        ${isActive 
          ? 'bg-[#E1007A] text-white' 
          : 'bg-gray-200 text-gray-500'
        }
      `}
      aria-current={isActive ? 'step' : undefined}
    >
      {number}
    </div>
  );
};

export default ProgressStep;
