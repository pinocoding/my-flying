import React from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightForm.css";
function FlightFormTwo({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />

        <FlightInforFormBottmOne img={img} />
      </div>
    </div>
  );
}

export default FlightFormTwo;
