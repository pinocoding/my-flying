import React from "react";
import "./FlightInforFormBottmTwo.css";
function FlightInforFormBottmTwo({ img }) {
  const blueText = {
    fontFamily: `SVN-Biennale`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `21px`,
    color: `rgba(77, 70, 250, 1)`,
    /* identical to box height */
  };
  return (
    <div className="FlightInforFormBottmTwo">
      <div className="conditions"></div>
      <div className="price-details"></div>
    </div>
  );
}

export default FlightInforFormBottmTwo;
