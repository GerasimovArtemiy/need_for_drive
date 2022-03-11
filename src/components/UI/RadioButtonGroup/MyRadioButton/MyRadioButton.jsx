import PropTypes from 'prop-types';
import './MyRadioButton.scss';

export default function MyRadioButton({ id, labelText, checked, value, onChange }) {
    return (
        <div className="orderpage__step_radiobutton">
            <input
                className="radiobutton"
                id={`radio${id}`}
                type="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <label htmlFor={`radio${id}`} className="radiobutton__label">
                {labelText}
            </label>
        </div>
    );
}
MyRadioButton.propTypes = {
    labelText: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.number,
    onChange: PropTypes.func,
};
MyRadioButton.defaultProps = {
    labelText: 'Заголовок',
    value: '',
    checked: false,
    id: 0,
    onChange: () => {},
};
