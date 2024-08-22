import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
// import logo from '../images/Pro Traders Fund Best Forex Broker Logo.png';
import logo from '../images/PTF LOGO.svg';
import CustomButton from '../components/CustomButton';
import mobileMenu from '../images/icons/menu-01.svg';
import moon from '../images/moon.svg';
import sun from '../images/sun.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { getProfile, logout } from '../api';
import { isUserAuthenticated, showCustomError, showCustomSuccess } from '../utils/utils';
import Notification from '../components/Notification';
import { useStore } from '../store';
import Translator from '../components/Translator';

export default function Navbar2() {
  const { userData, setUserData } = useStore();
  const [activeLink, setActiveLink] = useState('');
  const { pathname, location } = useLocation();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    <a
      href="https://www.trustpilot.com/review/protradersfund.com?stars=5"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 31 29" fill="none">
        <path
          d="M30.9452 11.0649H19.3192L15.7282 0L12.126 11.0649L0.5 11.0536L9.91523 17.899L6.31298 28.9527L15.7282 22.1185L25.1322 28.9527L21.5412 17.899L30.9452 11.0649Z"
          fill="#00B67A"
        />
      </svg>{' '}
      TrustPilot Review
    </a>,
    <a href="https://discord.gg/a3eZwyQtV6" target="_blank" rel="noreferrer" className="flex items-center gap-2">
      {' '}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 16" fill="none">
        <g clip-path="url(#clip0_1165_7945)">
          <path
            d="M17.4947 1.33998C16.1578 0.713993 14.7283 0.259029 13.2339 0C13.0503 0.332088 12.8359 0.778747 12.6881 1.13408C11.0995 0.89498 9.5254 0.89498 7.966 1.13408C7.8182 0.778747 7.59887 0.332088 7.41373 0C5.91765 0.259029 4.48656 0.715653 3.14969 1.3433C0.45319 5.42134 -0.277787 9.39813 0.0877017 13.3184C1.87616 14.6551 3.60939 15.467 5.31337 15.9983C5.73409 15.4189 6.10933 14.8029 6.43259 14.1536C5.81694 13.9195 5.22729 13.6306 4.67011 13.2951C4.81793 13.1856 4.96251 13.071 5.10221 12.9531C8.50047 14.5438 12.1927 14.5438 15.5503 12.9531C15.6916 13.071 15.8362 13.1856 15.9824 13.2951C15.4236 13.6322 14.8323 13.9211 14.2167 14.1553C14.5399 14.8029 14.9135 15.4205 15.3359 16C17.0415 15.4687 18.7763 14.6567 20.5648 13.3184C20.9937 8.7738 19.8322 4.83354 17.4947 1.33998ZM6.89553 10.9075C5.87542 10.9075 5.03885 9.95433 5.03885 8.79373C5.03885 7.63307 5.85755 6.67833 6.89553 6.67833C7.93353 6.67833 8.77007 7.6314 8.7522 8.79373C8.75387 9.95433 7.93353 10.9075 6.89553 10.9075ZM13.757 10.9075C12.7369 10.9075 11.9003 9.95433 11.9003 8.79373C11.9003 7.63307 12.719 6.67833 13.757 6.67833C14.7949 6.67833 15.6315 7.6314 15.6137 8.79373C15.6137 9.95433 14.7949 10.9075 13.757 10.9075Z"
            fill="#5865F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1165_7945">
            <rect width="20.6667" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Discord
    </a>,
    <a
      href="https://www.instagram.com/protradersfund?igsh=MTF0YThxMjFkN3MyYQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_1165_7948)">
          <path
            d="M4.05653 15.9434C3.10516 15.9001 2.58834 15.7418 2.24459 15.6077C1.78911 15.4303 1.46438 15.2192 1.12253 14.8778C0.780687 14.5363 0.569112 14.2115 0.392721 13.756C0.258644 13.4122 0.10032 12.8953 0.0570538 11.9438C0.00950897 10.9152 0 10.6066 0 8.00071C0 5.39483 0.0104599 5.08669 0.0565784 4.05718C0.0998442 3.10566 0.25912 2.58971 0.392245 2.24496C0.569588 1.7894 0.781162 1.46462 1.12206 1.12224C1.46343 0.780813 1.78816 0.568728 2.24412 0.392308C2.58787 0.25821 3.10468 0.0998603 4.05605 0.0565875C5.08492 0.00951051 5.39397 0 7.99847 0C10.6039 0 10.912 0.0104616 11.9414 0.0565875C12.8927 0.0998603 13.4086 0.259161 13.7533 0.392308C14.2088 0.568728 14.5335 0.780813 14.8754 1.12224C15.2172 1.46367 15.4278 1.78893 15.6052 2.24448C15.7393 2.58828 15.8976 3.10518 15.9408 4.05671C15.9879 5.08622 15.9974 5.39436 15.9974 8.00024C15.9974 10.6052 15.9879 10.9143 15.9408 11.9438C15.8976 12.8953 15.7383 13.4122 15.6052 13.756C15.4278 14.2115 15.2167 14.5363 14.8754 14.8778C14.534 15.2192 14.2088 15.4303 13.7533 15.6077C13.4096 15.7418 12.8927 15.9001 11.9414 15.9434C10.913 15.9905 10.6039 16 7.99847 16C5.39397 16 5.08492 15.991 4.05653 15.9434Z"
            fill="url(#paint0_radial_1165_7948)"
          />
          <path
            d="M4.05653 15.9434C3.10516 15.9001 2.58834 15.7418 2.24459 15.6077C1.78911 15.4303 1.46438 15.2192 1.12253 14.8778C0.780687 14.5363 0.569112 14.2115 0.392721 13.756C0.258644 13.4122 0.10032 12.8953 0.0570538 11.9438C0.00950897 10.9152 0 10.6066 0 8.00071C0 5.39483 0.0104599 5.08669 0.0565784 4.05718C0.0998442 3.10566 0.25912 2.58971 0.392245 2.24496C0.569588 1.7894 0.781162 1.46462 1.12206 1.12224C1.46343 0.780813 1.78816 0.568728 2.24412 0.392308C2.58787 0.25821 3.10468 0.0998603 4.05605 0.0565875C5.08492 0.00951051 5.39397 0 7.99847 0C10.6039 0 10.912 0.0104616 11.9414 0.0565875C12.8927 0.0998603 13.4086 0.259161 13.7533 0.392308C14.2088 0.568728 14.5335 0.780813 14.8754 1.12224C15.2172 1.46367 15.4278 1.78893 15.6052 2.24448C15.7393 2.58828 15.8976 3.10518 15.9408 4.05671C15.9879 5.08622 15.9974 5.39436 15.9974 8.00024C15.9974 10.6052 15.9879 10.9143 15.9408 11.9438C15.8976 12.8953 15.7383 13.4122 15.6052 13.756C15.4278 14.2115 15.2167 14.5363 14.8754 14.8778C14.534 15.2192 14.2088 15.4303 13.7533 15.6077C13.4096 15.7418 12.8927 15.9001 11.9414 15.9434C10.913 15.9905 10.6039 16 7.99847 16C5.39397 16 5.08492 15.991 4.05653 15.9434Z"
            fill="url(#paint1_radial_1165_7948)"
          />
          <path
            d="M6.03466 8.03409C6.03466 6.93986 6.92132 6.05258 8.01538 6.05258C9.10943 6.05258 9.99657 6.93986 9.99657 8.03409C9.99657 9.12832 9.10943 10.0156 8.01538 10.0156C6.92132 10.0156 6.03466 9.12832 6.03466 8.03409ZM4.96366 8.03409C4.96366 9.71983 6.32991 11.0863 8.01538 11.0863C9.70084 11.0863 11.0671 9.71983 11.0671 8.03409C11.0671 6.34836 9.70084 4.98189 8.01538 4.98189C6.32991 4.98189 4.96371 6.34826 4.96371 8.03409M10.4748 4.86087C10.4747 5.00194 10.5165 5.13986 10.5948 5.2572C10.6731 5.37453 10.7845 5.46599 10.9148 5.52003C11.0451 5.57407 11.1884 5.58826 11.3268 5.56079C11.4652 5.53332 11.5923 5.46544 11.692 5.36572C11.7918 5.26601 11.8598 5.13894 11.8874 5.00059C11.9149 4.86223 11.9009 4.71881 11.8469 4.58845C11.793 4.45809 11.7017 4.34666 11.5844 4.26823C11.4672 4.18981 11.3293 4.14792 11.1882 4.14786H11.1879C10.9989 4.14795 10.8176 4.22309 10.6839 4.35678C10.5501 4.49046 10.4749 4.67177 10.4748 4.86087ZM5.61436 12.8725C5.03493 12.8461 4.71999 12.7495 4.5107 12.668C4.23323 12.56 4.03525 12.4313 3.8271 12.2234C3.61895 12.0155 3.4901 11.8177 3.38255 11.5401C3.30097 11.3309 3.20445 11.0158 3.17811 10.4363C3.1493 9.80975 3.14355 9.62154 3.14355 8.03419C3.14355 6.44684 3.14978 6.25915 3.17811 5.63207C3.2045 5.05255 3.30173 4.73808 3.38255 4.52824C3.49058 4.25072 3.61923 4.05271 3.8271 3.84453C4.03497 3.63634 4.23275 3.50747 4.5107 3.39991C4.7199 3.31831 5.03493 3.22178 5.61436 3.19543C6.24081 3.16662 6.42899 3.16086 8.01538 3.16086C9.60176 3.16086 9.79013 3.167 10.4171 3.19553C10.9965 3.22192 11.3109 3.31916 11.5208 3.4C11.7982 3.50757 11.9962 3.63672 12.2044 3.84462C12.4125 4.05252 12.5409 4.25081 12.6489 4.52833C12.7305 4.73756 12.827 5.05264 12.8534 5.63217C12.8822 6.25924 12.8879 6.44693 12.8879 8.03428C12.8879 9.62163 12.8822 9.80932 12.8534 10.4364C12.827 11.0159 12.73 11.3309 12.6489 11.5402C12.5409 11.8178 12.4122 12.0158 12.2044 12.2235C11.9965 12.4312 11.7982 12.56 11.5208 12.6681C11.3116 12.7497 10.9965 12.8462 10.4171 12.8726C9.79065 12.9014 9.60247 12.9071 8.01538 12.9071C6.42828 12.9071 6.24062 12.9014 5.61436 12.8726M5.56515 2.12602C4.93247 2.15484 4.50014 2.25518 4.12259 2.40211C3.73182 2.55385 3.40057 2.75743 3.0698 3.08773C2.73903 3.41803 2.53602 3.74937 2.3843 4.14068C2.23739 4.51853 2.13707 4.95069 2.10826 5.58347C2.07897 6.21725 2.07227 6.41988 2.07227 8.03409C2.07227 9.64831 2.07897 9.85093 2.10826 10.4847C2.13707 11.1175 2.23739 11.5497 2.3843 11.9275C2.53602 12.3183 2.73908 12.6503 3.0698 12.9805C3.40053 13.3106 3.73134 13.5139 4.12259 13.6661C4.50086 13.813 4.93247 13.9133 5.56515 13.9422C6.19916 13.971 6.40142 13.9782 8.01538 13.9782C9.62933 13.9782 9.83192 13.9715 10.4656 13.9422C11.0983 13.9133 11.5304 13.813 11.9082 13.6661C12.2989 13.5139 12.6302 13.3108 12.9609 12.9805C13.2917 12.6502 13.4943 12.3183 13.6464 11.9275C13.7934 11.5497 13.8942 11.1175 13.9225 10.4847C13.9513 9.85046 13.958 9.64831 13.958 8.03409C13.958 6.41988 13.9513 6.21725 13.9225 5.58347C13.8937 4.95064 13.7934 4.5183 13.6464 4.14068C13.4943 3.74985 13.2912 3.41855 12.9609 3.08773C12.6307 2.7569 12.2989 2.55385 11.9086 2.40211C11.5304 2.25518 11.0983 2.15437 10.4661 2.12602C9.8323 2.09706 9.62981 2.09003 8.01609 2.09003C6.40237 2.09003 6.1994 2.09673 5.56539 2.12602"
            fill="white"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_1165_7948"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1.03534 15.6495) scale(20.3108 20.3141)"
          >
            <stop offset="0.09" stop-color="#FA8F21" />
            <stop offset="0.78" stop-color="#D82D7E" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1165_7948"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.0809 15.1357) scale(17.8737 17.8766)"
          >
            <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
            <stop offset="1" stop-color="#8C3AAA" />
          </radialGradient>
          <clipPath id="clip0_1165_7948">
            <rect width="15.9974" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Instagram
    </a>,
    <a
      href="https://x.com/protradersfund?s=21&t=C6aya3AvPEjSy5-BrM-UmQ"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_1165_7951)">
          <path
            d="M9.52064 6.77143L15.476 0H14.0648L8.89373 5.87954L4.76361 0H0L6.24555 8.8909L0 15.9918H1.41132L6.87211 9.78279L11.2338 15.9918H15.9974L9.52029 6.77143H9.52064ZM7.58764 8.96923L6.95484 8.0839L1.91984 1.0392H4.08754L8.15085 6.7245L8.78365 7.60983L14.0655 14.9998H11.8978L7.58764 8.96957V8.96923Z"
            fill="#FCFCFC"
          />
        </g>
        <defs>
          <clipPath id="clip0_1165_7951">
            <rect width="15.9974" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Twitter / X
    </a>
  ];

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollPosition = useScrollPosition();

  const [active, setActive] = useState(false);

  const executeLogout = async () => {
    try {
      const response = await logout();
      if (response) {
        showCustomSuccess(setNotification, response.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    } finally {
      localStorage.clear();
      navigate('/login');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (isUserAuthenticated() && !userData.email) {
          const response = await getProfile();
          setUserData(response);
        }
      } catch (error) {
        console.log('Error', error);
      }
    })();
  }, [userData]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['getfunded']; // Add more section IDs as needed
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section);
            break;
          } else {
            setActiveLink('');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <nav className={classNames(scrollPosition > 0 && 'scroll-active')} id="navbar">
        <div className="flex items-center justify-between gap-5 lg:gap-12">
          <Link to="/">
            <img src={logo} alt="Pro Trader Fund icon" id="logo" />
          </Link>
          <div className="hidden gap-4 lg:flex md:items-center lg:gap-8 ">
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>

            <Link to="/#pricing" className={pathname === '/pricing' ? 'active' : ''}>
              Pricing
            </Link>

            <Link to="/affiliate" className={pathname === '/affiliate' ? 'active' : ''}>
              Affiliate program
            </Link>

            <Link to="/loyality" className={pathname === '/loyality' ? 'active' : ''}>
              Loyalty program
            </Link>

            <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact us
            </Link>

            <Link to="/faq" className={pathname === '/faq' ? 'active' : ''}>
              Faqs
            </Link>

            <div
              onClick={toggleSwitch}
              className={`relative inline-flex w-[50px] h-8 items-center rounded-full transition-colors duration-200 ${
                enabled ? 'bg-[#EAECF0]' : 'bg-[#E8EBEE]'
              }`}
            >
              <span
                className={`inline-block flex items-center justify-center cursor-pointer w-[26px] h-[26px] w-[26px] h-[26px] shadow-[0px_2px_4px_0px_#0000003D] transform rounded-full ${enabled ? 'bg-[#101828]' : 'bg-white'} transition-transform duration-200 ${
                  enabled ? 'translate-x-5' : 'translate-x-1'
                }`}
              >
                <img alt="mode" src={enabled ? moon : sun} />
              </span>
            </div>
          </div>
        </div>
        {/* {isMobile && (<div className="block">
          <div key={'mobile-translator'} className='h-10 mobile'><Translator /></div>
        </div>)} */}

        <div className="items-center hidden gap-2 text-white lg:flex lg:gap-2">
          {!isMobile && (
            <div key={'web-translator'} className="block h-10">
              <Translator />
            </div>
          )}
          {isUserAuthenticated() ? (
            <>
              {userData?.firstName && userData?.lastName && (
                <Link to="dashboard" className={'underline'}>
                  {userData?.firstName + ' ' + userData?.lastName}
                </Link>
              )}
              <button
                type="button"
                onClick={() => {
                  executeLogout();
                }}
              >
                Logout
              </button>
              <CustomButton
                text="Get funded"
                onClick={() => navigate('/#pricing')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#6EFDEB] text-[#141518] w-[125px] h-[48px] text-base font-semibold leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />
            </>
          ) : (
            <>
              <CustomButton
                text="Log in"
                onClick={() => navigate('/login')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#3B3C3D] text-[#FFFFFF] w-[85px] h-[48px] text-base font-medium leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />

              <CustomButton
                text="Get funded"
                onClick={() => navigate('/#pricing')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#6EFDEB] text-[#141518] w-[125px] h-[48px] text-base font-semibold leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />
            </>
          )}
        </div>
        
        <div className="z-50 block cursor-pointer lg:hidden" onClick={() => setActive(!active)}>
        <a href="#main">{!active ? <img src={mobileMenu} alt="" /> : <AiOutlineClose className="text-white h-7 w-7"></AiOutlineClose>}</a>
      </div>
        
      </nav>

      {active ? (
        <div
          className={`mobile-nav transition-all duration-500 ease-in-out delay-150 lg:hidden z-40 absolute w-full h-[100vh] bg-mainTheme text-white flex flex-col pt-8 items-center gap-[32px] ${
            active ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>

          <Link to="/pricing" className={pathname === '/pricing' ? 'active' : ''}>
            Pricing
          </Link>

          <Link to="/affiliate" className={pathname === '/affiliate' ? 'active' : ''}>
            Affiliate program
          </Link>

          <Link to="/loyality" className={pathname === '/loyality' ? 'active' : ''}>
            Loyalty program
          </Link>

          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact us
          </Link>

          <Link to="/faq" className={pathname === '/faq' ? 'active' : ''}>
            Faqs
          </Link>

          {isUserAuthenticated() ? (
            <>
              <Link to="/dashboard" className={'underline'}>
                {userData?.firstName + ' ' + userData?.lastName}
              </Link>
              <button
                type="button"
                onClick={() => {
                  executeLogout();
                }}
              >
                Logout
              </button>
              <CustomButton
                text="Get funded"
                onClick={() => navigate('/#pricing')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#6EFDEB] text-[#141518] w-[125px] h-[48px] text-base font-semibold leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />
              <Translator />
            </>
          ) : (
            <>
              <CustomButton
                text="Log in"
                onClick={() => navigate('/login')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#3B3C3D] text-[#FFFFFF] w-[85px] h-[48px] text-base font-medium leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />

              <CustomButton
                text="Get funded"
                onClick={() => navigate('/#pricing')}
                className="shadow-[0px_1px_2px_0px_#1018280D] bg-[#6EFDEB] text-[#141518] w-[125px] h-[48px] text-base font-semibold leading-6 rounded-[30px] font-matter hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
              />
            </>
          )}
        </div>
      ) : null}
    </>
  );
}
