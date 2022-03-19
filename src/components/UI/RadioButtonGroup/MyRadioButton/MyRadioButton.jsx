import PropTypes from 'prop-types';
import './MyRadioButton.scss';

export default function MyRadioButton({ name, checked, value, onChange }) {
    function showLabelText(labelText) {
        if (labelText === 'color') {
            return value;
        }
        if (labelText === 'tariff') {
            return `${value.rateTypeId?.name}, ${value.price}₽ / ${value.rateTypeId?.unit}`;
        }
        return value.name;
    }

    return (
        <div
            className="orderpage__step_radiobutton"
            role="button"
            tabIndex={0}
            onClick={() => onChange(value)}
            onKeyDown={() => onChange(value)}
        >
            <input
                className="radiobutton"
                type="radio"
                value={value.name}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <label htmlFor={`radio${name}`} className="radiobutton__label">
                {showLabelText(name)}
            </label>
        </div>
    );
}
MyRadioButton.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]),
    checked: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
};
MyRadioButton.defaultProps = {
    value: {},
    checked: false,
    name: 'Заголовок',
    onChange: () => {},
};
