import Navbar from './SalesNavbar';
import DefaultTabs from './Tabs';
import { useEffect, useState } from 'react';
import LefArrow from '../../images/arrow-left.png';
import RightArrow from '../../images/arrow-right.png';
import { motion, scroll } from 'framer-motion';

export default function SalesVideo() {
  const [showData, setShowData] = useState(false);
  const videoEndedCallback = () => setShowData(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowData(true);
    }, 10000);

    return () => clearTimeout(timer);
  });

  return (
    <div id="main">
      <Navbar></Navbar>
      <main className="bg-[#141518] overflow-hidden text-white main">
        <section className="h-full flex flex-col items-center text-center bg-contain bg-top bg-no-repeat pt-[54px]">
          <div className="pb-10 space-y-2">
            <h1 className="font-bold md:text-[46px] text-[30px]">
              <span className={'link-color'}>Watch This Video</span> And <span className={'link-color'}>start your journey</span>
            </h1>
            <h1 className="font-bold md:text-[46px] text-[30px]">as a Pro Funded Trader</h1>
            <h6 className={'mt-0 pb-4'}>Take this 1 min quiz below find to out if you're an eligible trader!</h6>
            <video width="822" height="500" controls autoPlay="true" onEnded={() => videoEndedCallback()}>
              <source
                src="https://ptfmedia.blob.core.windows.net/asset-1c7221d9-a52c-4648-84be-1bd5d50e24cf/QUIZ%20Pre%20Qualification%20Confirmat_1280x720_AACAudio_818.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        {showData && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid place-items-center"
            >
              <div className={'arrow-wrapper hidden md:block'}>
                <img src={LefArrow} className="logo floatLeft" alt="Logo" />
                <img src={RightArrow} className="logo floatRight" alt="Logo" />
              </div>
              <h1 className={'link-color text-2xl mb-2'}>We are ready to have you on our team!</h1>
              <h6>
                You know it, and we know it as well, that <span className={'bg-[#6EFDEB] text-[#141518] px-1'}>YOU HAVE WHAT IT TAKES</span>
                , to become a pro funded
              </h6>
              <h6 className={'mb-4'}>trader. Not sure how our points work? Well, the steps are simple…. </h6>
              <h6>
                We're so confident that once you select a challenge account and pass (which you will),{' '}
                <span className={'bg-[#6EFDEB] text-[#141518] px-1'}>we'll provide</span>
              </h6>
              <h6 className={'mb-4'}>
                <span className={'bg-[#6EFDEB] text-[#141518] px-1'}>up to 150% refund to you!</span>
              </h6>
              <h6 className={'mb-4'}>
                Then <span className={'bg-[#6EFDEB] text-[#141518] px-1'}>we focus on winning together</span>.Check out the information
                below:
              </h6>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="grid place-items-center"
            >
              <DefaultTabs />
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
