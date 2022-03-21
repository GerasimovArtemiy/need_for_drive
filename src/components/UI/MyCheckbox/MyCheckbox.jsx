import PropTypes from 'prop-types';
import './MyCheckbox.scss';

export default function MyCheckbox({ checkbox, onChange }) {
    const { id, title, checked } = checkbox;

    return (
        <div className="orderpage__step_checkbox">
            <input
                id={`checkbox${id}`}
                type="checkbox"
                checked={checked}
                className="checkbox"
                onChange={() => onChange(id)}
            />
            <label htmlFor={`checkbox${id}`} className="checkbox__label">
                {title}
            </label>
        </div>
    );
}
MyCheckbox.propTypes = {
    checkbox: PropTypes.instanceOf(Object),
    onChange: PropTypes.func,
};
MyCheckbox.defaultProps = {
    checkbox: {},
    onChange: () => {},
};
