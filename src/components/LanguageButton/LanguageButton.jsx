import { useState } from 'react';
import './LanguageButton.scss';

export default function LanguageButton() {
    const [changeLanguage, setChangeLanguageActive] = useState(false);
    return (
        <>
            <div
                role="button"
                tabIndex={0}
                onClick={() => setChangeLanguageActive(!changeLanguage)}
                onKeyDown={() => setChangeLanguageActive(!changeLanguage)}
                className={
                    changeLanguage
                        ? 'navbar__language'
                        : 'navbar__change_language'
                }
            >
                <span>Рус</span>
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={() => setChangeLanguageActive(!changeLanguage)}
                onKeyDown={() => setChangeLanguageActive(!changeLanguage)}
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
}
