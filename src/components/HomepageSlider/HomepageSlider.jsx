import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './HomepageSlider.sass';

export default function HomepageSlider() {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="swiper__slide-1">
          <div className="swiper__slide_content">
            <h1 className="swiper__slide_title">Бесплатная парковка</h1>
            <h3 className="swiper__slide_subtitle">
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </h3>
            <button className="swiper__slide_btn-1 swiper__slide_btn">
              Подробнее
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide-2">
          <div className="swiper__slide_content">
            <h1 className="swiper__slide_title">Страховка</h1>
            <h3 className="swiper__slide_subtitle">
              Полная страховка страховка автомобиля
            </h3>
            <button className="swiper__slide_btn-2 swiper__slide_btn">
              Подробнее
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide-3">
          <div className="swiper__slide_content">
            <h1 className="swiper__slide_title">Бензин</h1>
            <h3 className="swiper__slide_subtitle">
              Полный бак на любой заправке города за наш счёт
            </h3>
            <button className="swiper__slide_btn-3 swiper__slide_btn">
              Подробнее
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide-4">
          <div className="swiper__slide_content">
            <h1 className="swiper__slide_title">Обслуживание</h1>
            <h3 className="swiper__slide_subtitle">
              Автомобиль проходит еженедельное ТО
            </h3>
            <button className="swiper__slide_btn-4 swiper__slide_btn">
              Подробнее
            </button>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
