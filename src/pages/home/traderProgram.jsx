import React, { useCallback, useEffect, useState } from 'react';
import 'swiper/css';
import jamaica from '../../images/jamaica.png';
import { useNavigate } from 'react-router-dom';
import dominica from '../../images/dominican.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// w-[400px] max-md:w-fit

const TraderProgram = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  const cardData1 = [
    {
      date: '2024',
      title: 'Global Traders Connect, AC Hotel, Kingston, Jamaica',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cacb4fd87aa372df3e716bb0a3e49e7b8f8e2f3c59e44832f706c07baefee064?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      date: '2024',
      imgSrc: jamaica,
      title: 'Global Traders Connect, AC Hotel, Kingston, Jamaica'
    },
    {
      date: '2024',
      title: 'Global Traders Connect, AC Hotel, Kingston, Jamaica',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cebdb156f592e98e620cfc83959f82e2ad95aa35f2ef52ebf83eb366f3341ce?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      date: '2024',
      title: 'Global Traders Connect, AC Hotel, Kingston, Jamaica',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c3ea8340a2e1f0fb395e513c72935704426b837dafd14557047008200c4c113?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  const cardData2 = [
    {
      date: '2024',
      title: 'Global Traders Connect, Dominican Republic',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d83c0a4e7d431a21754f3c26f93549d039d72fa19996288f6b689fc3572dd758?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      date: '2024',
      title: 'Global Traders Connect, Dominican Republic',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e845c4d865204bdf2605466b033ebb729a793431aeae2276ac7de093a475e6e7?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      date: '2024',
      title: 'Global Traders Connect, Dominican Republic',
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1530fa7cbe3cb5edcf2ebda6fe9f3dad978ab8c17221c9cde626c3b2ddd81adf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      date: '2024',
      imgSrc: dominica,
      title: 'Global Traders Connect, Dominican Republic'
    }
  ];

  const measure = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', measure); // Measure on window resize

    return () => {
      window.removeEventListener('resize', measure); // Cleanup
    };
  }, [measure]);

  return (
    <section className="flex z-0 flex-col py-20 w-full bg-[#141518] max-md:max-w-full max-md:py-10">
      <div className="flex flex-col justify-center px-56 w-full max-md:px-5 max-md:max-w-full max-md:px-0">
        <div className="flex flex-col w-full max-md:max-w-full  px-36 max-md:px-5">
          <div className="gap-2.5 self-center font-matter px-4 py-2.5 text-sm font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px] max-md:max-w-full">
            Pro Traders Fund is The Fastest Growing Trading Community
          </div>
          <div className="flex gap-2.5 items-center mt-5 w-full text-6xl text-center capitalize max-md:max-w-full max-md:text-4xl">
            <div className="flex-1 shrink self-stretch font-matter font-medium my-auto basis-0 text-white max-md:max-w-full max-md:text-4xl">
              Join The Best Funded Trader Program
            </div>
          </div>
          <div className="flex-1 shrink gap-2.5 font-matter font-normal self-stretch mt-5 w-full text-xl leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
            Join our global community of top traders managing our private funds and keeping up to 90% of the profits they make. We're
            producing profitable traders worldwide with training, seminars, performance coaches and funding.  Ready to become a part of the
            fastest-growing trading community? Sign up today and start your journey with the best funded trader program!
          </div>
        </div>
        <button
          onClick={() => {
            navigate('/#pricing');
          }}
          type="button"
          className="overflow-hidden font-matter cursor-pointer gap-2 self-center px-5 py-3 mt-10 text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
        >
          Get funded
        </button>
      </div>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 justify-center items-center w-full max-md:max-w-full max-md:flex-col">
          <Swiper loop={true} centeredSlides={true} spaceBetween={width < 767 ? 5 : 20} slidesPerView={width < 767 ? 1 : 3.6}>
            {[...cardData1, ...cardData1].map((slide, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="flex overflow-hidden flex-col self-stretch rounded-2xl w-[400px]">
                  <div className="flex relative flex-col min-h-[400px] justify-end max-w-full sm:min-h-[460px]">
                    <img
                      alt="img"
                      loading="lazy"
                      src={slide.imgSrc}
                      className="object-cover absolute rounded-[20px] inset-0 size-full h-full w-full"
                    />
                    <div className="flex rounded-[20px] relative flex-col bg-[linear-gradient(180deg,rgba(10,10,10,0)_3.97%,rgba(10,10,10,0.5)_21.25%,rgba(10,10,10,0.9)_90.37%)] p-6 max-md:px-5">
                      <div className="text-2xl font-matter font-medium leading-8 text-white">{slide.title}</div>
                      <div className="text-sm font-matter font-normal text-white text-opacity-60">{slide.date}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center w-full mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 justify-center items-center w-full max-md:max-w-full max-md:flex-col">
          <Swiper loop={true} centeredSlides={true} spaceBetween={width < 767 ? 5 : 20} slidesPerView={width < 767 ? 1 : 3.6}>
            {[...cardData2, ...cardData2].map((card, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="flex overflow-hidden flex-col self-stretch rounded-2xl w-[400px]">
                  <div className="flex relative flex-col min-h-[400px] justify-end max-w-full sm:min-h-[460px]">
                    <img
                      alt="img"
                      loading="lazy"
                      srcSet={card.imgSrc}
                      className="object-cover absolute rounded-[20px] inset-0 size-full w-full h-full"
                    />
                    <div className="flex rounded-[20px] relative flex-col bg-[linear-gradient(180deg,rgba(10,10,10,0)_3.97%,rgba(10,10,10,0.5)_21.25%,rgba(10,10,10,0.9)_90.37%)] p-6 max-md:px-5">
                      <div className="text-2xl font-matter font-medium leading-8 text-white">{card.title}</div>
                      <div className="text-sm font-matter font-normal text-white text-opacity-60">{card.date}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TraderProgram;
