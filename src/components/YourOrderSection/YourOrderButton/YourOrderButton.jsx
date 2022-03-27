import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { deleteOrder } from '../../../store/Slices/fetchTotalSlice';
import { setOrderModal } from '../../../store/Slices/TotalSlice';
import routerPath from '../../Routes/routerPath';
import './YourOrderButton.scss';

export default function YourOrderButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { locationStep, carStep, moreStep, totalStep } = useSelector((state) => state.validPage);
    const { order } = useSelector((state) => state.fetchTotal);

    function isDisable(path) {
        switch (path) {
            case routerPath.orderStep1:
                return !locationStep;
            case routerPath.orderStep2:
                return !carStep;
            case routerPath.orderStep3:
                return !moreStep;
            case routerPath.orderStep4:
                return !totalStep;
            default:
                return false;
        }
    }
    function showNextStep(path) {
        switch (path) {
            case routerPath.orderStep1:
                return () => navigate(routerPath.orderStep2);
            case routerPath.orderStep2:
                return () => navigate(routerPath.orderStep3);
            case routerPath.orderStep3:
                return () => navigate(routerPath.orderStep4);
            case routerPath.orderStep4:
                return () => dispatch(setOrderModal(true));
            default:
                if (order.data.orderStatusId?.name === 'Новые') {
                    return () => dispatch(deleteOrder(order.data));
                }
                return () => navigate(routerPath.homePage);
        }
    }
    function changeTitle(path) {
        switch (path) {
            case routerPath.orderStep1:
                return 'Выбрать модель';
            case routerPath.orderStep2:
                return 'Дополнительно';
            case routerPath.orderStep3:
                return 'Итого';
            case routerPath.orderStep4:
                return 'Заказать';
            default:
                if (order.data.orderStatusId?.name === 'Новые') {
                    return 'Отменить';
                }
                return 'На главную';
        }
    }

    return (
        <button
            type="button"
            className={classNames({
                'orderpage__your-order_btn': isDisable(location.pathname),
                'orderpage__your-order_btn-active': !isDisable(location.pathname),
                'orderpage__your-order_btn-cancel': changeTitle(location.pathname) === 'Отменить',
            })}
            disabled={isDisable(location.pathname)}
            onClick={showNextStep(location.pathname)}
        >
            {changeTitle(location.pathname)}
        </button>
    );
}
