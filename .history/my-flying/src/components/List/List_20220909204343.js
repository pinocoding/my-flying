import React from "react";
import HeaderList from "../Header/HeaderList";
import Footer from "../Footer/Footer";
import Bamboo from "../../assets/images/babu.jpg";
import Airline from "../../assets/images/airline.jpg";
import YourFlights from "../YourFlights/YourFlights";

import "./List.css";
import FlightInfor from "../FlightsInfor/FlightInfor";
function List() {
  return (
    <div className="list">
      <HeaderList />

      <div className="list-container">
        <div className="list-infor">
          <div className="list-filter">filter here</div>

          <div className="list-row">
            <FlightInfor name="Vietnam Airlines" img={Airline} />
          </div>
          <div className="list-row">
            <FlightInfor name="Bamboo Airways" img={Bamboo} />
          </div>
          <div className="list-row">
            <FlightInfor name="Vietnam Airlines" img={Airline} />
          </div>
          <div className="list-row">
            <FlightInfor name="Bamboo Airways" img={Bamboo} />
          </div>
          <div className="list-row">
            <FlightInfor name="Vietnam Airlines" img={Airline} />
          </div>
          <div className="list-row">
            <FlightInfor name="Bamboo Airways" img={Bamboo} />
          </div>
        </div>

        <div className="list-userFlight">
          <YourFlights />
          Your Flight
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
