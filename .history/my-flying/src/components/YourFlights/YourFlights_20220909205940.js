import React from "react";
import "./YourFlights.css";
function YourFlights() {
  return (
    <div className="yourflights">
      <div className="yourflights-tittle">your flights</div>
      <div className="yourflights-container">
        <div className="yourflights-date">
          <div>
            <div>logo</div>
          </div>
        </div>
        <div className="yourflights-brand"></div>
        <div className="yourflights-time"></div>
        <div className="yourflights-changeDeparture">
          Change departure flight
        </div>
      </div>
      <div className="yourflights-address"></div>
      <div className="yourflights-total"></div>
    </div>
  );
}

export default YourFlights;
