import React from "react";
import FlightInfor from "../FlightsInfor/FlightInfor";
import "./FlightForm.css";
function FlightForm({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />
      </div>
    </div>
  );
}

export default FlightForm;
