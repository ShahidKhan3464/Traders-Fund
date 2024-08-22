import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex overflow-hidden relative z-0 flex-col px-20 pt-10 w-full min-h-screen max-md:px-5 max-md:max-w-full max-md:min-h-[auto] max-md:pb-5">
      <img
        loading="lazy"
        alt="Background"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10b7dc111cd80169fba284eeb15aeabaf6b43cd4f3535998db1936ad2170b5bd?apiKey=227fffdadf2841c0827fed858fc04b84&"
        className="object-cover absolute inset-0 size-full w-full max-md:hidden"
      />
      <div className="flex relative flex-col items-center max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[800px]">
          <p className="gap-2.5 px-4 py-2.5 text-sm font-matter font-semibold leading-none border text-[#6EFDEB] border-solid border-[#6EFDEB] rounded-[50px] max-md:px-3">
            Pro Traders Fund is The Best Prop Trading Firm
          </p>
          <h1 className="mt-5 text-6xl font-medium font-matter tracking-tighter text-center text-white capitalize max-md:text-4xl">
            Trade Our Funds
          </h1>
          <p className="mt-5 text-xl leading-8 font-normal font-matter text-center text-[#D0D5DD] max-md:text-lg">
            Prove your skills on the best prop trading firm with the best funded trader program for all traders. You keep up to 90% of the
            profits, we cover the losses.
          </p>
          <button
            onClick={() => {
              navigate('/#pricing');
            }}
            type="button"
            className="overflow-hidden px-5 py-3 mt-10 font-matter text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
          >
            Get funded
          </button>
        </div>
        <div className="flex flex-col items-center mt-10 w-full max-w-[342px]">
          <div className="flex flex-wrap gap-4 justify-center items-center w-full">
            <img
              alt="img"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d37adaf391879022ff5802ee5e7cc71efbb272d93548c4c128fc1ad902be233?apiKey=227fffdadf2841c0827fed858fc04b84&"
              className="object-contain w-24"
            />
            <div className="flex gap-1.5 items-center">
              {[
                '52575d1936607837b7b02ba73a39f955e9e7dba9ad34700c86b89032eb053847',
                'a4f8e581e8d9976779d66e7a4d2b4fd0870f73e34e971f8a4ad9f3e79b9f1663',
                '916c875a112260a2d5a9db8dc1640166c0b0c0239db77f92213de98ccd91da09',
                'ec4dc4c9319e9350adfac8dba9ef8cece8dbb4852791d866c4df66e39a702ed8',
                'a082ca2cfec7a3f0151d650e94f8f3b4abe879f586c3ec5d80a8fe4bf8e750c0'
              ].map((src, index) => (
                <a
                  key={index}
                  href="https://www.trustpilot.com/review/protradersfund.com?stars=5"
                  target="_blank"
                  rel="noopener noreferrer" // To ensure safety when opening links in a new tab
                >
                  <div className={`flex justify-center items-center w-8 h-8 ${index === 4 ? 'bg-zinc-300' : 'bg-green-600'}`}>
                    <img
                      alt="avatar"
                      loading="lazy"
                      src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${src}?apiKey=227fffdadf2841c0827fed858fc04b84&`}
                      className="object-contain w-[22px]"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="text-xl font-matter font-normal text-center text-white">3.8</div>
          </div>
          <p className="mt-2 text-lg leading-loose font-matter font-normal text-center text-[#D0D5DD]">
            <span>203 </span>reviews・Great
          </p>
        </div>
        <img
          alt="img"
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/411145e5904b925a670c987c6b20a9153d65c94ec30eb5641ee9be4bae4750ca?apiKey=227fffdadf2841c0827fed858fc04b84&"
          className="object-contain mt-10 max-md:mt-5 max-md:mb-5"
        />
      </div>
    </section>
  );
};

export default Hero;
