import React from "react";
import vn from "../../assets/images/vn.svg";
import usa from "../../assets/images/usa.svg";
import "./HeaderList.css";

function Header() {
  return (
    <div className="headerList">
      <div className="headerList-logo">
        <div className="headerList-logo-name">Baycungban</div>
        <div className="header-logovn">
          <img src={vn} alt="" />
        </div>
        <div className="header-logousa">
          <img src={usa} alt="" />
        </div>
      </div>

      <ul className="headerList-nav">
        <li>
          <button>
            <a href="/#">Promotion</a>
          </button>
        </li>
        <li>
          <button>
            <a href="/#">Flight Schedule</a>
          </button>
        </li>
        <li>
          <a href="/#">About us</a>
        </li>
        <li>
          <a href="/#">Payment Guide</a>
        </li>
      </ul>

      <button className="headerList-booking">Booking now</button>
    </div>
  );
}

export default Header;
