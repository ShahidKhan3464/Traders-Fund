import React, {useEffect, useState} from 'react';
import copyicon from '../images/icons/copywhite.svg';
import {useNavigate} from 'react-router-dom';

const PopupBanner = ({home, setShowPopup, showPopup}) => {
    const navigate = useNavigate();
    const [copy, setCopy] = useState('SC40');

    //  timer function
    const calculateTimeLeft = () => {
        const targetDate = new Date('February 20, 2024 23:59:00 EST');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = value => {
        return value < 10 ? `0${value}` : value;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(copy);
    };
    return (
        <div
            className="fixed z-[10000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            onClick={e => {
                e.stopPropagation();
            }}
        >
            <div
                className="bg-augustpopup cursor-pointer md:bg-cover bg-contain bg-no-repeat flex mx-auto md:h-[600px] h-[340px] md:w-[650px] w-[350px] justify-center items-center relative rounded-md py-4 px-20"
                onClick={() => {
                    setShowPopup(false);
                    navigate('/#pricing');
                    copyToClipboard();
                }}
            >
                <div className="absolute cursor-pointer sm:top-2 sm:right-2 right-1 top-1 "
                     onClick={() => setShowPopup(false)}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#181313"/>
                        <g clip-path="url(#clip0_3_26281)">
                            <path d="M14.8441 14.8434L25.1566 25.1559" stroke="#FCFCFD" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path d="M25.1559 14.8434L14.8434 25.1559" stroke="#FCFCFD" stroke-width="1.5"
                                  stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3_26281">
                                <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {/* <div
          className="absolute cursor-pointer md:bottom-[100px] md:right-[30px] bottom-[82px] right-[20px] z-[1000]"
          onClick={() => {
            setShowPopup(false);
            navigate('/#pricing');
            copyToClipboard();
          }}
        >
          <button className="flex justify-center items-center bg-[#00FFE5] md:rounded-[16px] rounded-lg lg:px-4 px-6 py-1 font-extrabold font-anton text-[#0B1431] md:text-[28px] text-xs md:tracking-[2] tracking-normal leading-normal">
            USE CODE: THANKYOU30
          </button>
        </div> */}
            </div>
        </div>
    );
};

export default PopupBanner;
