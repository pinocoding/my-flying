import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/#" className="footer-link">
            <BsTelephone className="footer-icon" />
          </a>
          <span>Call us: +84 908 02 02 58</span>
        </li>

        <li>
          <a href="/#" className="footer-link">
            <AiOutlineMail className="footer-icon" />
          </a>
          <span>Email: chucinog@gmail.com</span>
        </li>
      </ul>

      <div>
        <span className=>Follow us</span>
        <a href="/#" className="footer-link">
          <TiSocialFacebook className="footer-icon" />
        </a>
        <a href="/#" className="footer-link">
          <AiOutlineInstagram className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
