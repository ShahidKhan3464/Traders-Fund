import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from '../utils/utils';
const AffiliateButton = ({ textColor }) => {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => {
        if (isUserAuthenticated()) {
          navigate('/user-affiliate');
        } else {
          localStorage.setItem('redirect_to', '/user-affiliate');
          navigate('/login?isPartner=true');
        }
      }}
    >
      <button
        className={` bg-mainBlue  sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] ${textColor ? textColor : 'text-[white]'}`}
      >
        Become an Affiliate Now
      </button>
    </a>
  );
};

export default AffiliateButton;
