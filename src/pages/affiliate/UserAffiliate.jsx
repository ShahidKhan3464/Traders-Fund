import Navbar from '../../components-website/Navbar2';
import Footer from '../../components-website/FooterV2';
import people from '../../images/affiliateContents.png';
import water from '../../images/icons/water.svg';
import lineup from '../../images/icons/Line 01 Up.svg';
import dollar from '../../images/icons/Coin Dollar.svg';
import heart from '../../images/icons/Heart.svg';
import discount from '../../images/icons/Discount.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isUserAuthenticated } from '../../utils/utils';
import AffiliateButton from '../../layout/AffiliateButton';
import BecomeOurPartner from '../../layout/BecomeOurPartner';
import DocumentMeta from 'react-document-meta';
import playicon from '../../images/icons/Play cr-fr.svg';
import cardimg from '../../images/affiliatemoneyicon.svg';
import icon1 from '../../images/affiliate/Featured icon.svg';
import icon2 from '../../images/affiliate/Featured icon-1.svg';
import icon3 from '../../images/affiliate/Featured icon-2.svg';
import icon4 from '../../images/affiliate/Featured icon-3.svg';
import icon5 from '../../images/affiliate/Featured icon5.svg';
import icon6 from '../../images/affiliate/Featured icon6.svg';
import icon7 from '../../images/affiliate/Featured icon7.svg';
import tier2 from '../../images/affiliate/tier2.svg';
import AffiliateFaq from '../../components-website/AffiliateFaq';
import TrustBox from '../../components-website/TrustBox';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';  

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function Affiliate() {
  const meta = {
    title: 'Best Trading Affiliate Programs | Pro Traders Fund',
    description:
      'Pro Trading Firm offers the best trading affiliate programs, with high commissions and a variety of marketing tools and resources to help you succeed.',
    canonical: 'https://app.protradersfund.com/affiliate',
    meta: {
      charset: 'utf-8',
      name: {
        keywords:
          'Trading affiliate programs, trading platform affiliate programs, best trading affiliate programs, stock trading affiliate programs'
      }
    }
  };

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.removeItem('redirect_to');
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocumentMeta {...meta}>
      <Navbar></Navbar>
      <main className="bg-[#141518] overflow-hidden">
        <section className="flex flex-col items-center justify-start text-center bg-main bg-top bg-no-repeat py-[54px] md:space-y-24 space-y-12">
          <div className="px-4 text-white ">
            <div className="pb-10 space-y-4">
              <h1 className="md:text-[60px] text-[30px] leading-[1.2]">
                Join Pro Traders Fund <br /> The Best Forex Trading Affiliate Program{' '}
              </h1>
              <p>
                Earn unmatched commissions with Pro Traders Fund, The leading forex trading affiliate program. <br /> Unlock exclusive
                rewards and join our network of top forex affiliates to maximize your earnings today!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 text-base sm:gap-10">
              <div className="flex flex-col items-center gap-8 sm:gap-8 sm:flex-row">
                <BecomeOurPartner />

                <div className="flex gap-2 cursor-pointer" onClick={handleClickOpen}>
                  <img src={playicon} alt="play icon"></img>How it works
                </div>
              </div>
              <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme => theme.palette.grey[500],
                    height: 30,
                    width: 30
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <Typography sx={{ py: 2, lineHeight: 1, marginRight: 8 }} gutterBottom>
                    <span className="text-xs sm:text-base">
                      Watch our short video to discover how easy and rewarding it is to join the Pro Traders Fund Affiliate Program.
                    </span>
                  </Typography>
                  <div className="relative h-auto ">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe
                        src="https://player.vimeo.com/video/919147351?h=7120c61e57&amp;badge=0&amp;autoplay=1&autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        title="EARN OVER 5000 USD IN LIFETIME COMMISSIONS | AFFILIATE PAGE.mp4"
                      ></iframe>
                    </div>
                  </div>
                </DialogContent>
              </BootstrapDialog>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-24 text-base md:gap-28">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">1,200+</p>
                <p className="text-base font-light">Total Active Affiliates</p>
              </div>
              <div className="flex flex-col">
                <p className="text-3xl font-bold">$250,000+</p>
                <p className="text-base font-light">Total Affiliate Payout</p>
              </div>
              <div className="flex flex-col">
                <p className="text-3xl font-bold">$6,000+</p>
                <p className="text-base font-light">Highest Single Payout</p>
              </div>
            </div>
            <div className="mt-10">
              <svg className="w-[80%]" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1000 2" fill="none">
                <path d="M0.5 1L1216 1.00011" stroke="url(#paint0_linear_341_13802)" />
                <defs>
                  <linearGradient id="paint0_linear_341_13802" x1="0.5" y1="1" x2="1216" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3B3C3D" stop-opacity="0" />
                    <stop offset="0.496504" stop-color="#3B3C3D" />
                    <stop offset="1" stop-color="#3B3C3D" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="px-4 text-white ">
            <div className="space-y-4">
              <h2 className="md:text-[48px] text-[30px] leading-[1.1] ">
                Build Together, Win Together <br />
                Our Community, Your Success!
              </h2>
              <p>Unlock Endless Earnings: Our Two-Tier System Multiplies Your Success!</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center w-full gap-6 px-6 mx-auto md:flex-row">
          <div className="flex flex-col items-center self-stretch p-6 space-y-6 text-center rounded-md md:w-1/3 bg-secTheme">
            <img src={cardimg} alt="" />
            <div className="px-3 py-2 text-xl font-bold text-black rounded-full bg-mainColor">Tier 1</div>
            <div className="space-y-4 text-white">
              <p className="text-xl font-bold">Direct Affiliate</p>
              <p className="font-medium">
                Secure a lucrative commission of up to 20% on the first purchases and up to 10% on all subsequent purchases made by your direct referrals.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch p-6 space-y-6 text-center rounded-md md:w-1/3 bg-secTheme ">
            <img src={tier2} alt="" />
            <div className="px-3 py-2 text-xl font-bold text-black rounded-full bg-mainColor">Tier 2</div>
            <div className="space-y-4 text-white">
              <p className="text-xl font-bold">InDirect Affiliate</p>
              <p className="font-medium">
                Amplify your income by earning up to 10% from the commissions generated by sales from affiliates recruited by your referrals.
              </p>
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center justify-start text-center  py-[54px] md:mt-16  md:space-y-16 space-y-12">
          {' '}
          <div className="px-4 text-white ">
            <div className="space-y-4">
              <h1 className="md:text-[48px] text-[30px] leading-[1.1] ">Why Choose Pro Traders Fund?</h1>
              <p>Unlike other forex trading affiliate programs, Pro Traders Fund offers a unique blend of benefits that set us apart </p>
            </div>
          </div>
          {/* 4 CARDS */}
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center w-full gap-6 px-6 mx-auto md:flex-row">
              <div className="flex flex-col items-start self-stretch p-6 space-y-6 rounded-md md:w-1/3 bg-secTheme">
                <img src={icon1} alt="" />

                <div className="space-y-4 text-left text-white">
                  <p className="text-xl font-bold w-[80%] text-[28px]">Earn over USD $5000+ in Commissions Per Month</p>
                  <p className="font-light">
                    Join our affiliate program and unlock the potential to earn over $5000+ in commissions. Maximize your earnings through
                    direct referrals and their subsequent purchases. Start now!
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch p-6 space-y-6 rounded-md md:w-1/3 bg-secTheme ">
                <img src={icon2} alt="" />
                <div className="space-y-4 text-left text-white">
                  <p className="text-xl font-bold w-[80%] text-[28px]">Dedicated Affiliate Dashboard</p>
                  <p className="font-light">
                    Unlock your affiliate potential with our Dedicated Dashboard: Invite peers, track sales, monitor earnings, and view the
                    leaderboard—all in one convenient location for seamless management.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-6 px-6 mx-auto md:flex-row">
              <div className="flex flex-col items-start self-stretch p-6 space-y-6 rounded-md md:w-1/3 bg-secTheme">
                <img src={icon3} alt="" />
                <div className="space-y-4 text-left text-white">
                  <p className="text-xl font-bold w-[80%] text-[28px]">Invite your Community with just a click</p>
                  <p className="font-light">
                    Effortlessly invite your network by sharing a link, sending email invites, or uploading your CSV list to invite your
                    entire community in a one click.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch p-6 space-y-6 rounded-md md:w-1/3 bg-secTheme ">
                <img src={icon4} alt="" />
                <div className="space-y-4 text-left text-white">
                  <p className="text-xl font-bold w-[80%] text-[28px]">Extra Rewards for Top Affiliates</p>
                  <p className="font-light">
                    Our top affiliates enjoy all-expense-paid trips to global mastermind events, connecting you with leading entrepreneurs,
                    day traders, and investors worldwide. Achieve milestones and climb the ranks to receive prizes, bonuses, and public
                    recognition on our platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-start text-center  py-[54px]  md:space-y-16 space-y-12">
          {' '}
          <div className="px-4 text-white ">
            <div className="space-y-4">
              <h2 className="md:text-[48px] text-[30px] leading-[1.2] ">
                From Networking to Net Earning <br /> A Simple 3-Step Journey
              </h2>
              <p>Convert Connections to Cash with Our 3-Step Affiliate Process</p>
            </div>
          </div>
          <div className="space-y-8 lg:w-2/3">
            <div className="flex flex-col items-center justify-center w-full gap-6 px-6 mx-auto md:flex-row">
              <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme">
                <img src={icon5} alt="" />

                <div className="space-y-4 text-center text-white">
                  <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                    Join the club
                  </p>
                  <p className="font-light">
                    Start your journey by joining our Affiliate Club, opening doors to endless income possibilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme ">
                <img src={icon6} alt="" />
                <div className="space-y-4 text-center text-white">
                  <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                    Share & Invite
                  </p>
                  <p className="font-light">
                    Use your unique link or code to invite traders, expanding your network and potential earnings.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center self-stretch p-6 space-y-6 rounded-md lg:w-1/3 bg-secTheme ">
                <img src={icon7} alt="" />
                <div className="space-y-4 text-center text-white">
                  <p className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                    Earn Rewards
                  </p>
                  <p className="font-light">
                    Gain commissions from direct and indirect referrals, amplifying your income with every invite.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <a
                onClick={() => {
                  if (isUserAuthenticated()) {
                    navigate('/user-affiliate');
                  } else {
                    localStorage.setItem('redirect_to', '/user-affiliate');
                    navigate('/login');
                  }
                }}
              >
                <button
                  className={` bg-mainBlue  sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] text-white`}
                >
                  Become an Affiliate Now
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-start text-center  py-[54px]  md:space-y-16 space-y-12">
          {' '}
          <div className="px-4 text-white ">
            <div className="space-y-4">
              <h2 className="md:text-[48px] text-[30px] leading-[1.2] ">Your Path to Forex Affiliate Success</h2>
              <p>Watch our short video to discover how easy and rewarding it is to join the Pro Traders Fund Affiliate Program.</p>
            </div>
          </div>
          <div className="w-[90%] space-y-8 lg:w-2/3">
            <div className="relative h-auto ">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/919147351?h=7120c61e57&amp;badge=0&amp;&autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write;"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="EARN OVER 5000 USD IN LIFETIME COMMISSIONS | AFFILIATE PAGE.mp4"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-start text-center  py-[54px]  md:space-y-16 space-y-12">
          <div className="px-4 text-white ">
            <div className="space-y-4">
              <h2 className="md:text-[48px] text-[30px] leading-[1.2] ">Hear From Some of Our Members</h2>
              <p>
                Genuine testimonials from our network highlight the real earnings and experiences of our affiliates. <br />
                See how joining Pro Traders Fund has transformed their financial futures and can transform yours.
              </p>
            </div>
          </div>
          <div className="px-4 space-y-8 lg:w-2/3">
            <TrustBox></TrustBox>
          </div>
        </section>

        <div className=" py-[54px]">
          <section className="flex flex-col items-center h-full text-center">
            <div className="text-white md:w-[740px] px-2 space-y-2 pb-10 ">
              <h2 className="md:text-[48px] text-[30px] leading-[1.2] ">Questions and Answers</h2>
            </div>
          </section>

          <AffiliateFaq></AffiliateFaq>
          <a href="/faq">
            <p className="mt-3 text-sm text-center text-white underline underline-offset-8">See more</p>
          </a>
        </div>
        <section className="h-full flex flex-col justify-center items-center text-center py-[54px] bg-no-repeat bg-cover bg-center">
          <div className="p-12 text-white rounded-md md:p-24 bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 md:w-[70%]">
            <div className="mx-auto space-y-2">
              <h2 className="font-bold md:text-[48px] text-[30px]">Start Earning with Pro Traders Fund Now</h2>
              <p>
                Don't miss this opportunity to become part of a forex affiliate program that values your growth and success. Click below to
                sign up, access your affiliate dashboard, and start your journey to significant earnings and exclusive rewards.
              </p>
            </div>
            <div className="mt-6">
              <a
                onClick={() => {
                  if (isUserAuthenticated()) {
                    navigate('/user-affiliate');
                  } else {
                    localStorage.setItem('redirect_to', '/#pricing');
                    navigate('/login');
                  }
                }}
              >
                <button
                  className={` bg-white  sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] text-black`}
                >
                  Become and Affiliate Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </DocumentMeta>
  );
}
