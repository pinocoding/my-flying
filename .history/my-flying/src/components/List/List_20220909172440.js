import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Bamboo from  ""

import "./List.css";
import FlightInfor from "../FlightsInfor/FlightInfor";
function List() {
  return (
    <div className="list">
      <Header />

      <div className="list-container">
        <div className="list-infor">
          <div className="list-filter">filter here</div>
          <div className="list-row">
            <FlightInfor name="Bamboo Airways" />
          </div>
        </div>

        <div className="list-userFlight">Your Flight</div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
