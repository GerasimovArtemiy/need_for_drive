import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCar, setCarClass } from '../../store/Slices/AllFormSlice';
import { setCarStep, setMoreStep } from '../../store/Slices/ValidPageSlice';
import ListCars from '../../components/ListCars/ListCars';
import RadioButtonGroup from '../../components/UI/RadioButtonGroup/RadioButtonGroup';
import carClassButton from './constants';
import './OrderPage2.scss';

export default function OrderPage2() {
    const dispatch = useDispatch();
    const { car } = useSelector((state) => state.allForm);
    const { carClass } = useSelector((state) => state.allForm);

    useEffect(() => {
        dispatch(setCarStep(Boolean(car && carClass)));
        dispatch(setMoreStep(Boolean(car && carClass)));
    }, [car, carClass]);

    const carClassChangeState = (value) => {
        dispatch(setCarClass(value));
    };
    const carsChangeState = (selectCar) => {
        dispatch(setCar(selectCar));
    };

    return (
        <div className="orderpage__step-2">
            <div className="orderpage__step-2_container">
                <form className="orderpage__step-2_filter-models">
                    <RadioButtonGroup
                        radioButtons={carClassButton}
                        selectedClassCar={carClass}
                        onChange={carClassChangeState}
                    />
                </form>
                <ListCars selectedCar={car} onChange={carsChangeState} />
            </div>
        </div>
    );
}
