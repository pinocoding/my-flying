import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./FlightInfor.css";

function FlightInfor({ img, name }) {
  const blueText = {
    color: `rgba(77, 70, 250, 1)`,
    fontFamily: `SVN-Biennale`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `21px`,
  };
  return (
    <div className="flight-container">
      <div className="flight-list-container"></div>

      <ul>
        <li>Flight detail</li>
        <li>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInfor;
