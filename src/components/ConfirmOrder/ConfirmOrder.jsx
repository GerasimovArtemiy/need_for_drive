import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderModal } from '../../store/Slices/TotalSlice';
import { postOrder } from '../../store/Slices/fetchTotalSlice';
import './ConfirmOrder.scss';
import MyModal from '../UI/MyModal/MyModal';
import { orderStatusNew } from '../../API/orderStatus';
import routerPath from '../Routes/routerPath';

export default function ConfirmOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orderModal } = useSelector((state) => state.totalStep);
    const { city, point, car, color, dateFrom, dateTo, tariff, totalPrice, extraServices } = useSelector(
        (state) => state.allForm
    );
    const { order } = useSelector((state) => state.fetchTotal);

    function sendOrder() {
        dispatch(
            postOrder({
                orderStatusId: orderStatusNew,
                cityId: {
                    name: city.name,
                    id: city.id,
                },
                pointId: {
                    name: point.name,
                    id: point.id,
                },
                carId: car,
                color,
                dateFrom: Date.parse(dateFrom),
                dateTo: Date.parse(dateTo),
                rateId: tariff,
                price: totalPrice,
                isFullTank: extraServices[0].checked,
                isNeedChildChair: extraServices[1].checked,
                isRightWheel: extraServices[2].checked,
            })
        );
    }
    useEffect(() => {
        if (order.status === 'resolved') {
            navigate(`${routerPath.orderPage}ID:${order.data.id}`);
            dispatch(setOrderModal(false));
        }
    }, [order.status]);
    return (
        <MyModal visible={orderModal} setVisible={() => dispatch(setOrderModal(!orderModal))}>
            {order.status === null || order.status === 'loading' ? (
                <div className="orderpage__step-4_modal">
                    <h1>Подтвердить заказ</h1>
                    <div className="orderpage__step-4_modal-btns">
                        <button onClick={() => sendOrder()} className="orderpage__step-4_modal-btn " type="button">
                            Подтвердить
                        </button>
                        <button
                            onClick={() => dispatch(setOrderModal(!orderModal))}
                            className="orderpage__step-4_modal-btn orderpage__step-4_modal-btn-back"
                            type="button"
                        >
                            Вернуться
                        </button>
                    </div>
                </div>
            ) : (
                <div className="orderpage__step-4_modal">
                    <h1>Произоша ошибка, обратитесь в службу поддержки</h1>
                    <button
                        onClick={() => dispatch(setOrderModal(!orderModal))}
                        className="orderpage__step-4_modal-btn orderpage__step-4_modal-btn-back"
                        type="button"
                    >
                        Вернуться
                    </button>
                </div>
            )}
        </MyModal>
    );
}
