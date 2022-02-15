import React from 'react';
import './HomepageContent.sass';
import mark from '../../assets/icons/markmap.svg';

const HomepageContent = () => {
  return (
    <div className="homepage__content">
      <header className="homepage__header">
        <div className="homepage__header_logo">Need for drive</div>
        <div className="homepage__header_city">
          <img
            className="homepage__header_city-mark"
            src={mark}
            alt="markmap"
          ></img>
          <div>Ульяновск</div>
        </div>
      </header>
      <main className="homepage__main">
        <h1> Каршеринг </h1>
        <h2> Need for drive</h2>
        <h3>Поминутная аренда авто твоего города</h3>
        <button className="homepage__btn">Забронировать</button>
      </main>
      <footer className="homepage__footer">
        <div> © 2016-2019 "Need for drive"</div>
        <div>8 (495) 234-22-44</div>
      </footer>
    </div>
  );
};

export default HomepageContent;
