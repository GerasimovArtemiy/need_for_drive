import MyRadioButton from '../../components/UI/MyRadioButton/MyRadioButton';
import MyInput from '../../components/UI/MyInput/MyInput';
import './OrderPage3.scss';
import MyCheckbox from '../../components/UI/MyCheckbox/MyCheckbox';

export default function OrderPage3() {
    return (
        <div className="orderpage__step-3">
            <div className="orderpage__step-3_container">
                <form className="orderpage__step-3_form">
                    <h1 className="orderpage__step-3_form-title-colors">
                        Цвет
                    </h1>
                    <div className="orderpage__step-3_form-colors">
                        <MyRadioButton
                            labelText="Любой"
                            name="colors"
                            id="1"
                            value="Любой"
                        />
                        <MyRadioButton
                            labelText="Красный"
                            name="colors"
                            id="2"
                            value="Красный"
                        />
                        <MyRadioButton
                            labelText="Голубой"
                            name="colors"
                            id="3"
                            value="Голубой"
                        />
                    </div>

                    <h1 className="orderpage__step-3_form-title-date">
                        Дата аренды
                    </h1>
                    <div className="orderpage__step-3_form-date">
                        <MyInput
                            label="C"
                            placeholder="Введите дату и время"
                            typeDate
                        />
                        <MyInput
                            label="По"
                            placeholder="Введите дату и время"
                            typeDate
                        />
                    </div>

                    <div className="orderpage__step-3_form-rates">
                        <h1>Тариф</h1>
                        <MyRadioButton
                            labelText="Поминутно, 7 ₽/мин"
                            name="rates"
                            id="4"
                            value="Поминутно, 7 ₽/мин"
                        />
                        <MyRadioButton
                            labelText="На сутки, 1999 ₽/сутки"
                            name="rates"
                            id="5"
                            value="На сутки, 1999 ₽/сутки"
                        />
                    </div>

                    <div className="orderpage__step-3_form-services">
                        <h1>Доп услуги </h1>
                        <MyCheckbox id="1" labelText="Полный бак, 500р" />
                        <MyCheckbox id="2" labelText="Детское кресло, 200р" />
                        <MyCheckbox id="3" labelText="Правый руль, 1600р" />
                    </div>
                </form>
            </div>
        </div>
    );
}
