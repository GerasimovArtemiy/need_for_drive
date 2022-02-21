import { ReactComponent as FacebookIcon } from '../../assets/icons/MessengerIcons/facebook_icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/MessengerIcons/instagram_icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/MessengerIcons/telegram_icon.svg';

export default function MessengerIcons() {
    return (
        <div className="burger__menu_icon">
            <TelegramIcon className="burger__menu_icon-telegram" />
            <FacebookIcon className="burger__menu_icon-facebook" />
            <InstagramIcon className="burger__menu_icon-instagram" />
        </div>
    );
}
