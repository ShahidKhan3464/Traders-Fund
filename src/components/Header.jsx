import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/ProTradersFund Logo.png';
import './Header.css';
import settings from '../images/icons/Settings.svg';
import { AiOutlineBell } from 'react-icons/ai';
import { useStore } from '../store';
import { getProfile } from '../api';
import Translator from './Translator';

const Header = () => {
  const navigate = useNavigate();
  const [liveAcc, setLiveAcc] = useState(false);
  const [testAcc, settestAcc] = useState(false);

  const { userData } = useStore();

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const userData = await getProfile();
        const { firstName, lastName } = userData;
        setFirstName(firstName);
        setLastName(lastName);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <nav
      className="text-white px-6 py-4 flex sm:flex-row flex-wrap justify-center items-center md:h-[92px] gap-3 "
      onClick={e => {
        handleClose();
      }}
    >
      <div className="flex items-center justify-center pr-0 sm:pr-6">
        <img src={logo} alt="" onClick={() => (window.location.href = '/')} />
        <div className="bg-gray-600 w-[1px] h-8 ml-[32px] hidden sm:block"></div>
      </div>

      <div className="flex gap-2 ml-0 md:ml-24 h-[50px] items-center justify-center rounded-lg">
        <div
          className={`bg-[#00A4E6] rounded-lg py-2 px-4 cursor-pointer flex items-center justify-center shadow-lg`}
          onClick={() => navigate('/#pricing')}
        >
          <p>Buy Challenge</p>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:ml-auto">
        <div className="block h-[50px]">
          <Translator />
        </div>
        <button onClick={() => navigate('/account')}>
          <img src={settings} alt="" />
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <button className="w-full h-full">
              <AiOutlineBell className="text-2xl"></AiOutlineBell>
              {/* <img src={notification} alt="" /> */}
            </button>
          </label>
          <div tabIndex={0} className="dropdown-content z-[1]  shadow-lg bg-secTheme rounded-lg w-[400px] border border-gray-200">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-600 rounded-t-md bg-mainTheme">
              <p className="text-base">Updates</p>
            </div>
            <div className="text-sm">
              <div className="flex flex-col justify-between px-4 py-2 space-y-6"></div>
            </div>
            <div className="p-2"></div>
          </div>
          {/* <div
            className="hidden"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <Updates handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}></Updates>
          </div> */}
        </div>

        <button>
          {/* profile Button */}
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full" onClick={() => navigate('/account')}>
            {previewImage ? (
              <img src={previewImage} alt="" className="object-cover h-full overflow-hidden rounded-full" />
            ) : (
              <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
                {firstName.slice(0, 1) + lastName.slice(0, 1)}
              </div>
            )}
          </div>
          {/* <img
            src={logo}
            alt=""
            className="flex object-contain w-10 h-10 rounded-full"
          /> */}
        </button>
        <div className="flex flex-col ">
          <p>
            {firstName} {lastName}
          </p>
          {/* <div className="flex items-center justify-center gap-1 p-1 text-xs rounded-md bg-yellow-200/20">
            {' '}
            <img src={clock} alt="" /> <p className="text-yellow-200">Pending</p>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
