import React, { useState } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import close from '../images/icons/Close.svg';
import { AiOutlineClose } from 'react-icons/ai';

// react-copy-to-clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
// https://www.npmjs.com/package/react-copy-to-clipboard

import { Switch } from '@headlessui/react';
import { useStore } from '../store';
import { BsDownload } from 'react-icons/bs';
import { TbCopy } from 'react-icons/tb';
import { HiOutlineKey } from 'react-icons/hi';
// ! Credentials Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});
BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool
};
const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;
const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = theme => ({
  // width: "600px",
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : '#1C1D20'
});

const CredentialsModal = ({ handleClose, handleOpen, open, setOpen, login, mainPass, investorPass }) => {
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (value, field) => {
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 1500);
  };

  return (
    <>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
      >
        <Box sx={style} className="space-y-3 border-gray-500 border-2 rounded-lg lg:mt-20 text-white md:w-[430px] w-auto mx-auto">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-600 rounded-t-md bg-mainTheme">
            <p className="text-lg">Credentials</p>
            <button onClick={handleClose}>
              <AiOutlineClose className="text-2xl"></AiOutlineClose>
            </button>
          </div>
          <div className="text-sm">
            {/* First Row: Login and Password */}
            <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Login</p>
                  <p className="copy-me">{login}</p>
                </div>
                <CopyToClipboard text={login} onCopy={() => handleCopy(login, 'login')}>
                  <button className="flex items-center gap-2 text-copy">
                    <TbCopy className="text-base"></TbCopy>
                    {copiedField === 'login' && <span>Copied!</span>}
                  </button>
                </CopyToClipboard>
              </div>
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Password</p>
                  <p>{mainPass}</p>
                </div>
                <CopyToClipboard text={mainPass} onCopy={() => handleCopy(mainPass, 'mainPass')}>
                  <button className="flex items-center gap-2">
                    <TbCopy className="text-base"></TbCopy>
                    {copiedField === 'mainPass' && <span>Copied!</span>}
                  </button>
                </CopyToClipboard>
              </div>
            </div>

            {/* Second Row: Investor Password and Server */}
            <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Investor password</p>
                  <p>{investorPass}</p>
                </div>
                <CopyToClipboard text={investorPass} onCopy={() => handleCopy(investorPass, 'investorPass')}>
                  <button className="flex items-center gap-2 text-copy">
                    <TbCopy className="text-base"></TbCopy>
                    {copiedField === 'investorPass' && <span>Copied!</span>}
                  </button>
                </CopyToClipboard>
              </div>
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Server</p>
                  <p>ApexCapitalMarkets-ECN</p>
                </div>
                <CopyToClipboard text="ApexCapitalMarkets-ECN" onCopy={() => handleCopy('ApexCapitalMarkets-ECN', 'server')}>
                  <button className="flex items-center gap-2">
                    <TbCopy className="text-base"></TbCopy>
                    {copiedField === 'server' && <span>Copied!</span>}
                  </button>
                </CopyToClipboard>
              </div>
            </div>

            {/* Third Row: Platform and Web Platform */}
            <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Platform</p>
                  <a href="https://www.metatrader5.com/en/download" target="_blank" rel="noreferrer" className="underline text-mainColor">
                    MetaTrader 5
                  </a>
                </div>
              </div>
              <div className="flex justify-between flex-1 px-3">
                <div className="gap-2">
                  <p>Web platform</p>
                  <a href="https://protradersfund.com/" target="_blank" rel="noreferrer" className="underline text-mainColor">
                    https://protradersfunds.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CredentialsModal;
