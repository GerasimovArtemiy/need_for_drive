import { useState } from 'react';
import PropTypes from 'prop-types';
import './MyInput.scss';

export default function MyInput({ label, placeholder, typeDate }) {
    const [typeInput, setTypeInput] = useState('text');
    const handleType = () => {
        if (typeDate) {
            setTypeInput('datetime-local');
        }
    };
    return (
        <div className="orderpage__step_search">
            <label htmlFor="search">{label}</label>
            <input onFocus={handleType} id="search" placeholder={placeholder} type={typeInput} />
        </div>
    );
}
MyInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    typeDate: PropTypes.bool,
};
MyInput.defaultProps = {
    label: 'Заголовок',
    placeholder: 'Начните вводить...',
    typeDate: false,
};
