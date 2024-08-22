import React from 'react';
import logo from '../images/Logos/PTF logo.svg';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1C1D20] h-[100vh]">
      <div className="flex justify-center pt-10 text-white sm:pt-40">
        <div className="relative flex flex-col items-center pt-10 shadow-medium bg-[#1C1D20] w-auto gap-4 rounded-lg border-none pb-4 px-2">
          <img src={logo} alt="Pro Trader Fund Logo" />
          <h1 className="text-[32px] font-bold text-center">Thank You for Subscribing!</h1>
          <p className="text-center">
            Your subscription has been received and is greatly appreciated. <br />
            We look forward to sharing exciting updates with you.
          </p>

          <button
            onClick={() => {
              navigate('/');
            }}
            className="py-2 px-5 rounded-md text-white bg-[#00A4E6]
]"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
