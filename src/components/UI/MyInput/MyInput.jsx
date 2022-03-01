import PropTypes from 'prop-types';
import './MyInput.scss';

export default function MyInput({ label, placeholder, type }) {
    return (
        <div className="orderpage__step_search">
            <label htmlFor="search">{label}</label>
            <input id="search" placeholder={placeholder} type={type} />
        </div>
    );
}
MyInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};
MyInput.defaultProps = {
    label: 'Заголовок',
    placeholder: 'Начните вводить...',
    type: 'text',
};
