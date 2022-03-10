import PropTypes from 'prop-types';
import MyRadioButton from '../MyRadioButton/MyRadioButton';

export default function RadioButtonGroup({ radioButtons, selectedClassCar, onChange }) {
    return (
        <>
            {radioButtons.map(({ id, label }) => (
                <MyRadioButton
                    key={id}
                    id={id}
                    value={label}
                    labelText={label}
                    checked={selectedClassCar === label}
                    onChange={onChange}
                />
            ))}
        </>
    );
}
RadioButtonGroup.propTypes = {
    radioButtons: PropTypes.instanceOf(Array),
    selectedClassCar: PropTypes.string,
    onChange: PropTypes.func,
};
RadioButtonGroup.defaultProps = {
    radioButtons: [],
    selectedClassCar: 'Все модели',
    onChange: () => {},
};
