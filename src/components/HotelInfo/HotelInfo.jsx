import React from 'react';
import './HotelInfo.css';

const HotelInfo = ({ name }) => (
  <div className="hotel-info">
    <h2>About {name}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel dignissimos, nulla aliquam assumenda...
    </p>
  </div>
);

export default HotelInfo;