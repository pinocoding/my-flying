import React from "react";
import Header from "../Header/Header"
import homeBackGround from "."
import "./Home.css"
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-img">
        <img src={homeBackGround} alt="/#" alt="" />
      </div>
    </div>
  );
}

export default Home;
