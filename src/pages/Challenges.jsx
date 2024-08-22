import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import radiobtn from '../images/icons/Radio button.svg';
import emptybtn from '../images/icons/radiobuttonempty.svg';
import visa from '../images/icons/Visa Payment method icon.svg';
import mc from '../images/icons/MC Payment method icon.svg';
import profilepic from '../images/profilepic.png';
import upload from '../images/icons/upload-cloud-02.svg';
import success from '../images/icons/Success.svg';
import uploadicon from '../images/icons/fi_upload.svg';
import download from '../images/icons/fi_download.svg';
import certificate from '../images/certificate.png';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { AnimatePresence, motion } from 'framer-motion';

const Tab = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: white;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    background: #3B3C3D;
    opacity: 1;
  `}
`;
const types = ['Pro Trader Challenge', 'Premium Pro Trader Challenge', 'Premium+ Instant Funding'];
const types2 = ['Phase 1', 'Phase 2', 'Pro Funded Trader'];

const removeCommasAndParseInt = str => {
  // Remove commas from the string using regex and then parse it as an integer
  const parsedInt = parseInt(str.replace(/,/g, ''), 10);
  return parsedInt;
};

const addCommasToNumber = number => {
  // Format the number with commas using toLocaleString
  const numberWithCommas = number.toLocaleString();
  return numberWithCommas;
};

