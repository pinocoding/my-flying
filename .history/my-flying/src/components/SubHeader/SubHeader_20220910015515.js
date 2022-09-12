import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SubHeader.css";

function SubHeader() {
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
  return (
    <div className="subheader">
      <div className="subheader-location">
        <div>
          <p style={textColor}>Da Nang (DAD)</p>
          <p style={smallText}>Fri, 22 Mar, 2022</p>
        </div>
        <div>
          <p style={textColor}>Ho Chi Minh (SGN)</p>
          <p style={smallText}>Fri, 22 Mar, 2022</p>
        </div>
      </div>
      <div className="subheader-list">
        <p className="subheader-list-itemOne" style={text}>
          Round-trip
        </p>
        <p className="subheader-list-itemTwo" style={text}>
          02 Adult, 01 children
        </p>
        <p className="subheader-list-itemThree" style={text}>
          Business Class
        </p>
      </div>
      <button className="subheader-btn">
        <span style={{ paddingRight: "10px" }}>Change Flights</span>{" "}
        <BsSearch />
      </button>
    </div>
  );
}

export default SubHeader;
