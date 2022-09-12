import React from "react";
import "./FlightInfor.css";

function FlightInfor() {
  return (
    <div className="flight-container">
      <ul>
        <li>logo</li>
        <li className="flight-name"></li>
        <li className="flight-time">21:40</li>
      </ul>
    </div>
  );
}

export default FlightInfor;
