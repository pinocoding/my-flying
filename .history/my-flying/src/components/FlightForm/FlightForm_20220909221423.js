import React from "react";
import FlightInfor from "../FlightsInfor/FlightInfor";
import "./FlightForm.css";
function FlightForm({ img }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInfor Bamboo={Bamboo} />
      </div>
    </div>
  );
}

export default FlightForm;
