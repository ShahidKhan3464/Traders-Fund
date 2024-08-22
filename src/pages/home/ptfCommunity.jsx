import React from 'react';

const PtfCommunity = () => {
  return (
    <section className="flex overflow-hidden z-0 flex-col w-full max-md:max-w-full max-md:bg-[#141518] max-md:pb-5">
      <div className="relative flex flex-col w-full max-md:max-w-full">
        <img
          alt="background"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e592ed3c83fb5fe063dd4e66bd6b6a4c5db11d54b607535b27158e7b65dc277?apiKey=227fffdadf2841c0827fed858fc04b84&"
          className="object-cover absolute inset-0 size-full w-full max-md:hidden"
        />
        <div className="relative flex flex-wrap gap-10 items-start px-36 py-10 max-md:px-5 max-md:py-5 max-md:max-w-full">
          {/* Community Section */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <header>
              <h2 className="text-3xl font-matter font-medium leading-none text-white">PTF Community</h2>
            </header>
            <p className="flex gap-6 items-center font-matter font-normal mt-5 w-full text-2xl leading-8 text-[#D0D5DD] max-md:max-w-full max-md:flex-col">
              <img
                alt="Discord logo"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf28ce9cb828db54273bfc67d4590747373f880dc803eac405e38cb37d086516?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
              />
              Join Pro Traders Fund Discord for the latest news, releases, and updates.
            </p>
            <div className="flex gap-2 items-start self-start px-5 py-3 mt-5 bg-[#6EFDEB] rounded-[100px]">
              <button type="button" className="text-base cursor-pointer font-matter font-semibold text-neutral-900">
                Join the community
              </button>
              <div className="flex items-start w-6">
                <img
                  alt="arrow"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c18d993466d05af8fa2b88e11a5ac5c0db18718951c4903bcba25ecc8232e3?apiKey=227fffdadf2841c0827fed858fc04b84&"
                  className="object-contain w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          {/* Help Section */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <header>
              <h2 className="text-3xl font-matter font-medium leading-none text-white">Need help?</h2>
            </header>
            <p className="flex-1 shrink font-matter font-normal gap-6 self-stretch mt-5 w-full text-2xl leading-8 text-[#D0D5DD] max-md:max-w-full">
              There is no such thing as a dumb question.
              <br />
              Find out whatever you need to know in the
              <br />
              Help section.
            </p>
            <div className="flex gap-2 items-start self-start px-5 py-3 mt-5 bg-[#6EFDEB] rounded-[100px]">
              <button type="button" className="text-base cursor-pointer font-matter font-semibold text-[#0B142B]">
                Go to help
              </button>
              <div className="flex items-start w-6">
                <img
                  alt="arrow"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5091fe1aa8277ffbbc7eb5cadd301ecaada4c417b403004ea873ba53dace31a3?apiKey=227fffdadf2841c0827fed858fc04b84&"
                  className="object-contain w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PtfCommunity;
