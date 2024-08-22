import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import qrcode from '../images/qrcode.png';

import PhoneInput from 'react-phone-number-input';
import {Accordion, AccordionItem as Item} from '@szhsin/react-accordion';
import {IoIosArrowDown} from 'react-icons/io';
import CustomQRCode from "./CustomQRCode";

const style = (isDarkMode) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    bgcolor: isDarkMode ? '#1c1d20' : 'white',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4
});

const KycInstructions = ({index, setIndex, continueBtn, isMobile}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState('');
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

    const isNumber = value !== '' && value !== null;
    const AccordionItem = ({header, ...rest}) => (
      <Item
        {...rest}
        header={({state: {isEnter}}) => (
          <>
              {header}
              <IoIosArrowDown
                className={`text-gray-500 ml-auto transition-transform duration-200 ease-out ${isEnter && 'rotate-180'}`}/>
          </>
        )}
        className=""
        buttonProps={{
            className: ({isEnter}) => `flex w-full justify-between items-center  text-left${isEnter && ''}`
        }}
        contentProps={{
            className: ' transition-height duration-300 ease-in-out'
        }}
        panelProps={{className: ''}}
      />
    );

    return (
      <>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description">
              <Box sx={style(isDarkMode)}>
                  <div className="my-4 space-y-4">
                      <p className="text-xl text-center text-grey-300">Scan this QR code</p>
                      <p className={`mt-4 text-sm font-light text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          For an easier way to get verified, please scan this QR code to complete the process on your
                          mobile phone.
                      </p>
                      {/* OTHER OPTIONS */}
                      <div className="flex flex-col justify-between gap-2">
                          <div className="flex justify-center">
                              {!isMobile && (
                                <CustomQRCode
                                  value={`${process.env.REACT_APP_LANDING_URL}/verification?token=${encodeURIComponent(localStorage.getItem('authToken') || '')}`}
                                />
                              )}
                          </div>
                          <div className="flex items-center justify-between gap-2">
                              <div className="w-full h-[1px] bg-gray-800/20"></div>
                              <p>or</p>
                              <div className="w-full h-[1px] bg-gray-800/20"></div>
                          </div>
                          <div
                            className={`mt-2 space-y-4 border-2 flex flex-col p-4 rounded-md w-full ${isDarkMode ? 'border-gray-300' : 'border-[#eaecf0]'}`}>
                              <p className="text-xl text-gray-300">Get link via SMS</p>
                              <p className={`text-xs font-light ${isDarkMode ? 'text-gray-300' : ''}`}>We’ll text a secure link to your mobile at no extra
                                  cost.</p>
                              <div className="space-y-2">
                                  {' '}
                                  <p className={`text-xs font-light ${isDarkMode ? 'text-gray-300' : ''}`}>Phone number</p>
                                  <div className={`w-full px-2 rounded-lg shadow-sm ${isDarkMode ? '#1c1d20 border-gray-700' : 'bg-white border border-gray-300'}`}>
                                      <PhoneInput placeholder="Eg-1-800-000-0000" value={value} onChange={setValue}/>
                                  </div>
                              </div>
                              <button
                                disabled={!isNumber}
                                className={`${
                                  isNumber ? 'bg-[#008ffd] hover:bg-blue-500' : 'bg-blue-600/20'
                                }  w-full px-4 py-2 font-bold text-white rounded-md cursor-pointer `}
                              >
                                  Get the link
                              </button>
                          </div>
                      </div>
                  </div>
              </Box>
          </Modal>
          <div className={`md:w-[546px] w-auto mx-auto text-black rounded-md ${isDarkMode ? '#1c1d20' : 'bg-white'}`}>
              <div className={`h-auto p-4 overflow-visible border-2 rounded-md ${isDarkMode ? '#1c1d20 border-gray-700' : 'bg-white border-gray-600/20'}`}>
                  <div className="flex items-center justify-between">
                      <p className={`text-3xl font-[600] text-${isDarkMode ? 'gray-300' : 'gray-700'}`}>How to get verified</p>
                  </div>

                  <div className="w-full mt-6 space-y-5">
                      <div className="flex gap-4">
                          <div className="flex flex-col items-center gap-4">
                              <div
                                className={`h-[48px] font-bold w-[48px] shrink-0 rounded-full flex ${
                                  isDarkMode ? 'bg-gray-500 text-white' : 'bg-[#f4f5f6] text-black'
                                }  items-center justify-center mt-4`}
                              >
                                  1
                              </div>
                              {step1 && <div
                                className="h-[60px] transition duration-300 ease-in border-[#1570ef] border-l-2 border-dashed w-1"></div>}
                          </div>
                          <Accordion
                            onClick={() => setStep1(!step1)}
                            className={`rounded-lg px-3 py-4 text-xl w-full ${
                              step1 ? ' bg-[#101828] text-white transition-height duration-200 ease-in  h-full' : 'bg-[#F2F4F7] text-[#101828] h-auto'
                            }`}
                          >
                              <AccordionItem
                                header={
                                    <div>
                                        <p className="font-light">Snap a photo of your ID</p>
                                    </div>
                                }
                                initialEntered={step1}
                              >
                                  <p className="text-[14px] font-normal mt-4 leading-[1.4]">
                                      <b>Using your National ID, passport or driver’s license</b>, find a well-lit area:
                                      Look for a location with good lighting to ensure that the details on your ID are
                                      clearly visible. Natural light is usually the best option, but if that's not
                                      available, make sure the area is well-lit and avoid harsh shadows.
                                  </p>
                              </AccordionItem>
                          </Accordion>
                      </div>

                      <div className="flex gap-4">
                          <div className="flex flex-col items-center gap-4">
                              <div
                                className={`h-[48px] font-bold w-[48px] shrink-0 rounded-full flex ${
                                  isDarkMode ? 'bg-gray-500 text-white' : 'bg-[#f4f5f6] text-black'
                                }  items-center justify-center mt-4`}
                              >
                                  2
                              </div>
                              {step2 && <div
                                className="h-[60px] transition duration-300 ease-in border-[#1570ef] border-l-2 border-dashed w-1"></div>}
                          </div>
                          <Accordion
                            onClick={() => setStep2(!step2)}
                            className={`rounded-lg px-3 py-4 text-xl w-full ${
                              step2 ? ' bg-[#101828] text-white transition-height duration-200 ease-in  h-full' : 'bg-[#F2F4F7] text-[#101828] h-auto'
                            }`}
                          >
                              <AccordionItem
                                header={
                                    <div>
                                        <p className="font-light">Take a selfie</p>
                                    </div>
                                }
                                initialEntered={step2}
                              >
                                  <p className="text-[14px] font-normal mt-4 leading-[1.4]">
                                      Capture a clear selfie with your National ID, passport or driver’s license. Find a
                                      well-lit area: Look for a location with good lighting to ensure that the details
                                      on your ID are clearly visible. Natural light is usually the best option, but if
                                      that's not available, make sure the area is well-lit and avoid harsh shadows.
                                  </p>
                              </AccordionItem>
                          </Accordion>
                      </div>

                      <div className="flex gap-4">
                          <div className="flex flex-col items-center gap-4">
                              <div
                                className={`h-[48px] font-bold w-[48px] shrink-0 rounded-full flex ${
                                  isDarkMode ? 'bg-gray-500 text-white' : 'bg-[#f4f5f6] text-black'
                                }  items-center justify-center mt-4`}
                              >
                                  3
                              </div>
                              {step3 && <div
                                className="h-[30px] transition duration-300 ease-in border-[#1570ef] border-l-2 border-dashed w-1"></div>}
                          </div>
                          <Accordion
                            onClick={() => setStep3(!step3)}
                            className={`rounded-lg px-3 py-4 text-xl w-full ${
                              step3 ? ' bg-[#101828] text-white transition-height duration-200 ease-in  h-full' : 'bg-[#F2F4F7] text-[#101828] h-auto'
                            }`}
                          >
                              <AccordionItem
                                header={
                                    <div>
                                        <p className="font-light">Add your Signature</p>
                                    </div>
                                }
                                initialEntered={step3}
                              >
                                  <p className="text-[14px] font-normal mt-4 leading-[1.4]">
                                      You must upload or draw your signature. Please ensure that it corresponds with the
                                      signature on your uploaded identification document.
                                  </p>
                              </AccordionItem>
                          </Accordion>
                      </div>
                      <p className={`text-${isDarkMode ? 'gray-300' : 'gray-700'} text-[16px] font-light py-4`}>
                          If you have any questions, check out our{' '}
                          <a className="underline" href="https://app.protradersfund.com/faq" target="_blank"
                             rel="noreferrer">
                              FAQ page
                          </a>{' '}
                          or reach out to our 24/7 Support team via email at{' '}
                          <a className="underline" href="mailto:support@protradersfund.com">
                              support@protradersfund.com
                          </a>
                          .
                          <br />
                          <br />
                          Verifying your Pro Traders Fund account is quick and easy! So what are you waiting for? Start
                          the verification process now and
                          enjoy full access to the Pro Traders Fund platform!
                      </p>
                  </div>

                  <div className="flex flex-col justify-center w-full gap-4 mt-4 text-base">
                      <button
                        className={`w-full px-4 py-3 font-bold text-white bg-blue-600 rounded-md cursor-pointer `}
                        onClick={continueBtn}>
                          Get started
                      </button>
                      {!isMobile && (
                        <div
                          className={`w-full px-4 py-3 font-bold text-center border rounded-md cursor-pointer ${isDarkMode ? ' text-white border-gray-300' : 'border-slate-200'}`}
                          onClick={handleOpen}
                        >
                            Get started on my phone
                        </div>
                      )}
                  </div>
                  <p className={`${isDarkMode ? 'text-white' : ''} mt-6 font-light text-center`}>
                      Read more about your personal data protection in our <br /> <span
                    className="text-[#008ffd]"><br />Privacy Policy</span>
                  </p>
              </div>
          </div>
      </>
    );
};

export default KycInstructions;
