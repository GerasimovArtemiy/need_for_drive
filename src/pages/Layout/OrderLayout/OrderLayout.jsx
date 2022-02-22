import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as OrderArrNav } from '../../../assets/icons/order-arrow_nav.svg';
import Header from '../../../components/Header/Header';
import './OrderLayout.scss';

export default function OrderLayout() {
    return (
        <div className="order">
            <div className="order__content">
                <div className="order__container">
                    <Header />
                    <hr className="order__hr_top" />
                    <div className="order__navigation">
                        <NavLink to="/need_for_drive/order/">Местоположение</NavLink>
                        <OrderArrNav className="order__arr" />
                        <NavLink to="/need_for_drive/order/step_2">Модель</NavLink>
                        <OrderArrNav className="order__arr" />
                        <NavLink to="/need_for_drive/order/step_3">Дополнительно</NavLink>
                        <OrderArrNav className="order__arr" />
                        <NavLink to="/need_for_drive/order/step_4">Итого</NavLink>
                    </div>
                    <hr className="order__hr_bot" />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
