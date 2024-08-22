import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

import opennav from '../images/icons/navopen.svg';
import Login from '../images/icons/Login.svg';
import {SidebarData} from '../components/SidebarData';

import './Navbar.css';
import {motion, AnimatePresence} from 'framer-motion';

// ----------------------SIDEBAR / NAVBAR ------------------
const ClosedNav = () => {
    const [active, setActive] = useState(false);
    return (<>
        {!active && (<motion.div className={`closed-sidebar sm:hidden block`}>
            <div className="logo-row">
                {/* <div className="logo"></div> */}
                {/* <img src={opennav} alt="" className="close-nav" onClick={() => setActive(!active)} /> */}
            </div>

            <div className="sidebar-link-container">
                <ul className="sidebar-list">
                    <li
                        className="flex justify-center gap-2 h-[48px]  items-center bg-secGrayTheme my-[6px]  rounded-[6px] px-[24px] cursor-pointer"
                        onClick={() => setActive(!active)}
                    >
                        <div className="rotate-180">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
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
                        return (<li
                            key={key}
                            className={val.cName}
                            // onClick={() => setActive(!active)}
                        >
                            <NavLink to={val.link} className="row">
                                <div id="icon">
                                    <img src={val.icon} alt=""/>
                                </div>
                            </NavLink>
                        </li>);
                    })}
                </ul>
            </div>
        </motion.div>)}
        {active && (<motion.div
            initial={{x: '-100%'}}
            animate={{x: '0'}}
            transition={{duration: 0.5, type: 'linear', stiffness: 100}}
            className="absolute block sm:hidden navbar sm:mx-2 md:mx-6"
        >
            <div className={`sidebar relative flex flex-col justify-between h-full flex-1`}>
                <div className="logo-row">
                    {/* <div className="logo"></div> */}
                    {/* <div className="flex items-center justify-center gap-2 text-sm text-white close-nav">
          <img src={closenav} alt="" onClick={() => setActive(!active)} />
        </div> */}
                </div>

                <div className="sidebar-link-container">
                    <ul className="sidebar-list">
                        <li
                            className="flex justify-center gap-2 h-[48px]  items-center bg-secGrayTheme my-[6px] mx-[20px] rounded-[6px] px-[24px] cursor-pointer"
                            onClick={() => setActive(!active)}
                        >
                            <div>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
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
                            return (<li key={key} className={val.cName} onClick={() => setActive(false)}>
                                <NavLink to={val.link} className="row">
                                    <div id="icon">
                                        <img src={val.icon} alt=""/>
                                    </div>
                                    <div id="title">{val.title}</div>
                                </NavLink>
                            </li>);
                        })}
                    </ul>
                </div>
                <ul className=" sidebar-list">
                    <div className="bg-gray-600 w-[80%] h-[1px] flex mx-auto"></div>
                    {/* <NavLink to="/support" className="row">
          <div id="icon">
            <img src={Traders} alt="" />
          </div>
          <div id="title">Support</div>
        </NavLink> */}
                    <a href={process.env.REACT_APP_LANDING_URL} className="row">
                        <div id="icon">
                            <img src={Login} alt=""/>
                        </div>
                        <div id="title">Go to website</div>
                    </a>
                </ul>
            </div>
        </motion.div>)}
    </>);
};

export default ClosedNav;
