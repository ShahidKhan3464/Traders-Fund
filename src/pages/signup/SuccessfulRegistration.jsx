import React from 'react';
import success from '../../images/icons/Success2.svg';
import 'react-phone-number-input/style.css';
const SuccessfulRegistration = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[27%] py-12 flex flex-col">
        <div className="flex flex-col justify-center px-3 md:px-3">
          <img src={success} alt="Logo Symbol" />
          <h2 className="my-3 text-3xl font-bold">Account successfully created</h2>
          <div className="mb-3 text-[16px]">
            <p>Your account was successfully created get funded now.</p>
          </div>
          <form>
            <div>
              <a>
                <button
                  type="button"
                  class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                  id="signinbtn"
                >
                  Go to account
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SuccessfulRegistration;
