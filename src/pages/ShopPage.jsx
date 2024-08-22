import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';

import laptop from '../images/Macbook Pro 16 mockup.png';
import check from '../images/icons/icon-check.svg';
import globe from '../images/globe.png';

const ShopPage = ({ activeNav, setActiveNav }) => {
  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-4 text-white">
      {/* <div className="vd-box2">
        {" "}
        <div className="text-white">
          <div className="flex mt-10">
            <div className="flex flex-col gap-10 pl-10">
              <div className="pb-10 space-y-5 0">
                <h2 className="font-bold md:text-[48px] text-[30px] leading-tight">
                  Ready to become <br /> a{" "}
                  <span className="text-mainColor">Pro Trader?</span>
                </h2>
                <p className="font-light ">
                  Prove your skills, get funded and scale up to 3+ million
                  dollars. You Keep 80% of the profits, we cover the losses.
                </p>

                <button className="p-3 text-black rounded-md bg-mainColor">
                  Start PTF Challenge
                </button>

                <div className="flex flex-col items-center gap-8 sm:gap-8 sm:flex-row">
                  <div className="flex gap-2">
                    <img src={check} alt="checkmark"></img>Risk Free
                  </div>
                  <div className="flex gap-2">
                    <img src={check} alt="checkmark"></img>Huge Profits
                  </div>
                </div>
                <div className="flex flex-col items-center gap-8 sm:gap-8 sm:flex-row">
                  <div className="flex gap-2">
                    <img src={check} alt="checkmark"></img>Easy Processing
                  </div>
                  <div className="flex gap-2">
                    <img src={check} alt="checkmark"></img>We cover the losses
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden ml-auto lg:block">
              <img src={laptop} alt="Pro Traders Fund Dashboard" />
            </div>
          </div>
        </div>
      </div>
      <div className="vd-box">
        {" "}
        <div className="px-2 text-white">
          <div className="flex mt-10">
            <div className="flex flex-col gap-10">
              <div className="pb-10 space-y-5">
                <h2 className="font-bold md:text-[48px] text-[30px] leading-tight">
                  Become an
                  <span className="text-mainColor">
                    {" "}
                    UserAffiliate Partner
                  </span>{" "}
                  today!
                </h2>
                <p className="font-light ">
                  Invite your friends & Earn up to 25% commission INSTANTLY.
                  They get a 10% discount OFF any purchase.
                </p>

                <button className="p-3 text-black rounded-md bg-mainColor">
                  Become Our Partner
                </button>
              </div>
            </div>
            <div className="hidden mx-auto lg:block">
              <img
                src={globe}
                alt="Pro Traders Fund Dashboard"
                className="h-[80%]"
              />
            </div>
          </div>
        </div>
      </div> */}
      <Pricing></Pricing>
    </div>
  );
};

export default ShopPage;
