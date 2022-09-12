import React from "react";
import "./FlightInfor.css";

function FlightInfor() {
  return (
    <div className="flight-container">
      <ul>
        <li>logo</li>
        <li className="flight-name"></li>
        <li className="flight-time">
          <p>21:40</p>
          <p>DAD</p>
        </li>
        <li className="flight-time">
          <p>23:40</p>
          <p>DAD</p>
        </li>
      </ul>
    </div>
  );
}

export default FlightInfor;
