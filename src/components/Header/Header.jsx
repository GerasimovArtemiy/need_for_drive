import { Link } from 'react-router-dom';
import './Header.scss';
import mark from '../../assets/icons/markmap.svg';
import routerPath from '../Routes/routerPath';

export default function Header() {
    return (
        <header className="homepage__header">
            <div className="homepage__header_logo">
                <Link to={routerPath.homePage}>Need for drive</Link>
            </div>
            <div className="homepage__header_city">
                <img className="homepage__header_city-mark" src={mark} alt="markmap" />
                <div>Ульяновск</div>
            </div>
        </header>
    );
}
