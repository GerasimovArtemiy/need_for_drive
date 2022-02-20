import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomepageSlider.scss';
import { slides } from '../constants';

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
                {slides.map((i) => (
                    <div key={i.id} className={`slider__item-${i.id}`}>
                        <div className="slider__item_content">
                            <h1 className="slider__item_title">{i.title}</h1>
                            <h3 className="slider__item_subtitle">
                                {i.subtitle}
                            </h3>
                            <button
                                type="button"
                                className={`slider__item_btn-${i.id} slider__item_btn`}
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
