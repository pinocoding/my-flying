import React from "react";
import "./HeaderList.css";

function Header() {
  return (
    <div className="headerList">
      <div className="headerList-logo">
        <div className="headerList-logo-name">Baycungban</div>
        {/* <div>img</div>
        <div>img</div> */}
      </div>

      <ul className="headerList-nav">
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

      <button className="headerList-booking">Booking now</button>
    </div>
  );
}

export default Header;
