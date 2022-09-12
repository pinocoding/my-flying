import React from "react";
import "./FlightInforFormBottmOne.css";
function FlightInforFormBottmOne() {
  return (
    <div className="FlightInforFormBottmOne">
      <div className="FlightInforFormBottmOne-left">
        <div className="FlightInforFormBottmOne-left-date">
          <div>
            <p>21:40</p>
            <p>11 Feb</p>
          </div>

          <div>1h 30m</div>
          <div>
            <p>21:40</p>
            <p>11 Feb</p>
          </div>
        </div>
        <div className="FlightInforFormBottmOne-left-date">
          <div>
            <p>Da nang (DAD)</p>
            <span>Da Nang Airport</span>
          </div>

          <div>
            <span>Ho Chi Minh City (SGN)</span>
            <span>Tansonnhat Intl</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="FlightInforFormBottmOne-right">2</div>
    </div>
  );
}

export default FlightInforFormBottmOne;
