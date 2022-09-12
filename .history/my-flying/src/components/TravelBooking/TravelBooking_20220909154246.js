import React, { useState } from "react";

import {
  InDecreaBtnAdult,
  InDecreaBtnChildren,
} from "../InDecreaBtn/InDecreaBtn";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AiFillCaretDown } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { VscCalendar } from "react-icons/vsc";

import "./TravelBooking.css";

function TravelBooking({ show, handleShow, handleHide }) {
  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);
  const [date, setDate] = useState(null);

  return (
    <div className="home-booking">
      <ul className="home-booking-selection">
        <li>
          <div className="round-containerOne">
            <div className="roundOne">
              <input type="checkbox" defaultChecked id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
          </div>
          <div className="home-booking-content">One way / Round-trip</div>
        </li>
        <li>
          <div className="round-containerOne">
            <div className="roundOne">
              <input type="checkbox" defaultChecked id="checkbox" />
              <label htmlFor="checkbox"></label>
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
            <select className="fromForm">
              <option value="hcm">Economy Class</option>
              <option value="Premium">Premium Class</option>
              <option value="Business">Business Class</option>
              <option value="First">First Class</option>
            </select>
          </div>

          <div>
            <select className="toForm">
              <option value="Economy">Economy Class</option>
              <option value="Premium">Premium Class</option>
              <option value="Business">Business Class</option>
              <option value="First">First Class</option>
            </select>
          </div>
        </div>
        <div className="home-bookingContainer-datePicker">
          <div className="departure">
            <div className="departure-title">DEPARTURE</div>
            <div className="date">
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
              <DatePicker />
              <VscCalendar />
            </div>
            <div>
              <button className="prevBtn">Prev</button>
              <button className="nextBtn">Next</button>
            </div>
          </div>

          <div className="return">
            <div className="return-title">RETURN</div>
            <div className="date">
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
              <VscCalendar />
            </div>
            <div>
              <button className="prevBtn">Prev</button>
              <button className="nextBtn">Next</button>
            </div>
          </div>
        </div>
      </div>
      <button className="searchFlight-btn">
        Search Flights
        <GrLinkNext className="next-Icon" />
      </button>
    </div>
  );
}

export default TravelBooking;
