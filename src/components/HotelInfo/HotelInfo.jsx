import React from 'react';
import './HotelInfo.css';
import backgroundImage from '../../assets/secondpagebg.jpg';

const HotelHeader = () => {
  return (
    <div className="hotel-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-overlay">
        <div className="back-button">
          &#8592;
        </div>
        <div className="hotel-details">
          <h1>The Peninsula Hotel</h1>
          <div className="location-rating">
            <span>
              &#128205; Mumbai, India
            </span>
            <span>
              &#9733; 4.6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;
