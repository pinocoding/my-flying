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
          <div className="list-filter">
            <div>Filter</div>
            <div>
              <select name="" id="">
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
              </select>
              <select name="" id="">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
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
          <div className="list-row">
            <FlightInfor name="Vietnam Airlines" img={Airline} />
          </div>
          <div className="list-row">
            <FlightInfor name="Bamboo Airways" img={Bamboo} />
          </div>
        </div>

        <div className="list-userFlight">
          <YourFlights Bamboo={Bamboo} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
