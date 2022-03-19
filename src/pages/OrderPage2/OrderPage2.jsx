import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCar,
    setCarClass,
    setColor,
    setTariff,
    setDateFrom,
    setDateTo,
    resetExtraServices,
} from '../../store/Slices/AllFormSlice';
import { setCarStep, setMoreStep, setTotalStep } from '../../store/Slices/ValidPageSlice';
import { getFetchCars, getFetchClass, getCarsByClass } from '../../store/Slices/FetchCarsSlice';
import ListCars from '../../components/ListCars/ListCars';
import RadioButtonGroup from '../../components/UI/RadioButtonGroup/RadioButtonGroup';
import './OrderPage2.scss';
import MyLoader from '../../components/UI/Myloader/Myloader';

export default function OrderPage2() {
    const dispatch = useDispatch();
    const { car, carClass } = useSelector((state) => state.allForm);
    const { fetchCars, fetchClass } = useSelector((state) => state.fetchCars);

    useEffect(() => {
        if (!fetchCars.data.length) {
            dispatch(getFetchCars());
            dispatch(getFetchClass());
        }
    }, []);

    useEffect(() => {
        dispatch(setCarStep(Boolean(car.name)));
        dispatch(setMoreStep(Boolean(car.name)));
    }, [car.name]);

    const carClassChangeState = (value) => {
        dispatch(setCarClass(value));
        dispatch(getCarsByClass(value.id));
    };
    const carsChangeState = (selectCar) => {
        dispatch(setCar(selectCar));
        dispatch(setColor(''));
        dispatch(setDateFrom(''));
        dispatch(setDateTo(''));
        dispatch(setTariff({}));
        dispatch(setTotalStep(false));
        dispatch(resetExtraServices());
    };

    return (
        <div className="orderpage__step-2">
            <div className="orderpage__step-2_container">
                <form className="orderpage__step-2_filter-models">
                    <RadioButtonGroup
                        name="carClass"
                        radioButtons={fetchClass.data}
                        selectedButton={carClass}
                        onChange={carClassChangeState}
                    />
                </form>
                {fetchCars.status !== 'resolved' ? (
                    <MyLoader />
                ) : (
                    <ListCars allCars={fetchCars.data} selectedCar={car} onChange={carsChangeState} />
                )}
            </div>
        </div>
    );
}
