import PropTypes from 'prop-types';
import { ReactComponent as YourOrderArr } from '../../../assets/icons/your-order-arrow.svg';
import './YourOrderArrow.scss';

export default function YourOrderArrow({ active, setActive }) {
    return (
        <YourOrderArr
            role="button"
            onClick={() => setActive(!active)}
            onKeyDown={() => setActive(!active)}
            className={`${
                !active ? 'orderpage__your-order_arr' : 'orderpage__your-order_arr-back'
            }`}
        />
    );
}
YourOrderArrow.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
};
YourOrderArrow.defaultProps = {
    active: false,
    setActive: () => {},
};
