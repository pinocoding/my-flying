import React from "react";
import 

function TravelBooking({show,handleShow,handleHide}) {
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
          <div onClick={handleShow}>01 Adult, 01 children</div>

          {show && (
            <ul className="home-selectMembers-list">
              <li>Adult - 1 +</li>
              <li>Children - 1 +</li>
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
