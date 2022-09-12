import React from "react";
import homeBackGround from "../../assets/images/homebackground.jpg"
import "./Home.css"
import Home from "../Home/"
function Home() {
  return (
    <div className="home">
      <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div>
    </div>
  );
}

export default Home;
