import React from 'react';

interface RadioCardProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  title: string;
  description: string;
  price: string;
}

const RadioCard: React.FC<RadioCardProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  title,
  description,
  price,
}) => {
  return (
    <label
      htmlFor={id}
      className={`
        flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer
        transition duration-200
        ${checked 
          ? 'border-[#E1007A] bg-pink-50' 
          : 'border-gray-300 bg-white hover:border-gray-400'
        }
      `}
    >
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="w-5 h-5 text-[#E1007A] focus:ring-2 focus:ring-[#E1007A] focus:ring-offset-0 cursor-pointer"
        />
        <div className="ml-3">
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          <div className="text-xs text-gray-600">{description}</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-900">{price}</div>
    </label>
  );
};

export default RadioCard;
