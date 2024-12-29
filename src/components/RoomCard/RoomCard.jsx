import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import RoomBookingForm from "../RoomBookingForm/RoomBookingForm";

import './RoomCard.css';

const RoomCard = ({ title, price, capacity, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="room-card">
      <img src={imageUrl} alt={title} className="room-image" />
      <h3 className="room-title">{title}</h3>
      <p className="room-capacity">Capacity: {capacity} guests</p>
      <p className="room-price">₹ {price} / night</p>
      <div className="room-actions">
        <button className="view-button">View facilities</button>
        <button onClick={openModal} className="book-button">Book Now →</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <RoomBookingForm />
          </Modal>
        )}
      </div>
    </div>
  )
};

export default RoomCard;