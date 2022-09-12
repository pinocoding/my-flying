import React from "react";
import "./FlightInforFormBottmOne.css";
function FlightInforFormBottmOne() {
  return (
    <div className="FlightInforFormBottmOne">
      <div className="FlightInforFormBottmOne-left">
        <div className="FlightInforFormBottmOne-left-date">
          <div className="date-top">
            <p>21:40</p>
            <p>11 Feb</p>
          </div>

          <div className="date-mid">1h 30m</div>
          <div className="date-bottom">
            <p>21:40</p>
            <p>11 Feb</p>
          </div>
        </div>
        <div className="FlightInforFormBottmOne-right-date">
          <div className="date-right-top">
            <p>Da nang (DAD)</p>
            <p>Da Nang Airport</p>
          </div>

          <div className="date-right-top">
            <p>Ho Chi Minh City (SGN)</p>
            <p>Tansonnhat Intl</p>
          </div>
        </div>
      </div>
      <div className="FlightInforFormBottmOne-right">2</div>
    </div>
  );
}

export default FlightInforFormBottmOne;
