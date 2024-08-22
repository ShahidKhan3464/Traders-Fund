import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isUserAuthenticated } from '../utils/utils';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const GetFundedNow = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState('All Events');

  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  return (
    <section className="h-full flex flex-col justify-center items-center text-center py-[54px] bg-no-repeat bg-cover bg-center">
      <div className="p-12 text-white rounded-md md:p-24 bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 md:w-[70%]">
        <div className="mx-auto space-y-2">
          <h2 className="font-bold md:text-[48px] text-[30px]">Start Earning with Pro Traders Fund Now</h2>
          <p>
            Don't miss this opportunity to become part of a forex affiliate program that values your growth and success. Click below to sign
            up, access your affiliate dashboard, and start your journey to significant earnings and exclusive rewards.
          </p>
        </div>
        <div className="mt-6">
          <a
            onClick={() => {
              if (isUserAuthenticated()) {
                navigate('/#pricing');
              } else {
                localStorage.setItem('redirect_to', '/#pricing');
                navigate('/login');
              }
            }}
          >
            <button
              className={` bg-white  sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] text-black`}
            >
              Get Funded Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetFundedNow;
