import PropTypes from 'prop-types';
import MyCheckbox from '../MyCheckbox/MyCheckbox';

export default function MyCheckboxGroup({ checkboxButtons, onChange }) {
    return (
        <>
            {checkboxButtons.map((checkbox) => (
                <MyCheckbox key={checkbox.id} checkbox={checkbox} onChange={onChange} />
            ))}
        </>
    );
}
MyCheckboxGroup.propTypes = {
    checkboxButtons: PropTypes.instanceOf(Array),
    onChange: PropTypes.func,
};
MyCheckboxGroup.defaultProps = {
    checkboxButtons: [],
    onChange: () => {},
};
