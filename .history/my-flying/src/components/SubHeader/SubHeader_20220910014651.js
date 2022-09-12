import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="subheader">
      <div className="subheader-location">
        <div>
          <p>Da Nang (DAD)</p>
          <p>Fri, 22 Mar, 2022</p>
        </div>
        <div>
          <p>Ho Chi Minh (SGN)</p>
          <p>Fri, 22 Mar, 2022</p>
        </div>
      </div>
      <div className="subheader-list">
        <p className="subheader-list-itemOne">Round-trip</p>
        <p className="subheader-list-itemOne">02 Adult, 01 children</p>
        <p>Business Class</p>
      </div>
      <button className="subheader-btn">
        <span style={{ paddingRight: "10px" }}>Change Flights</span>{" "}
        <BsSearch />
      </button>
    </div>
  );
}

export default SubHeader;
