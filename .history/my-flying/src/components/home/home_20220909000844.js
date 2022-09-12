import React, { useState } from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import Header from "../Header/Header";
import TravelBooking from "../../TravelBooking/TravelBooking";
// import Footer from "../Footer/Footer";
import "./Home.css";

const textColor = {
  color: `rgba(76, 70, 250, 1)`,
  fontWeight: "600",
};
function Home() {
  const [show, setShow] = useState(false);
   const [counter, setCounter] = useState(0);

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
      <TravelBooking
        handleHide={handleHide}
        handleShow={handleShow}
        show={show}
        ={counter}
      />
    </div>
  );
}

export default Home;
