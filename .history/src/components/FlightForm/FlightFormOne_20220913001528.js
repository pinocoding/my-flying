import React, { useState } from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormOne.css";
function FlightFormOne({ img, name }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

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
