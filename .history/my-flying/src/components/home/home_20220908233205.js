import React, { useState } from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";

const textColor = {
  color: `rgba(76, 70, 250, 1)`,
  fontWeight: "600",
};
function Home() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(true);
  };
  const handleHide = (e) => {
    setShow(false);
  };
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className="home-hero">
        <p>Hello!</p>
        <p>Where are</p>
        <p>
          you <span style={textColor}>flying</span> to ...
        </p>
      </div>
      <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div>
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
            <div onClick={handleShow} >01 Adult, 01 children</div>

            {show && (
              <ul className="home-selectMembers-list">
                <li>Adult - 1 +</li>
                <li>Children - 1+</li>
                <li onClick={handleHide}>Submit</li>
              </ul>
            )}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
