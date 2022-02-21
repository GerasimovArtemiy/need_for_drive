import './Header.scss';
import mark from '../../assets/icons/markmap.svg';

export default function Header() {
    return (
        <header className="homepage__header">
            <div className="homepage__header_logo">Need for drive</div>
            <div className="homepage__header_city">
                <img
                    className="homepage__header_city-mark"
                    src={mark}
                    alt="markmap"
                />
                <div>Ульяновск</div>
            </div>
        </header>
    );
}
