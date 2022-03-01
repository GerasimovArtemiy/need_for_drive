import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LanguageButton from '../LanguageButton/LanguageButton';
import './Navbar.scss';

export default function Navbar() {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <>
            <BurgerMenu burgerActive={burgerActive} />
            <nav style={{ position: burgerActive ? 'fixed' : '' }} className="navbar">
                <div
                    role="button"
                    tabIndex={0}
                    className="burger-wrapper"
                    onClick={() => setBurgerActive(!burgerActive)}
                    onKeyDown={() => setBurgerActive(!burgerActive)}
                >
                    <div
                        className={`navbar__burger_white ${
                            burgerActive ? '' : 'navbar__burger_black'
                        }`}
                    >
                        <span className={burgerActive ? 'navbar__burger_active' : ''} />
                    </div>
                </div>
                <LanguageButton burgerActive={burgerActive} />
            </nav>
        </>
    );
}