function TabGroup({ active, setActive, accSize, setAccSize }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <button className="flex flex-wrap mx-0 my-3 p-1  sm:gap-0 gap-3  bg-[#1C1D20] rounded-lg w-auto text-sm">
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type);
            }}
          >
            {type}
          </Tab>
        ))}
      </button>
      <div>
        {active === 'Pro Trader Challenge' ? (
          <>
            <p className="text-sm">Account size</p>
            {/* ROW */}
            <div class="flex sm:flex-row flex-col mt-3 gap-3">
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '5,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('5,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$5,000.00</p>
                    {accSize === '5,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $49.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '10,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('10,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$10,000.00</p>
                    {accSize === '10,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $84.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '25,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('25,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$25,000.00</p>
                    {accSize === '25,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $200.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
            <div class="flex sm:flex-row flex-col mt-3 gap-3">
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '50,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('50,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$50,000.00</p>
                    {accSize === '50,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $279.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '100,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('100,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$100,000.00</p>
                    {accSize === '100,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $489.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 lg:w-1/3 ">
                <div
                  class={`${
                    accSize === '200,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('200,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$200,000.00</p>
                    {accSize === '200,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $950.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
          </>
        ) : null}
        {active === 'Premium Pro Trader Challenge' ? (
          <>
            <p className="text-sm">Account size</p>
            {/* ROW */}
            <div class="flex sm:flex-row flex-col justify-center mt-3 gap-3">
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '50,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('50,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$50,000.00</p>
                    {accSize === '50,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $299.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '100,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('100,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$100,000.00</p>
                    {accSize === '100,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $499.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
            <div class="flex sm:flex-row justify-center flex-col mt-3 gap-3">
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '200,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('200,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$200,000.00</p>
                    {accSize === '200,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $979.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '300,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('300,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$300,000.00</p>
                    {accSize === '300,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $1399.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
          </>
        ) : null}
        {active === 'Premium+ Instant Funding' ? (
          <>
            <p className="text-sm">Account size</p>
            {/* ROW */}
            <div class="flex sm:flex-row flex-col justify-center mt-3 gap-3">
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '5,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('5,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$5,000.00</p>
                    {accSize === '5,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $450.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '10,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('10,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$10,000.00</p>
                    {accSize === '10,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light text-gray-300">Pay now $950.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
            <div class="flex sm:flex-row justify-center flex-col mt-3 gap-3">
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '20,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('20,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$20,000.00</p>
                    {accSize === '20,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $1920.00</p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/3 ">
                <div
                  class={`${
                    accSize === '50,000' ? 'bg-secGrayTheme  border-white' : 'border-gray-500/20'
                  } flex-1 flex flex-col justify-evenly py-2 px-3 h-[90px] cursor-pointer border text-sm  rounded-lg shadow-lg`}
                  onClick={() => setAccSize('50,000')}
                >
                  <div className="flex justify-between">
                    <p className="text-base">$50,000.00</p>
                    {accSize === '50,000' ? <img src={radiobtn} alt="" /> : <img src={emptybtn} alt="" />}
                  </div>
                  <p className="font-light tracking-wide text-gray-300">Pay now $4700.00</p>
                </div>
              </div>
            </div>
            {/* ROW */}
          </>
        ) : null}

        <div className="hidden mt-5 vd-box4 md:block">
          <p className="text-sm">How it works</p>
          <div className="flex flex-col gap-6 my-3 md:flex-row">
            <div className="flex-1 space-y-2">
              <div className="bg-secGrayTheme h-[40px] rounded-full flex aspect-square justify-center items-center">1</div>
              <p className="text-xl font-medium">Prove your skills</p>
              <p className="text-xs font-light text-gray-100">Successfully complete the required trading objectives.</p>
            </div>
            <div className="flex-1 space-y-2">
              <div className="bg-secGrayTheme h-[40px] rounded-full flex aspect-square justify-center items-center">2</div>
              <p className="text-xl font-medium">Verify your trading results</p>
              <p className="text-xs font-light text-gray-100">Successful complete trading objectives and become a Pro Funded Trader.</p>
            </div>
            <div className="flex-1 space-y-2">
              <div className="bg-secGrayTheme h-[40px] rounded-full flex aspect-square justify-center items-center">3</div>
              <p className="text-xl font-medium">Become A Pro Funded Trader</p>
              <p className="text-xs font-light text-gray-100">Trade our funds and keep up to 90% of the profits you make.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhaseGroup({ active, setActive, accSize, setAccSize }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [phase, setPhase] = useState(types2[0]);
  const [invStatus, setInvStatus] = useState('Paid');
  const [show, setShow] = useState(false);

  const calculateEightPercent = variable => {
    // Calculate 5% of the variable

    const Percent = variable * 0.08;
    return Percent;
  };

  const calculateFivePercent = variable => {
    // Calculate 5% of the variable

    const fivePercent = variable * 0.05;
    return fivePercent;
  };

  const calculateTenPercent = variable => {
    // Calculate 10% of the variable

    const tenPercent = variable * 0.1;
    return tenPercent;
  };
  const calculateSevenPercent = variable => {
    // Calculate 7% of the variable

    const Percent = variable * 0.07;
    const roundedResult = Number(Percent.toFixed(2));
    return roundedResult;
  };
  const calculateSixPercent = variable => {
    // Calculate 7% of the variable

    const Percent = variable * 0.06;
    const roundedResult = Number(Percent.toFixed(2));
    return roundedResult;
  };
  const calculateTwelvePercent = variable => {
    // Calculate 7% of the variable

    const Percent = variable * 0.12;
    const roundedResult = Number(Percent.toFixed(2));
    return roundedResult;
  };
  const newvariable = removeCommasAndParseInt(accSize);
  const maxDaily = calculateFivePercent(newvariable);
  const maxOverall = calculateTenPercent(newvariable);
  const maxDaily2 = calculateSixPercent(newvariable);
  const maxOverall2 = calculateTwelvePercent(newvariable);
  const pTarget = calculateSevenPercent(newvariable);
  const pTarget2 = calculateFivePercent(newvariable);
  const pTarget3 = calculateEightPercent(newvariable);

  return (
    <div>
      <button className="flex text-sm flex-wrap mt-6 mx-0 my-3 p-1  md:mx-0 bg-[#1C1D20] rounded-lg w-auto">
        {types2.map(type => (
          <Tab key={type} active={phase === type} onClick={() => setPhase(type)}>
            {type}
          </Tab>
        ))}
      </button>
      <div>
        <p className="text-sm">Account size</p>
        <p className="md:text-[40px] text-[32px] text-mainColor">${accSize}.00</p>{' '}
        <div className="flex items-center justify-between my-5 cursor-pointer" onClick={() => setShow(!show)}>
          <p>Breakdown</p>
          {show ? <BsChevronUp></BsChevronUp> : <BsChevronDown></BsChevronDown>}
        </div>
        {active === 'Pro Trader Challenge' ? (
          <>
            {/* BREAKDOWN */}
            <AnimatePresence>
              {show ? (
                <motion.div className="mt-4 space-y-4 text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div>
                    <p className="text-gray-300 underline">Profit Split & Bonus</p>
                    {phase === 'Phase 1' && <p>You Keep Up To 10% Profits</p>}
                    {phase === 'Phase 2' && <p>You Keep Up To 10% Profits</p>}
                    {phase === 'Pro Funded Trader' && <p>You Keep Up To 80% Profits</p>}
                  </div>
                  <div className="flex justify-between space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Trading period</p>
                      <p>Indefinite</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Min trading days</p>
                      <p>1 day</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Profit target</p>
                      {phase === 'Phase 1' && <p>${addCommasToNumber(pTarget)} (7%)</p>}
                      {phase === 'Phase 2' && <p>${addCommasToNumber(pTarget2)} (5%)</p>}
                      {phase === 'Pro Funded Trader' && <p>None</p>}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Max daily loss</p>
                      <p>${addCommasToNumber(maxDaily)} (5%)</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Max overall loss</p>
                      <p>${addCommasToNumber(maxOverall)} (10%)</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Bi-Weekly Payout</p>
                      {phase === 'Phase 1' && <p>No</p>}
                      {phase === 'Phase 2' && <p>No</p>}
                      {phase === 'Pro Funded Trader' && <p>Yes</p>}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            {/* BREAKDOWN */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-light">Subtotal</p> <p>$270.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Tax</p> <p>$0.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Total</p> <p>$270.00</p>
              </div>
            </div>
          </>
        ) : null}
        {active === 'Premium Pro Trader Challenge' ? (
          <>
            {/* BREAKDOWN */}
            <AnimatePresence>
              {show ? (
                <motion.div className="mt-4 space-y-4 text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div>
                    <p className="text-gray-300 underline">Profit Split & Bonus</p>

                    {phase === 'Phase 1' && <p>You Keep Up To 15% Profits</p>}
                    {phase === 'Phase 2' && <p>You Keep Up To 15% Profits</p>}
                    {phase === 'Pro Funded Trader' && <p>You Keep Up To 90% Profits</p>}
                  </div>
                  <div className="flex justify-between space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Trading period</p>
                      <p>Indefinite</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Min trading days</p>
                      <p>1 day</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Profit target</p>
                      {phase === 'Phase 1' && <p>${addCommasToNumber(pTarget3)} (8%)</p>}
                      {phase === 'Phase 2' && <p>${addCommasToNumber(pTarget)} (5%)</p>}
                      {phase === 'Pro Funded Trader' && <p>None</p>}
                    </div>
                  </div>
                  <div className="flex justify-between space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Max daily loss</p>
                      <p>${addCommasToNumber(maxDaily)} (5%)</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Max overall loss</p>
                      <p>${addCommasToNumber(maxOverall2)} (12%)</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Bi-Weekly Payout</p>
                      {phase === 'Phase 1' && <p>Yes</p>}
                      {phase === 'Phase 2' && <p>Yes</p>}
                      {phase === 'Pro Funded Trader' && <p>No</p>}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-light">Subtotal</p> <p>$270.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Tax</p> <p>$0.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Total</p> <p>$270.00</p>
              </div>
            </div>
          </>
        ) : null}
        {active === 'Premium+ Instant Funding' ? (
          <>
            {/* BREAKDOWN */}
            <AnimatePresence>
              {show ? (
                <motion.div className="mt-4 space-y-4 text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div>
                    <p className="text-gray-300 underline">Profit Split & Bonus</p>
                    <p>You Keep Up To 50% Profits</p>
                  </div>
                  <div className="flex justify-between space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Trading period</p>
                      <p>Indefinite</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Min trading days</p>
                      <p>None</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Profit target</p>
                      <p>None</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Max overall loss</p>
                      <p>${addCommasToNumber(maxOverall)} (10%)</p>
                    </div>{' '}
                    <div className="space-y-1 md:w-1/3">
                      <p className="text-gray-300 underline">Bi-Weekly Payout</p>
                      <p>Yes</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-light">Subtotal</p> <p>$270.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Tax</p> <p>$0.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-light">Total</p> <p>$270.00</p>
              </div>
            </div>
          </>
        ) : null}
        <div className="my-8">
          <p className="text-sm">Select payment method</p>
          <div className="px-2 mt-4 space-y-4 text-sm md:px-5">
            {/* CARD */}
            <div className="flex items-center justify-center gap-3 py-3 border-t border-gray-500/20 ">
              <img src={visa} alt="" className="h-[32px] w-[46px]" />
              <div className="flex flex-col w-full text-left">
                <p>My BOA bank card</p>
                <p className="font-light text-gray-300">Visa ending in 1234</p>
              </div>
              <input type="checkbox" className="shrink-0" />
            </div>
            {/* CARD */}
            <div className="flex items-center justify-center gap-3 py-3 border-t border-gray-500/20 ">
              <img src={mc} alt="" className="h-[32px] w-[46px]" />
              <div className="flex flex-col w-full text-left">
                <p>My BOA bank card</p>
                <p className="font-light text-gray-300">MasterCard ending in 1234</p>
              </div>
              <input type="checkbox" className="shrink-0" />
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-full py-3 text-white transition ease-in-out delay-150 rounded-lg bg-mainBlue hover:bg-blue-600 hover:transition-all">
          Pay $475
        </button>
      </div>
    </div>
  );
}
export default function Challenges({ activeNav, setActiveNav }) {
  const [active, setActive] = useState(types[0]);
  const [accSize, setAccSize] = useState('100,000');

  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col w-full gap-5 lg:flex-row">
      {' '}
      <div className="justify-center gap-2 overflow-x-scroll lg:w-[60%] w-full overflow-y-scroll text-white rounded-lg bg-mainTheme vd-box4 scrollbar-hide">
        <p className="mb-3 text-xl text-gray-300">Buy a challenge</p>
        <p className="text-sm">Select tier</p>
        <TabGroup active={active} setActive={setActive} accSize={accSize} setAccSize={setAccSize} />
      </div>
      <div className="justify-center lg:w-[30%] w-full gap-2 overflow-x-scroll overflow-y-scroll text-white rounded-lg vd-box4 bg-mainTheme scrollbar-hide">
        <p className="text-md ">Checkout</p>

        <PhaseGroup active={active} setActive={setActive} accSize={accSize} setAccSize={setAccSize}></PhaseGroup>
      </div>
    </div>
  );
}
