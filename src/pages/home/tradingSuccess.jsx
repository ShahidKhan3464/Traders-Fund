import React from 'react';
import { useNavigate } from 'react-router-dom';

const TradingSuccess = () => {
  const navigate = useNavigate()
  const cards = [
    {
      title: '5 Reasons Why Traders Should Choose Proprietary Trading Funds',
      author: 'David Brown',
      date: 'Jul 27, 2023',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      title: '5 Reasons Why Traders Should Choose Proprietary Trading Funds',
      author: 'David Brown',
      date: 'Jul 27, 2023',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      title: '5 Reasons Why Traders Should Choose Proprietary Trading Funds',
      author: 'David Brown',
      date: 'Jul 27, 2023',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be4257443e8ae1dbac9492215da0cb33a466f7b345d519f2322b500f39bdb42?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  return (
    <section className="flex z-0 flex-col px-44 py-20 w-full bg-[#141518] max-md:px-5 max-md:max-w-full max-md:py-10">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="gap-2.5 self-center px-4 py-2.5 text-sm font-matter font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px] max-md:max-w-full">
            Experience Unmatched Trading Support and Growth Opportunity
          </div>
          <div className="flex gap-2.5 items-center mt-5 w-full text-6xl font-medium tracking-tighter text-center capitalize max-md:max-w-full max-md:text-4xl">
            <div className="flex-1 shrink font-matter font-medium self-stretch my-auto bg-clip-text basis-0 text-white max-md:max-w-full max-md:text-4xl">
              Discover your path to trading success with expert guidance and resources
            </div>
          </div>
          <div className="flex-1 shrink gap-2.5 font-matter font-normal self-stretch mt-5 w-full text-xl leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
            We provide unparalleled support to help you reach your trading goals. Our expert guidance, advanced tools, and comprehensive
            resources are designed to nurture your growth and enhance your trading skills.
          </div>
        </div>
        <button
         onClick={() => {
          navigate('/#pricing');
        }}
          type="button"
          className="overflow-hidden cursor-pointer font-matter gap-2 self-center px-5 py-3 mt-10 text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
        >
          Get funded
        </button>
      </div>

      <div className="flex flex-wrap gap-6 items-start mt-20 w-full min-h-[460px] max-md:mt-10 max-md:gap-2 max-md:max-w-full">
        {cards.map((card, index) => (
          <div key={index} className="flex overflow-hidden flex-col grow shrink rounded-2xl min-w-[240px] w-[271px]">
            <div className="flex flex-col w-full text-sm leading-none whitespace-nowrap">
              <div className="flex relative flex-col items-start px-5 pt-5 pb-52 w-full aspect-[1.284] max-md:pb-24">
                <img alt="img" loading="lazy" srcSet={card.imageSrc} className="object-cover absolute inset-0 size-full w-full h-full" />
                <div className="relative font-matter font-normal gap-2.5 self-start px-4 py-2.5 mb-0 text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px] max-md:mb-2.5">
                  Insights
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 w-full font-medium min-h-[196px]">
              <div className="w-full font-matter font-medium text-2xl leading-8 text-white">{card.title}</div>
              <div className="flex overflow-hidden gap-10 justify-between items-center mt-6 w-full text-sm leading-tight">
                <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
                  <img
                    alt="img"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/691db47e61d2d780b7a4c447c06b50067fd3705d898bef4cd60b54d2acd49067?apiKey=227fffdadf2841c0827fed858fc04b84&"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[64px]"
                  />
                  <div className="self-stretch font-DM font-medium text-[#98A2B3] my-auto w-[82px]">{card.author}</div>
                </div>
                <div className="flex overflow-hidden gap-2 self-stretch py-px my-auto w-[101px]">
                  <img
                    alt="img"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f855775ab3484236b0ea7c89b4a52f8b6e9a3b814269559ece635db8efb7d918?apiKey=227fffdadf2841c0827fed858fc04b84&"
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                  <div className="my-auto font-DM font-medium text-[#98A2B3]">{card.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradingSuccess;
