import React, { useState } from 'react';
import './NavigationMenu.css';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <div className="header-nav__wrapper">
    <div className="header-nav__wrapper2">
      <nav className="header-nav">
        {/* Бургер-меню */}
        <button className="burger-menu" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        
        {/* Список навігації */}
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/works" className={({ isActive }) => (isActive ? 'active' : '')}>
              Works
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/all-blogs" className={({ isActive }) => (isActive ? 'active' : '')}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default NavigationMenu;






