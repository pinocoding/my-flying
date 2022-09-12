import React, { useState } from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormOne.css";
function FlightFormOne({ img, name }) {
  const [showFlighDEtail, setShow] = useState(false);
  const [isshow, setIsShow] = useState(false);

  return (
    <div className="flightForm">
      <FlightInforForm img={img} name={name} setIsShow={setIsShow} />

      {isshow && <FlightInforFormBottmOne img={img} />}
    </div>
  );
}

export default FlightFormOne;
