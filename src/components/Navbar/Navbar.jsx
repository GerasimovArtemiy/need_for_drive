import React from 'react';
import './Navbar.sass';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__burger">
        <span></span>
      </div>
      <div className="navbar__language_rus">
        <span>Рус</span>
      </div>
      <div style={{ display: 'none' }} className="navbar__language_eng">
        Eng
      </div>
    </nav>
  );
};

export default Navbar;
