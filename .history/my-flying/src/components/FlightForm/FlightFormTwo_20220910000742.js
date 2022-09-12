import React from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormTwo.css";
function FlightFormTwo({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />

        <FlightInforFormBottm img={img} />
      </div>
    </div>
  );
}

export default FlightFormTwo;
