import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeadingFunded = () => {
  const navigate = useNavigate()
  return (
    <section className="flex overflow-hidden z-0 flex-col pt-16 w-full max-md:max-w-full max-md:pt-10 max-md:pb-8">
      <div className="flex overflow-hidden relative flex-col px-20 pt-2.5 w-full max-md:px-0 max-md:pt-0 max-md:max-w-full">
        <img
          alt="Background"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/10b7dc111cd80169fba284eeb15aeabaf6b43cd4f3535998db1936ad2170b5bd?apiKey=227fffdadf2841c0827fed858fc04b84&"
          className="object-cover absolute inset-0 size-full w-full max-md:hidden"
        />
        <div className="flex relative flex-col justify-center items-center max-md:max-w-full">
          <div className="flex flex-col justify-center px-56 w-full max-w-[1220px] max-md:px-3 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <span className="gap-2.5 self-center px-4 py-2.5 text-sm font-matter font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
                Best Industry Trading Tool
              </span>
              <h1 className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full text-6xl font-matter font-medium tracking-tighter text-center text-white capitalize max-md:max-w-full max-md:text-4xl">
                Join the Leading Funded Trader Program
              </h1>
              <p className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full text-xl font-matter font-normal leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
                Leave the journaling and performance tracking to us! Our advanced performance tracker logs every trade in real-time and
                provides live analysis and feedback. With the fastest trade execution, lowest spreads, and access to over 2000+ instruments
                via MetaTrader 5, we offer a powerful trading environment. Our global community of top traders manage our private funds,
                keeping up to 90% of the profits. Start your journey with the best prop trading firm today and elevate your trading career!
              </p>
            </div>
            <button
             onClick={() => {
              navigate('/#pricing');
            }}
              type="button"
              className="overflow-hidden cursor-pointer gap-2 self-center px-5 py-3 mt-10 text-base font-matter font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
            >
              Get funded
            </button>
          </div>
          <div className="flex gap-4 items-center mt-12 max-md:mt-10">
            <div className="flex overflow-hidden cursor-pointer gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
              <img
                alt="Icon 1"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b89f8862e5a19bfbc70eee808bbdd95a335b1f7dbc4dd9cfd04c5253aa2cc90?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex overflow-hidden cursor-pointer gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
              <img
                alt="Icon 2"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9c756c1e6f7891bbeeb152267887a329a760683a060c2ce96770d97203d063?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex overflow-hidden cursor-pointer gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
              <img
                alt="Icon 3"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/008a8be7cfa47bc7ef00eda50219af5d8f5b9bf943e4c62f519a233fd050bc2b?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </div>
          </div>
          <img
            alt="Decorative background"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3da896db0281a5cf7f9e600702be52513a87730608c8c403d0c7b8bb97ccd38?apiKey=227fffdadf2841c0827fed858fc04b84&width=3000 3000w"
            className="object-contain self-stretch pt-12 w-full aspect-[3.77] max-md:mt-10 max-md:max-w-full max-md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadingFunded;
