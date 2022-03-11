import PropTypes from 'prop-types';
import './MyCheckbox.scss';

export default function MyCheckbox({ id, labelText }) {
    return (
        <div className="orderpage__step_checkbox">
            <input id={`checkbox${id}`} type="checkbox" className="checkbox" />
            <label htmlFor={`checkbox${id}`} className="checkbox__label">
                {labelText}
            </label>
        </div>
    );
}
MyCheckbox.propTypes = {
    labelText: PropTypes.string,
    id: PropTypes.string,
};
MyCheckbox.defaultProps = {
    labelText: 'Заголовок',
    id: '',
};
