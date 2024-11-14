// Footer.jsx
import React from "react";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="header__wrapper">
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <p className="footer-text">Copyright ©2020 All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
