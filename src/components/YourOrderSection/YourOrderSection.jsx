import { useSelector } from 'react-redux';
import YourOrderSelectItem from './YourOrderSelect/YourOrderSelectItem';
import './YourOrderSection.scss';
import TotalPrice from './TotalPrice/TotalPrice';
import YourOrderButton from './YourOrderButton/YourOrderButton';

export default function YourOrderSection() {
    const { city, point, car, color, rentTime, tariff, extraServices } = useSelector((state) => state.allForm);
    const orderItems = [
        {
            id: 0,
            title: 'Пункт выдачи',
            subtitle: city?.name && point?.name && `${city.name},${point.name}`,
        },
        {
            id: 1,
            title: 'Модель',
            subtitle: car.name,
        },
        { id: 2, title: 'Цвет', subtitle: color },
        { id: 3, title: 'Длительность аренды', subtitle: rentTime },
        { id: 4, title: 'Тариф', subtitle: tariff.rateTypeId?.name },
        { id: 5, title: 'Полный бак', subtitle: extraServices[0].checked && 'Да' },
        { id: 6, title: 'Детское кресло', subtitle: extraServices[1].checked && 'Да' },
        { id: 7, title: 'Правый руль', subtitle: extraServices[2].checked && 'Да' },
    ];

    return (
        <div className="orderpage__your-order">
            <section className="orderpage__your-order_section">
                <h2>Ваш заказ:</h2>
                {orderItems.map(
                    (item) =>
                        item.subtitle && (
                            <YourOrderSelectItem key={item.id} title={item.title} subtitle={item.subtitle} />
                        )
                )}
                <TotalPrice />
                <YourOrderButton />
            </section>
            <div className="orderpage__your-order_vertical-line">
                <div className="orderpage__your-order_vertical-line-empty-1">
                    <div className="orderpage__your-order_vertical-line-empty-2" />
                </div>
            </div>
        </div>
    );
}
