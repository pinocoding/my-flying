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
      <ul className="flight-list">
        <li>
          <div className="flight-img">
            <img src={img} alt="#" />
          </div>
        </li>
        <li className="flight-name">{name}</li>
      </ul>
      <ul>
        
        
        
      </ul>
      <li className="flight-meal">
        <p>
          <BsBagCheck />
          Baggage <span style={blueText}>20kg</span>
        </p>
        <p>
          <ImSpoonKnife />
          In-Flight <span style={blueText}>Meal</span>
        </p>
      </li>

      <li className="flight-price">
        <p className="flight-old">1326000</p>
        <p className="flight-new">1322000</p>
      </li>
      <li className="flight-choose">
        <button>Choose</button>
      </li>

      <ul>
        <li>Flight detail</li>
        <li>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInfor;