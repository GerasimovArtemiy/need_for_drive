import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import OrderNavLinks from '../../../components/OrderNavLinks/OrderNavLinks';
import YourOrderSection from '../../../components/YourOrderSection/YourOrderSection';
import './OrderLayout.scss';

export default function OrderLayout() {
    return (
        <div className="orderpage">
            <div className="sas" />
            <Navbar />
            <div className="orderpage__container">
                <Header />
                <OrderNavLinks />
                <div className="orderpage__content">
                    <main className="orderpage__main">
                        <Outlet />
                    </main>
                    <YourOrderSection />
                </div>
            </div>
        </div>
    );
}
