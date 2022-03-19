import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotatalPrice } from '../../../store/Slices/AllFormSlice';
import './TotalPrice.scss';

export default function CalculationPrice() {
    const dispatch = useDispatch();
    const { dateFrom, dateTo, tariff, totalPrice, extraServices } = useSelector((state) => state.allForm);

    function calculatePrice() {
        if (dateFrom && dateTo && tariff.price) {
            const rentTime = Date.parse(dateTo) - Date.parse(dateFrom);
            let showPrice = 0;
            if (rentTime > 0) {
                switch (tariff.rateTypeId.unit) {
                    case 'сутки':
                        showPrice = tariff.price * Math.ceil(rentTime / 1000 / 60 / 60 / 24);
                        break;
                    case 'мин':
                        showPrice = tariff.price * Math.ceil(rentTime / 1000 / 60);
                        break;
                    case '7 дней':
                        showPrice = tariff.price * Math.ceil(rentTime / 1000 / 60 / 60 / 24 / 7);
                        break;
                    case '30 дней':
                        showPrice = tariff.price * Math.ceil(rentTime / 1000 / 60 / 60 / 24 / 30);
                        break;
                    default: // do nothing
                }
                if (extraServices[0].checked) showPrice += 500;
                if (extraServices[1].checked) showPrice += 200;
                if (extraServices[2].checked) showPrice += 1600;
                dispatch(setTotatalPrice(Math.ceil(showPrice)));
            } else dispatch(setTotatalPrice(0));
        } else dispatch(setTotatalPrice(0));
    }
    useEffect(() => {
        calculatePrice();
    }, [dateFrom, dateTo, tariff, extraServices]);

    return (
        <div className="orderpage__your-order_price">
            <span>Цена:</span> {totalPrice}₽
        </div>
    );
}
