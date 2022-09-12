import React from "react";
import vn from "../../assets/images/vn.svg";
import usa from "../../assets/images/usa.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo-name">Baycungban</div>
        <div className="header-logovn">
          <img src={vn} alt="" />
        </div>
        <div className="header-logo">
          <img src={usa} alt="" />
        </div>
      </div>

      <ul className="header-nav">
        <li>
          <a href="/#">Promotion</a>
        </li>
        <li>
          <a href="/flight-schedule">Flight Schedule</a>
        </li>
        <li>
          <a href="/#">About us</a>
        </li>
        <li>
          <a href="/#">Payment Guide</a>
        </li>
      </ul>

      <button className="header-booking">Booking now</button>
    </div>
  );
}

export default Header;
