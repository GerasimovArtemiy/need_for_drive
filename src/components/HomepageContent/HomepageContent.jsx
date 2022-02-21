import Header from '../Header/Header';
import './HomepageContent.scss';

export default function HomepageContent() {
    return (
        <div className="homepage__content">
            <div className="homepage__container">
                <Header />
                <main className="homepage__main">
                    <h1> Каршеринг </h1>
                    <h2> Need for drive</h2>
                    <h3>Поминутная аренда авто твоего города</h3>
                    <button type="button" className="homepage__btn">
                        Забронировать
                    </button>
                </main>
                <footer className="homepage__footer">
                    <div> © 2016-2019 «Need for drive»</div>
                    <div>
                        <a href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
