import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = ({ message, description, height }) => {
  return (
    <div className={`absolute z-10 top-0 left-0 w-full bg-white rounded-md ${height ? 'h-[40vh]' : 'h-[100vh]'} border-2 border-[#D0D5DD]`}>
      <div className="flex flex-col items-center justify-center h-full px-4 space-y-6 text-center">
        <TailSpin
          height="60"
          width="60"
          color="#1570EF"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className="font-bold text-[24px]">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
