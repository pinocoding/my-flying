import React from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmTwo from "../FlightsInfor/FlightInforFormBottmTwo";
import "./FlightFormTwo.css";
function FlightFormTwo({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />

        <FlightInforFormBottmTwo img={img} />
      </div>
    </div>
  );
}

export default FlightFormTwo;
