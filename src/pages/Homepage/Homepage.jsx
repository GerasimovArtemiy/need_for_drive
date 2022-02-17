import React, { useState } from 'react';
import './Homepage.sass';
import HomepageContent from '../../components/HomepageContent/HomepageContent';
import HomepageSlider from '../../components/HomepageSlider/HomepageSlider';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Navbar />
        <HomepageContent />
        <HomepageSlider />
      </div>
    </div>
  );
};

export default Homepage;
