import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../images/PTF LOGO.svg';
import btc from '../images/icons/Bitcoin.svg';
import check from '../images/icons/bluecheck.svg';
import bank from '../images/icons/Bank.svg';
import bankwhite from '../images/icons/Bankwhite.svg';
import { BsChevronDown } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi';
import { SiVisa } from 'react-icons/si';
import download from '../images/icons/fi_download.svg';
import visa from '../images/icons/Pro Traders Fund Visa Card Payment Method.svg';
import { MdArrowBackIos } from 'react-icons/md';

import mastercard from '../images/icons/Pro Traders Fund Mastercard Payment Method.svg';
import eth from '../images/icons/Pro Traders Fund Ethereum Payment Method.svg';
import faq from '../images/icons/faq.svg';
import successicon from '../images/icons/check-icon.svg';
import './Wallet.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import CurrencyInput from 'react-currency-input-field';

// react-spinners
// https://opencore.com/js/react-spinners
// https://www.davidhu.io/react-spinners/storybook/index.html?path=/docs/fadeloader--main
import FadeLoader from 'react-spinners/FadeLoader';

const data = [
  {
    date: 'Jan 26, 2023',
    method: 'Credit card (****5656)',
    amount: '$100,000.00',
    status: 'Processing',
    invoice: 'PDF'
  },
  {
    date: 'Jan 26, 2023',
    method: 'Bitcoin (****5cf4)',
    amount: '$100,000.00',
    status: 'Success',
    invoice: 'PDF'
  },
  {
    date: 'Jan 26, 2023',
    method: 'Wire transfer (****5656)',
    amount: '$100,000.00',
    status: 'Declined',
    invoice: 'PDF'
  }
];

// ! Modal
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
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '1px solid currentColor',
  padding: '12px 24px',
  borderRadius: '8px'
});

