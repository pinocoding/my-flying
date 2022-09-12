import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import "./SubHeader.css";

function SubHeader() {
  const [a, setA] = useState("Da Nang (DAD)");
  const [b, setB] = useState("Ho Chi Minh (SGN)");

  const handleSwap = () => {
    const aTemp = a;
    const bTemp = b;
    setA(bTemp); // swap a
    setB(aTemp); // swap b
  };
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
      <FaExchangeAlt
        className="exchangeBtn-icon exchangeBtn-iconv2"
        onClick={handleSwap}
      />
      <div className="subheader-location">
        <div>
          <p style={textColor}>{a}</p>
          <p style={smallText}>Fri, 22 Mar, 2022</p>
        </div>
        <div>
          <p style={textColor}></p>
          <p style={smallText}>Fri, 22 Mar, 2022</p>
        </div>
      </div>
      <div className="subheader-list">
        <p className="subheader-list-itemOne" style={text}>
          Round-trip
        </p>
        <p className="subheader-list-itemTwo" style={text}>
          <span style={{ color: "rgba(77, 70, 250, 1)" }}>02</span> Adult,{" "}
          <span style={{ color: "rgba(77, 70, 250, 1)" }}>01</span> children
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
