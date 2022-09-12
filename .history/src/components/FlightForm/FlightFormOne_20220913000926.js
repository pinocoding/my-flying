import React, { useState } from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormOne.css";
function FlightFormOne({ img, name }) {
  
  
  const [ show,setShow] = useState(
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />

        <FlightInforFormBottmOne img={img} />
      </div>
    </div>
  );
}

export default FlightFormOne;
