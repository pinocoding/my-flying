import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <div>Baycungban</div>
        
      </div>
      <div className="header-nav">
        <ul>
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
      </div>
      <button className="header-booking">Booking now</button>
    </div>
  );
}

export default Header;
