import PropTypes from 'prop-types';
import classNames from 'classnames';
import listCardCars from './constants';
import './ListCars.scss';
import carTest from '../../assets/img/car-img.jpg';

export default function ListCars({ selectedCar, onChange }) {
    return (
        <div className="orderpage__step-2__cars">
            {listCardCars.map(({ id, title, price }) => (
                <div
                    key={id}
                    role="button"
                    tabIndex={0}
                    className={classNames('orderpage__step-2__cars_card', {
                        'orderpage__step-2__cars_card-active': title === selectedCar,
                    })}
                    onClick={() => onChange(title)}
                    onKeyDown={() => onChange(title)}
                >
                    <h1 className="orderpage__step-2__cars_model">{title}</h1>
                    <h2 className="orderpage__step-2__cars_price">{price}</h2>
                    <div className="orderpage__step-2__cars_img">
                        <img src={carTest} alt="carTest" />
                    </div>
                </div>
            ))}
        </div>
    );
}
ListCars.propTypes = {
    selectedCar: PropTypes.string,
    onChange: PropTypes.func,
};
ListCars.defaultProps = {
    selectedCar: '',
    onChange: () => {},
};
