import listCardCars from './constants';
import './ListCars.scss';
import carTest from '../../assets/img/car-img.jpg';

export default function ListCars() {
    return (
        <div className="orderpage__step-2__cars">
            {listCardCars.map(({ id, title, price }) => (
                <div key={id} className="orderpage__step-2__cars_card">
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
