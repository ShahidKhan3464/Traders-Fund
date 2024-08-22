import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Messaging = ({ admin, setAdmin }) => {
  setAdmin(true);
  return (
    <div className="flex lg:flex-row flex-col gap-4 sm:mt-0 mt-4 h-full">
      <div className="vd-box overflow-y-scroll lg:w-[332px] w-full space-y-5">
        {/* create chat */}
        <div className="flex justify-between items-center">
          <p
            className="text-xl
          "
          >
            Message
          </p>
          <button className="flex gap-2 items-center justify-center bg-mainBlue p-2 rounded-md">
            Create chat <AiOutlinePlus></AiOutlinePlus>
          </button>
        </div>
        {/* search */}
        <div className="border border-gray-600/70 rounded-md h-[40px] flex justify-between items-center px-2">
          <input type="text" className="bg-transparent w-full px-2" placeholder="Search chat" />
          <FiSearch></FiSearch>
        </div>
        {/* ------CHATS---- */}
        <div className="flex flex-col space-y-2"></div>
      </div>
      <div className="vd-box overflow-y-scroll lg:w-[718px] w-full"></div>
    </div>
  );
};

export default Messaging;
