import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CrossBtn.scss';

export default function CrossBtn({ type, onChange }) {
    return (
        <span
            className={classNames('cross__btn', {
                'cross__btn-dates': type === 'datetime-local',
            })}
            role="button"
            tabIndex={0}
            onClick={() => onChange('')}
            onKeyDown={() => onChange('')}
        >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z"
                    fill="#121212"
                />
            </svg>
        </span>
    );
}
CrossBtn.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
};
CrossBtn.defaultProps = {
    type: 'datetime-local',
    onChange: () => {},
};
