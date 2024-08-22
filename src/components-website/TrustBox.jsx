import React from 'react';

import trustpilotlogo from '../images/affiliate/Trustpilot_Logo_(2022) 1.svg';
import stars from '../images/affiliate/stars-5-1 1.svg';

const TrustBox = () => {
  return (
    <div className="grid grid-cols-1 gap-4 text-left lg:grid-cols-3 sm:grid-cols-2 ">
      <a href="https://www.trustpilot.com/reviews/65bcf5210e96748c4e01ae96" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">
            The experience has been quite fulfilling, culminating in my years of experience as a forex trader. The Support staff helps
            resolve any issues or concerns you may have and the devs are hard at work ensuring that the platform is at its best and
            user-friendly for its traders. Rest assured, that you will get regularly scheduled payouts and some of the lowest prices to
            purchase challenges in the Prop Firm Market, with flexible trading rules. If you are ready to give yourself an edge and take
            your trading to a whole new level then Protradersfund is the place for you.
          </p>
          <p>Narmarjah Jarrett</p>
        </div>
      </a>
      <a href="https://www.trustpilot.com/reviews/656a14ba67368a15aaec3988" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">
            I am not sure if there is another prop firm out there that convenes webinars with its members but Protradersfund does, this
            tells me one thing, they truly wants us to succeed. <br /> <br />
            Last Sunday night we were taught proper risk management techniques, trading strategies that works etc. People this one is for
            real and heading straight for the top.
          </p>
          <p>Melford Woolery</p>
        </div>
      </a>{' '}
      <a href="https://www.trustpilot.com/users/65d755f3e163ea001254f4de" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">
            Customer service is on point and accessible. I received my payout quickly. Definitely the best Prop Firm out there.
          </p>
          <p>Dwayne Harris</p>
        </div>
      </a>{' '}
      <a href="https://www.trustpilot.com/reviews/64eb91b28287f6065638f553" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">
            Love the opportunity that pro traders offers to new users. The funding offered is amazing for beginners and long time traders.
            There is only one minimum trading day unlike other trading funds. The team is great. Loving the interface
          </p>
          <p>Naasir Aswan</p>
        </div>
      </a>{' '}
      <a href="https://www.trustpilot.com/reviews/6570d7b36df254ee26a66565" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">
            First prop firm I'm using and trust me I don't think I'm going to switch at all.. amazing! Didn't understand a couple things and
            the live chat agent was very helpful.. big up yuhself Tyrique. Vote Pro Traders Fund prop firm for Jamaica lol
          </p>
          <p>Delano</p>
        </div>
      </a>{' '}
      <a href="https://www.trustpilot.com/users/656d3c3d3eae850012f6d702" target="_blank" className="text-white">
        <div className="flex flex-col items-start self-stretch justify-between px-4 py-6 space-y-6 rounded-md bg-secTheme">
          <img src={trustpilotlogo} alt="" className="w-24" />
          <img src={stars} alt="" className="w-40" />
          <p className="text-xs text-white">Love this platform. Has been helpful in resolving issues quickly.</p>
          <p>Aeon McPherson</p>
        </div>
      </a>
    </div>
  );
};

export default TrustBox;
