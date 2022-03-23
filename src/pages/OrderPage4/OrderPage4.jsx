import { useSelector } from 'react-redux';
import ConfirmOrder from '../../components/ConfirmOrder/ConfirmOrder';
import './OrderPage4.scss';

export default function OrderPage4() {
    const { car, color, dateFrom, extraServices, tariff } = useSelector((state) => state.allForm);

    const firstLetter = car.number.substr(0, 1).toUpperCase();
    const numbers = car.number.substr(1, 3).toUpperCase();
    const lastLetters = car.number.substr(4).toUpperCase();
    const numberCar = `${firstLetter} ${numbers} ${lastLetters}`;

    const dateTransform = new Date(dateFrom).toLocaleTimeString(navigator.language, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const orderItems = [
        { id: 0, title: 'Цвет', subtitle: color },
        { id: 1, title: 'Тариф', subtitle: tariff.rateTypeId?.name },
        { id: 2, title: 'Топливо', subtitle: extraServices[0].checked && '100%' },
        { id: 3, title: 'Детское кресло', subtitle: extraServices[1].checked && 'Да' },
        { id: 4, title: 'Правый руль', subtitle: extraServices[2].checked && 'Да' },
        { id: 5, title: 'Доступна с', subtitle: dateTransform },
    ];

    return (
        <div className="orderpage__step-4">
            <ConfirmOrder />
            <div className="orderpage__step-4_container">
                <div className="orderpage__step-4_content">
                    <h1>{car.name}</h1>
                    <div className="orderpage__step-4_license-plate">
                        <span>{numberCar} </span>
                    </div>
                    {orderItems.map(
                        ({ id, title, subtitle }) =>
                            subtitle && (
                                <div className="orderpage__step-4_item" key={id}>
                                    <span>{title} </span>
                                    <span>{subtitle}</span>
                                </div>
                            )
                    )}
                </div>
                <div className="orderpage__step-4_img-car">
                    <img src={car.thumbnail.path} alt={car.name} />
                </div>
            </div>
        </div>
    );
}
