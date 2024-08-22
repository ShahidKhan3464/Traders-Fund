import React, { useState, useEffect } from 'react';
import logo from '..//../images/Pro Traders Fund Best Forex Broker Logo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
// import './Navbar.css';
import { getProfile, logout } from '../../api';
import { isUserAuthenticated, showCustomError, showCustomSuccess } from '../../utils/utils';
import Notification from '../../components/Notification';
import { useStore } from '../../store';
import Translator from "../../components/Translator";

export default function Navbar2() {
  const { userData, setUserData } = useStore();
  const [activeLink, setActiveLink] = useState('');
  const { pathname, location } = useLocation();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [profileData, setProfileData] = useState(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

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

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <nav id="navbar">
        <div className="flex items-center justify-between gap-5 lg:gap-12">
          <a
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={logo} alt="Pro Trader Fund icon" id="logo" />
          </a>
          <div className="hidden gap-4 text-white md:flex lg:gap-10"></div>
        </div>
        <div className="items-center hidden gap-3 text-white md:flex lg:gap-5">
          <Translator />
          {isUserAuthenticated() ? (
            <>
              <a
                className={'underline'}
                onClick={() => {
                  navigate('/dashboard');
                }}
              >
                {userData?.firstName}
                {userData?.lastName}
              </a>
              <a
                onClick={() => {
                  executeLogout();
                }}
              >
                Logout
              </a>
              <a>
                <button
                  onClick={e => {
                    e.preventDefault();
                    navigate('/#pricing');
                  }}
                  className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
                >
                  Get Funded
                </button>
              </a>
            </>
          ) : (
            <>
              <a
                onClick={() => {
                  navigate('/login');
                }}
              >
                Log in
              </a>
              <button
                className="bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
                onClick={e => {
                  e.preventDefault();
                  navigate('/#pricing');
                }}
              >
                Get Funded
              </button>
            </>
          )}
        </div>
      </nav>

      {active ? (
        <div
          className={`mobile-nav transition-all duration-500 ease-in-out delay-150 md:hidden z-40 absolute w-full h-[100vh]  text-white flex flex-col pt-8 items-center gap-[32px] ${
            active ? 'opacity-1' : 'opacity-0'
          }`}
        >
          {isUserAuthenticated() ? (
            <>
              <a
                className={'underline'}
                onClick={() => {
                  navigate('/dashboard');
                }}
              >
                {userData?.firstName}
                {userData?.lastName}
              </a>
              <a
                onClick={() => {
                  executeLogout();
                }}
              >
                Logout
              </a>
              <a>
                <button
                  onClick={e => {
                    e.preventDefault();
                    navigate('/#pricing');
                  }}
                  className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
                >
                  Get Funded
                </button>
              </a>
            </>
          ) : (
            <>
              <a
                onClick={() => {
                  navigate('/login');
                }}
              >
                Log in
              </a>
              <button
                className="bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]"
                onClick={e => {
                  e.preventDefault();
                  navigate('/#pricing');
                }}
              >
                Get Funded
              </button>
            </>
          )}
        </div>
      ) : null}
    </>
  );
}
