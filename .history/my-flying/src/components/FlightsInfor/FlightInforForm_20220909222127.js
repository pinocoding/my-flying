import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./FlightInforForm.css";

function FlightInforForm({ img, name }) {
  const blueText = {
    color: `rgba(77, 70, 250, 1)`,
    fontFamily: `SVN-Biennale`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `21px`,
  };
  const meal = {
    marginRight: `7px`,
  };

  return (
    <div className="FlightInforForm-container">
      <div className="FlightInforForm-list-container">
        <ul className="FlightInforForm-list">
          <li>
            <div className="FlightInforForm-img">
              <img src={img} alt="#" />
            </div>
          </li>
          <li className="FlightInforForm-name">{name}</li>
        </ul>
        <ul className="FlightInforForm-stuff">
          <li className="FlightInforForm-time">
            <p>21:40</p>
            <p>DAD</p>
          </li>
          <li className="FlightInforForm-direc">
            <p>1h30m</p>
            <p></p>
            <p>Direct</p>
          </li>

          <li className="FlightInforForm-time">
            <p>23:10</p>
            <p>DAD</p>
          </li>
        </ul>

        <ul className="flight-eat">
          <li className="flight-meal">
            <p>
              <BsBagCheck style={meal} />
              Baggage <span style={blueText}>20kg</span>
            </p>
            <p>
              <ImSpoonKnife style={meal} />
              In-Flight <span style={blueText}>Meal</span>
            </p>
          </li>
          <li className="flight-price">
            <p className="flight-old">1326000</p>
            <p className="flight-new">1322000</p>
          </li>
        </ul>

        <button className="flight-choose">Choose</button>
      </div>

      <ul className="flight-details">
        <li>Flight detail</li>
        <li>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInforForm;
