import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/ProTradersFund Logo.png";
import { NavLink, Link } from "react-router-dom";
import settings from "../../images/icons/Settings.svg";
import notification from "../../images/icons/Notification.svg";
import { AiOutlineBell } from "react-icons/ai";

import success from "../../images/icons/Success.svg";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [liveAcc, setLiveAcc] = useState(true);
  const [testAcc, settestAcc] = useState(false);
  return (
    <nav className="text-white px-6 py-4 flex sm:flex-row flex-col items-center md:h-[64px] gap-3">
      <div className="pr-6 flex items-center justify-center">
        <img src={logo} alt="" />
        <div className="bg-gray-600 w-[1px] h-8 flex ml-[32px]"></div>
      </div>

      <div className="flex sm:ml-auto gap-4">
        <button>
          <img src={settings} alt="" />
        </button>

        <button>
          {/* profile Button */}

          <div className="w-10 h-10 rounded-full bg-red-500 flex justify-center items-center">

             <img
            src={logo}
            alt=""
            className="w-10 h-10 rounded-full flex object-contain"
          />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default AdminHeader;
