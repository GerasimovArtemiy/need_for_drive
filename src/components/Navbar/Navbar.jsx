import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LanguageButton from '../LanguageButton/LanguageButton';
import './Navbar.sass';

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <nav className="navbar">
      <BurgerMenu active={burgerActive} />
      <div
        className="burger-wrapper"
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <div
          className={
            burgerActive
              ? 'navbar__burger_white'
              : ' navbar__burger_white navbar__burger_black'
          }
        >
          <span className={burgerActive ? 'navbar__burger_active' : ''}></span>
        </div>
      </div>
      <LanguageButton />
    </nav>
  );
};

export default Navbar;
