import React from "react";
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
      <div>
        <p>Round-trip</p>
        <p>02 Adult, 01 children</p>
        <p>Business Class</p>
      </div>
      <button>Change Flights</button>
    </div>
  );
}

export default SubHeader;
