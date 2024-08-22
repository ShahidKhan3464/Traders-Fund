import React, { useEffect } from 'react';
import metatrader from '../images/metatrader.png';
import android from '../images/icons/android.png';
import windows from '../images/icons/windows.png';
import apple from '../images/icons/appleicon.png';
import mt5 from '../images/mt5pics.png';

const Download = ({ activeNav, setActiveNav }) => {
  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-4 text-white">
      <div className="vd-box4">
        {' '}
        <div className="px-4 text-white">
          <div className="flex flex-col my-10 items-center space-y-8 text-center lg:w-[70%]  mx-auto">
            <img src={metatrader} alt="" />
            <h2 className="font-bold md:text-[48px] text-[30px] leading-tight text-center">
              <span className="text-white">
                A powerful platform for Forex
                <br /> and Exchange markets
              </span>
            </h2>
            <p>Successful trading starts with convenient and functional trading. MetaTrader 5 is the best choice for the modern trader.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.metatrader5.com/en/download" target="_blank" rel="noopener noreferrer">
                <button className="bg-white p-3 rounded-md text-black w-[170px]">Find out more</button>
              </a>
              <a href="https://www.metatrader5.com/en/download" target="_blank" rel="noopener noreferrer">
                <button className="bg-mainColor p-3 rounded-md text-black w-[170px]">Download now</button>
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://download.mql5.com/cdn/mobile/mt5/ios?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={apple} alt="" />
              </a>
              <a
                href="https://download.mql5.com/cdn/mobile/mt5/android?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={android} alt="" />
              </a>
              <a href="https://www.metatrader5.com/en/download" target="_blank" rel="noopener noreferrer">
                <img src={windows} alt="" />
              </a>
            </div>
            <img src={mt5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
