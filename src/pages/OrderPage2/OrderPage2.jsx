import ListCars from '../../components/ListCars/ListCars';
import MyRadioButton from '../../components/UI/MyRadioButton/MyRadioButton';
import './OrderPage2.scss';

export default function OrderPage2() {
    return (
        <div className="orderpage__step-2">
            <div className="orderpage__step-2_container">
                <form className="orderpage__step-2_filter-models">
                    <MyRadioButton labelText="Все модели" name="class-auto" id="1" />
                    <MyRadioButton labelText="Эконом" name="class-auto" id="2" />
                    <MyRadioButton labelText="Премиум" name="class-auto" id="3" />
                </form>
                <ListCars />
            </div>
        </div>
    );
}
