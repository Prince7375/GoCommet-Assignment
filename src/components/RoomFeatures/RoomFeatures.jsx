import React from 'react';
import './RoomFeatures.css';

const RoomFeatures = ({ features }) => (
  <div className="room-features">
    {features.map((feature, index) => (
      <span key={index} className="feature">
        {feature}
      </span>
    ))}
  </div>
);

export default RoomFeatures;
