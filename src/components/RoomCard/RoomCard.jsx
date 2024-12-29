import React from 'react';
import './RoomCard.css';

const RoomCard = ({ title, price, capacity, imageUrl }) => (
  <div className="room-card">
    <img src={imageUrl} alt={title} className="room-image" />
    <h3 className="room-title">{title}</h3>
    <p className="room-capacity">Capacity: {capacity} guests</p>
    <p className="room-price">₹ {price} / night</p>
    <div className="room-actions">
      <button className="view-button">View facilities</button>
      <button className="book-button">Book Now →</button>
    </div>
  </div>
);

export default RoomCard;