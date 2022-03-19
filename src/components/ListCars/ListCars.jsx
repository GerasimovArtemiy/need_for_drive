import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ListCars.scss';

export default function ListCars({ allCars, selectedCar, onChange }) {
    return (
        <div className="orderpage__step-2__cars">
            {allCars.map((car) => (
                <div
                    key={car.id}
                    role="button"
                    tabIndex={0}
                    className={classNames('orderpage__step-2__cars_card', {
                        'orderpage__step-2__cars_card-active': car.name === selectedCar.name,
                    })}
                    onClick={() => onChange(car)}
                    onKeyDown={() => onChange(car)}
                >
                    <h1 className="orderpage__step-2__cars_model">{car.name}</h1>
                    <div className="orderpage__step-2__cars_price">
                        <span>{car.priceMin}</span> - <span>{car.priceMax}</span>
                    </div>
                    <div className="orderpage__step-2__cars_img">
                        <img src={car.thumbnail.path} alt={car.name} />
                    </div>
                </div>
            ))}
        </div>
    );
}
ListCars.propTypes = {
    allCars: PropTypes.instanceOf(Array),
    selectedCar: PropTypes.instanceOf(Object),
    onChange: PropTypes.func,
};
ListCars.defaultProps = {
    allCars: [],
    selectedCar: {},
    onChange: () => {},
};