export default function Withdraw({ activeNav, setActiveNav }) {
  const navigate = useNavigate();
  const [card, setCard] = useState(false);
  const [crypto, setCrypto] = useState(false);
  const [wire, setWire] = useState(true);

  // Keep track of amount entered in deposit
  const [valueAmt, setValueAmt] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setBankIndex(1);
    setIndex(1);
  };

  const [deleteopen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  const [bankopen, setBankOpen] = useState(false);
  const handleBankOpen = () => setBankOpen(true);
  const handleBankClose = () => {
    setBankOpen(false);
    setBankIndex(1);
  };

  const [index, setIndex] = useState(1);
  const [bankindex, setBankIndex] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);

  const continueBtn = () => {
    if (index < 4) {
      setIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const continueBank = () => {
    if (bankindex < 2) {
      setBankIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const starttime = () => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const confirm = () => {
    if (pageIndex < 3) {
      setPageIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      window.scrollTo(0, 0);
    }
    starttime();
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#008ffd');
  const [isVisible, setIsVisible] = useState(true);

  //! CRYPTO
  const [openNetwork, setOpenNetwork] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('Select withdrawal network');
  const networkOptions = ['ETHERIUM STANDARD NETWORK', 'BITCOIN STANDARD NETWORK'];
  const [openCoin, setOpenCoin] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const coinOptions = [
    [<img src={btc} alt="" />, 'Bitcoin'],
    [<img src={eth} alt="" />, 'Ethereum']
  ];
  const [bitcoin, setBitcoin] = useState(true);
  const [ethereum, setEthereum] = useState(false);

  useEffect(() => {
    setActiveNav(false);
    window.scrollTo(0, 0);
    // timer to make the loading component visible after 2000 milliseconds (2 seconds)
  }, []);
  return (
    <div
      className="flex min-h-[100vh] lg:flex-row flex-col lg:justify-center justify-start items-center 
    w-full gap-4 mt-2 text-white lg:items-start px-2"
    >
      {pageIndex === 1 ? (
        <>
          {open ? (
            <>
              {crypto ? (
                <>
                  <Modal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    slots={{ backdrop: Backdrop }}
                  >
                    <Box sx={style} className="space-y-3">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-lg">Add crypto wallet address</p>
                        <button
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          <GrClose></GrClose>
                        </button>
                      </div>
                      <p>Network</p>
                      <div className="flex justify-between gap-2 py-1 text-xs bg-gray-100 rounded-md md:px-2 md:text-base">
                        <div
                          className={`rounded-md flex justify-center flex-1 items-center py-2 md:px-5 px-2  cursor-pointer gap-2 ${
                            ethereum ? 'text-white bg-secGrayTheme' : 'text-gray-500'
                          }`}
                          onClick={() => {
                            setBitcoin(false);
                            setEthereum(true);
                          }}
                        >
                          Ethereum
                        </div>
                        <div
                          className={`rounded-md flex flex-1 justify-center items-center py-2 md:px-5 px-2  cursor-pointer gap-2 ${
                            bitcoin ? 'text-white bg-secGrayTheme' : 'text-gray-500'
                          }`}
                          onClick={() => {
                            setBitcoin(true);
                            setEthereum(false);
                          }}
                        >
                          Bitcoin
                        </div>
                      </div>
                      <div>
                        <p>Wallet address</p>
                        <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                          <input type="text" name="" id="" placeholder="Paste wallet address here" className="w-full bg-transparent" />
                        </div>
                        <p className="mt-1 text-xs text-gray-600">
                          Important: Ensure the address is correct. We can’t return your money if sent to an incorrect wallet.
                        </p>
                      </div>

                      <div>
                        <p>Add a nickname (Optional)</p>
                        <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                          <input type="text" name="" id="" placeholder="" className="w-full bg-transparent" />
                        </div>
                        <p className="mt-1 text-xs text-gray-600">This helps you to recognize your address.</p>
                      </div>

                      {/* ---SELECT WALLET ADDRESS--- */}
                      <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={continueBtn}>
                        Add wallet address
                      </button>
                    </Box>
                  </Modal>
                </>
              ) : null}
              {wire ? (
                <>
                  {index === 1 ? (
                    <>
                      {/*  IF USER HAS A SAVED BANK ACCOUNT */}

                      <Modal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={deleteopen}
                        onClose={handleDeleteClose}
                        slots={{ backdrop: Backdrop }}
                      >
                        <Box sx={style} className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => {
                                handleDeleteClose();
                              }}
                            >
                              <GrClose></GrClose>
                            </button>
                          </div>
                          <div className="flex flex-col items-center justify-center text-center">
                            <HiOutlineTrash className="text-4xl text-red-500"></HiOutlineTrash>
                            <p className="text-2xl">Delete bank account</p>
                            <p className="font-light">Are you sure you want to delete account (Bank of America ****6545) ?</p>
                          </div>

                          <button className="w-full py-3 text-white bg-red-500 rounded-md" onClick={handleDeleteClose}>
                            Delete
                          </button>
                          <button className="w-full py-3 rounded-md" onClick={handleDeleteClose}>
                            No, cancel
                          </button>
                        </Box>
                      </Modal>
                      {bankindex === 1 ? (
                        <Modal
                          aria-labelledby="unstyled-modal-title"
                          aria-describedby="unstyled-modal-description"
                          open={open}
                          onClose={handleBankClose}
                          slots={{ backdrop: Backdrop }}
                        >
                          <Box sx={style} className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                              <p className="text-lg">Add Bank Account</p>
                              <button
                                onClick={() => {
                                  handleClose();
                                }}
                              >
                                <GrClose></GrClose>
                              </button>
                            </div>

                            <p className="text-lg">Beneficiary bank details</p>
                            <div>
                              <p>Name on account</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="First and last name" className="w-full bg-transparent" />
                              </div>
                              <p className="mt-1 text-xs text-gray-600">
                                Important: The name on the bank account you are withdrawing to must match the name on the account you are
                                withdrawing from.
                              </p>
                            </div>
                            <div>
                              <p>Name of bank</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="Enter bank name" className="w-full bg-transparent" />
                              </div>
                            </div>

                            <div>
                              <p>Bank address</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="Beneficiary bank address" className="w-full bg-transparent" />
                              </div>
                            </div>
                            <div>
                              <p>Beneficiary Bank BIC/SWIFT Code</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="Enter code" className="w-full bg-transparent" />
                              </div>
                              <p className="mt-1 text-xs text-gray-600">
                                Check any paper or digital banking statements, or look at your account details on your online banking.{' '}
                                <br />
                                <span className="underline text-mainBlue">Find my code</span>
                              </p>
                            </div>
                            <div>
                              <p>Bank Account Number</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Enter Beneficiary bank account number"
                                  className="w-full bg-transparent"
                                />
                              </div>
                            </div>

                            <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={continueBank}>
                              Step 1/2: Add bank account
                            </button>
                          </Box>
                        </Modal>
                      ) : null}
                      {bankindex === 2 ? (
                        <Modal
                          aria-labelledby="unstyled-modal-title"
                          aria-describedby="unstyled-modal-description"
                          open={open}
                          onClose={handleBankClose}
                          slots={{ backdrop: Backdrop }}
                        >
                          <Box sx={style} className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                            <div className='flex items-center justify-start'>
                                        <div className='cursor-pointer' onClick={() => setBankIndex(1)}><MdArrowBackIos /></div>
                                        <p className="text-lg">Add Bank Account</p>
                                    </div>
                              <button
                                onClick={() => {
                                  handleClose();
                                }}
                              >
                                <GrClose></GrClose>
                              </button>
                            </div>

                            <div>
                              <p className="text-lg">Intermediary information</p>
                              <p className="text-xs text-gray-600 ">
                                Take care entering your account details (copy + paste is best) and double-check to make sure you've entered
                                all the information correctly.
                              </p>
                            </div>
                            <div>
                              <p>Intermediary Bank Name</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="Enter bank name" className="w-full bg-transparent" />
                              </div>
                              <p className="mt-1 text-xs text-gray-600">
                                Important: The name on the bank account you are withdrawing to must match the name on the account you are
                                withdrawing from.
                              </p>
                            </div>

                            <div>
                              <p>Bank address</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Intermediary bank address"
                                  className="w-full bg-transparent"
                                />
                              </div>
                            </div>
                            <div>
                              <p>Intermediary Swift Code</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input type="text" name="" id="" placeholder="Enter code" className="w-full bg-transparent" />
                              </div>
                              <p className="mt-1 text-xs text-gray-600">
                                Check any paper or digital banking statements, or look at your account details on your online banking.{' '}
                                <br />
                                <span className="underline text-mainBlue">Find my code</span>
                              </p>
                            </div>
                            <div>
                              <p>Intermediary Routing/Sort Code</p>
                              <div className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Intermediary routing/Sort code"
                                  className="w-full bg-transparent"
                                />
                              </div>
                            </div>

                            <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={handleClose}>
                              Step 2/2: Add Intermediary Information
                            </button>
                          </Box>
                        </Modal>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}
          <div className="w-auto p-4 space-y-5 box basis-1/3">
            <div>
              <p className="text-sm">Important</p>
            </div>
            <div>
              <p className="text-2xl">BIC/Swift Wire transfer</p>
              <p className="text-sm text-[#777E90]">Select or add an account and enter the amount you wish to withdraw from.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img src={check} alt="" className="mt-1" />
                <p className="text-sm font-light">
                  Fees listed are what our bank charge us. Other banks used during the transfer may charge additional fees and are out of
                  our control.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src={check} alt="" className="mt-1" />
                <p className="text-sm font-light">You cannot exceed your daily or monthly funding limits.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start flex-1 w-full gap-4 basis-1/2 lg:flex-row">
            <div className="p-4 space-y-5 lg:w-[400px] w-full box ">
              <p>Withdraw </p>
              <div className="bg-[#262729] rounded-md flex justify-between py-1 md:px-2 md:text-base text-xs gap-2">
                <div
                  className={`rounded-md flex justify-center flex-1 items-center py-2 md:px-5 px-2 cursor-pointer gap-2 ${
                    wire ? 'text-black bg-white' : null
                  }`}
                  onClick={() => {
                    setCard(false);
                    setCrypto(false);
                    setWire(true);
                  }}
                >
                  {wire ? <img src={bank} alt="" /> : <img src={bankwhite} alt="" />}
                  Wire Transfer
                </div>
                <div
                  className={`rounded-md flex flex-1 justify-center items-center py-2 md:px-5 px-2 cursor-pointer gap-2 ${
                    crypto ? 'text-black bg-white' : null
                  }`}
                  onClick={() => {
                    setCard(false);
                    setCrypto(true);
                    setWire(false);
                  }}
                >
                  <img src={btc} alt="" />
                  Crypto
                </div>
              </div>
              <p className="text-sm">Withdrawal amount</p>
              <div className="bg-[#262729] rounded-md flex justify-between py-1 px-2 h-[40px] gap-5 text-white">
                <CurrencyInput
                  onFocus={e => (e.target.placeholder = '')}
                  onBlur={e => (e.target.placeholder = '$0.00')}
                  id="input-example"
                  name="input-name"
                  defaultValue={''}
                  placeholder="$0.00"
                  prefix="$"
                  onValueChange={value => setValueAmt(value)}
                  className="w-full bg-transparent"
                />
                <div className="flex items-center gap-2 text-gray-500">USD </div>
              </div>
              {/* PERCENTAGE SELECTORS */}
              <div className="flex justify-between gap-2 text-sm">
                {' '}
                <div className="bg-[#262729] rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer">
                  25%
                </div>
                <div className="bg-[#262729] rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer">
                  50%
                </div>
                <div className="bg-[#262729] rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer">
                  75%
                </div>
                <div className="bg-[#262729] rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer">
                  100%
                </div>
              </div>
              {/* PERCENTAGE SELECTORS */}
              {crypto && (
                <div className="space-y-2">
                  <p className="text-sm">Converted to</p>
                  <div className="flex justify-between w-full rounded-md shadow">
                    <input type="text" className="flex-1 px-2 rounded-l-md bg-grayTheme" onClick={() => setOpenCoin(false)} />
                    <div class="relative">
                      <button
                        onClick={() => setOpenCoin(!openCoin)}
                        class="flex w-full flex-row justify-between items-center gap-1 bg-secGrayTheme rounded-r-md px-2 py-2 text-white"
                      >
                        <span>{selectedCoin}</span>
                        <BsChevronDown></BsChevronDown>
                      </button>
                      {openCoin && (
                        <div
                          id="options"
                          class="absolute z-[999] bg-grayTheme rounded-md  shadow-xl cursor-pointer text-white w-full"
                          onClick={() => setOpenCoin(false)}
                        >
                          <div
                            href="#"
                            class="block px-4 py-2 hover:bg-secGrayTheme  "
                            onClick={() => {
                              setBitcoin(true);
                              setEthereum(false);
                              setSelectedCoin('BTC');
                            }}
                          >
                            BTC
                          </div>
                          <div
                            href="#"
                            class="block px-4 py-2 hover:bg-secGrayTheme "
                            onClick={() => {
                              setBitcoin(false);
                              setEthereum(true);
                              setSelectedCoin('ETH');
                            }}
                          >
                            ETH
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-between">
                  <p>Available</p> <p>$5,000.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Max</p> <p>$5,000.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Min</p> <p>$1,000.00</p>
                </div>
              </div>
              <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={handleOpen}>
                {wire ? 'Add an account' : 'Add an address'}
              </button>
              <div className="flex items-center justify-between text-sm">
                <p> {wire ? 'Select an account' : 'Select an address'}</p>
                <button className="text-mainBlue" onClick={handleOpen}>
                  {wire ? 'Add account' : 'Add an address'}
                </button>
              </div>
              {/* BANK ACCOUNTS */}
              {wire && (
                <div className="space-y-4">
                  {/* Bank Account */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left ">
                      <p>My bank of America account</p>
                      <p className="font-light ">Ending 5678</p>
                    </div>
                    <input type="checkbox" className="checkbox-round" />
                  </div>
                  {/* Bank Account */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left ">
                      <p>My bank of America account</p>
                      <p className="font-light ">Ending 5678</p>
                    </div>
                    <input type="checkbox" className="checkbox-round" />
                  </div>
                </div>
              )}
              {/* CRYPTO ADDRESSES */}
              {crypto && (
                <div className="space-y-4">
                  {/* ADDRESS */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left ">
                      <p>My Coinbase BTC withdrawal address</p>
                      <p className="font-light ">mkVyPGfmHCSn1YkRA...CnYfibmwDVRco2</p>
                    </div>
                    <input type="checkbox" className="checkbox-round" />
                  </div>
                  {/* ADDRESS */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left ">
                      <p>My Coinbase BTC withdrawal address</p>
                      <p className="font-light ">mkVyPGfmHCSn1YkRA...CnYfibmwDVRco2</p>
                    </div>
                    <input type="checkbox" className="checkbox-round" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col lg:w-[380px] w-full gap-5 p-4 box">
              <div className="flex flex-col items-center gap-2 lg:flex-row">
                <p>Review</p>
              </div>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center justify-between">
                  <p>Amount</p> <p>${valueAmt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Estimated time of arrival</p> <p>1-3 business days</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Fee</p> <p>$5.00</p>
                </div>
                {crypto && (
                  <div className="flex items-center justify-between">
                    <p>Conversion rate</p> <p>1 USD - 0.00054 ETH</p>
                  </div>
                )}
              </div>
              {/* <button className="w-full py-3 text-gray-400 rounded-md bg-grayTheme" onClick={handleOpen}>
            Confirm and withdraw
          </button> */}
              <button className="w-full py-3 text-white rounded-md bg-mainBlue" onClick={confirm}>
                Confirm and withdraw
              </button>
            </div>
          </div>
        </>
      ) : null}
      {pageIndex === 2 && (
        <>
          {isVisible ? (
            <div className="flex text-center flex-col items-center justify-center mt-10 lg:w-[382px] sm:w-[60%]">
              <FadeLoader loading={loading} color={color}></FadeLoader>
              <p className="text-2xl">Hang on while we process your withdrawal</p>
              <p className="font-light text-gray-200">Please DO NOT close tab, this my take a while.</p>
            </div>
          ) : (
            <div className="flex text-center space-y-3 flex-col items-center justify-center mt-10 lg:w-[512px] sm:w-[60%]">
              <img src={Logo} alt="" />

              <img src={successicon} alt="" className="h-[60px] aspect-square" />

              <p className="text-2xl">Your withdrawal was successful</p>
              <p className="font-light text-gray-200">
                Hi [Trader first name] your withdrawal was successfully. Please check email for receipt sent to pajamabillionaire@gmail.com{' '}
              </p>
              <button className="w-full py-2 rounded-md bg-mainBlue" onClick={() => navigate('/')}>
                Go to Dashboard
              </button>
              <button className="w-full py-2 text-sm rounded-md text-mainBlue">Download receipt</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
