import PropTypes from 'prop-types';
import MyRadioButton from '../MyRadioButton/MyRadioButton';

export default function RadioButtonGroup({ radioButtons }) {
    return (
        <>
            {radioButtons.map(({ id, label }) => (
                <MyRadioButton key={id} labelText={label} />
            ))}
        </>
    );
}
RadioButtonGroup.propTypes = {
    radioButtons: PropTypes.instanceOf(Array),
};
RadioButtonGroup.defaultProps = {
    radioButtons: [],
};
