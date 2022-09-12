import React, { useState } from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import Header from "../Header/Header";
import TravelBooking from "../TravelBooking/TravelBooking";
import Footer from "../Footer/Footer";
import "./Home.css";

const textColor = {
  color: `rgba(76, 70, 250, 1)`,
  fontWeight: "600",
};
const textColor = {
  fontFamily: "SVN-Biennale",
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `16px`,
  lineHeight: `24px`,

  color: `#4D46FA`,
};
const smallText = {
  fontFamily: "SVN-Biennale",
  fontStyle: `normal`,
  fontWeight: `400`,
  fontSize: `12px`,
  lineHeight: `18px`,

  color: `#000000`,
};

const text = {
  fontFamily: "SVN-Biennale",
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `14px`,
  lineHeight: `21px`,

  color: `#000000`,
};
function Home() {
  const [show, setShow] = useState(false);
  const [showOutlay, setShowOutlay] = useState(false);

  const handleShow = (e) => {
    setShow(true);
  };
  const handleHide = (e) => {
    setShow(false);
  };

  return (
    <div className="home">
      <div className="home-outlay"></div>
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
      />
      <Footer />
    </div>
  );
}

export default Home;
