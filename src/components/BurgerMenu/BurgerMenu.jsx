import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { menuLinks } from '../constants';
import MessengerIcons from './MessengerIcons';

export default function BurgerMenu({ active }) {
    BurgerMenu.propTypes = {
        active: PropTypes.bool,
    };
    BurgerMenu.defaultProps = {
        active: false,
    };

    return (
        <div className={`burger__menu ${active ? 'burger__menu_active' : ''}`}>
            <div className="burger__menu_main">
                <div className="burger__menu_content">
                    <ul>
                        {menuLinks.map((i) => (
                            <li key={i.id}>
                                <a href={i.href}>{i.value}</a>
                            </li>
                        ))}
                    </ul>
                    <MessengerIcons />
                </div>
            </div>
            <div className="burger__menu_empty" />
        </div>
    );
}
