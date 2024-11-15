import React from 'react';
import {Link } from 'react-router-dom'; 
import './Header.css'; 
import myImage from '../../assets/images/path_to_image.png'; 

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="content-wrapper">
          <div className="header-content__wrapper">
            <div className="header-content">
              <div className="header-text">
                <h1>Hi, I am John, <br />Creative Technologist</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="download-btn">
                  <a href="/resume1.pdf" download="resume1.pdf">
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
            <div className="header-image">
              <img src={myImage} alt="John" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;