import React from "react";
import { BsTelephone } from "react-icons/bs";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/#">
            <BsTelephone />
          </a>
          <span>Call us: +84 908 02 02 58</span>
        </li>

        <li>
          <a href="/#">
            <BsTelephone />
          </a>
          <span>Call us: +84 908 02 02 58</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
