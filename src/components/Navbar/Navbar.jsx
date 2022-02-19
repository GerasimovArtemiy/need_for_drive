import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LanguageButton from '../LanguageButton/LanguageButton';
import './Navbar.scss';

export default function Navbar() {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <nav className="navbar">
            <BurgerMenu active={burgerActive} />
            <div
                role="button"
                tabIndex={0}
                className="burger-wrapper"
                onClick={() => setBurgerActive(!burgerActive)}
                onKeyDown={() => setBurgerActive(!burgerActive)}
            >
                <div
                    className={
                        burgerActive
                            ? 'navbar__burger_white'
                            : ' navbar__burger_white navbar__burger_black'
                    }
                >
                    <span
                        className={burgerActive ? 'navbar__burger_active' : ''}
                    />
                </div>
            </div>
            <LanguageButton />
        </nav>
    );
}
