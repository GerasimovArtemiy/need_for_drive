import PropTypes from 'prop-types';
import MyRadioButton from './MyRadioButton/MyRadioButton';

export default function RadioButtonGroup({ radioButtons, selectedButton, onChange }) {
    return (
        <>
            {radioButtons.map(({ id, label }) => (
                <MyRadioButton
                    key={id}
                    id={id}
                    value={label}
                    labelText={label}
                    checked={selectedButton === label}
                    onChange={onChange}
                />
            ))}
        </>
    );
}
RadioButtonGroup.propTypes = {
    radioButtons: PropTypes.instanceOf(Array),
    selectedButton: PropTypes.string,
    onChange: PropTypes.func,
};
RadioButtonGroup.defaultProps = {
    radioButtons: [],
    selectedButton: 'Все модели',
    onChange: () => {},
};
