import PropTypes from 'prop-types';
import './YourOrderSelectItem.scss';

export default function YourOrderPickModel({ title, subtitle }) {
    return (
        <div className="orderpage__your-order_item">
            <div>{title}</div>
            <div />
            <div>{subtitle}</div>
        </div>
    );
}
YourOrderPickModel.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
YourOrderPickModel.defaultProps = {
    title: 'Заголовок',
    subtitle: 'Подзаголовок',
};
