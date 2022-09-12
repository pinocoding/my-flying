import React, { useState } from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import FlightInforFormBottmOne from "../FlightsInfor/FlightInforFormBottmOne";
import FlightInforFormBottmTwo from "../FlightsInfor/FlightInforFormBottmOne";
import "./FlightFormOne.css";
function FlightFormOne({ img, name }) {
  const [showFlighDEtail, setShowFlighDEtail] = useState(false);
  const [showFareInfo, setShowFareInfo] = useState(false);

  return (
    <div className="flightForm">
      <FlightInforForm
        img={img}
        name={name}
        setShowFlighDEtail={setShowFlighDEtail}
      />

      {showFlighDEtail && <FlightInforFormBottmOne img={img} />}
      {showFareInfo && <FlightInforFormBottmTwo img={img} />}
    </div>
  );
}

export default FlightFormOne;
