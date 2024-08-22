import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSize = () => {
  const navigate = useNavigate();
  return (
    <section className="flex z-0 flex-col justify-center px-36 py-20 w-full bg-[#141518] max-md:px-5 max-md:py-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <span className="gap-2.5 self-start px-4 py-2.5 text-sm font-semibold leading-none font-matter text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
              Instant Funding Prop Firm
            </span>
            <h1 className="flex-1 shrink mt-5 w-full text-6xl font-medium font-matter tracking-[-1.2px] text-white capitalize max-md:max-w-full max-md:text-4xl">
              Choose Your Account Size 
              <br />
              and Start Trading With The Best Instant Funding Prop Firm
            </h1>
            <p className="flex-1 font-matter shrink mt-5 w-full text-xl font-normal leading-8 text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
              Pro Traders Fund allows you to trade without the stress of financial risk. We cover the losses allowing you to focus on honing
              your trading strategies and maximizing your returns with the best prop trading firm supporting you with instant funding every
              step of the way.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('/#pricing');
            }}
            type="button"
            className="overflow-hidden cursor-pointer gap-2 self-start px-5 py-3 mt-10 text-base font-semibold font-matter bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518] max-md:mx-auto"
          >
            Get funded
          </button>
        </div>
        <div className="flex flex-col text-white min-w-[240px] w-[290px] max-md:items-center max-md:w-full">
          <div className="flex flex-col max-w-full w-[290px] max-md:items-center">
            <img
              alt="imag"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d9b36b56c3df836de8f54f40afbbff91b044801b5ff52ef01cfca2fbeb23a95?apiKey=227fffdadf2841c0827fed858fc04b84&"
              className="object-contain aspect-[0.41] w-[31px]"
            />
            <div className="flex flex-col mt-6 w-full max-md:text-center">
              <h2 className="font-matter text-2xl font-medium leading-8">Select Your Prop Firm Challenge</h2>
              <p className="font-matter font-normal mt-4 text-base leading-6">
                Select the account size you wish to trade. (Eg. $25k, $50k, $100k)
              </p>
            </div>
          </div>
          <img
            alt="im"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c2651899454d1ec40ea90e4b1bc174abbb2a3a48d1958bfa9f5f0eddd99a4b?apiKey=227fffdadf2841c0827fed858fc04b84&"
            className="object-contain mt-6 w-12 aspect-square"
          />
          <div className="flex flex-col mt-6 max-w-full w-[290px] max-md:items-center">
            <img
              alt="mage"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/332a2cf75e3936eef5ba94ea4f3b39eb486fc427aa07504a066dcf8a9f2558d5?apiKey=227fffdadf2841c0827fed858fc04b84&"
              className="object-contain aspect-[0.71] w-[53px]"
            />
            <div className="flex flex-col mt-6 w-full max-md:text-center">
              <h2 className="font-matter text-2xl font-medium leading-none">Prove your skills</h2>
              <p className="mt-4 font-matter font-normal text-base leading-6">
                Start Trading and Pass your Evaluation within the specified rules.
              </p>
            </div>
          </div>
          <img
            alt="imae"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93472e81d905bed06b9f17f2306cb09b0a36805372400f676c0b4ab35a48ac20?apiKey=227fffdadf2841c0827fed858fc04b84&"
            className="object-contain mt-6 w-12 aspect-square"
          />
          <div className="flex flex-col mt-6 max-w-full w-[290px] max-md:items-center">
            <img
              alt="imag"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eedbb26e5bcf37ebbf796d681285200923d9310b9682f50f00e669ca74ce04c?apiKey=227fffdadf2841c0827fed858fc04b84&"
              className="object-contain w-14 aspect-[0.75]"
            />
            <div className="flex flex-col mt-6 w-full max-md:text-center">
              <h2 className="text-2xl font-matter font-medium leading-none">Trade our funds</h2>
              <p className="mt-4 font-matter font-normal text-base leading-6">
                Trade our funds risk-free and keep up to 90% of the profits you make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSize;
