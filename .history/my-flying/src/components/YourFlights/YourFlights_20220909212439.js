import React from "react";
import "./YourFlights.css";
function YourFlights() {
  return (
    <div className="yourflights">
      <div className="yourflights-tittle">your flights</div>
      <div className="yourflights-container">
        <div className="yoursflight-wrapper">
          <div className="yourflights-date">
            <div>logo</div>
            <div>
              <div className="yourflights-dateTop">Fri, 11 Feb, 2022</div>
              <div>Da Nang - Ho Chi Minh</div>
            </div>
          </div>
          <div className="yourflights-brand">
            <div>
              <div>logo</div>
              <div>
                <div>Bamboo Airways</div>
                <div>Details</div>
              </div>
            </div>
          </div>
          <ul className="flight-stuff">
            <li className="flight-time">
              <p>21:40</p>
              <p>DAD</p>
            </li>
            <li className="flight-direc">
              <p>1h30m</p>
              <p></p>
              <p>Direct</p>
            </li>

            <li className="flight-time">
              <p>23:10</p>
              <p>DAD</p>
            </li>
          </ul>
          <div className="yourflights-changeDeparture">
            Change departure flight
          </div>
        </div>

        <div className="yourflights-date">
          <div>
            <div>logo</div>
            <div>
              <div>Fri, 11 Feb, 2022</div>
              <div>Da Nang - Ho Chi Minh</div>
            </div>
          </div>
        </div>
      </div>

      <div className="yourflights-total">
        <div>Subtotal</div>
        <div>1,322,000 vnd</div>
      </div>
    </div>
  );
}

export default YourFlights;
