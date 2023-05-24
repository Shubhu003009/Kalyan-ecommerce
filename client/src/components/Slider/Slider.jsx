import React from 'react';
import './Slider.scss';

const Slider = () => {
  return (
    <div className="slider">
      <div className="max-width">
        <div className="flex container">
          <div className="wrap" style={{ height: '190px' }}>
            <h1 className="mb-2">
              Your one-stop destination for high-quality agricultural
              equipments.
            </h1>
            <button className="btn">
              Buy
              <span class="material-symbols-outlined show">double_arrow</span>
            </button>
          </div>

          <img src="./images/pic1.jpg" alt="farmer" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
