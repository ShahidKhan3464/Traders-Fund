import React from 'react';
import Navbar2 from '../../components-website/Navbar2';
import SocialMediaSection from '../../components-website/SocialMediaSection';
import GetFundedNow from '../../components-website/GetFundedNow';
import BecomeOurPartner from '../../layout/BecomeOurPartner';
import img1 from '../../images/events/image 321.png';
import img2 from '../../images/events/image 326.png';
import img3 from '../../images/events/image 327.png';
import img4 from '../../images/events/image 328.png';
import img5 from '../../images/events/image 329.png';
import img6 from '../../images/events/image 330.png';
import { useNavigate } from 'react-router-dom';

function GlobalTradersConnect() {
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <Navbar2></Navbar2>
      <section className="flex flex-col items-center justify-start text-center bg-main bg-top bg-no-repeat py-[54px] md:space-y-24 space-y-12">
        <div className="px-4 text-white ">
          <div className="pb-10 space-y-4">
            <h1 className="md:text-[60px] text-[30px] leading-[1.2]">
              Global Traders Connect Jamaica <br />
              Elevate, Network, Win!
            </h1>
            <p className=" font-light text-[24px] urbanist max-w-5xl leading-[1.2]">
              Experience the pinnacle of trading at Global Traders Connect! Network, learn, and win a mastermind trip. Your future in Forex
              awaits! 🌟📈 #TradeInJamaica
            </p>
          </div>
          <a href="/events">
            <button
              className={` bg-mainBlue text-white sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] `}
            >
              Explore Next Events!
            </button>
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center text-center py-[54px]  space-y-4">
        <p className="text-[48px] text-white">Photo Gallery </p>

        <div className="space-y-4 ">
          <img src={img1} alt="" />
          <div className="flex flex-wrap justify-center md:justify-between">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <img src={img4} alt="" />
          <div className="flex flex-wrap justify-center md:justify-between">
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
        <a href="/events">
          <button
            className={` bg-mainBlue text-white sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] `}
          >
            Explore Next Events!
          </button>
        </a>
      </section>
      <SocialMediaSection></SocialMediaSection>
      <GetFundedNow></GetFundedNow>
    </div>
  );
}

export default GlobalTradersConnect;
