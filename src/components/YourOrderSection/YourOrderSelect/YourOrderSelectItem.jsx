import PropTypes from 'prop-types';
import './YourOrderSelectItem.scss';

export default function YourOrderPickModel({ title, subtitle }) {
    return (
        <div className="orderpage__your-order_item">
            <div className="orderpage__your-order_title">{title}</div>
            <div className="orderpage__your-order_dotes" />
            <div className={subtitle === 'Ошибка!' ? 'orderpage__your-order_error' : 'orderpage__your-order_info'}>
                {subtitle}
            </div>
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
