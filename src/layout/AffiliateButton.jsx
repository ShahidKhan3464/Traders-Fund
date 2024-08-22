import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from '../utils/utils';
const AffiliateButton = () => {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => {
        if (isUserAuthenticated()) {
          navigate('/user-affiliate');
        } else {
          localStorage.setItem('redirect_to', '/user-affiliate');
          navigate('/login');
        }
      }}
    >
      <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
        Become Our Affiliate Partner
      </button>
    </a>
  );
};

export default AffiliateButton;
