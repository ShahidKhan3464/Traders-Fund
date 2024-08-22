import React from 'react';
import gentles from '../../images/gentles.svg';

const LoveTrader = () => {
  const col1 = [
    {
      initials: 'AB',
      name: 'Akeeno Blake',
      title: '“Best Prop Firm”',
      description:
        'The customer service is responsive and the quality of service is impeccable. Love the insight and details provided from the company. It looks solid.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c1b891af493f3b81b772fddd7feb0bbd944016258091b441fa98fbb05c2ef48?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      name: 'Tasha',
      initials: 'TA',
      title: '“Thank you, Pro traders fund for selecting me for the $5k giveaway”',
      description:
        'Thank you,Protraders fund for selecting me in the $5k giveaway competition. I am truly greatful because I have failed three $5k funded account thus far and when I saw this opportunity,I decided to go for it because I strongly believe I have the potential to pass the challenge an receive the highest payout within the company. I must say you have the highest level of customer service representative on your team.keep up the tremendous work and hats off to the CEO',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      name: 'Netta',
      initials: 'NE',
      title: '“Legit Company”',
      description:
        "One of the best prop firm there is. Only prop firm who offers live webinars to help it's customers to succeed. The payout process is a bit tedious for the fist payout but eventually it gets easier. Big up pajama!!",
      icons: Array(4).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'E',
      name: 'Emmanuel Capital Family',
      title: '“Good customer service”',
      description: 'Good customer service Fast response Keep it up',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    }
  ];

  const col2 = [
    {
      initials: 'AB',
      name: 'Akeeno Blake',
      title: '“Showing appreciation”',
      description:
        'I really appreciate the free value they put out in the form of Sunday chart breakdowns with Meeks, Juvier and Jarrett. It helps a lot and hope to see more of it.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'TD',
      name: 'Taj Dxn',
      title: '“Thanks to Meeks and Juvier”',
      description:
        'Thank to Meeks, Juvier and Nath and also to Pajama for the Sunday session, really love it guys my first Sunday session so far 🫶🫶🫶 loving it.',
      icons: Array(4).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      name: 'Laura',
      initials: 'NE',
      title: '“Growth and Support”',
      description:
        "In order for a 3rd World Country to grow we need Innovation ! I am very bullish on Pro Traders Fund I love the support from Funded Traders like Nathaniel Meeks, Narmarjah Jarrett, Shahiza Lugo Juvier and others who give vital information and guidance to newbies. Can't wait to see this Company listed and changing the Caribbean and LATAM glad to be here super early ! Amazing Company, amazing Founder and Visionary !!",
      icons: Array(4).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    }
  ];

  const col3 = [
    {
      initials: 'AB',
      name: 'Akeeno Blake',
      title: '“Great firm with top traders like Juvier…”',
      description:
        'Great firm with top traders like Juvier representing thats how i knew it was legit plus I see no other firm doing weekly sessions to get traders better at understanding the markets like ptf plus they have excellent customer service fast and reliable.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'MW',
      name: 'Melford Woolery',
      title: '“Protradersfund is the real deal”',
      description:
        'I am not sure if there is another prop firm out there that convenes webinars with its members but Protradersfund does, this tells me one thing, they truly wants us to succeed.Last Sunday night we were taught proper risk management techniques, trading strategies that works etc. People this one is for real and heading straight for the top.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      name: 'Dale',
      initials: 'D',
      title: '“Great experience so far”',
      description:
        "I love the timely and informative response, I've reached out multiple times and the response is second to none, now i think I have enough information to proceed. Thanks alot",
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    }
  ];

  const col4 = [
    {
      initials: 'AB',
      name: 'Akeeno Blake',
      title: '“Showing appreciation”',
      description:
        'I really appreciate the free value they put out in the form of Sunday chart breakdowns with Meeks, Juvier and Jarrett. It helps a lot and hope to see more of it.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'NJ',
      name: 'Narmarjah Jarrett',
      title: '“The Protrader Experience”',
      description:
        'The experience has been quite fulfilling, culminating in my years of experience as a forex trader. The Support staff helps resolve any issues or concerns you may have and the devs are hard at work ensuring that the platform is at its best and user-friendly for its traders. Rest assured, that you will get regularly scheduled payouts and some of the lowest prices to purchase challenges in the Prop Firm Market, with flexible trading rules. If you are ready to give yourself an edge and take your trading to a whole new level then Protradersfund is the place for you.',
      icons: Array(4).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    }
  ];

  const col5 = [
    {
      initials: 'AB',
      name: 'Alston Billings',
      title: '“Instant account generation truly a game changer…”',
      description:
        'The fact that I was able to move on the next phase without having to wait and the instant account generation feature they have is top tier and the best in the industry. Truly a game changer. Highly Recommended prop firm.',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'FS',
      name: 'Fx Swing Journey',
      title: "“I'm chevaunne baker from Jamaica guy…”",
      description:
        "I'm chevaunne baker from Jamaica guy trying to get in trading for a while didn't have the funds to start but pro trader change all that now I'm moving to the next level blessed keep your you works in changes life",
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    },
    {
      initials: 'E',
      name: 'Emmanuel Capital Family',
      title: '“Good customer service”',
      description: 'Good customer service Fast response Keep it up',
      icons: Array(5).fill({
        iconBg: 'bg-[#219653]',
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
      })
    }
  ];

  return (
    <section className="flex z-0 flex-col p-12 w-full bg-[#141518] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-80 w-full max-md:px-5 max-md:max-w-full max-md:px-0">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="gap-2.5 self-center px-4 py-2.5 text-sm font-matter font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
            Pro Traders Fund Reviews
          </div>
          <div className="flex gap-2.5 items-center mt-5 w-full text-6xl font-medium text-center capitalize max-md:max-w-full max-md:text-4xl">
            <div className="flex-1 shrink self-stretch my-auto basis-0 font-matter text-white max-md:max-w-full max-md:text-4xl">
              Our traders love us ❤️
            </div>
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full font-matter font-normal text-xl leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
            We are an Instant funding prop firm with the best funded trader program in the industry. We are proud to have numerous stories
            of success and satisfaction.
          </div>
        </div>
        <button
          type="button"
          className="overflow-hidden cursor-pointer gap-2 self-center px-5 py-3 mt-10 text-base font-matter font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
        >
          Find us on TrustPilot
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-[240px]">
          {col1.map((review, index) => (
            <div key={index} className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#262729]">
              <div className="flex gap-0.5 items-start self-start">
                {review.icons.map((icon, index) => (
                  <div key={index} className={`flex flex-col justify-center items-center px-1 w-5 h-5 ${icon.iconBg}`}>
                    <img alt="img" loading="lazy" src={icon.src} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">{review.title}</h2>
              <p className="mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD]">{review.description}</p>
              <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
                <span
                  className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-white bg-[#0083FF] rounded-[200px]`}
                >
                  {review.initials}
                </span>
                <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-[240px]">
          <div className="flex overflow-hidden flex-col gap-4 justify-center p-4 mt-4 w-full font-medium bg-white rounded-2xl min-h-[400px] text-[#0B142B] max-md:min-h-[300px]">
            <h2 className="text-6xl tracking-tighter font-matter font-medium capitalize">+1M</h2>
            <p className="mt-2 text-3xl font-matter font-medium leading-10">in payouts to funded traders worldwide.</p>
          </div>
          {col2.map((review, index) => (
            <div key={index} className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#262729]">
              <div className="flex gap-0.5 items-start self-start">
                {review.icons.map((icon, index) => (
                  <div key={index} className={`flex flex-col justify-center items-center px-1 w-5 h-5 ${icon.iconBg}`}>
                    <img alt="img" loading="lazy" src={icon.src} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">{review.title}</h2>
              <p className="mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD]">{review.description}</p>
              <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
                <span
                  className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-white bg-[#0083FF] rounded-[200px]`}
                >
                  {review.initials}
                </span>
                <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-[240px]">
          <div className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#0083FF]">
            <div className="flex gap-0.5 items-start self-start">
              {Array(5)
                .fill(
                  'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
                )
                .map((icon, index) => (
                  <div key={index} className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-[#219653]">
                    <img alt="img" loading="lazy" src={icon} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
            </div>
            <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">“I love the weekly…”</h2>
            <p className="mt-4 text-base font-matter font-normal leading-6 text-[#F9FAFB]">
              i love the weekly sessions thanks to meeks for sharing his knowledge and juvier for sharing tips on journaling can’t wait to
              get started
            </p>
            <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
              <span
                className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-[#0B142B] bg-[#6EFDEB] rounded-[200px]`}
              >
                SB
              </span>
              <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                Sanyah Banks
              </p>
            </div>
          </div>
          {col3.map((review, index) => (
            <div key={index} className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#262729]">
              <div className="flex gap-0.5 items-start self-start">
                {review.icons.map((icon, index) => (
                  <div key={index} className={`flex flex-col justify-center items-center px-1 w-5 h-5 ${icon.iconBg}`}>
                    <img alt="img" loading="lazy" src={icon.src} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">{review.title}</h2>
              <p className="mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD]">{review.description}</p>
              <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
                <span
                  className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-white bg-[#0083FF] rounded-[200px]`}
                >
                  {review.initials}
                </span>
                <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-[240px]">
          {col4.map((review, index) => (
            <div key={index} className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#262729]">
              <div className="flex gap-0.5 items-start self-start">
                {review.icons.map((icon, index) => (
                  <div key={index} className={`flex flex-col justify-center items-center px-1 w-5 h-5 ${icon.iconBg}`}>
                    <img alt="img" loading="lazy" src={icon.src} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">{review.title}</h2>
              <p className="mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD]">{review.description}</p>
              <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
                <span
                  className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-white bg-[#0083FF] rounded-[200px]`}
                >
                  {review.initials}
                </span>
                <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
          <div className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#6EFDEB]">
            <div className="flex gap-0.5 items-start self-start">
              {Array(5)
                .fill(
                  'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
                )
                .map((icon, index) => (
                  <div key={index} className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-[#219653]">
                    <img alt="img" loading="lazy" src={icon} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
            </div>
            <h2 className="mt-4 text-xl font-matter font-medium text-[#141518]">“Tyrique is amazing”</h2>
            <p className="mt-4 text-base font-matter font-normal leading-6 text-[#141518]">
              Tyrique is amazing. The customer service representative answered my questions well and was very professional! There were no
              slow replies and I was advise to reach out to them in case I require further assistance. Definitely raise their pay, y'all
              have a good one there.
            </p>
            <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
              <img src={gentles} alt="avatar" className="rounded-[50%]" />
              <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#141518]">
                J Gentles
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col flex-1 gap-2 mt-4 p-4 w-full font-medium bg-[#099250] rounded-2xl min-h-[238px] max-md:min-h-[200px]">
            <h2 className="text-6xl text-[#FFFFFF] tracking-tighter font-matter font-medium capitalize">4.5hrs</h2>
            <p className="mt-2 text-[#AAF0C4] text-3xl font-matter font-normal leading-10">Avg. payout time.</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center self-start basis-0 min-w-[240px]">
          {col5.map((review, index) => (
            <div key={index} className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#262729]">
              <div className="flex gap-0.5 items-start self-start">
                {review.icons.map((icon, index) => (
                  <div key={index} className={`flex flex-col justify-center items-center px-1 w-5 h-5 ${icon.iconBg}`}>
                    <img alt="img" loading="lazy" src={icon.src} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">{review.title}</h2>
              <p className="mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD]">{review.description}</p>
              <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
                <span
                  className={`self-stretch px-2.5 flex items-center justify-center font-matter font-medium w-10 h-10 text-center text-white bg-[#0083FF] rounded-[200px]`}
                >
                  {review.initials}
                </span>
                <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
          <div className="flex overflow-hidden flex-col gap-4 p-4 mt-4 w-full rounded-2xl bg-[#0083FF]">
            <div className="flex gap-0.5 items-start self-start">
              {Array(5)
                .fill(
                  'https://cdn.builder.io/api/v1/image/assets/TEMP/5044e51bc2327ed4573815096ed79348735f1aaa8b13d680ce5fb4c937aa9e64?apiKey=227fffdadf2841c0827fed858fc04b84&'
                )
                .map((icon, index) => (
                  <div key={index} className="flex flex-col justify-center items-center px-1 w-5 h-5 bg-[#219653]">
                    <img alt="img" loading="lazy" src={icon} className="object-contain w-3.5 aspect-square" />
                  </div>
                ))}
            </div>
            <h2 className="mt-4 text-xl font-matter font-medium text-[#FCFAFF]">“They are very reasonable with the cost…”</h2>
            <p className="mt-4 text-base font-matter font-normal leading-6 text-[#F9FAFB]">
              They are very reasonable with the cost of the challenges and their support team is top tier. Remember if your not trading with
              Pro traders fund trading your trading will not be fun😂
            </p>
            <div className="flex gap-2 items-center mt-4 w-full text-xl font-medium whitespace-nowrap">
              <img src={gentles} alt="avatar" className="rounded-[50%]" />
              <p className="flex-1 shrink self-stretch whitespace-pre-wrap font-matter font-medium my-auto basis-[18px] text-[#FCFAFF]">
                J Gentles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveTrader;
