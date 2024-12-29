import React, { useState } from 'react';
import RoomFeatures from '../RoomFeatures/RoomFeatures';
import PersonDetails from '../PersonDetails/PersonDetails';
import './RoomBookingForm.css';

const RoomBookingForm = ({ hotelName, roomName, checkInDate, checkOutDate }) => {
  const [personCount, setPersonCount] = useState(1);

  const addPerson = () => setPersonCount(personCount + 1);

  return (
    <div className="room-booking-form">
      <h2>{hotelName} &gt; {roomName}</h2>
      <img src="room-image-url" alt="Room" className="room-image" />
      <RoomFeatures features={['Free Wi-Fi', 'TV', 'Jacuzzi', 'Balcony']} />
      <div className="booking-info">
        <p>🧑 Person: {personCount}</p>
        <p>📅 Check-in: <input type="date" /></p>
        <p>📅 Check-out: <input type="date" /></p>
      </div>
      <div className="person-details">
        {[...Array(personCount)].map((_, index) => (
          <PersonDetails key={index} personNumber={index + 1} />
        ))}
        <button className="add-person-button" onClick={addPerson}>
          + Add Person
        </button>
      </div>
      <button className="book-button">Book</button>
    </div>
  );
};

export default RoomBookingForm;
