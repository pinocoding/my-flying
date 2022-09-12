import React, { useState } from "react";
import {
  InDecreaBtnAdult,
  InDecreaBtnChildren,
} from "../InDecreaBtn/InDecreaBtn";
import "./TravelBooking.css";

function TravelBooking({ show, handleShow, handleHide }) {
  const [counterAdult, setCounterAdult] = useState(0);
  const [counterChildren, setCounterChildren] = useState(0);
  return (
    <div className="home-booking">
      <ul className="home-booking-selection">
        <li>
          <div className="round-container">
            <div className="round">
              <input type="checkbox" defaultChecked id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
          </div>
          <div className="home-booking-contend">One way / Round-trip</div>
        </li>
        <li>
          <div className="round-container">
            <div className="round">
              <input type="checkbox" defaultChecked id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
          </div>
          <div className="home-booking-contend">Multi-city</div>
        </li>
        <li className="home-selectMembers">
          <div onClick={handleShow}>
            <span style={{color:"rgba(77, 70, 250, 1)"}}>{counterAdult}</span> Adult, <span>{counterChildren} </span>
            children
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
              <li onClick={handleHide}>Submit</li>
            </ul>
          )}
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default TravelBooking;
