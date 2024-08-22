import React from 'react';
import logo from '../../images/ProTradersFund Logo.png';
import { useNavigate } from 'react-router-dom';

export default function ContactFormSubmitted() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1C1D20] h-[100vh]">
      <div className="flex justify-center pt-10 text-white sm:pt-40">
        <div className="relative flex flex-col items-center pt-10 shadow-medium bg-[#1C1D20] w-auto gap-4 rounded-lg border-none pb-4 px-2">
          <img src={logo} alt="Pro Trader Fund Logo" />
          <h1 className="text-[32px] font-bold text-center">Thank You for Contacting Us!</h1>
          <p className="text-center">
            Your message has been received and we will get back to you as soon as possible. <br /> <br />
            In the meantime, feel free to explore our website for more information about <br /> our services.
          </p>

          <a
            onClick={() => {
              navigate('/');
            }}
          >
            <button className="py-2 px-5 rounded-md text-white bg-[#00A4E6]">Return to Home</button>
          </a>
        </div>
      </div>
    </div>
  );
}
