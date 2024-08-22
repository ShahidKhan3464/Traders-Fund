import React, { useState } from 'react';
import { FadeLoader } from 'react-spinners';

const ProcessingTransaction = ({ success }) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#008ffd');

  return (
    <>
      {!success ? (
        <div className="h-[90vh]">
          <div className="flex text-center mx-auto flex-col items-center h-[70%] justify-center lg:w-[382px] sm:w-[60%]">
            <FadeLoader loading={loading} color={color}></FadeLoader>
            <p className="text-2xl">Hang On While We Process Your Payment</p>
            <p className="font-light text-gray-200">Please DO NOT close this tab, this may take a while.</p>
          </div>
        </div>
      ) : (
        <div className="h-[90vh]">
          <div className="flex text-center mx-auto flex-col items-center h-[70%] justify-center lg:w-[382px] sm:w-[60%]">
            <p className="text-2xl">Success! Please Wait While Your Trading Account Is Created</p>
            <p className="font-light text-gray-200">Please DO NOT close this tab, this may take a while.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessingTransaction;
