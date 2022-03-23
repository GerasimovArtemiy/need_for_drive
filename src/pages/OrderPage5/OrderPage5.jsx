import OrderPage4 from '../OrderPage4/OrderPage4';
import './OrderPage5.scss';

export default function OrderPage5() {
    return (
        <div className="orderpage__step-5">
            <div className="orderpage__step-5_order-number">Заказ номер RU58491823</div>
            <h1 className="orderpage__step-5_title"> Ваш заказ подтвержден </h1>
            <OrderPage4 />
        </div>
    );
}
