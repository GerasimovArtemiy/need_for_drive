import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomepageSlider.scss';
import slides from './constants';

export default function HomepageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider__items',
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                {slides.map(({ id, title, subtitle }) => (
                    <div key={id} className={`slider__item slider__item-${id}`}>
                        <div className="slider__item_content">
                            <div className="slider__item_container">
                                <h1 className="slider__item_title">{title}</h1>
                                <h3 className="slider__item_subtitle">{subtitle}</h3>
                                <button
                                    type="button"
                                    className={`slider__item_btn-${id} slider__item_btn`}
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
