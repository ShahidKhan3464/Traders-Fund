import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Transparent = () => {
  const navigate = useNavigate();
  const [selectedAccountSize, setSelectedAccountSize] = useState('100k');
  const [selectedFundingType, setSelectedFundingType] = useState('oneStep');
  const steps = [
    {
      id: 1,
      text: 'Select your evaluation',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0f9ac7bd2f760b81ded2a030557b8ce292e2d428d003f67da37f09010c2d7c5a?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 2,
      text: 'Prove your skills',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0f9ac7bd2f760b81ded2a030557b8ce292e2d428d003f67da37f09010c2d7c5a?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 3,
      text: 'Get funded',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0f9ac7bd2f760b81ded2a030557b8ce292e2d428d003f67da37f09010c2d7c5a?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  const features1 = [
    {
      id: 1,
      text: 'Trading Period',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 2,
      text: 'Minimum Trading Days',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 3,
      text: 'Profit Target',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 4,
      text: 'Max Daily Loss',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 5,
      text: 'Max Overall Loss',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 6,
      text: 'Drawdown Type',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 7,
      text: 'Monthly Fees',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 8,
      text: 'Leverage',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 9,
      text: 'News Trading',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      text: 'Weekend Holding',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      text: 'EAs Enabled',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      text: 'Trade Copier',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      text: 'Bi-Weekly Payout',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: 'Profit Split & Bonus',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 15,
      text: 'Reset Discount',
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 16,
      text: 'Refundable Fee',
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/180907dfccb3597bc6b420bd84920aa9e8060d6e9339a0e8b0656a2806d30dd1?apiKey=227fffdadf2841c0827fed858fc04b84&'
    }
  ];

  const features2 = [
    {
      id: 1,
      text: 'Unlimited',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 2,
      text: '1',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 3,
      text: '$10,000.00 (10.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 4,
      text: '$3,000.00 (3.00%)',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 5,
      text: '$6,000.00 (6.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 6,
      text: 'Balance & Equity Based',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 7,
      text: 'No monthly fees',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 8,
      text: '1 : 100',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 9,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: '5% Profit Target Bonus',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 15,
      text: '10%',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 16,
      text: '$579.00',
      bgColor: 'bg-[#1C1D20]'
    }
  ];

  const features3 = [
    {
      id: 1,
      text: 'Unlimited',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 2,
      text: '1',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 3,
      text: 'None',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 4,
      text: '$3,000.00 (3.00%)',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 5,
      text: '$6,000.00 (6.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 6,
      text: 'Balance & Equity Based',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 7,
      text: 'No monthly fees',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 8,
      text: '1 : 100',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 9,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: 'You Keep 80% Profits',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 15,
      text: '10%',
      bgColor: 'bg-[#262729]'
    }
  ];

  const twoStepRow2 = [
    {
      id: 1,
      text: 'Unlimited',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 2,
      text: '1',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 3,
      text: '$7000(7%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 4,
      text: '$5,000.00 (5.00%)',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 5,
      text: '$12,000.00 (12.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 6,
      text: 'Balance & Equity Based',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 7,
      text: 'No monthly fees',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 8,
      text: '1 : 100',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 9,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: '10% Profit Target Bonus',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 15,
      text: '10%',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 15,
      text: '$499.00%',
      bgColor: 'bg-[#1C1D20]'
    }
  ];

  const twoStepRow3 = [
    {
      id: 1,
      text: 'Unlimited',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 2,
      text: '1',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 3,
      text: '$5000(5%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 4,
      text: '$5,000.00 (5.00%)',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 5,
      text: '$12,000.00 (12.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 6,
      text: 'Balance & Equity Based',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 7,
      text: 'No monthly fees',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 8,
      text: '1 : 100',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 9,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: '10% Profit Target Bonus',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 15,
      text: '10%',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 15,
      text: 'Free',
      bgColor: 'bg-[#1C1D20]'
    }
  ];

  const twoStepRow4 = [
    {
      id: 1,
      text: 'Unlimited',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 2,
      text: 'None',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 3,
      text: '$5000(5%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 4,
      text: '$5,000.00 (5.00%)',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 5,
      text: '$12,000.00 (12.00%)',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 6,
      text: 'Balance & Equity Based',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 7,
      text: 'No monthly fees',
      bgColor: 'bg-[#262729]'
    },
    {
      id: 8,
      text: '1 : 100',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 9,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 10,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 11,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 12,
      bgColor: 'bg-[#1C1D20]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 13,
      bgColor: 'bg-[#262729]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fa04ef3c46fd096651163e0b24c73a9926b2df2e226f7c79129356ad10f8bf?apiKey=227fffdadf2841c0827fed858fc04b84&'
    },
    {
      id: 14,
      text: 'You Keep 90% Profit',
      bgColor: 'bg-[#1C1D20]'
    },
    {
      id: 15,
      text: '10%',
      bgColor: 'bg-[#262729]'
    }
  ];

  // max-md:justify-start

  return (
    <section className="flex z-0 flex-col justify-center px-36 py-20 w-full bg-[#141518] max-md:px-5 max-md:max-w-full max-md:py-10">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="gap-2.5 self-center px-4 py-2.5 text-sm font-matter font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
            Choose Your Funded Trading Challenge
          </div>
          <div className="flex gap-2.5 items-center mt-5 w-full text-6xl font-medium tracking-tighter text-center capitalize max-md:max-w-full max-md:text-4xl">
            <div className="flex-1 shrink font-matter self-stretch my-auto basis-0 text-white max-md:max-w-full max-md:text-4xl">
              Simple Rules, Transparent Pricing
            </div>
          </div>
          <section id="pricing">
            <div className="flex-1 shrink gap-2.5 self-stretch font-normal font-matter mt-5 w-full text-xl leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
              Start trading with the best funded trader program. Pass our prop firm challenge, trade risk-free, and keep up to 90% of the
              profits! Ready to begin? Select your challenge and start your evaluation for instant funding now!
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center self-center mt-10 max-md:max-w-full max-md:justify-start">
        {steps.map(step => (
          <div key={step.id} className="flex gap-4 items-center self-stretch my-auto max-md:flex-col">
            <div className="flex gap-2.5 justify-center items-center self-stretch p-3 my-auto w-11 h-11 bg-[#6EFDEB] rounded-3xl">
              <div className="flex flex-col justify-center items-center self-stretch px-1 py-px w-5">
                <span className="font-matter text-base font-semibold whitespace-nowrap text-[#141518]">{step.id}</span>
              </div>
            </div>
            <div className="self-stretch my-auto text-lg font-matter font-normal leading-loose text-white max-md:text-base">
              {step.text}
            </div>
            <img
              alt={`Step ${step.id} icon`}
              loading="lazy"
              src={step.icon}
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square max-md:hidden"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-10 w-full max-md:max-w-full max-md:mt-5">
        <div className="flex flex-wrap gap-4 items-start w-full bg-[#141518] max-md:max-w-full">
          <div className="flex flex-col pt-28 w-40 max-md:w-full max-md:pt-5">
            <div className="flex flex-col gap-2 justify-center p-1 w-full leading-none text-center rounded-lg bg-[#1C1D20] max-md:flex-row">
              <button
                type="button"
                onClick={() => setSelectedFundingType('oneStep')}
                className={`overflow-hidden cursor-pointer gap-2 self-stretch text-sm font-matter font-semibold px-3 py-2 mt-2 w-full rounded-md max-sm:font-normal max-md:mt-0 max-sm:py-0 ${selectedFundingType === 'oneStep' ? 'bg-[#6EFDEB] shadow text-[#0B142B]' : 'text-[#667085]'}`}
              >
                One Step
              </button>
              <button
                type="button"
                onClick={() => setSelectedFundingType('twoStep')}
                className={`overflow-hidden cursor-pointer gap-2 self-stretch text-sm font-matter font-semibold px-3 py-2 mt-2 w-full rounded-md max-sm:font-normal max-md:mt-0 max-sm:py-0 ${selectedFundingType === 'twoStep' ? 'bg-[#6EFDEB] shadow text-[#0B142B]' : 'text-[#667085]'}`}
              >
                Two Step
              </button>

              <button
                type="button"
                onClick={() => setSelectedFundingType('instantFunding')}
                className={`overflow-hidden cursor-pointer gap-2 self-stretch text-sm font-matter font-semibold px-3 py-2 mt-2 w-full rounded-md max-sm:font-normal max-md:mt-0 max-sm:py-0 ${selectedFundingType === 'instantFunding' ? 'bg-[#6EFDEB] shadow text-[#0B142B]' : 'text-[#667085]'}`}
              >
                Instant Funding
              </button>
            </div>

            <div className="mt-4 text-sm leading-none font-matter font-normal text-center text-[#667085]">Choose account size</div>
            <div className="flex flex-col gap-2 justify-center p-1 mt-4 w-full whitespace-nowrap rounded-lg bg-[#1C1D20] max-md:flex-row">
              <button
                type="button"
                onClick={() => setSelectedAccountSize('5k')}
                className={`overflow-hidden w-full gap-2 self-center px-3 py-2 text-sm font-matter font-bold leading-none rounded-md max-sm:font-normal ${selectedAccountSize === '5k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                5k
              </button>

              <button
                type="button"
                onClick={() => setSelectedAccountSize('10k')}
                className={`overflow-hidden w-full gap-2 self-center px-3 py-2 text-sm font-matter font-bold leading-none rounded-md max-sm:font-normal ${selectedAccountSize === '10k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                10k
              </button>

              <button
                type="button"
                onClick={() => setSelectedAccountSize('25k')}
                className={`overflow-hidden w-full gap-2 self-center px-3 py-2 text-sm font-matter font-bold leading-none rounded-md max-sm:font-normal ${selectedAccountSize === '25k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                25k
              </button>

              <button
                type="button"
                onClick={() => setSelectedAccountSize('50k')}
                className={`overflow-hidden w-full gap-2 self-center px-3 py-2 text-sm font-matter font-bold leading-none rounded-md max-sm:font-normal ${selectedAccountSize === '50k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                50k
              </button>

              <button
                type="button"
                onClick={() => setSelectedAccountSize('100k')}
                className={`flex overflow-hidden gap-2 justify-center items-center px-3 py-2 mt-2 w-full rounded-md max-sm:font-normal max-md:mt-0 ${selectedAccountSize === '100k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                <span className="self-stretch my-auto text-sm font-matter font-bold leading-none max-md:font-normal">100k</span>
                <span className="self-stretch px-2 py-0.5 my-auto text-xs font-matter font-medium text-center text-[#027A48] bg-[#ECFDF3] rounded-2xl max-md:hidden">
                  Popular
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedAccountSize('200k')}
                className={`overflow-hidden w-full gap-2 self-center px-3 py-2 text-sm font-matter font-bold leading-none rounded-md max-sm:font-normal ${selectedAccountSize === '200k' ? 'bg-[#6EFDEB] shadow text-[#141518]' : 'text-[#667085]'}`}
              >
                200k
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[200px] max-md:max-w-full">
            <div className="flex justify-center items-start max-lg:flex-col max-lg:items-center">
              <div className="flex flex-col flex-1 shrink rounded-xl min-w-[200px] max-lg:w-full">
                <div className="px-6 pt-16 pb-6 w-full leading-6 text-[#667085] text-sm font-work font-normal min-h-[114px] max-md:px-5 max-md:pt-4 max-md:min-h-[50px] max-md:text-center">
                  WHAT WE OFFER
                </div>
                <div className="flex flex-col w-full">
                  {features1.map(item => (
                    <div className={`flex gap-3 justify-center items-center px-6 py-6 w-full ${item.bgColor} max-md:px-5`}>
                      <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto w-full leading-none min-w-[240px] max-md:justify-center">
                        <div className="self-stretch my-auto font-matter text-sm font-medium text-white max-md:font-normal">
                          {item.text}
                        </div>
                        <img
                          alt="img"
                          loading="lazy"
                          src={item.icon}
                          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {(selectedFundingType == 'twoStep' || selectedFundingType == 'oneStep') && (
                <div className="flex flex-col flex-1 shrink min-w-[240px] max-lg:w-full">
                  <div className="flex flex-col justify-center p-6 pb-[18px] w-full text-center max-md:px-5">
                    <div className="w-full text-xl font-matter font-medium text-[#6EFDEB]">Phase 1</div>
                    <div className="mt-2 text-lg font-matter font-normal leading-loose text-white">Prove your skills</div>
                  </div>
                  <div className="flex flex-col w-full">
                    {selectedFundingType == 'oneStep' &&
                      features2.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter flex justify-center text-sm font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}
                    {selectedFundingType == 'twoStep' &&
                      twoStepRow2.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter flex justify-center text-sm font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}

                    {selectedFundingType == 'instantFunding' &&
                      twoStepRow3.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter flex justify-center text-sm font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {selectedFundingType == 'twoStep' && (
                <div className="flex flex-col flex-1 shrink rounded-xl min-w-[240px] max-lg:w-full">
                  <div className="flex flex-col justify-center p-6 pb-[18px] w-full text-center max-md:px-5">
                    <div className="w-full font-matter text-xl font-medium text-[#6EFDEB]">Phase 1</div>
                    <div className="mt-2 text-lg leading-loose font-matter font-normal text-white">Verify your results</div>
                  </div>
                  <div className="flex flex-col w-full">
                    {twoStepRow3.map(item => (
                      <div
                        key={item.id}
                        className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                      >
                        {item.icon ? (
                          <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                            <img
                              alt="img"
                              loading="lazy"
                              src={item.icon}
                              className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                            />
                          </div>
                        ) : (
                          <div className="flex-1 font-matter text-sm  flex justify-center font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                            {item.text}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex gap-3 justify-center items-center px-6 py-5 w-full text-xl font-matter font-bold leading-tight bg-[#6EFDEB] text-[#1C1D20] max-md:px-5">
                      <button
                        type="button"
                        className="flex-1 cursor-pointer font-matter font-bold shrink gap-1 self-stretch my-auto w-full min-w-[240px]"
                      >
                        100% Refund
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {selectedFundingType == 'instantFunding' && (
                <div className="flex flex-col flex-1 shrink rounded-xl min-w-[240px] max-lg:w-full">
                  <div className="flex flex-col justify-center p-6 pb-[18px] w-full text-center max-md:px-5">
                    <div className="w-full font-matter text-xl font-medium text-[#6EFDEB]">Instant Funcing</div>
                  </div>
                  <div className="flex flex-col w-full mt-11">
                    {twoStepRow4.map(item => (
                      <div
                        key={item.id}
                        className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                      >
                        {item.icon ? (
                          <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                            <img
                              alt="img"
                              loading="lazy"
                              src={item.icon}
                              className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                            />
                          </div>
                        ) : (
                          <div className="flex-1 font-matter text-sm  flex justify-center font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                            {item.text}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex gap-3 justify-center items-center px-6 py-5 w-full text-xl font-matter font-bold leading-tight bg-[#6EFDEB] text-[#1C1D20] max-md:px-5">
                      <button
                        type="button"
                        className="flex-1 cursor-pointer font-matter font-bold shrink gap-1 self-stretch my-auto w-full min-w-[240px]"
                      >
                        100% Refund
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {(selectedFundingType == 'twoStep' || selectedFundingType == 'oneStep') && (
                <div className="flex flex-col flex-1 shrink rounded-xl min-w-[240px] max-lg:w-full">
                  <div className="flex flex-col justify-center p-6 pb-[18px] w-full text-center max-md:px-5">
                    <div className="w-full font-matter text-xl font-medium text-[#6EFDEB]">Pro Funded Trader</div>
                    <div className="mt-2 text-lg leading-loose font-matter font-normal text-white">Trade our funds</div>
                  </div>
                  <div className="flex flex-col w-full">
                    {selectedFundingType == 'oneStep' &&
                      features3.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter text-sm  flex justify-center font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}

                    {selectedFundingType == 'twoStep' &&
                      twoStepRow3.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter text-sm  flex justify-center font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}

                    {selectedFundingType == 'instantFunding' &&
                      twoStepRow3.map(item => (
                        <div
                          key={item.id}
                          className={`flex gap-3 relative justify-center items-center px-6 py-6 w-full leading-none whitespace-nowrap ${item.bgColor} max-md:px-5`}
                        >
                          {item.icon ? (
                            <div className="flex z-0 flex-1 shrink gap-1 justify-center items-center my-auto basis-0 min-w-[240px]">
                              <img
                                alt="img"
                                loading="lazy"
                                src={item.icon}
                                className="object-contain self-stretch my-auto w-5 rounded-xl aspect-square"
                              />
                            </div>
                          ) : (
                            <div className="flex-1 font-matter text-sm  flex justify-center font-medium text-white shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:font-normal">
                              {item.text}
                            </div>
                          )}
                        </div>
                      ))}

                    <div className="flex gap-3 justify-center items-center px-6 py-5 w-full text-xl font-matter font-bold leading-tight bg-[#6EFDEB] text-[#1C1D20] max-md:px-5">
                      <button
                        type="button"
                        className="flex-1 cursor-pointer font-matter font-bold shrink gap-1 self-stretch my-auto w-full min-w-[240px]"
                      >
                        100% Refund
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col self-center mt-10 max-w-full text-lg leading-loose rounded-[100px] text-[#141518] w-[342px]">
        <div className="flex overflow-hidden gap-3 justify-center items-center px-8 py-6 bg-[#6EFDEB] shadow-sm rounded-[100px] max-md:px-5 max-md:py-4">
          <button
            onClick={() => {
              navigate('/#100K-Price');
            }}
            type="button"
            className="self-stretch cursor-pointer my-auto font-matter max-md:text-base"
          >
            Start your $100k Evaluation
          </button>
          <img
            alt="img"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc01a161c929495b00bee63f270649f5d609447f4061812065a42605b11854?apiKey=227fffdadf2841c0827fed858fc04b84&"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Transparent;
