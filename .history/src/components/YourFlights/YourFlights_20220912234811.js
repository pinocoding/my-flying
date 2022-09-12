import React from "react";

import "./YourFlights.css";
function YourFlights({ Bamboo }) {
  // window.onscroll = function () {
  //   myFunction();
  // };

  // var header = document.getElementById("myHeader");
  // var sticky = header.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
  return (
    <div className="yourflights">
      <div className="yourflights-tittle">your flights</div>
      <div className="yourflights-container">
        <div className="yoursflight-wrapper">
          <div className="yourflights-date">
            <div className="yourflights-dateLogo">01</div>
            <div>
              <div className="yourflights-dateTop">Fri, 11 Feb, 2022</div>
              <div className="yourflights-dateBottom">
                Da Nang - Ho Chi Minh
              </div>
            </div>
          </div>
          <div className="yourflights-brand">
            <div className="yourflights-brandlogo">
              <img src={Bamboo} alt="" />
            </div>
            <div>
              <div className="yourflights-dateBottom">Bamboo Airways</div>
              <div className="yourflights-datedetails">Details</div>
            </div>
          </div>
          <ul className="flight-stuff yourflights-stuff">
            <li className="flight-time">
              <p className="flight-time-date">21:40</p>
              <buttons className="flight-DAD">DAD</buttons>
            </li>
            <li className="flight-direc">
              <p>1h30m</p>
              <p></p>
              <p>Direct</p>
            </li>

            <li className="flight-time">
              <p>23:10</p>
              <buttons className="flight-DAD">DAD</buttons>
            </li>
          </ul>
          <div className="yourflights-changeDeparture">
            Change departure flight
          </div>
        </div>

        <div className="yourflights-dateTwo-wrapper">
          <div className="yourflights-date ">
            <div className="yourflights-dateLogo yourflights-dateLogo-two">
              02
            </div>
            <div>
              <div className="yourflights-dateTop">Sun, 13 Feb, 2022</div>
              <div className="yourflights-dateBottom">
                Da Nang - Ho Chi Minh
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="yourflights-total">
        <div>Subtotal</div>
        <div className="yourflights-total-price">1,322,000 vnd</div>
      </div>
    </div>
  );
}

export default YourFlights;
