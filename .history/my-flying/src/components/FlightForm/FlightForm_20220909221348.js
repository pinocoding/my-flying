import React from "react";
import FlightInfor from "../FlightsInfor/FlightInfor";
import "./FlightForm.css";
function FlightForm({ Bamboo }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInfor {Bamboo}/>
      </div>
    </div>
  );
}

export default FlightForm;
