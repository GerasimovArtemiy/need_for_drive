import PropTypes from 'prop-types';
import './MyRadioButton.scss';

export default function MyRadioButton({ id, labelText, name, value }) {
    return (
        <div className="orderpage__step_radiobutton">
            <input
                id={`radio${id}`}
                name={name}
                type="radio"
                className="radiobutton"
                value={value}
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
    name: PropTypes.string,
    id: PropTypes.string,
};
MyRadioButton.defaultProps = {
    labelText: 'Заголовок',
    value: '',
    name: 'name',
    id: '',
};
