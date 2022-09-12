import React, { useState } from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormOne.css";
function FlightFormOne({ img, name }) {
  const [isshow, setShow] = useState(false);

  return (
    <div className="flightForm">
      <FlightInforForm
        img={img}
        name={name}
        onClick={() => setShow((oldState) => !oldState)}
      />

      {show && <FlightInforFormBottmOne img={img} />}
    </div>
  );
}

export default FlightFormOne;