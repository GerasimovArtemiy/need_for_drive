import { useSelector } from 'react-redux';
import OrderPage4 from '../OrderPage4/OrderPage4';
import './OrderPage5.scss';

export default function OrderPage5() {
    const { order } = useSelector((state) => state.fetchTotal);

    return (
        <div className="orderpage__step-5">
            <div className="orderpage__step-5_order-number">Заказ номер {order.data.id}</div>
            <h1 className="orderpage__step-5_title"> Ваш заказ подтверждён </h1>
            <OrderPage4 />
        </div>
    );
}
