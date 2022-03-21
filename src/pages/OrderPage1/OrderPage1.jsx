import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setPoint, resetPoint, resetForm } from '../../store/Slices/AllFormSlice';
import { setLocationStep, setCarStep, setMoreStep, setTotalStep } from '../../store/Slices/ValidPageSlice';
import { getCities, getCityPoints, resetFetchLocation } from '../../store/Slices/FetchLocationSlice';
import SelectInput from './SelectInput/SelectInput';
import Ymap from '../../components/Ymap/Ymap';
import './OrderPage1.scss';

export default function OrderPage1() {
    const dispatch = useDispatch();
    const { city, point } = useSelector((state) => state.allForm);
    const { fetchCities, fetchCityPoints } = useSelector((state) => state.fetchLocation);
    const cityOptions = fetchCities.data.map(({ id, name }) => ({ id, value: name, label: name }));
    const pointOptions = fetchCityPoints.data.map(({ id, address }) => ({ id, value: address, label: address }));

    useEffect(() => {
        dispatch(setLocationStep(Boolean(city.name && point.name)));
        dispatch(setCarStep(Boolean(city.name && point.name)));
    }, [dispatch, city, point]);

    useEffect(() => {
        if (fetchCities.status === null) {
            dispatch(getCities());
        }
    }, [dispatch, fetchCities.status]);

    useEffect(() => {
        if (city.name && fetchCityPoints.status === null) {
            dispatch(getCityPoints(city.id));
        }
    }, [dispatch, city.id, city.name, fetchCityPoints.status]);

    const cityChangeState = (option) => {
        if (option) {
            if (option.value !== city.name) dispatch(resetFetchLocation());
            dispatch(resetForm());
            dispatch(setCity({ name: option.value, id: option.id }));
            dispatch(setMoreStep(false));
            dispatch(setTotalStep(false));
        }
    };
    const onReset = (e) => {
        if (e.currentTarget.id === 'city') {
            dispatch(resetFetchLocation());
            dispatch(resetForm());
            dispatch(setMoreStep(false));
            dispatch(setTotalStep(false));
        } else {
            dispatch(resetPoint());
            dispatch(setMoreStep(false));
            dispatch(setTotalStep(false));
        }
    };
    const pointChangeState = (option) => {
        if (option) {
            dispatch(setPoint({ name: option.value, id: option.id }));
        }
    };

    return (
        <div className="orderpage__step-1">
            <form className="orderpage__step-1_searches">
                <SelectInput
                    name="city"
                    onChange={cityChangeState}
                    options={cityOptions}
                    valueState={city.name}
                    placeholder="Начните вводить город"
                    onReset={onReset}
                    labelText="Город"
                />
                <SelectInput
                    name="point"
                    onChange={pointChangeState}
                    options={pointOptions}
                    valueState={point.name}
                    onReset={onReset}
                    labelText="Пункт выдачи"
                    isDisabled={fetchCityPoints.data.length === 0}
                    placeholder={
                        fetchCityPoints.data.length === 0 && city.name
                            ? 'В этом городе нет пунктов'
                            : 'Начните вводить пункт'
                    }
                />
            </form>
            <div className="orderpage__step-1_map">
                <h2>Выбрать на карте:</h2>
                <Ymap />
            </div>
        </div>
    );
}
