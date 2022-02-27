import { useState } from 'react';
import YourOrderArrow from './YourOrderArrow/YourOrderArrow';
import './YourOrderSection.scss';

export default function YourOrderSection() {
    const [yourOrderActive, setYourOrderActive] = useState(false);
    return (
        <div
            className={`orderpage__your-order ${
                yourOrderActive ? 'orderpage__your-order_active' : ''
            }`}
        >
            <section className="orderpage__your-order_section">
                <YourOrderArrow active={yourOrderActive} setActive={setYourOrderActive} />
                <h2>Ваш заказ:</h2>
                <div className="orderpage__your-order_point">
                    <div>Пункт выдачи</div>
                    <div />
                    <div>Ульяновск, Нариманова 42</div>
                </div>
                <div className="orderpage__your-order_price">
                    <span>Цена:</span> от 8 000 до 12 000 ₽
                </div>
                <button type="button" className="orderpage__your-order_btn">
                    Выбрать модель
                </button>
            </section>
        </div>
    );
}
