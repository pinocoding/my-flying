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
      <div className="conditions">
        <div>Conditions</div>
        <div className="yourflights-brand">
          <div className="yourflights-brandlogo">
            <img src={img} alt="" />
          </div>
          <div>
            <div className="yourflights-dateBottom">Bamboo Airways</div>
            <div className="yourflights-datedetailsBottom ">QH-183 Economy</div>
          </div>
        </div>

        <div className="from-to">
          <div>
            <p>Da Nang</p>
            <p></p>
            <p>Ho Chi Minh City</p>
          </div>
          <div>Economy</div>
          <div>Non - Refundable</div>
        </div>
      </div>
      <div className="price-details">
        <div>price details</div>
        <div>
          <div>
            <p>Adult Basic Fare (x1)</p>
            <p>Tax </p>
            <p></p>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default FlightInforFormBottmTwo;
