import React, { useState } from "react";
import {
  InDecreaBtnAdult,
  InDecreaBtnChildren,
} from "../InDecreaBtn/InDecreaBtn";
import { AiFillCaretDown } from "react-icons/ai";

import "./TravelBooking.css";

function TravelBooking({
  handleShowBusiness,
  handleHideBusiness,
  showBusiness,
  show,
  handleShow,
  handleHide,
}) {
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
            <span style={{ color: "rgba(77, 70, 250, 1)" }}>
              {counterAdult}
            </span>{" "}
            Adult,{" "}
            <span style={{ color: "rgba(77, 70, 250, 1)" }}>
              {counterChildren}{" "}
            </span>
            children
            <AiFillCaretDown className="down-icon" />
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
        <li className="home-business">
          {/* <div onClick={handleShowBusiness}>
            Business Class <AiFillCaretDown className="down-iconBusiness" />
          </div> */}

          <select className="home-businessSelect">
            <option value="Economy">Economy</option>
            <option value="Premium">Premium Economy</option>
            <option value="0">Business Class</option>
            <option value="1">First Class</option>
          </select>
          {/* {showBusiness && (
            <ul className="home-selectMembers-list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <button
                onClick={handleHideBusiness}
                style={{ width: "100%", marginTop: "10px" }}
              >
                Submit
              </button>
            </ul>
          )} */}
        </li>
      </ul>
    </div>
  );
}

export default TravelBooking;
