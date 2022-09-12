import React from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottm from ""
import "./FlightForm.css";
function FlightForm({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />

        <FlightInforFormBottm />
      </div>
    </div>
  );
}

export default FlightForm;
