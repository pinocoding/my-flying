import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/#">
            <BsTelephone className="footer-icon" />
          </a>
          <span>Call us: +84 908 02 02 58</span>
        </li>

        <li>
          <a href="/#">
            <AiOutlineMail className="footer-icon" />
          </a>
          <span>Email: chucinog@gmail.com</span>
        </li>
      </ul>

      <div>
        <span>Follow us</span>
      </div>
    </div>
  );
}

export default Footer;
