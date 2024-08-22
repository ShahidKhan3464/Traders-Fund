import React from "react";
import { NavLink, Link } from "react-router-dom";

import ClosedNav from "../../components/ClosedNav";
import closenav from "../../images/icons/navclose.svg";

import "../Navbar.css";
import { AdminSidebarData } from "./AdminSidebarData";
import Traders from "../../images/icons/person-circle.svg";
import Login from "../../images/icons/Login.svg";

// ----------------------SIDEBAR / NAVBAR ------------------
const AdminNav = ({ activeNav, setActiveNav }) => {
  // const [active, setActive] = useState(true);
  return (
    <div className="navbar sm:mx-6 mx-auto">
      <ClosedNav setActiveNav={setActiveNav} activeNav={activeNav}></ClosedNav>
      <div className={`sidebar ${activeNav ? "" : "inactive"}`}>
        <div className="logo-row">
          {/* <div className="logo"></div> */}
          {/* <div className="close-nav flex text-white text-sm items-center justify-center gap-2">
            <img
              src={closenav}
              alt=""
              onClick={() => setActiveNav(!activeNav)}
            />
          </div> */}
        </div>

        <div className="sidebar-link-container">
          <ul className="sidebar-list">
            {AdminSidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className={val.cName}
                  // onClick={() => setActiveNav(!activeNav)}
                >
                  <NavLink to={val.link} className="row">
                    <div id="icon">
                      <img src={val.icon} alt="" />
                    </div>
                    <div id="title">{val.title}</div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
