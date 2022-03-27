import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../store/Slices/fetchTotalSlice';
import { recoveryOrder, setRentTime } from '../../store/Slices/AllFormSlice';
import './OrderPage5.scss';

export default function OrderPage5() {
    const dispatch = useDispatch();
    const { order } = useSelector((state) => state.fetchTotal);
    const { orderId } = useParams();

    function getRentTime(from, to) {
        if (to > from) {
            const time = to - from;
            const days = Math.floor(time / (1000 * 60 * 60 * 24)) ? `${Math.floor(time / (1000 * 60 * 60 * 24))}д` : '';
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
                ? `${Math.floor((time / (1000 * 60 * 60)) % 24)}ч`
                : '';
            const minutes = Math.floor((time / (1000 * 60)) % 60) ? `${Math.floor((time / (1000 * 60)) % 60)}м` : '';
            const rentDuration = `${days} ${hours} ${minutes}`;
            return rentDuration;
        }
        return 'Ошибка!';
    }

    useEffect(() => {
        if (order.status === null && orderId) dispatch(getOrderById(orderId));
        if (order.status === 'resolved') dispatch(recoveryOrder(order.data));
        dispatch(setRentTime(getRentTime(order.data.dateFrom, order.data.dateTo)));
    }, [order.status]);

    const dateTransform = new Date(order.data.dateFrom).toLocaleTimeString(navigator.language, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    const orderItems = [
        { id: 0, title: 'Цвет', subtitle: order.data.color },
        { id: 1, title: 'Тариф', subtitle: order.data?.rateId?.rateTypeId.name },
        { id: 2, title: 'Топливо', subtitle: order.data.isFullTank && '100%' },
        { id: 3, title: 'Детское кресло', subtitle: order.data.isNeedChildChair && 'Да' },
        { id: 4, title: 'Правый руль', subtitle: order.data.isRightWheel && 'Да' },
        { id: 5, title: 'Доступна с', subtitle: dateTransform },
    ];

    return (
        <div className="orderpage__step-5">
            <div className="orderpage__step-5_order-number">Заказ номер {order.data.id}</div>
            <h1 className="orderpage__step-5_title">
                {order.data.orderStatusId?.name === 'Новые' ? 'Ваш заказ подтверждён' : 'Ваш заказ отменен'}
            </h1>
            <div className="orderpage__step-4_container">
                <div className="orderpage__step-4_content">
                    <h1>{order.data.carId?.name}</h1>
                    <div className="orderpage__step-4_license-plate">
                        <span>{order.data.carId?.number} </span>
                    </div>
                    {orderItems.map(
                        ({ id, title, subtitle }) =>
                            subtitle && (
                                <div className="orderpage__step-4_item" key={id}>
                                    <span>{title} </span>
                                    <span>{subtitle}</span>
                                </div>
                            )
                    )}
                </div>
                <div className="orderpage__step-4_img-car">
                    <img src={order.data.carId?.thumbnail.path} alt={order.data.carId?.name} />
                </div>
            </div>
        </div>
    );
}
