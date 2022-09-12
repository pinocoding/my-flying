import React from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import "./Home.css";
import Header from "../Header/Header";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className="home-hero">
      <p>Hello</p>
      <p>Where are</p>
      <p></p>
      </div>
      <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div>
    </div>
  );
}

export default Home;
