import React from 'react';

import './style.css';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-container">
          <a href="#" title="home" className="logo">
            <img src={logo} alt="logo"></img>
            <span className="logo-text">Hacker News</span>
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
