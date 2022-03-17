import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CrossBtn from './CrossBtn';
import './MyInput.scss';

export default function MyInput({ label, placeholder, typeDate, value, onChange, name }) {
    const [typeInput, setTypeInput] = useState('text');
    const handleType = () => {
        if (typeDate) {
            setTypeInput('datetime-local');
        }
    };

    return (
        <div className="orderpage__step_MyInput">
            <label htmlFor={name}>{label}</label>
            <input
                onFocus={handleType}
                name={name}
                placeholder={placeholder}
                type={typeInput}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <span
                className={classNames('cross-input__btn', {
                    'cross-input__btn_dates': typeInput === 'datetime-local',
                })}
            >
                {value && <CrossBtn />}
            </span>
        </div>
    );
}
MyInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    typeDate: PropTypes.bool,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};
MyInput.defaultProps = {
    label: 'Заголовок',
    placeholder: 'Начните вводить...',
    typeDate: false,
    value: '',
    name: '',
    onChange: () => {},
};
