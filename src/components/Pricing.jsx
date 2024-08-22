import React, { useState } from 'react';
import greencheck from '../images/icons/check-icon.svg';
import close from '../images/icons/Close cr-fr.svg';
import { Navigate, Router } from 'react-router';
import { useNavigate } from 'react-router-dom';
import {AiOutlineInfoCircle} from "react-icons/ai";
import {isUserAuthenticated} from "../utils/utils";

const Pricing = () => {
  const navigate = useNavigate();
  // const handlePurchase = async () => {
  //     router.push("/billing");
  //   };
  const [challenge, setChallenge] = useState(false);
  const [premiumChallenge, setpremiumChallenge] = useState(true);
  const [instantChallenge, setInstantChallenge] = useState(false);
  const [price1, setPrice1] = useState(false);
  const [price2, setPrice2] = useState(false);
  const [price3, setPrice3] = useState(false);
  const [price4, setPrice4] = useState(false);
  const [price5, setPrice5] = useState(false);
  const [price6, setPrice6] = useState(false);
  const [price7, setPrice7] = useState(true);
  const [price8, setPrice8] = useState(false);
  const [price9, setPrice9] = useState(false);
  const [price10, setPrice10] = useState(false);
  const [price11, setPrice11] = useState(false);
  const [price12, setPrice12] = useState(false);
  const [price13, setPrice13] = useState(false);
  return (
    <div className="mb-5">
      <section className="flex flex-col h-full text-center">
        <div className="px-2 text-white"></div>
        <div className="flex items-center justify-center gap-2 px-1 py-1 mb-5 text-sm rounded-lg">
          <div
            className={`header-acc flex items-center justify-center gap-1 ${challenge ? 'header-active' : ''}`}
            onClick={() => {
              setChallenge(true);
              setpremiumChallenge(false);
              setInstantChallenge(false);
              setPrice1(false);
              setPrice2(false);
              setPrice3(false);
              setPrice4(false);
              setPrice5(true);
              setPrice6(false);
              setPrice7(false);
              setPrice8(false);
              setPrice9(false);
              setPrice10(false);
              setPrice11(false);
              setPrice12(false);
            }}
          >
            <p>Pro Trader Challenge</p>
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${premiumChallenge ? 'header-active' : ''}`}
            onClick={() => {
              setpremiumChallenge(true);
              setChallenge(false);
              setInstantChallenge(false);
              setPrice1(false);
              setPrice2(false);
              setPrice3(false);
              setPrice4(false);
              setPrice5(false);
              setPrice6(false);
              setPrice7(true);
              setPrice8(false);
              setPrice9(false);
              setPrice10(false);
              setPrice11(false);
              setPrice12(false);
            }}
          >
            <p>Premium Pro Trader Challenge</p>
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${instantChallenge ? 'header-active' : ''}`}
            onClick={() => {
              setInstantChallenge(true);
              setpremiumChallenge(false);
              setChallenge(false);
              setPrice1(false);
              setPrice2(false);
              setPrice3(false);
              setPrice4(false);
              setPrice5(false);
              setPrice6(false);
              setPrice7(false);
              setPrice8(false);
              setPrice9(false);
              setPrice10(false);
              setPrice11(true);
              setPrice12(false);
            }}
          >
            <p>Premium+ Instant Funding</p>
          </div>
        </div>
        {challenge ? (
          <div className="flex flex-wrap justify-center gap-2 mb-5 text-white">
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price1 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(true);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $5,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price2 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(true);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $10,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price3 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(true);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $25,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price4 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(true);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $50,000
            </div>
            <div
              className={`header-acc flex flex-col items-center justify-center ${price5 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(true);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              <p>$100,000</p>
              {/* <span className="bg-transparent text-[12px]">
                *Most popular
              </span> */}
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price6 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(true);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $200,000
            </div>
          </div>
        ) : null}
        {premiumChallenge ? (
          <div className="flex flex-wrap justify-center gap-2 mb-5 text-white">
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price12 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(true);
                setPrice13(false);
              }}
            >
              $50,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price7 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(true);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $100,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price8 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(true);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $200,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price9 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(true);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $300,000
            </div>
          </div>
        ) : null}
        {instantChallenge ? (
          <div className="flex flex-wrap justify-center gap-2 mb-5 text-white">
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price10 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(true);
                setPrice11(false);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $10,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price11 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(true);
                setPrice12(false);
                setPrice13(false);
              }}
            >
              $20,000
            </div>
            <div
              className={`header-acc flex items-center justify-center gap-1 ${price13 ? 'header-active' : ''}`}
              onClick={() => {
                setPrice1(false);
                setPrice2(false);
                setPrice3(false);
                setPrice4(false);
                setPrice5(false);
                setPrice6(false);
                setPrice7(false);
                setPrice8(false);
                setPrice9(false);
                setPrice10(false);
                setPrice11(false);
                setPrice12(false);
                setPrice13(true);
              }}
            >
              $50,000
            </div>
          </div>
        ) : null}
        <div className="px-6 space-y-4">
          <div className="buy-btn" onClick={()=>{
                  if(isUserAuthenticated()) {
                      navigate("/user-checkout")
                  }else{
                      navigate("/billing")
                  }
                }
            }
           >
            <button className="bg-white text-black sm:w-auto w-full py-2 px-12 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              {price1 ? <p>Get $5,000.00</p> : null}
              {price2 ? <p>Get $10,000.00</p> : null}
              {price3 ? <p>Get $25,000.00</p> : null}
              {price4 ? <p>Get $50,000.00</p> : null}
              {price5 ? <p>Get $100,000.00</p> : null}
              {price6 ? <p>Get $200,000.00</p> : null}
              {price7 ? <p>Get $100,000.00</p> : null}
              {price8 ? <p>Get $200,000.00</p> : null}
              {price9 ? <p>Get $300,000.00</p> : null}
              {price10 ? <p>Get $10,000.00</p> : null}
              {price11 ? <p>Get $20,000.00</p> : null}
              {price12 ? <p>Get $50,000.00</p> : null}
              {price13 ? <p>Get $50,000.00</p> : null}
            </button>
          </div>
          <div className="relative overflow-x-auto overflow-y-auto rounded-lg shadow">
            {challenge || premiumChallenge ? (
              <>
                <div className="lg:flex hidden w-full justify-end gap-[100px] px-5"> </div>
                <div className="flex h-auto gap-2">
                  {/* <table className="flex flex-col min-h-[100%] explainers">
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <AiOutlineInfoCircle />
                      </td>
                    </tr>
                  </table> */}
                  <table className="relative w-full overflow-x-auto text-white whitespace-no-wrap border-collapse table-auto challenge-table">
                    <tbody className="text-sm">
                      <tr className="bg-[#262729]">
                        <td></td>
                        <td>
                          {' '}
                          <div className="flex flex-col pb-4">
                            <span className="text-xl text-mainColor text-bold">Phase 1</span>
                            <p className=" text-bold">Prove your skills</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex flex-col pb-4">
                            <span className="text-xl text-mainColor text-bold ">Phase 2</span>
                            <p>Verify your results</p>
                          </div>
                        </td>
                        <td>
                          {' '}
                          <div className="flex flex-col pb-4">
                            <span className="text-xl text-mainColor text-bold">Pro Funded Trader</span>
                            <p>Trade Our Funds</p>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Trading Period</td>
                        <td>40 days</td>
                        <td>70 days</td>
                        <td>Indefinite</td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>Free Time Extension</td>
                        <td>14 days</td>
                        <td>None</td>
                        <td>None</td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td> Minimum Trading Days</td>
                        <td>3 days</td>
                        <td>3 days</td>
                        <td>None</td>
                      </tr>
                      <tr className=" bg-[#262729]">
                        <td>Profit Target </td>
                        {challenge ? (
                          <td>
                            {price1 ? '$350 (7%)' : null}
                            {price2 ? '$700 (7%)' : null}
                            {price3 ? '$1,750 (7%)' : null}
                            {price4 ? '$3,500 (7%)' : null}
                            {price5 ? '$7,000 (7%)' : null}
                            {price6 ? '$14,000 (7%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$7,000 (7%)' : null}
                            {price8 ? '$14,000 (7%)' : null}
                            {price9 ? '$21,000 (7%)' : null}
                            {price12 ? '$3,500 (7%)' : null}
                          </td>
                        )}
                        {challenge ? (
                          <td>
                            {price1 ? '$200 (4%)' : null}
                            {price2 ? '$400 (4%)' : null}
                            {price3 ? '$1,000 (4%)' : null}
                            {price4 ? '$2,000 (4%)' : null}
                            {price5 ? '$4,000 (4%)' : null}
                            {price6 ? '$8,000 (4%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$4,000 (4%)' : null}
                            {price8 ? '$8,000 (4%)' : null}
                            {price9 ? '$12,000 (4%)' : null}
                            {price12 ? '$2,000 (4%)' : null}
                          </td>
                        )}
                        <td>None</td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Max Daily Loss</td>
                        {challenge ? (
                          <td>
                            {price1 ? '$250 (5%)' : null}
                            {price2 ? '$500 (5%)' : null}
                            {price3 ? '$1,200 (5%)' : null}
                            {price4 ? '$2,500 (5%)' : null}
                            {price5 ? '$5,000 (5%)' : null}
                            {price6 ? '$10,000 (5%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$5,000 (5%)' : null}
                            {price8 ? '$10,000 (5%)' : null}
                            {price9 ? '$15,000 (5%)' : null}
                            {price12 ? '$2,500 (5%)' : null}
                          </td>
                        )}
                        {challenge ? (
                          <td>
                            {price1 ? '$250 (5%)' : null}
                            {price2 ? '$500 (5%)' : null}
                            {price3 ? '$1,200 (5%)' : null}
                            {price4 ? '$2,500 (5%)' : null}
                            {price5 ? '$5,000 (5%)' : null}
                            {price6 ? '$10,000 (5%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$5,000 (5%)' : null}
                            {price8 ? '$10,000 (5%)' : null}
                            {price9 ? '$15,000 (5%)' : null}
                            {price12 ? '$2,500 (5%)' : null}
                          </td>
                        )}
                        {challenge ? (
                          <td>
                            {' '}
                            {price1 ? '$250 (5%)' : null}
                            {price2 ? '$500 (5%)' : null}
                            {price3 ? '$1,200 (5%)' : null}
                            {price4 ? '$2,500 (5%)' : null}
                            {price5 ? '$5,000 (5%)' : null}
                            {price6 ? '$10,000 (5%)' : null}
                          </td>
                        ) : (
                          <td>
                            {' '}
                            {price7 ? '$5,000 (5%)' : null}
                            {price8 ? '$10,000 (5%)' : null}
                            {price9 ? '$15,000 (5%)' : null}
                            {price12 ? '$2,500 (5%)' : null}
                          </td>
                        )}
                      </tr>
                      <tr className=" bg-[#262729]">
                        <td>Max Overall Loss</td>
                        {challenge ? (
                          <td>
                            {price1 ? '$500 (10%)' : null}
                            {price2 ? '$1000 (10%)' : null}
                            {price3 ? '$2,500 (10%)' : null}
                            {price4 ? '$5,000 (10%)' : null}
                            {price5 ? '$10,000 (10%)' : null}
                            {price6 ? '$20,000 (10%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$10,000 (10%)' : null}
                            {price8 ? '$20,000 (10%)' : null}
                            {price9 ? '$30,000 (10%)' : null}
                            {price12 ? '$5,000 (10%)' : null}
                          </td>
                        )}
                        {challenge ? (
                          <td>
                            {price1 ? '$500 (10%)' : null}
                            {price2 ? '$1000 (10%)' : null}
                            {price3 ? '$2,500 (10%)' : null}
                            {price4 ? '$5,000 (10%)' : null}
                            {price5 ? '$10,000 (10%)' : null}
                            {price6 ? '$20,000 (10%)' : null}
                          </td>
                        ) : (
                          <td>
                            {' '}
                            {price7 ? '$10,000 (10%)' : null}
                            {price8 ? '$20,000 (10%)' : null}
                            {price9 ? '$30,000 (10%)' : null}
                            {price12 ? '$5,000 (10%)' : null}
                          </td>
                        )}
                        {challenge ? (
                          <td>
                            {price1 ? '$500 (10%)' : null}
                            {price2 ? '$1000 (10%)' : null}
                            {price3 ? '$2,500 (10%)' : null}
                            {price4 ? '$5,000 (10%)' : null}
                            {price5 ? '$10,000 (10%)' : null}
                            {price6 ? '$20,000 (10%)' : null}
                          </td>
                        ) : (
                          <td>
                            {price7 ? '$10,000 (10%)' : null}
                            {price8 ? '$20,000 (10%)' : null}
                            {price9 ? '$30,000 (10%)' : null}
                            {price12 ? '$5,000 (10%)' : null}
                          </td>
                        )}
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Drawdown Type </td>
                        <td></td>
                        <td>Balance & Equity Based</td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>Monthly Fees</td>
                        <td></td>
                        <td>No Monthly Fees</td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Leverage</td>
                        <td></td>
                        <td>
                          <span className="flex justify-center">1 : 100</span>
                        </td>
                        <td className=""></td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>News Trading</td>
                        <td></td>
                        <td>
                          {' '}
                          <span className="flex justify-center">
                            {challenge ? <img src={close} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Weekend Holding</td>
                        <td></td>
                        <td>
                          <span className="flex justify-center">
                            {challenge ? <img src={close} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                        <td className=""></td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>EAs Enabled</td>
                        <td></td>
                        <td>
                          <span className="flex justify-center">
                            {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Trade Copier</td>
                        <td></td>
                        <td>
                          <span className="flex justify-center">
                            <img src={greencheck} alt="" />
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>Bi-Weekly Payout</td>
                        <td>
                          <span className="flex justify-center">
                            <img src={close} alt="" />
                          </span>
                        </td>
                        <td className="mx-auto">
                          <span className="flex justify-center">
                            <img src={close} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="flex justify-center">
                            {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                      </tr>
                      <tr className=" bg-[#1C1D20]">
                        <td>Profit Split</td>
                        <td>
                          <span className="flex justify-center">4%</span>
                        </td>
                        <td>
                          <span className="flex justify-center">6%</span>
                        </td>
                        {challenge ? <td>You Keep 80% Profits</td> : <td>You Keep Up To 90% Profits</td>}
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>Free Retry</td>
                        <td>
                          {' '}
                          <span className="flex justify-center">
                            <img src={greencheck} alt="" />
                          </span>
                        </td>
                        <td>
                          <span className="flex justify-center">
                            <img src={greencheck} alt="" />
                          </span>
                        </td>
                        <td>
                          {' '}
                          <span className="flex justify-center">
                            <img src={close} alt="" />
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-[#1C1D20]">
                        <td>Reset Discount</td>
                        <td></td>
                        <td>
                          <span className="flex justify-center">10%</span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-[#262729]">
                        <td>Refundable Fee</td>
                        {challenge ? (
                          <td>
                            {price1 ? '$49' : null}
                            {price2 ? '$79' : null}
                            {price3 ? '$149' : null}
                            {price4 ? '$289' : null}
                            {price5 ? '$479' : null}
                            {price6 ? '$959' : null}
                          </td>
                        ) : null}
                        {premiumChallenge ? (
                          <td>
                            {price7 ? '$489' : null}
                            {price8 ? '$969' : null}
                            {price9 ? '$1,379' : null}
                          </td>
                        ) : null}
                        <td>FREE</td>
                        {challenge ? (
                          <td className="font-bold text-black bg-white">100% Refund</td>
                        ) : (
                          <td className="font-bold text-black bg-white">115 % Refund</td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <table className="relative w-full overflow-x-auto text-white whitespace-no-wrap border-collapse table-auto challenge-table">
                <tbody className="text-sm">
                  <tr className="bg-[#1C1D20]">
                    <td>Target</td>
                    <td></td>
                    <td>20% to get to next milestone</td>
                    <td></td>
                  </tr>
                  <tr className="bg-[#262729]">
                    <td>Trading Period</td>
                    <td></td>
                    <td>Indefinite</td>
                    <td></td>
                  </tr>
                  <tr className="bg-[#1C1D20]">
                    <td> Minimum Trading Days</td>
                    <td></td>
                    <td>None</td>
                    <td></td>
                  </tr>
                  <tr className=" bg-[#262729]">
                    <td>Profit Target </td>
                    <td></td>
                    <td>None</td>
                    <td></td>
                  </tr>
                  <tr className=" bg-[#1C1D20]">
                    <td>Max Overall Loss</td>
                    <td></td>
                    {price10 ? <td> $1,000 (10%)</td> : null}
                    {price11 ? <td> $2,000 (10%)</td> : null}
                    {price13 ? <td> $5,000 (10%)</td> : null}
                    <td></td>
                  </tr>
                  <tr className="bg-[#262729]">
                    <td>Leverage</td>
                    <td></td>
                    <td>1:50</td>
                    <td></td>
                  </tr>
                  <tr className=" bg-[#1C1D20]">
                    <td>Bi-Weekly Payout</td>
                    <td></td>
                    <td className="mx-auto">
                      <span className="flex justify-center">
                        <img src={greencheck} alt="" />
                      </span>
                    </td>
                    <td></td>
                  </tr>
                  <tr className="bg-[#262729]">
                    <td>Profit Split</td>
                    <td></td>
                    <td>You Keep Up To 50% Profits</td>
                    <td></td>
                  </tr>
                  <tr className=" bg-[#1C1D20]">
                    <td>Fee (non refundable)</td>
                    <td></td>
                    {instantChallenge ? (
                      <td>
                        {price10 ? '$950' : null}
                        {price11 ? '$1,920' : null}
                        {price13 ? '$4,700' : null}
                      </td>
                    ) : null}
                    <td></td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
