import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import './OrderLayout.scss';

export default function OrderLayout() {
    return (
        <div className="order">
            <div className="order__content">
                <div className="order__container">
                    <Header />
                    <div className="order__navigation">
                        <NavLink to="/need_for_drive/order">Местоположение</NavLink>
                        <NavLink to="/need_for_drive/order">Модель</NavLink>
                        <NavLink to="/need_for_drive/order">Дополнительно</NavLink>
                        <NavLink to="/need_for_drive/order">Итого</NavLink>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
