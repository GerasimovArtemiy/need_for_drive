import React, { useState } from 'react';
import './LanguageButton.sass';

const LanguageButton = () => {
    const [changeLanguage, setChangeLanguageActive] = useState(false);
    return (
        <>
            <div
                onClick={() => setChangeLanguageActive(!changeLanguage)}
                className={
                    changeLanguage
                        ? 'navbar__language'
                        : 'navbar__change_language'
                }
            >
                <span>Рус</span>
            </div>
            <div
                onClick={() => setChangeLanguageActive(!changeLanguage)}
                className={
                    !changeLanguage
                        ? 'navbar__language'
                        : 'navbar__change_language'
                }
            >
                <span>Eng</span>
            </div>
        </>
    );
};

export default LanguageButton;
