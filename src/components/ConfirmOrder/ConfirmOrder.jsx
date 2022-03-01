import PropTypes from 'prop-types';
import './ConfirmOrder.scss';
import MyModal from '../UI/MyModal/MyModal';

export default function ConfirmOrder({ visibleModal, setVisibleModal }) {
    return (
        <MyModal visible={visibleModal} setVisible={setVisibleModal}>
            <div className="orderpage__step-4_modal">
                <h1>Подтвердить заказ</h1>
                <div className="orderpage__step-4_modal-btns">
                    <button className="orderpage__step-4_modal-btn " type="button">
                        Подтвердить
                    </button>
                    <button
                        onClick={() => setVisibleModal(!visibleModal)}
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
ConfirmOrder.propTypes = {
    visibleModal: PropTypes.bool,
    setVisibleModal: PropTypes.func,
};
ConfirmOrder.defaultProps = {
    visibleModal: false,
    setVisibleModal: () => {},
};
