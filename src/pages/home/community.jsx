import React from 'react';
import { useNavigate } from 'react-router-dom';

const Community = () => {
 
   const navigate = useNavigate()
  return (
    <section className="flex flex-col py-20 px-36 bg-[#141518] max-md:px-0 max-md:py-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full px-56 max-md:px-5 max-md:max-w-full">
        <header className="flex flex-col w-full text-6xl font-medium tracking-tighter text-center text-white capitalize max-md:text-4xl">
          <h1 className="font-matter font-medium">Fastest Growing Trading Community</h1>
        </header>
        <button
         onClick={() => {
          navigate('/#pricing');
        }}
          type="button"
          className="overflow-hidden cursor-pointer gap-2 self-center font-matter px-5 py-3 mt-10 text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
        >
          Get funded
        </button>
      </div>
      <article className="flex flex-col px-8 mt-20 mx-auto max-w-full font-semibold rounded-2xl border border-solid bg-[#1C1D20] border-[#3B3C3D] w-[1148px] max-md:px-0 max-md:mt-10 max-md:bg-transparent max-md:border-0">
        <div className="relative flex flex-col items-center px-20 pt-8 pb-72 min-h-[511px] max-md:px-5 max-md:pb-24 max-md:max-w-full max-md:pt-2">
          <img
            alt="Community"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1476ccd4573bdb121aff226d0aa744bee48dedda7c0040b9aebf1fe4d720904a?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w"
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="relative flex flex-col justify-center items-center mb-0 max-w-full w-[318px] max-md:mb-2.5">
            <h2 className="text-6xl font-matter tracking-tighter text-center text-[#6EFDEB]">10,278+</h2>
            <p className="mt-4 text-xl text-center font-matter font-normal text-white">Traders Evaluated & Funded</p>
            <button
             onClick={() => {
              navigate('/#pricing');
            }}
              type="button"
              className="overflow-hidden cursor-pointer gap-2 font-matter self-center px-5 py-3 mt-4 text-base bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518] max-md:hidden"
            >
              Get funded
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Community;
