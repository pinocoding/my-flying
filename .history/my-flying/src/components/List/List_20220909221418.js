import React from "react";
import HeaderList from "../Header/HeaderList";
import Footer from "../Footer/Footer";
import Bamboo from "../../assets/images/babu.jpg";
import Airline from "../../assets/images/airline.jpg";
import YourFlights from "../YourFlights/YourFlights";
import { AiFillCaretDown } from "react-icons/ai";
import FlightForm from "../FlightForm/FlightForm";
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
            <div className="select-dropdown">
              <select className="select">
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
                <option value="Transit">Transit</option>
              </select>
              <AiFillCaretDown className="selectdown-icon" />
            </div>
            <div className="select-dropdown">
              <select className="select">
                <option value="Transit">Time</option>
                <option value="Transit">Time</option>
                <option value="Transit">Time</option>
                <option value="Transit">Time</option>
              </select>
              <AiFillCaretDown className="selectdown-icon" />
            </div>
            <div className="select-dropdown">
              <select className="select">
                <option value="Transit">Airline</option>
                <option value="Transit">Airline</option>
                <option value="Transit">Airline</option>
                <option value="Transit">Airline</option>
              </select>
              <AiFillCaretDown className="selectdown-icon" />
            </div>
            <div className="select-dropdown">
              <select className="select">
                <option value="Transit">Low Price</option>
                <option value="Transit">Low Price</option>
                <option value="Transit">Low Price</option>
                <option value="Transit">Low Price</option>
              </select>
              <AiFillCaretDown className="selectdown-icon" />
            </div>
          </div>

          <div className="list-row">
            <FlightForm name="Bamboo Airways" img={Bamboo} />
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
