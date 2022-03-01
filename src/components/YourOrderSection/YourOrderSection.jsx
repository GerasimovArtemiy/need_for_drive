import YourOrderSelectItem from './YourOrderSelect/YourOrderSelectItem';
import YourOrderPickPoint from './YourOrderPickPoint/YourOrderPickPoint';
import './YourOrderSection.scss';

export default function YourOrderSection() {
    return (
        <div className="orderpage__your-order">
            <section className="orderpage__your-order_section">
                <h2>Ваш заказ:</h2>
                <YourOrderPickPoint />
                <YourOrderSelectItem title="Модель" subtitle="Hyndai, i 30 N" />
                <YourOrderSelectItem title="Цвет" subtitle="Голубой" />
                <YourOrderSelectItem title="Длительность аренды" subtitle="1д 2ч" />
                <YourOrderSelectItem title="Тариф" subtitle="На сутки" />
                <YourOrderSelectItem title="Полный бак" subtitle="Да" />
                <div className="orderpage__your-order_price">
                    <span>Цена:</span> от 8 000 до 12 000 ₽
                </div>
                <button type="button" className="orderpage__your-order_btn">
                    Выбрать модель
                </button>
            </section>
            <div className="orderpage__your-order_vr">
                <div>
                    <div />
                </div>
            </div>
        </div>
    );
}
