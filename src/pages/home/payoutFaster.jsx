import React, { useRef } from 'react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const PayoutFaster = () => {
  const navigate = useNavigate();
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  const slides1 = [
    {
      alt: 'Trader Screenshot 1',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 2',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 3',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 4',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 5',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/132c332f121d3b1f691b10065d56f7eba17f8b69a36d664c0d94a3e491842cd2?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  const slides2 = [
    {
      alt: 'Trader Screenshot 1',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 2',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 3',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 4',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      alt: 'Trader Screenshot 5',
      srcSet:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76464f9b858e6f66d0d0e892ec8393a386b0acfe5e0b3fe8e0136602293f04de?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  const handlePrevClick = () => {
    swiperRef1.current.swiper.slidePrev();
    swiperRef2.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef1.current.swiper.slideNext();
    swiperRef2.current.swiper.slideNext();
  };

  return (
    <section className="flex overflow-hidden relative z-0 flex-col py-24 w-full bg-[#141518] max-md:max-w-full max-md:py-10">
      <div className="flex z-0 flex-col justify-center px-56 w-full max-md:px-5 max-md:max-w-full max-md:px-0">
        <div className="flex px-36 max-md:px-5 flex-col w-full max-md:max-w-full">
          <div className="gap-2.5 self-center px-4 py-2.5 text-sm leading-none font-matter font-normal text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px] max-md:w-fit max-md:self-start">
            The Best Prop Firm Payout System
          </div>
          <h1 className="flex font-matter flex-col mt-5 w-full text-6xl font-medium tracking-tighter text-center text-white capitalize max-md:max-w-full max-md:text-4xl max-md:text-left">
            <span className="font-matter font-medium tracking-[-1.2px] max-md:max-w-full max-md:text-4xl">
              Get Prop Firm Payouts Faster, Safer, and
            </span>
            <div className="flex flex-wrap gap-2.5 justify-center items-center self-center mt-2.5 max-md:max-w-full max-md:text-4xl max-md:justify-start max-md:self-start">
              <span className="font-matter font-medium tracking-[-1.2px] self-stretch my-auto max-md:max-w-full max-md:text-4xl">
                hassle-free with
              </span>
              <img
                alt="img"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/485fa6a2c099f0b53f3ce406c000ead56ab919fd04d1b7acff0e6e7edefceb6b?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain shrink-0 self-stretch my-auto aspect-[2.88] w-[167px]"
              />
            </div>
          </h1>
          <p className="flex-1 font-matter font-normal shrink gap-2.5 self-stretch mt-5 w-full text-2xl leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg max-md:text-left">
            Pro Traders Fund, in partnership with Rise, ensures you get paid quickly, safely, and without hassle. Enjoy fast payments,
            improved cash flow, and more time to focus on trading. Check out the results below from other traders who have benefited from
            our top-notch payment system.
          </p>
        </div>
        <div className="flex gap-6 justify-center items-center self-center mt-10 text-base font-semibold text-[#141518]">
          <button
            onClick={() => {
              navigate('/#pricing');
            }}
            type="button"
            className="overflow-hidden cursor-pointer font-matter gap-2 self-stretch px-5 py-3 my-auto bg-[#6EFDEB] shadow-sm rounded-[30px]"
          >
            Get funded
          </button>
        </div>
      </div>

      <div className="flex relative z-0 flex-col justify-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex z-0 gap-4 justify-center items-center w-full max-md:max-w-full">
          <Swiper
            loop={true}
            ref={swiperRef1}
            spaceBetween={10}
            // slidesPerView={2.2}
            breakpoints={{
              425: {
                slidesPerView: 1.5
              },
              768: {
                slidesPerView: 2
              },
              1240: {
                slidesPerView: 2.2
              }
            }}
          >
            {slides1.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  alt={slide.alt}
                  srcSet={slide.srcSet}
                  className="object-contain py-0.5 my-auto rounded-xl min-w-[240px] w-[587px] max-md:max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex z-0 gap-4 justify-center items-center w-full max-md:max-w-full">
          <Swiper
            loop={true}
            ref={swiperRef2}
            spaceBetween={10}
            // slidesPerView={3.3}
            breakpoints={{
              425: {
                slidesPerView: 1.5
              },
              768: {
                slidesPerView: 2
              },
              1240: {
                slidesPerView: 3.3
              }
            }}
          >
            {slides2.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  alt={slide.alt}
                  srcSet={slide.srcSet}
                  className="object-contain py-0.5 my-auto rounded-xl min-w-[240px] w-[587px] max-md:max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type="button"
          onClick={handlePrevClick}
          className="flex absolute cursor-pointer z-0 gap-2.5 justify-center items-center px-2 w-10 h-10 bg-white bottom-[280px] left-[100px] rounded-[100px] max-md:w-8 max-md:h-8 max-md:left-[20px] max-md:bottom-[180px]"
        >
          <img
            alt="img"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/427cbcbdaf5fa85a27f06b697a1170c060d5d76e71d116ddb2ded2f7795043cd?apiKey=227fffdadf2841c0827fed858fc04b84&"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="flex absolute cursor-pointer z-0 gap-2.5 justify-center items-center px-2 w-10 h-10 bg-white bottom-[280px] right-[100px] rounded-[100px] max-md:w-8 max-md:h-8 max-md:right-[20px] max-md:bottom-[180px]"
        >
          <img
            alt="img"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72a729d869595d26c9e39d98a9ff9334db4a1729809ea8180d2d01c20904ac52?apiKey=227fffdadf2841c0827fed858fc04b84&"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </section>
  );
};

export default PayoutFaster;
