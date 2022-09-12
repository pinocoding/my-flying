import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./FlightInfor.css";

function FlightInfor() {
  const blueText = {
    color: `rgba(77, 70, 250, 1)`,
    font
  };
  return (
    <div className="flight-container">
      <ul className="flight-list">
        <li>logo</li>
        <li className="flight-name"></li>
        <li className="flight-time">
          <p>21:40</p>
          <p>DAD</p>
        </li>

        <li className="flight-direc">
          <p>1h30m</p>
          <p></p>
          <p>Direct</p>
        </li>
        <li className="flight-time">
          <p>23:10</p>
          <p>DAD</p>
        </li>

        <li className="flight-meal">
          <p>
            <BsBagCheck /> Baggage <span style={blueText}>20kg</span>
          </p>
          <p>
            <ImSpoonKnife /> In-flight <span style={blueText}>Meal</span>
          </p>
        </li>

        <li className="flight-price">
          <p className="flight-old">1326000</p>
          <p className="flight-new">1322000</p>
        </li>
        <li className="flight-choose">
          <button>Choose</button>
        </li>
      </ul>

      <ul>
        <li>Flight detail</li>
        <li>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInfor;
