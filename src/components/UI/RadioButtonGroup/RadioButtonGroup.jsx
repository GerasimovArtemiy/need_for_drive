import PropTypes from 'prop-types';
import MyRadioButton from './MyRadioButton/MyRadioButton';

export default function RadioButtonGroup({ name, radioButtons, selectedButton, onChange }) {
    function checkedButton(btn) {
        if (name === 'tariff' && selectedButton.rateTypeId)
            return selectedButton.rateTypeId.name === btn.rateTypeId?.name;
        if (name === 'color') return selectedButton === btn;
        if (name === 'carClass') return selectedButton.name === btn.name;
        return false;
    }
    return (
        <>
            {radioButtons.map(
                (btn, i) =>
                    (typeof btn === 'string' || typeof btn.name === 'string' || btn.rateTypeId) && (
                        <MyRadioButton
                            key={i}
                            name={name}
                            value={btn}
                            checked={checkedButton(btn)}
                            onChange={onChange}
                        />
                    )
            )}
        </>
    );
}
RadioButtonGroup.propTypes = {
    name: PropTypes.string,
    radioButtons: PropTypes.instanceOf(Array),
    selectedButton: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]),
    onChange: PropTypes.func,
};
RadioButtonGroup.defaultProps = {
    name: 'Заголовок',
    radioButtons: [],
    selectedButton: {},
    onChange: () => {},
};
