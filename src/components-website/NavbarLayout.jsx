import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AdminNav from '../components/Admin/AdminNav';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AdminHeader from '../components/Admin/AdminHeader';

export default function NavbarLayout({ component: Component, ...rest }) {
  const [activeNav, setActiveNav] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      {!admin ? <Header></Header> : <AdminHeader></AdminHeader>}

      <div className={`h-[calc(100vh_-_186px)] flex ${admin ? 'py-4' : ''}`}>
        {!admin ? (
          <>
            {activeNav && (
              <Navbar activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode}></Navbar>
            )}
          </>
        ) : (
          <AdminNav activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode}></AdminNav>
        )}

        <div className={`md:w-[80%] mx-auto w-full px-2 overflow-x-scroll text-white  scrollbar-hide`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
