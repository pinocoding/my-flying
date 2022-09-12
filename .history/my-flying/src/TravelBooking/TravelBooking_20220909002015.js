import React,{ useState} from "react";
import InDecreaBtn from "../InDecreaBtn/InDecreaBtn";
import "./TravelBooking.css";

function TravelBooking({
  show,
  handleShow,
  handleHide,

})
const [counterAdult, setCounterAdult] = useState(0);
const [counter, setCounter] = useState(0);

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
          <div onClick={handleShow}>{counterAdult} Adult, 01 children</div>

          {show && (
            <ul className="home-selectMembers-list">
              <li>
                Adult{" "}
                <InDecreaBtn
                  counterAdult={counterAdult}
                  setCounterAdult={setCounterAdult}
                />
              </li>
              <li>
                Children <InDecreaBtn />
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
