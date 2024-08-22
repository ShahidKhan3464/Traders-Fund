import React, {useState} from 'react';
import line from '../images/icons/Line 53.svg';
import copyicon from '../images/icons/copywhite.svg';
import {FaArrowRight} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import augustbanner from '../images/augustbanner.png';


const DiscountBanner = ({home}) => {
    const navigate = useNavigate();
    const [copy, setCopy] = useState('SC40');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(copy);
    };
    return (
        <div
            className="fixed bottom-0 left-0 w-full  text-center z-[1000]"
            onClick={() => {
                navigate('/#pricing');
                copyToClipboard();
            }}
        >
            <img src={augustbanner} alt="Banner" className="w-full h-auto"/>
        </div>
        //   <div
        //     // style={{ background: 'linear-gradient(90.02deg, #6E8B92 0.02%, #212A2C 99.98%)' }}
        //     className="bg-maybanner gap-2 md:px-4 px-1 flex items-center md:flex-row flex-wrap xl:h-[82px] h-auto flex-col md:justify-center space-x-8  bg-cover bg-no-repeat justify-center py-1 fixed bottom-0 w-full z-[1000]"
        //   >
        //     <div className="flex items-center gap-2">
        //       {' '}
        //       <div className="xl:text-[48px] lg:text-[30px] text-[16px] text-[#f7bd03] font-[900] ">50% </div>
        //       <span className="text-white xl:text-[36px] lg:text-[30px] text-[14px]">
        //         <span>OFF</span> For Your Next Purchase
        //       </span>
        //     </div>

        //     <img src={line} alt="" className="hidden xl:block" />
        //     <div className="flex items-center justify-center gap-4 pr-5 text-white">
        //       <div className="relative grid space-y-1 sm:space-y-2">
        //         <p className="sm:text-[20px] text-[14px] font-[600] leading-3 text-right"> OFFER ENDS</p>
        //         <p className="leading-[1] text-right sm:text-[20px] text-[14px] ">May 31, 2024, at 11:59 PM EST</p>
        //       </div>
        //       <div className="flex gap-1 ">
        //         <svg width="12" height="44" viewBox="0 0 12 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        //           <path
        //             d="M6.26432 12.1333C4.59766 12.1333 3.20321 11.6111 2.08099 10.5667C0.958767 9.52222 0.397656 8.05556 0.397656 6.16667C0.397656 4.28889 0.958767 2.82778 2.08099 1.78333C3.21432 0.727778 4.60877 0.2 6.26432 0.2C7.71988 0.2 8.91988 0.561111 9.86432 1.28333C10.8199 2.00556 11.381 2.97222 11.5477 4.18333L8.93099 4.73333C8.79766 4.03333 8.48655 3.47778 7.99766 3.06667C7.50877 2.65556 6.92543 2.45 6.24766 2.45C5.32543 2.45 4.55877 2.77778 3.94766 3.43333C3.34766 4.07778 3.04766 4.98889 3.04766 6.16667C3.04766 7.34444 3.34766 8.25556 3.94766 8.9C4.54766 9.54444 5.31432 9.86667 6.24766 9.86667C6.92543 9.86667 7.49766 9.68889 7.96432 9.33333C8.43099 8.96667 8.73099 8.46667 8.86432 7.83333L11.5143 8.43333C11.2365 9.58889 10.6365 10.4944 9.71432 11.15C8.7921 11.8056 7.6421 12.1333 6.26432 12.1333ZM6.02331 27.1333C4.28997 27.1333 2.85664 26.5722 1.72331 25.45C0.589974 24.3167 0.0233076 22.8889 0.0233076 21.1667C0.0233076 19.4444 0.589974 18.0222 1.72331 16.9C2.85664 15.7667 4.28997 15.2 6.02331 15.2C7.74553 15.2 9.16775 15.7667 10.29 16.9C11.4233 18.0333 11.99 19.4556 11.99 21.1667C11.99 22.8778 11.4233 24.3 10.29 25.4333C9.16775 26.5667 7.74553 27.1333 6.02331 27.1333ZM3.58997 23.8167C4.22331 24.5167 5.02886 24.8667 6.00664 24.8667C6.98442 24.8667 7.78442 24.5167 8.40664 23.8167C9.03997 23.1167 9.35664 22.2333 9.35664 21.1667C9.35664 20.1 9.03997 19.2167 8.40664 18.5167C7.77331 17.8056 6.97331 17.45 6.00664 17.45C5.02886 17.45 4.22331 17.8 3.58997 18.5C2.96775 19.2 2.65664 20.0889 2.65664 21.1667C2.65664 22.2333 2.96775 23.1167 3.58997 23.8167ZM1.23945 42V30.3333H5.22279C6.04501 30.3333 6.81168 30.4556 7.52279 30.7C8.2339 30.9333 8.87279 31.2833 9.43945 31.75C10.0061 32.2056 10.4506 32.8167 10.7728 33.5833C11.1061 34.3389 11.2728 35.2 11.2728 36.1667C11.2728 37.1333 11.1061 38 10.7728 38.7667C10.4506 39.5222 10.0061 40.1333 9.43945 40.6C8.87279 41.0556 8.2339 41.4056 7.52279 41.65C6.81168 41.8833 6.04501 42 5.22279 42H1.23945ZM3.82279 39.7333H4.93945C5.43945 39.7333 5.89501 39.6722 6.30612 39.55C6.72834 39.4278 7.11723 39.2333 7.47279 38.9667C7.83945 38.7 8.12279 38.3278 8.32279 37.85C8.52279 37.3722 8.62279 36.8111 8.62279 36.1667C8.62279 34.9111 8.27279 34 7.57279 33.4333C6.87279 32.8667 5.99501 32.5833 4.93945 32.5833H3.82279V39.7333ZM2.15905 57V45.3333H10.1757V47.5833H4.79238V49.7167H9.05905V51.9833H4.79238V54.7333H10.359V57H2.15905Z"
        //             fill="white"
        //           />
        //         </svg>
        //         <button
        //           className="px-3 py-2 text-white text-[18px] rounded-md w-full bg-black border-1 outline-2 outline border-white"
        //           onClick={() => {
        //             navigate('/#pricing');
        //             copyToClipboard();
        //           }}
        //         >
        //           <span className="font-[900] whitespace-nowrap sm:text-base text-sm flex items-center justify-center gap-1">
        //             MAY50 <img src={copyicon} alt="copy icon" className="h-5 " />
        //           </span>
        //         </button>
        //       </div>
        //     </div>
        //   </div>
    );
};

export default DiscountBanner;
