import './YourOrderSection.scss';

export default function YourOrderSection() {
    return (
        <div className="orderpage__your-order_section">
            <section className="orderpage__your-order">
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
