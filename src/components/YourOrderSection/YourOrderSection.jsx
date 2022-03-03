import { useState } from 'react';
import YourOrderArrow from './YourOrderArrow/YourOrderArrow';
import YourOrderPickModel from './YourOrderPickModel/YourOrderPickModel';
import YourOrderPickPoint from './YourOrderPickPoint/YourOrderPickPoint';
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
                <YourOrderPickPoint />
                <YourOrderPickModel />
                <div className="orderpage__your-order_price">
                    <span>Цена:</span> от 8 000 до 12 000 ₽
                </div>
                <button type="button" className="orderpage__your-order_btn">
                    Выбрать модель
                </button>
            </section>
            <div className="orderpage__your-order_vertical-line">
                <div className="orderpage__your-order_vertical-line-empty-1">
                    <div className="orderpage__your-order_vertical-line-empty-2" />
                </div>
            </div>
        </div>
    );
}
