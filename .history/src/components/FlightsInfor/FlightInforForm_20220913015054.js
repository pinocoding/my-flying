import React, { useState } from "react";
import { BsBagCheck } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./FlightInforForm.css";

function FlightInforForm({
  img,
  name,
  showFlighDEtail,
  setShowFlighDEtail,
  setShowFareInfo,
}) {
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

  const handletestShow = () => {
    setShowFlighDEtail((oldState) => !oldState);
    setShowFareInfo(false);
  };

  const handleShow = () => {
    setShowFareInfo((oldState) => !oldState);
    setShowFlighDEtail(false);
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
            <buttons className="flight-DAD">DAD</buttons>
          </li>
          <li className="FlightInforForm-direc">
            <p className="FlightInforForm-date">1h30m</p>

            <p>Direct</p>
          </li>

          <li className="FlightInforForm-time">
            <p>23:10</p>
            <buttons className="flight-DAD">DAD</buttons>
          </li>
        </ul>

        <ul className="FlightInforForm-eat">
          <li className="FlightInforForm-meal">
            <p>
              <BsBagCheck style={meal} />
              Baggage <span style={blueText}>20kg</span>
            </p>
            <p>
              <ImSpoonKnife style={meal} />
              In-Flight <span style={blueText}>Meal</span>
            </p>
          </li>
          <li className="FlightInforForm-price">
            <p className="FlightInforForm-old">1,326,000 vnd</p>
            <p className="FlightInforForm-new">1,322,000 vnd</p>
          </li>
        </ul>

        <button className="FlightInforForm-choose">Choose</button>
      </div>

      <ul className="FlightInforForm-details">
        <li onClick={handletestShow} className=>Flight detail</li>
        <li onClick={handleShow}>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInforForm;
