import React from 'react';
import './HotelHeader.css';

const HotelHeader = ({ name, location, rating }) => (
  <div className="hotel-header">
    <button className="back-button">←</button>
    <h1 className="hotel-title">{name}</h1>
    <p className="hotel-location">
      <span>📍</span>{location}<span>⭐ {rating}</span>
    </p>
  </div>
);

export default HotelHeader;
