import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setTariff, setDateFrom, setDateTo, setExtraServices } from '../../store/Slices/AllFormSlice';
import { setMoreStep, setTotalStep } from '../../store/Slices/ValidPageSlice';
import { changeColorButton, changeTariffButton } from './constants';
import MyRadioButtonGroup from '../../components/UI/RadioButtonGroup/RadioButtonGroup';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyCheckboxGroup from '../../components/UI/MyCheckboxGroup/MyCheckboxGroup';
import './OrderPage3.scss';

export default function OrderPage3() {
    const dispatch = useDispatch();
    const { color, tariff, dateFrom, dateTo, extraServices } = useSelector((state) => state.allForm);

    useEffect(() => {
        dispatch(setMoreStep(Boolean(color && dateFrom && dateTo)));
        dispatch(setTotalStep(Boolean(color && dateFrom && dateTo)));
    }, [color, dateFrom, dateTo]);

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

    return (
        <div className="orderpage__step-3">
            <div className="orderpage__step-3_container">
                <form className="orderpage__step-3_form">
                    <h1 className="orderpage__step-3_form-title-colors">Цвет</h1>
                    <div className="orderpage__step-3_form-colors">
                        <MyRadioButtonGroup
                            radioButtons={changeColorButton}
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
                            radioButtons={changeTariffButton}
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
