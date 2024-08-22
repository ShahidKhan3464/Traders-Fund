import React from 'react';
import vectorLines from '../../images/Vector.png';
import profiltSplit from '../../images/Profit Split.png';
import { useNavigate } from 'react-router-dom';

const ReliableFirm = () => {
  const navigate = useNavigate();
  return (
    <section className="flex overflow-hidden z-0 flex-col px-36 py-24 w-full bg-[#141518] max-md:px-5 max-md:max-w-full max-md:py-10">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col px-52 w-full max-md:px-5 max-md:max-w-full max-md:px-0">
          <div className="gap-2.5 self-center px-4 py-2.5 text-sm font-semibold leading-none font-matter text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
            The Most Dependable Prop Firm
          </div>
          <div className="flex gap-2.5 items-center mt-5 w-full text-6xl font-medium tracking-tighter font-matter text-center capitalize max-md:max-w-full max-md:text-4xl">
            <div className="flex-1 text-[#6EFDEB] tracking-[-1.2px] font-medium font-matter shrink self-stretch my-auto bg-clip-text basis-0 max-md:max-w-full max-md:text-4xl">
              Trade with the Most
              <br />
              Reliable Prop Firm 🌏🤑💰
            </div>
          </div>
          <div className="flex-1 shrink gap-2.5 font-normal self-stretch mt-5 w-full text-xl leading-8 font-matter text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
            Join Pro Traders Fund for instant funding, real-time evaluations, and advanced tools like risk management and performance
            tracking. With no time limits and reachable profit targets, we focus on your success. Get paid bi-weekly, keep up to 90% of
            profits, and benefit from our supportive community and expert coaches. We're dependable, with reliable payment systems and
            multiple options.
          </div>
        </div>
        <button
          onClick={() => {
            navigate('/#pricing');
          }}
          type="button"
          className="overflow-hidden cursor-pointer gap-2 self-center px-5 py-3 mt-10 text-base font-semibold font-matter bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
        >
          Get funded
        </button>
      </div>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 w-full min-h-[440px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col bg-[#0083FF] rounded-3xl min-w-[240px] w-3/5 max-md:max-w-full max-md:w-full shadow-custom-spread hover:shadow-[0_0_20px_6px_rgba(110,253,235,0.3)] transition-all border-2 border-transparent hover:border-[#6EFDEB]">
            <div className="relative h-full flex flex-col w-full min-h-[440px] max-md:max-w-full">
              <img
                alt="No Limits On Trading Style"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e27165fb9ea5717714fc21d0381a466355cffd0d1802495fa5cce4feb2e5e2ed?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-cover absolute w-full h-full"
              />
              <div className="relative h-full flex overflow-hidden flex-wrap rounded-2xl min-h-[440px]">
                <div className="flex flex-col p-8 min-w-[240px] w-[400px] max-md:px-5 max-md:p-4">
                  <div className="flex flex-col w-full">
                    <div className="text-4xl font-matter tracking-[-0.72px] font-medium leading-10 text-[#FCFAFF]">
                      No Limits On Trading Style!
                    </div>
                    <div className="mt-4 font-matter font-normal text-lg leading-7 text-white">
                      Trade your own trading strategy, hold trades overnight or the weekend, and trade the news with no limits or
                      restrictions.
                    </div>
                  </div>
                  <div className="flex gap-4 items-center self-start mt-4">
                    <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
                      <img
                        alt="Icon 1"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1139b3e63f37f054821ee69ec2c009cf058430c4d67f770d6df604bffd9d67c2?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain w-5 h-5"
                      />
                    </div>
                    <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
                      <img
                        alt="Icon 2"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d9e7c4caa4bdbe7d1d6e5d50583fdd6999119c9baa55d9f72757a6453658967?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain w-5 h-5"
                      />
                    </div>
                    <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 bg-gray-50 border border-gray-100 border-solid rounded-[100px]">
                      <img
                        alt="Icon 3"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/036a23e90e24db5713549a451755fc48c308631a1df76c699f4b8efe3bc836e5?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain w-5 h-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end flex-1 shrink pt-52 basis-16 min-w-[240px] max-md:pt-5">
                  <div className="relative flex flex-col pt-2.5 w-full rounded-3xl shadow-[0px_30px_61px_rgba(30,63,94,0.04)]">
                    <img
                      alt="Img"
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&width=2000 2000w"
                      sizes="(max-width: 320px) 75vw, (max-width: 480px) 50vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 400px"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4121e5d233398edf7dbc44959c53e244bdcd0722fbd85d5a7cb31fe7a3478893?apiKey=227fffdadf2841c0827fed858fc04b84&"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center min-w-[240px] w-2/5 max-md:max-w-full max-md:w-full">
            <div className="group flex overflow-hidden flex-col bg-[#141518] hover:bg-white rounded-3xl border-[#3B3C3D] max-md:max-w-full max-md:w-full shadow-custom-spread hover:shadow-[0_0_10px_3px_rgba(110,253,235,0.3)] transition-all border-2 border-transparent hover:border-[#6EFDEB]">
              <div className="relative flex flex-col w-full h-[320px] max-md:max-w-full">
                <img alt="img" loading="lazy" src={vectorLines} className="object-contain absolute inset-0 max-md:hidden" />
                <div className="relative flex overflow-hidden flex-wrap rounded-2xl min-h-[320px]">
                  <div className="flex flex-col p-8 min-w-[240px] w-[400px] max-md:px-5 max-md:p-4">
                    <div className="flex flex-col w-full">
                      <div className="text-4xl font-matter tracking-[-0.72px] group-hover:text-black font-medium leading-10 text-[#FCFAFF]">
                        Bi-weekly <br /> Payout
                      </div>
                      <div className="mt-4 font-matter font-normal text-lg leading-7 group-hover:text-black text-white">
                        Get paid within 24 hours.
                      </div>
                    </div>
                  </div>
                  <div className="relative flex w-full">
                    <div className="absolute bottom-0 right-0 w-[70%] md:w-[50%] rounded-3xl shadow-[0px_30px_61px_rgba(30,63,94,0.04)]">
                      <img alt="Img" src={profiltSplit} className="object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col mt-4 w-full bg-[#6EFDEB] hover:bg-white rounded-3xl max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col w-full min-h-[120px] stroke-[0.5px] stroke-white max-md:max-w-full">
                <img
                  alt="img"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a479f4fbd1db4887ab00051233e8808849f1d63efa881b1aa5e2602adea0ab85?apiKey=227fffdadf2841c0827fed858fc04b84&"
                  className="object-cover absolute inset-0 w-full h-full size-full"
                />
                <div className="flex overflow-hidden h-full relative gap-4 items-center py-6 pr-8 pl-6 rounded-3xl max-md:px-5 max-md:flex-col">
                  <div className="self-stretch my-auto text-6xl font-bold tracking-[-1.2px] font-matter text-[#1C1D20]">100%</div>
                  <div className="flex-1 font-matter shrink my-auto text-xl font-medium leading-8 basis-0 text-[#141518]">
                    Refundable on your first Profit Split!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center self-start min-w-[240px] max-md:max-w-full">
            <div className="group flex overflow-hidden flex-col self-stretch my-auto rounded-3xl border border-solid bg-[#1C1D20] hover:bg-white border-neutral-700 min-w-[240px] w-[254px] max-md:w-full  shadow-custom-spread hover:shadow-[0_0_20px_5px_rgba(110,253,235,0.3)] transition-all duration-300">
              <div className="flex relative flex-col w-full">
                <img
                  alt="img"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b0a65bc59303837d649c60d817d69ff7557c2a42ebe9786a4b894b6e966686?apiKey=227fffdadf2841c0827fed858fc04b84&"
                  className="object-cover absolute inset-0 size-full max-md:hidden"
                />
                <div className="flex overflow-hidden relative flex-col px-6 pt-6 pb-20 w-full rounded-2xl min-h-[328px] max-md:px-5 max-md:pb-6 max-md:min-h-[auto]">
                  <img
                    alt="img"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf227d9b050568fb08f841582149f79dc8b1c02c94b42f36866159b07ad583b5?apiKey=227fffdadf2841c0827fed858fc04b84&"
                    className="object-contain w-12 aspect-square transition-colors duration-300 group-hover:invert"
                  />
                  <div className="mt-4 font-matter text-xl font-medium text-[#FCFAFF] transition-colors duration-300 group-hover:text-black">
                    Instant Chat Support
                  </div>
                  <div className="mt-4 font-matter font-normal text-lg leading-7 text-white transition-colors duration-300 group-hover:text-black">
                    24/7 to answer your questions at any time.
                  </div>
                  <div className="flex gap-4 items-start self-start mt-4">
                    <div className="flex overflow-hidden gap-2 justify-center items-center px-3.5 w-12 h-12 bg-white transition-colors duration-300 rounded-[40px] group-hover:bg-black">
                      <img
                        alt="img"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1436279c773e977142e605be5bd7e9fc949caf3ce63d6c410c9fd2897ca4d0?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain self-stretch my-auto w-5 aspect-square transition-colors duration-300 group-hover:invert"
                      />
                    </div>
                    <div className="flex overflow-hidden gap-2 justify-center items-center px-3.5 w-12 h-12 bg-white transition-colors duration-300 rounded-[40px] group-hover:bg-black">
                      <img
                        alt="img"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded60b67295b82f9cb3a136148e144db104179b7fb812d6087a0c3e7721d7f4e?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain self-stretch my-auto w-5 aspect-square transition-colors duration-300 group-hover:invert"
                      />
                    </div>
                    <div className="flex overflow-hidden gap-2 justify-center items-center px-3.5 w-12 h-12 bg-white transition-colors duration-300 rounded-[40px] group-hover:bg-black">
                      <img
                        alt="img"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb54d0061b93cf7f683d7a8377179f5527756a8e87cb55c4ea7e051e4387e16a?apiKey=227fffdadf2841c0827fed858fc04b84&"
                        className="object-contain self-stretch my-auto w-5 aspect-square transition-colors duration-300 group-hover:invert"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex overflow-hidden flex-col self-stretch my-auto bg-indigo-600 hover:bg-[#0083FF] rounded-3xl border border-solid border-neutral-700 min-w-[240px] w-[254px] max-md:w-full  shadow-custom-spread hover:shadow-[0_0_10px_5px_rgba(110,253,235,0.3)] transition-all hover:border-2 hover:border-[#6EFDEB]">
              <div className="flex overflow-hidden relative flex-col w-full stroke-[0.5px] stroke-white">
                <img
                  alt="img"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee5ace844748ed9a8c5d06859a4ed484a5e5d0edf2f1094ed895863ba600a7a?apiKey=227fffdadf2841c0827fed858fc04b84&"
                  className="object-cover absolute inset-0 size-full max-md:hidden"
                />
                <div className="flex overflow-hidden relative flex-col px-6 pt-6 pb-20 rounded-2xl min-h-[328px] max-md:px-5 max-md:pb-6 max-md:min-h-[auto]">
                  <img
                    alt="img"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf227d9b050568fb08f841582149f79dc8b1c02c94b42f36866159b07ad583b5?apiKey=227fffdadf2841c0827fed858fc04b84&"
                    className="object-contain w-12 aspect-square"
                  />
                  <div className="mt-4 font-matter text-xl font-medium text-[#FCFAFF]">No Risk to you</div>
                  <div className="mt-4 font-matter font-normal text-lg leading-7 text-[#D0D5DD]">
                    The fee is refunded to you with the first Profit Split when you become a Pro Funded Trader.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden flex-col flex-1 rounded-3xl border border-solid border-[#3B3C3D] min-w-[240px] max-md:max-w-full shadow-custom-spread hover:shadow-[0_0_10px_3px_rgba(110,253,235,0.3)] transition-all hover:border-2 hover:border-[#6EFDEB]">
            <div className="relative flex overflow-hidden flex-wrap rounded-2xl bg-[#1C1D20] min-h-[328px]">
              <div className="absolute flex flex-col p-6 min-w-[240px] w-[386px] max-md:px-5 max-md:w-fit">
                <div className="text-4xl font-matter font-medium tracking-[-0.72px] leading-10 text-[#FCFAFF]">
                  Trade Stocks, CFDs, Cryptocurrency, Commodities and MORE!
                </div>
                <button
                  onClick={() => {
                    navigate('/#pricing');
                  }}
                  type="button"
                  className="overflow-hidden cursor-pointer font-matter gap-2 self-start px-5 py-3 mt-4 text-base font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
                >
                  Get funded
                </button>
              </div>
              <img
                alt="img"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/381d68c05ec3417ce977e8efbb307d13bb743e1af5f6a47366b5f47102a9ddc7?apiKey=227fffdadf2841c0827fed858fc04b84&"
                className="object-contain flex-1 h-[328px] max-md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableFirm;
