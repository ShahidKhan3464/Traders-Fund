import React from 'react';
import icon from '../images/icons/Featured icon.svg';
import close from '../images/icons/Button close X.svg';
import { Link } from 'react-router-dom';

const Banner = ({ show, setShow }) => {
  return (
    <div
      className="banner flex lg:flex-row flex-col items-center justify-around bg-[#00A4E6] lg:h-[72px]
     w-auto rounded-lg px-3 py-2"
    >
      <div className="flex items-center justify-center gap-1 text-white">
        <img src={icon} alt="" className="w-10 h-10" />
        <span className="flex flex-wrap mx-4 text-xs leading-3 lg:text-sm">
          <p className="font-bold ">Welcome to Pro Funded Traders. Please complete your verification to get started!</p>
          <p className="w-full font-light ">Takes only 10 minutes.</p>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/verification">
          <button className="px-4 py-2 text-xs font-bold leading-3 text-black bg-white rounded-md lg:text-sm">Get verifed</button>
        </Link>
        <button>
          <img src={close} alt="" className="h-9 w-9" onClick={() => setShow(false)} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
