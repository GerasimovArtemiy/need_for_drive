import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setPoint } from '../../store/Slices/AllFormSlice';
import { setLocationStep, setCarStep } from '../../store/Slices/ValidPageSlice';
import MyInput from '../../components/UI/MyInput/MyInput';
import './OrderPage1.scss';
import googleMap from '../../assets/img/google-map.jpg';

export default function OrderPage1() {
    const dispatch = useDispatch();
    const { city, point } = useSelector((state) => state.allForm);

    useEffect(() => {
        dispatch(setLocationStep(Boolean(city && point)));
        dispatch(setCarStep(Boolean(city && point)));
    }, [city, point]);

    const cityChangeState = (value) => {
        dispatch(setCity(value));
    };
    const pointChangeState = (value) => {
        dispatch(setPoint(value));
    };
    console.log('citty:', city, 'point:', point);

    return (
        <div className="orderpage__step-1">
            <form className="orderpage__step-1_searches">
                <MyInput
                    name="city"
                    value={city}
                    label="Город"
                    placeholder="Начните вводить город ..."
                    onChange={cityChangeState}
                />
                <MyInput
                    name="point"
                    value={point}
                    label="Пункт выдачи"
                    onChange={pointChangeState}
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
