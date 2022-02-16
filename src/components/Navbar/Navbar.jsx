import React, { useState } from 'react';
import './Navbar.sass';

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [changeLanguage, setChangeLanguageActive] = useState(false);

  return (
    <nav className="navbar">
      <div className='burger-wrapper' onClick={() => setBurgerActive(!burgerActive)}>
        <div className="navbar__burger">
          <span className={burgerActive ? 'navbar__burger_active' : ''}></span>
        </div>
      </div>
      <div onClick={() => setChangeLanguageActive(!changeLanguage)} 
           className={changeLanguage ? 'navbar__language' : 'navbar__change_language'}>
        <span>Рус</span>
      </div>
      <div onClick={() => setChangeLanguageActive(!changeLanguage)} 
           className={!changeLanguage ? 'navbar__language' : 'navbar__change_language'}>
        <span>Eng</span>
      </div>
    </nav>
  );
};

export default Navbar;
