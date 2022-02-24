import MyInput from '../../components/UI/MyInput/MyInput';
import './OrderPage1.scss';
import googleMap from '../../assets/img/google-map.jpg';

export default function OrderPage1() {
    return (
        <div className="orderpage__step-1">
            <form className="orderpage__step-1_searches">
                <MyInput
                    label="Город"
                    type="search"
                    placeholder="Начните вводить город ..."
                />
                <MyInput
                    label="Пункт выдачи"
                    type="search"
                    placeholder="Начните вводить пункт ..."
                />
            </form>
            <div className="orderpage__step-1_map">
                <h2>Выбрать на карте:</h2>
                <img src={googleMap} alt="map" />
            </div>
        </div>
    );
}
