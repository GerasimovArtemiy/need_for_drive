import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setColor,
    setTariff,
    setDateFrom,
    setDateTo,
    setExtraServices,
    setRentTime,
} from '../../store/Slices/AllFormSlice';
import { setMoreStep, setTotalStep } from '../../store/Slices/ValidPageSlice';
import { getFetchTariff } from '../../store/Slices/fetchMoreSlice';
import MyRadioButtonGroup from '../../components/UI/RadioButtonGroup/RadioButtonGroup';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyCheckboxGroup from '../../components/UI/MyCheckboxGroup/MyCheckboxGroup';
import './OrderPage3.scss';

export default function OrderPage3() {
    const dispatch = useDispatch();
    const { car, color, tariff, dateFrom, dateTo, rentTime, extraServices } = useSelector((state) => state.allForm);
    const { fetchTariff } = useSelector((state) => state.fetchMore);
    const colorSelectCar = car.colors;

    useEffect(() => {
        dispatch(setMoreStep(Boolean(color && rentTime !== 'Ошибка!' && tariff)));
        dispatch(setTotalStep(Boolean(color && rentTime !== 'Ошибка!' && tariff)));
    }, [dispatch, color, rentTime, tariff]);

    useEffect(() => {
        dispatch(getFetchTariff());
    }, [dispatch]);

    const colorChangeState = (value) => {
        dispatch(setColor(value));
    };
    const dateFromChangeState = (date) => {
        dispatch(setDateFrom(date));
    };
    const dateToChangeState = (date) => {
        dispatch(setDateTo(date));
    };
    const tariffChangeState = (value) => {
        dispatch(setTariff(value));
    };
    const extraServicesChangeState = (id) => {
        dispatch(setExtraServices(id));
    };

    function getRentTime(from, to) {
        const unixDateFrom = typeof from === 'string' ? Date.parse(from) : from;
        const unixDateTo = typeof to === 'string' ? Date.parse(to) : to;
        if (unixDateTo > unixDateFrom) {
            const time = unixDateTo - unixDateFrom;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((time / (1000 * 60)) % 60);
            const rentDuration = `${days === 0 ? '' : days}д ${hours === 0 ? '' : hours}ч ${
                minutes === 0 ? '' : minutes
            }м`;
            return rentDuration;
        }
        return 'Ошибка!';
    }
    useEffect(() => {
        if (dateFrom && dateTo) {
            dispatch(setRentTime(getRentTime(dateFrom, dateTo)));
        }
    }, [dispatch, dateFrom, dateTo]);

    return (
        <div className="orderpage__step-3">
            <div className="orderpage__step-3_container">
                <form className="orderpage__step-3_form">
                    <h1 className="orderpage__step-3_form-title-colors">Цвет</h1>
                    <div className="orderpage__step-3_form-colors">
                        <MyRadioButtonGroup
                            name="color"
                            radioButtons={colorSelectCar}
                            selectedButton={color}
                            onChange={colorChangeState}
                        />
                    </div>
                    <h1 className="orderpage__step-3_form-title-date">Дата аренды</h1>
                    <div className="orderpage__step-3_form-date">
                        <MyInput
                            name="dateFrom"
                            value={dateFrom}
                            label="C"
                            placeholder="Введите дату и время"
                            onChange={dateFromChangeState}
                            typeDate
                        />
                        <MyInput
                            name="dateTo"
                            value={dateTo}
                            label="По"
                            placeholder="Введите дату и время"
                            onChange={dateToChangeState}
                            typeDate
                        />
                    </div>
                    <div className="orderpage__step-3_form-rates">
                        <h1>Тариф</h1>
                        <MyRadioButtonGroup
                            name="tariff"
                            radioButtons={fetchTariff.data}
                            selectedButton={tariff}
                            onChange={tariffChangeState}
                        />
                    </div>
                    <div className="orderpage__step-3_form-services">
                        <h1>Доп услуги </h1>
                        <MyCheckboxGroup checkboxButtons={extraServices} onChange={extraServicesChangeState} />
                    </div>
                </form>
            </div>
        </div>
    );
}
