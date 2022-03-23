import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { setOrderModal } from '../../../store/Slices/TotalSlice';
import routerPath from '../../Routes/routerPath';
import './YourOrderButton.scss';

export default function YourOrderButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { locationStep, carStep, moreStep, totalStep } = useSelector((state) => state.validPage);

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
                return null;
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
                return 'Отменить';
        }
    }

    return (
        <button
            type="button"
            className={classNames({
                'orderpage__your-order_btn': isDisable(location.pathname),
                'orderpage__your-order_btn-active': !isDisable(location.pathname),
            })}
            disabled={isDisable(location.pathname)}
            onClick={showNextStep(location.pathname)}
        >
            {changeTitle(location.pathname)}
        </button>
    );
}
