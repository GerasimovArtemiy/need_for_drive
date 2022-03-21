import PropTypes from 'prop-types';
import Select, { createFilter } from 'react-select';
import CrossBtn from '../../../components/UI/MyInput/CrossBtn';
import './SelectInput.scss';

export default function SelectInput(props) {
    const { onChange, options, valueState, onReset, placeholder, name, isDisabled, labelText } = props;

    const filterConfig = {
        ignoreCase: true,
        ignoreAccents: true,
        trim: true,
        matchFrom: 'start',
    };

    return (
        <div className="orderpage__step_search">
            <label className="orderpage__step_search-label">{labelText}</label>
            <Select
                className="orderpage__step_search-input"
                classNamePrefix="orderpage__step_search-input"
                name={name}
                onChange={onChange}
                options={options}
                value={valueState ? options.filter(({ value }) => value === valueState) : null}
                isSearchable
                placeholder={placeholder}
                isDisabled={isDisabled}
                noOptionsMessage={() => 'Пункт не найден'}
                filterOption={createFilter(filterConfig)}
            />
            <span
                id={name}
                role="button"
                tabIndex={0}
                onClick={onReset}
                onKeyDown={onReset}
                className="cross-search__btn"
            >
                {valueState && <CrossBtn />}
            </span>
        </div>
    );
}
SelectInput.propTypes = {
    onChange: PropTypes.func,
    valueState: PropTypes.string,
    onReset: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    isDisabled: PropTypes.bool,
    labelText: PropTypes.string,
    options: PropTypes.instanceOf(Object),
};
SelectInput.defaultProps = {
    onChange: () => {},
    valueState: '',
    onReset: () => {},
    placeholder: 'Начните вводить ...',
    name: '',
    isDisabled: false,
    labelText: '',
    options: {},
};
