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
      <ul>
        <li>
          <a href="/#">
            <BsTelephone />
          </a>
          <span>Call us: +84 908 02 02 58</span>
        </li>

        <li>
          <a href="/#">
            <AiOutlineMail />
          </a>
          <span>Email: chucinog@gmail.com</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
