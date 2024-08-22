import React, { useState, useEffect } from 'react';
import visa from '../images/icons/Pro Traders Fund Visa Card Payment Method.svg';
import success from '../images/icons/Successlg.svg';
import close from '../images/icons/x-close.svg';
import btc from '../images/icons/Pro Traders Fund Bitcoin Payment Method.svg';
import eth from '../images/icons/Pro Traders Fund Ethereum Payment Method.svg';
import arrow from '../images/icons/arrow-left.svg';
import mastercard from '../images/icons/Pro Traders Fund Mastercard Payment Method.svg';
import axios from 'axios';

export default function Checkout({ activeNav, setActiveNav }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');
  const [index, setIndex] = useState(1);
  const [email, setEmail] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const [iframeString, setIframeString] = useState(null);

  const handleCheckout = async () => {
    // try {
    //   const response = await axios.post(`${process.env.REACT_APP_PTF_API}/billing/checkout`, { test_card: '4265880000000007', total: 209 });
    //
    //   const { orderId } = response.data;
    //   const iframeString =
    //     response.data['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ipgapi:IPGApiOrderResponse'][0]['ipgapi:Secure3DResponse'][0][
    //       'v1:Secure3DMethod'
    //     ][0]['v1:Secure3DMethodForm'][0];
    //
    //   setIframeString(iframeString);
    //
    //   setTimeout(async () => {
    //     const response = await axios.get(`${process.env.REACT_APP_PTF_API}/billing/check-notification`, {
    //       params: {
    //         orderId: orderId
    //       }
    //     });
    //   }, 10000);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const updateState = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const continueBtn = () => {
    try {
      if (index < 2) {
        setIndex(prevIndex => prevIndex + 1);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    } catch (error) {}
  };

  useEffect(() => {
    setActiveNav(false);
  }, []);

  return (
    <div className="text-white bg-mainTheme">
      {index === 1 && (
        <div
          className="flex md:flex-row flex-col justify-center py-[64px] items-start lg:w-[1000px] md:px-5 gap-10 mx-auto"
          onClick={e => {
            setIsActive(false);
          }}
        >
          {/* left */}
          <div
            className="py-6 flex flex-col gap-4 justify-center sm:items-stretch items-center sm:w-[500px]  mx-auto w-[80%]"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-3xl">Payment Details</h2>

            <div className="w-full">
              <p className="pb-2">Name on card</p>
              <input
                type="text"
                className="sm:w-[80px] w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                placeholder="Enter full name on card"
              />
            </div>

            <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
              <div>
                <p className="pb-2">Card number</p>
                <div className="h-[40px] border-none rounded-lg flex font-normal justify-between bg-secTheme">
                  <img src={visa} alt="" className="hidden ml-auto sm:block" />
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    className="font-normal border-none rounded-lg bg-secTheme"
                    placeholder="0000  0000  0000  0000"
                  />
                </div>
              </div>
              <div>
                <p className="pb-2">Expiry</p>
                <input
                  type="text"
                  className="sm:w-[80px] w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <p className="pb-2">CVV</p>
                <input
                  type="text"
                  className="sm:w-[80px] w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>Save for faster checkout</p>
            </div>
            {/* -----SAVED CARDS----- */}
            <div className="space-y-2">
              <div className="md:w-full w-[280px] cursor-pointer flex py-2 bg-secTheme h-[40px] items-center justify-between rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img src={mastercard} alt="Pro Traders Fund Bitcoin Payment Method" />
                  <p className="text-sm">**** 4356</p>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <p className="text-sm underline">Remove</p>
                  <input type="radio" name="" id="" onChange={updateState} checked={checked} onClick={updateState} />
                </div>
              </div>
              {/* <div className="md:w-full w-[280px] cursor-pointer flex py-2 bg-secTheme h-[40px] items-center justify-between rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img
                    src={visa}
                    alt="Pro Traders Fund Bitcoin Payment Method"
                  />
                  <p className="text-sm">**** 4356</p>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <p className="text-sm underline">Remove</p>
                  <input
                    type="radio"
                    name=""
                    id=""
                    onChange={updateState}
                    checked={checked}
                    onClick={updateState}
                  />
                </div>
              </div> */}
            </div>

            <div className="md:w-full w-[280px] cursor-pointer flex bg-secTheme h-[40px] items-center justify-between rounded-lg px-2">
              <div className="flex items-center gap-2 ">
                <p className="text-sm">Pay with cryptocurrency</p>
                <img src={btc} alt="Pro Traders Fund Bitcoin Payment Method" className="w-5 h-5" />
                <img src={eth} alt="Pro Traders Fund Ethereum Payment Method" className="w-5 h-5" />
              </div>
              <div>
                {' '}
                <img src={arrow} alt="Pay with cryptocurrency" className="w-5 h-5 rotate-180" />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="py-6 px-4 md:w-[360px] w-full flex flex-col gap-4 mx-auto bg-[#1C1D20] border-none rounded-lg">
            <div>
              <p className="pb-1 text-xs font-light">Item</p>
              <span className="font-normal">Pro Traders Funded Challenge</span>
            </div>
            <hr />

            <div className="flex justify-between">
              <div>
                <p className="text-xs font-light">Challenge</p>
                <p className="text-sm font-bold">($amt)</p>
              </div>
              <div>
                {' '}
                <p className="text-xs font-light">Challenge Type</p>
                <p className="text-sm font-bold">(Challenge Type)</p>
              </div>
              <div>
                {' '}
                <p className="text-xs font-light">Trading Platform:</p>
                <p className="text-sm font-bold">MetaTrader 5</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-normal">Subtotal</div>
                <span>$270.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-normal">Discount</div>
                <span>$</span>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Total</p> <span>$270.00</span>
              </div>
            </div>
            <button
              className="personal-info-save-btn complete pay-btn"
              onClick={() => {
                handleCheckout();
                continueBtn();
              }}
            >
              Pay $270.00
            </button>
            <p className="text-xs font-light">
              By clicking the button, you agree to our <span className="underline blue">Terms of Service</span> as well as{' '}
              <span className="underline blue">Terms of Sale.</span>
            </p>
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="flex justify-center items-center min-h-[70vh] py-10">
          <div className="relative flex flex-col items-center justify-center shadow-medium bg-[#1C1D20] w-[343px] gap-4 rounded-lg border-none pb-4 pt-8 px-2">
            <img src={close} alt="close" className="absolute cursor-pointer top-5 right-5"></img>
            <img src={success} alt="checkout success"></img>
            <p className="text-2xl">$(amt) USD</p>
            <p className="font-light text-center">
              <span>Hi Pro Trader</span>, <br /> We are processing your amount, your account will be updated with in 24 hours
            </p>
            <span
              className="underline cursor-pointer blue"
              onClick={() => {
                setEmail(!email);
              }}
            >
              Email me a copy
            </span>
            <button className="w-full py-3 font-medium text-black border-none rounded-lg bg-mainColor">Download invoice</button>
            {email ? (
              <>
                <div className="flex flex-col w-full gap-1 text-light">
                  <span>Email address</span>
                  <input
                    type="text"
                    className="w-full h-[40px] border rounded-lg flex px-2 font-normal bg-secTheme"
                    placeholder="Enter email address"
                  />
                </div>
                <button className="w-full py-3 font-medium text-black border-none rounded-lg bg-mainColor">Email me</button>
              </>
            ) : null}
          </div>
        </div>
      )}

      <div id="iframe-container"></div>
    </div>
  );
}
