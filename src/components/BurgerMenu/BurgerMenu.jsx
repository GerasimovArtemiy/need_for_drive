import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook_icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram_icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram_icon.svg';
import { menuLinks } from '../constants';

export default function BurgerMenu({ active }) {
    BurgerMenu.propTypes = {
        active: PropTypes.bool,
    };
    BurgerMenu.defaultProps = {
        active: false,
    };

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
                            <li key={i.id}>
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
}
