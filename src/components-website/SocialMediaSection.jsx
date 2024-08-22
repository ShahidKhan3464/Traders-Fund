import check from '../images/icons/check-circle.svg';
import instagram from '../images/events/instagram.svg';
import discord from '../images/events/discord.svg';
import twitter from '../images/events/twitter.svg';

const SocialMediaSection = () => {
  return (
    <section className="flex flex-col px-4 items-center justify-start text-center py-[54px] md:space-y-24 space-y-12">
      <div className="text-white">
        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] mb-4">About Pro Traders Fund</p>
        <h1 className="md:text-[56px] text-white text-[30px] leading-[1.2]">Best Funded Forex Trading Firm</h1>
        <p className="text-[24px] font-light max-w-[921px] mt-4  leading-[1.1]">
          Join Pro Traders Fund, the top prop trading firm offering the highest payouts and instant funding. Excel with our best funded
          trading programs and join a community of successful traders.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 mt-6 sm:gap-8 sm:flex-row">
          <div className="flex gap-2">
            <img src={check} alt="checkmark"></img>Risk Free
          </div>
          <div className="flex gap-2">
            <img src={check} alt="checkmark"></img>Huge Profits
          </div>
          <div className="flex gap-2">
            <img src={check} alt="checkmark"></img>Easy Processing
          </div>
        </div>
      </div>
      <div className="space-y-8 lg:w-2/3">
        <div className="flex flex-col items-center justify-center w-full gap-6 px-6 mx-auto md:flex-row">
          <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme">
            <img src={discord} alt="" />

            <div className="space-y-4 text-center text-white">
              <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">Discord</p>
              <p className="font-light">Join Our Discord Community</p>
            </div>
            <a href="https://discord.gg/a3eZwyQtV6" target="_blank" rel="noreferrer">
              <button className="bg-[#00A4E6] text-sm text-white flex items-center gap-1 px-4 rounded-lg h-[50px]">
                Join
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="figicon/solid/arrow01">
                    <path
                      id="ideateicons"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme ">
            <img src={instagram} alt="" />
            <div className="space-y-4 text-center text-white">
              <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">Instagram</p>
              <p className="font-light">Follow Us On Instagram</p>
            </div>
            <a href="https://www.instagram.com/protradersfund?igsh=MTF0YThxMjFkN3MyYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <button className="bg-[#00A4E6] text-sm text-white flex items-center gap-1 px-4 rounded-lg h-[50px]">
                Follow
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="figicon/solid/arrow01">
                    <path
                      id="ideateicons"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme ">
            <img src={twitter} alt="" />
            <div className="space-y-4 text-center text-white">
              <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">Twitter/X</p>
              <p className="font-light">Follow Us On Twitter</p>
            </div>
            <a href="https://x.com/protradersfund?s=21&t=C6aya3AvPEjSy5-BrM-UmQ" target="_blank" rel="noreferrer">
              <button className="bg-[#00A4E6] text-sm text-white flex items-center gap-1 px-4 rounded-lg h-[50px]">
                Follow
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="figicon/solid/arrow01">
                    <path
                      id="ideateicons"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
