import React from "react";
import { BsTelephone } from "react-icons/bs";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="">
            {" "}
            <BsTelephone />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
