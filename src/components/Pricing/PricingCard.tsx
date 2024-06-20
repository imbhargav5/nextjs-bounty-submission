// components/PricingCard.js

import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ title, price, features, popular }) => {
  return (
    <div className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 ${popular ? 'border-2 border-indigo-500' : ''}`}>
      <div className="text-center">
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        {popular && <p className="text-sm text-gray-500">Most popular</p>}
        <div className="flex justify-center items-baseline text-gray-900 mt-2">
          <span className="text-2xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        </div>
        <button className="w-full bg-indigo-500 text-white py-2 rounded-md mt-4">Buy now</button>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-indigo-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
