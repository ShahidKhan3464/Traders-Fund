import React from 'react';
import layers from '../../images/layers.svg';
import { useNavigate } from 'react-router-dom';

const PaymentFlow = () => {
  const navigate = useNavigate();
  return (
    <section className="flex relative overflow-hidden z-0 flex-col gap-2.5 justify-center px-36 py-20 w-full bg-[#141518] max-md:px-5 max-md:max-w-full max-md:py-10">
      <img src={layers} loading="lazy" alt="Background" className="object-cover absolute inset-0 size-full w-full max-md:hidden" />
      <div className="flex flex-wrap gap-20 justify-center items-start w-full max-md:max-w-full max-md:flex-col-reverse">
        <img
          alt="img"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532f919d2efc91ecc452114cede16d355363c951103868c8ba4e078cd8addef6?apiKey=227fffdadf2841c0827fed858fc04b84&"
          className="object-contain grow shrink rounded-none min-w-[240px] w-[298px] max-md:w-full"
        />
        <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[598px] max-md:w-full">
          <div className="flex flex-col">
            <span className="gap-2.5 self-start px-4 py-2.5 text-sm font-semibold leading-none font-matter text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
              Get Paid 3x Faster with Rise Works
            </span>
            <h1 className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full text-6xl font-medium font-matter tracking-[-1.2px] text-white capitalize max-md:max-w-full max-md:text-4xl">
              Accelerate Your Payments and Boost Cash Flow
            </h1>
            <p className="flex-1 font-normal font-matter shrink gap-2.5 self-stretch mt-5 w-full text-xl leading-8 text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
              At Pro Traders Fund, we partner with Rise Works to bring you faster payments and improved cash flow. Our streamlined payment
              system ensures you get your earnings quickly and efficiently, so you can focus on what matters most—your trading. With Rise
              Works, you experience fast payment transfers and quick access to your funds, making it easier to manage your finances and
              invest in your trading success.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('/#pricing');
            }}
            type="button"
            className="overflow-hidden relative z-50 cursor-pointer gap-2 font-matter self-start px-5 py-3 mt-10 text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518] max-md:mx-auto"
          >
            Get funded
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentFlow;
