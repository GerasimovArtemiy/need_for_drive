import ListCars from '../../components/ListCars/ListCars';
import RadioButtonGroup from '../../components/UI/RadioButtonGroup/RadioButtonGroup';
import carClassButton from './constants';
import './OrderPage2.scss';

export default function OrderPage2() {
    return (
        <div className="orderpage__step-2">
            <div className="orderpage__step-2_container">
                <form className="orderpage__step-2_filter-models">
                    <RadioButtonGroup radioButtons={carClassButton} />
                </form>
                <ListCars />
            </div>
        </div>
    );
}
