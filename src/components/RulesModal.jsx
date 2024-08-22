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
// ! Rules Modal
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

const RulesModal = ({ handleClose, handleOpen, open, setOpen }) => {
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
            <p className="text-base">Rules for Breach & Account Termination</p>
            <button onClick={handleClose}>
              <AiOutlineClose className="text-2xl"></AiOutlineClose>
            </button>
          </div>

          <div className="flex flex-col justify-between px-4 py-2 pb-6 space-y-6 text-xs sm:text-sm">
            <div className="flex justify-between font-light">
              Fraudulent Chargebacks{' '}
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Banned</p>
              </button>
            </div>
            <div className="flex justify-between font-light">
              Soft breach
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Buy a new challenge</p>
              </button>
            </div>
            <div className="flex justify-between font-light">
              Daily loss limit hit
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Breach</p>
              </button>
            </div>
            <div className="flex justify-between font-light">
              Max loss limit hit
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Breach</p>
              </button>
            </div>
            <div className="flex justify-between font-light">
              Inactive / no trade for 30 days
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Breach</p>
              </button>
            </div>
            <div className="flex justify-between font-light">
              Copy external trades
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-red-700 bg-white rounded-full ">
                <p>Breach</p>
              </button>
            </div>
            <div className="flex items-start justify-between font-light">
              <p className="flex-1 font-light">
                Same IP address online/trading multiple trading accounts under different KYC verified profiles
              </p>
              <button className="flex items-center justify-center gap-1 px-2 py-1 text-xs text-orange-700 bg-white rounded-full flex-2">
                <p>Warning ⚠️ then Breach</p>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default RulesModal;
