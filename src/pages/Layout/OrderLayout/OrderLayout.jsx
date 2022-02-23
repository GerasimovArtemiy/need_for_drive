import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as OrderArrNav } from '../../../assets/icons/order-arrow_nav.svg';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import './OrderLayout.scss';

export default function OrderLayout() {
    return (
        <div className="orderpage">
            <Navbar />
            <div className="orderpage__wrapper">
                <hr className="orderpage__hr_bot" />
                <hr className="orderpage__hr_top" />
                <div className="orderpage__container">
                    <Header />
                    <div className="orderpage__navigation">
                        <NavLink to="/need_for_drive/order/step_1">Местоположение</NavLink>
                        <OrderArrNav className="orderpage__navigation_arr" />
                        <NavLink to="/need_for_drive/order/step_2">Модель</NavLink>
                        <OrderArrNav className="orderpage__navigation_arr" />
                        <NavLink to="/need_for_drive/order/step_3">Дополнительно</NavLink>
                        <OrderArrNav className="orderpage__navigation_arr" />
                        <NavLink to="/need_for_drive/order/step_4">Итого</NavLink>
                    </div>
                    <div className="orderpage__vr_right" />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
