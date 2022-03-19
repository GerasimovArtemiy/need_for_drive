import PropTypes from 'prop-types';
import './MyModal.scss';

export default function MyModal({ children, visible, setVisible }) {
    return (
        <div
            role="button"
            tabIndex={0}
            className={`orderpage__step_modal ${visible ? 'orderpage__step_modal-active' : ''}`}
            onClick={setVisible}
            onKeyDown={setVisible}
        >
            <div
                role="button"
                tabIndex={0}
                className="orderpage__step_modal-content"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
MyModal.propTypes = {
    children: PropTypes.element.isRequired,
    visible: PropTypes.bool,
    setVisible: PropTypes.func,
};
MyModal.defaultProps = {
    visible: false,
    setVisible: () => {},
};
