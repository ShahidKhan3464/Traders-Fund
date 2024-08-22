import React from "react";
import icon from "../images/icons/Line 02 Down.svg";
import plugicon from "../images/icons/plug icon.svg";

const NoData = () => {
  return (
    <div className="my-2 flex items-center justify-around bg-[#1C1D20] border border-[#3B3C3D] py-8 w-auto rounded-lg px-3">
      <div className="flex items-center flex-col justify-center text-white gap-4">
        <img src={icon} alt="" />
        <p>No data source available</p>
        <p className="font-light text-sm">Connect your broker to begin.</p>
        <button className="font-light bg-[#00A4E6] px-10 py-2 rounded-lg flex justify-center items-center gap-1">
          <img src={plugicon} alt="" />
          Connect
        </button>
      </div>
    </div>
  );
};

export default NoData;
