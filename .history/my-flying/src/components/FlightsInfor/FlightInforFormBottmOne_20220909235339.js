import React from "react";
import "./FlightInforFormBottmOne.css";
function FlightInforFormBottmOne({ img }) {
  return (
    <div className="FlightInforFormBottmOne">
      <div className="FlightInforFormBottmOne-left">
        <div className="FlightInforFormBottmOne-left-date">
          <div className="date-top">
            <p className="date-top-time">21:40</p>
            <p className="date-top-date">11 Feb</p>
          </div>

          <div className="date-mid">1h 30m</div>
          <div className="date-bottom">
            <p className="date-top-time">21:40</p>
            <p className="date-top-date">11 Feb</p>
          </div>
        </div>
        <div className="FlightInforFormBottmOne-right-date">
          <div className="date-right-top">
            <p className="date-top-time">Da nang (DAD)</p>
            <p className="date-top-date">Da Nang Airport</p>
          </div>

          <div className="date-right-bottom">
            <p className="date-top-time">Ho Chi Minh City (SGN)</p>
            <p className="date-top-date">Tansonnhat Intl</p>
          </div>
        </div>
      </div>
      <div className="FlightInforFormBottmOne-right">
        <div className="yourflights-brand">
          <div className="yourflights-brandlogo">
            <img src={img} alt="" />
          </div>
          <div>
            <div className="yourflights-dateBottom">Bamboo Airways</div>
            <div className="yourflights-datedetailsBottom ">QH-183 Economy</div>
          </div>
        </div>
        <div className="form-bottom">
          <div className="form-bottom-left">
            <p>
              Baggage <span>20kg</span>
            </p>
            <p>
              In-flight <span>Meal</span>
            </p>
            <p>
              In-flight <span>Entertainment</span>
            </p>
          </div>
          <div className="form-bottom-right">
            <p>
              Aircraft <span style={blueText}>Airbus A321</span>{" "}
            </p>
            <p>
              Seat <span style={blueText}>layout 3-3</span>
            </p>
            <p>
              Seat pitch <span style={blueText}>29 inches (standard)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightInforFormBottmOne;
