import { useState } from 'react';
import PropTypes from 'prop-types';
import './LanguageButton.scss';

export default function LanguageButton({ burgerActive }) {
    LanguageButton.propTypes = {
        burgerActive: PropTypes.bool,
    };
    LanguageButton.defaultProps = {
        burgerActive: false,
    };
    const [changeLanguage, setChangeLanguageActive] = useState(false);
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => setChangeLanguageActive(!changeLanguage)}
            onKeyDown={() => setChangeLanguageActive(!changeLanguage)}
            className="navbar__language"
            style={{ visibility: burgerActive ? 'visible' : '' }}
        >
            <span>{changeLanguage ? 'Рус' : 'Eng'}</span>
        </div>
    );
}
