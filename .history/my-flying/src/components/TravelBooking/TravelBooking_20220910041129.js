import React, { useState } from "react";
import {
  InDecreaBtnAdult,
  InDecreaBtnChildren,
} from "../InDecreaBtn/InDecreaBtn";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

import { AiFillCaretDown } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

import "./TravelBooking.css";

function TravelBooking({ show, handleShow, handleHide }) {
  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);

  const textColor = {
    fontFamily: "SVN-Biennale",
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `24px`,
    lineHeight: `24px`,

    color: `#4D46FA`,
  };
  const smallText = {
    fontFamily: "SVN-Biennale",
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `12px`,
    lineHeight: `18px`,

    color: `#000000`,

    opacity: `0.5`,
  };

  const text = {
    fontFamily: "SVN-Biennale",
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `21px`,

    color: `#000000`,
  };

  return (
    <div className="home-booking">
      <ul className="home-booking-selection">
        <li>
          <label>
            <input type="checkbox" onChange={() => {}} />
            <div className="home-booking-content">One way / Round-trip</div>
          </label>
        </li>
        <li>
          <div className="round-containerTwo">
            <div className="roundTwo">
              <input type="checkbox" className="inputTwo" />
              <label htmlFor="checkbox" className="labelTwo"></label>
            </div>
          </div>
          <div className="home-booking-content">Multi-city</div>
        </li>

        <li className="home-selectMembers">
          <div onClick={handleShow}>
            <span style={{ color: "rgba(77, 70, 250, 1)" }}>
              {counterAdult}
            </span>{" "}
            Adult,{" "}
            <span style={{ color: "rgba(77, 70, 250, 1)" }}>
              {counterChildren}{" "}
            </span>
            children
            <AiFillCaretDown className="down-icon" />
            <AiFillCaretDown className="down-iconBusiness" />
          </div>

          {show && (
            <ul className="home-selectMembers-list">
              <li>
                Adult{" "}
                <InDecreaBtnAdult
                  counterAdult={counterAdult}
                  setCounterAdult={setCounterAdult}
                />
              </li>
              <li>
                Children{" "}
                <InDecreaBtnChildren
                  counterChildren={counterChildren}
                  setCounterChildren={setCounterChildren}
                />
              </li>
              <button
                onClick={handleHide}
                style={{ width: "100%", marginTop: "10px" }}
              >
                Submit
              </button>
            </ul>
          )}
        </li>

        <select className="home-business">
          <option value="Economy">Economy Class</option>
          <option value="Premium">Premium Class</option>
          <option value="Business">Business Class</option>
          <option value="First">First Class</option>
        </select>
      </ul>
      <div className="home-bookingContainer">
        <div className="home-bookingContainer-exchange">
          <button className="exchangeBtn">
            <FaExchangeAlt className="exchangeBtn-icon" />
          </button>
          <div className="trimTop"></div>
          <div className="trimBot"></div>
          <div>
            <div className="fromForm">
              <p style={smallText}>FROM</p>
              <p style={textColor}> Da Nang</p>
              <p style={text}>Quang Nam, Viet Nam</p>
            </div>
          </div>

          <div>
            <div className="toForm">
              <p style={smallText}>TO</p>
              <p style={textColor}>Ho Chi Minh</p>
              <p style={text}>Viet Nam</p>
            </div>
          </div>
        </div>
        <div className="home-bookingContainer-datePicker">
          <div className="departure">
            <div className="departure-title">DEPARTURE</div>
            <div className="date">
              <DatePicker placeholder="m/dd/yy" />
            </div>
            <div>
              <button className="prevBtn">Prev</button>
              <button className="nextBtn">Next</button>
            </div>
          </div>

          <div className="return">
            <div className="return-title">RETURN</div>
            <div className="date">
              <DatePicker placeholder="m/dd/yy" />
            </div>
            <div>
              <button className="prevBtn">Prev</button>
              <button className="nextBtn">Next</button>
            </div>
          </div>
        </div>
      </div>

      <button className="searchFlight-btn">
        <a href="/List">
          Search Flights
          <GrLinkNext className="next-Icon" />
        </a>
      </button>
    </div>
  );
}

export default TravelBooking;
