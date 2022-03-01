import carTest from '../../assets/img/car-img.jpg';
import './OrderPage4.scss';

export default function OrderPage4() {
    return (
        <div className="orderpage__step-4">
            <div className="orderpage__step-4_container">
                <div className="orderpage__step-4_content">
                    <h1>Hynadi i30 N</h1>
                    <div className="orderpage__step-4_license-plate">K 761 HA 73</div>
                    <div className="orderpage__step-4_fuel">
                        <span>Топливо</span>
                        <span>100%</span>
                    </div>
                    <div className="orderpage__step-4_access-date">
                        <span>Доступность с</span> <span>12.06.2019 12:00</span>
                    </div>
                </div>
                <div className="orderpage__step-4_img-car">
                    <img src={carTest} alt="img-car" />
                </div>
            </div>
        </div>
    );
}
