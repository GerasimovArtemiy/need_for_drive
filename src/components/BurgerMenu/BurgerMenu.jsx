import React from 'react';
import './BurgerMenu.sass';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook_icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram_icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram_icon.svg';

const BurgerMenu = ({ active }) => {
    const menuLinks = [
        { value: 'ПАРКОВКА', href: '#' },
        { value: 'СТРАХОВКА', href: '#' },
        { value: 'БЕНЗИН', href: '#' },
        { value: 'ОБСЛУЖИВАНИЕ', href: '#' },
    ];
    return (
        <div
            className={
                !active ? 'burger__menu' : 'burger__menu burger__menu_active'
            }
        >
            <div className="burger__menu_main">
                <div className="burger__menu_content">
                    <ul>
                        {menuLinks.map((i) => (
                            <li>
                                <a href={i.href}>{i.value}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="burger__menu_icon">
                        <TelegramIcon className="burger__menu_icon-telegram" />
                        <FacebookIcon className="burger__menu_icon-facebook" />
                        <InstagramIcon className="burger__menu_icon-instagram" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
