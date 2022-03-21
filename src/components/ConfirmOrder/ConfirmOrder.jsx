import { useSelector, useDispatch } from 'react-redux';
import { setOrderModal } from '../../store/Slices/TotalSlice';
import './ConfirmOrder.scss';
import MyModal from '../UI/MyModal/MyModal';

export default function ConfirmOrder() {
    const dispatch = useDispatch();
    const { orderModal } = useSelector((state) => state.totalStep);
    return (
        <MyModal visible={orderModal} setVisible={() => dispatch(setOrderModal(!orderModal))}>
            <div className="orderpage__step-4_modal">
                <h1>Подтвердить заказ</h1>
                <div className="orderpage__step-4_modal-btns">
                    <button className="orderpage__step-4_modal-btn " type="button">
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
        </MyModal>
    );
}
