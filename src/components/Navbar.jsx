import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ClosedNav from '../components/ClosedNav';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import Login from '../images/icons/Login.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from '../api';
import { showCustomError, showCustomSuccess } from '../utils/utils';
import Notification from './Notification';
import Translator from './Translator';

// ----------------------SIDEBAR / NAVBAR ------------------
const Navbar = ({ activeNav, setActiveNav }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [notification, setNotification] = useState(null);
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
  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="hidden mx-auto sm:block navbar sm:mx-2 md:mx-6"
          >
            <div className={`sidebar relative flex flex-col justify-between h-full flex-1 `}>
              <div className="logo-row"></div>
              <div className="sidebar-link-container">
                <ul className="sidebar-list">
                  <li
                    className="flex justify-center gap-2 h-[48px]  items-center bg-secGrayTheme my-[6px] mx-[20px] rounded-[6px] px-[24px] cursor-pointer"
                    onClick={() => setActive(!active)}
                  >
                    <div>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.5 1V19M19.5 10H5.5M5.5 10L12.5 17M5.5 10L12.5 3"
                          stroke="#D0D5DD"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div id="title">Collapse</div>
                  </li>
                  {SidebarData.map((val, key) => {
                    return (
                      <li key={key} className={val.cName}>
                        <NavLink to={val.link} className="row">
                          <div id="icon">
                            <img src={val.icon} alt="" />
                          </div>
                          <div id="title">{val.title}</div>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <ul className="flex mb-auto lg:absolute lg:bottom-0 sidebar-list">
                <div className="bg-gray-600 w-[80%] h-[1px] flex mx-auto"></div>
                <div className="flex items-center justify-center w-full pt-2"></div>
                <a
                  onClick={async () => {
                    await executeLogout();
                  }}
                  className="row"
                >
                  <div id="icon">
                    <img src={Login} alt="" />
                  </div>
                  <div id="title">Logout</div>
                </a>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
            className={'collapsed-sidebar hidden sm:block '}
          >
            <div className="sidebar-link-container">
              <ul className="sidebar-list">
                <li
                  className="flex justify-center gap-2 h-[48px]  items-center bg-secGrayTheme my-[6px]  rounded-[6px] px-[24px] cursor-pointer"
                  onClick={() => setActive(!active)}
                >
                  <div className="rotate-180">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.5 1V19M19.5 10H5.5M5.5 10L12.5 17M5.5 10L12.5 3"
                        stroke="#D0D5DD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </li>
                {SidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className={val.cName}
                      // onClick={() => setActive(!active)}
                    >
                      <NavLink to={val.link} className="row">
                        <div id="icon">
                          <img src={val.icon} alt="" />
                        </div>
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  className="flex justify-center gap-2 h-[48px]  items-center bg-secGrayTheme my-[6px]  rounded-[6px] px-[24px] cursor-pointer"
                  onClick={async () => {
                    await executeLogout();
                  }}
                >
                  <div className="rotate-180">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 20C11 19.4477 11.4477 19 12 19L15.2 19C16.0566 19 16.6389 18.9992 17.089 18.9624C17.5274 18.9266 17.7516 18.8617 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C18.8617 17.7516 18.9266 17.5274 18.9624 17.089C18.9992 16.6389 19 16.0566 19 15.2L19 8.8C19 7.94342 18.9992 7.36113 18.9624 6.91104C18.9266 6.47262 18.8617 6.24842 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.7516 5.1383 17.5274 5.07337 17.089 5.03755C16.6389 5.00078 16.0566 5 15.2 5L12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3L15.2413 3C16.0463 2.99999 16.7106 2.99998 17.2518 3.04419C17.8139 3.09012 18.3306 3.18868 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66937 20.9099 6.18608 20.9558 6.74817C21 7.28937 21 7.95374 21 8.75872V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H12C11.4477 21 11 20.5523 11 20Z"
                        fill="#777E90"
                        fill-opacity="0.4"
                      />
                      <path
                        d="M4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H12.5858L11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L12.5858 13H4Z"
                        fill="#CDCECF"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <ClosedNav active={active} setActive={setActive}></ClosedNav>
    </>
  );
};

export default Navbar;
