import React from 'react';
import RoomCard from './components/RoomCard';
import HotelInfo from './components/HotelInfo';
import './styles/App.css';

const App = () => {
  const roomDetails = [
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "room-image-url", // Replace with the actual image URL
    },
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "room-image-url",
    },
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "room-image-url",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="room-list">
        {roomDetails.map((room, index) => (
          <RoomCard
            key={index}
            title={room.title}
            price={room.price}
            capacity={room.capacity}
            imageUrl={room.imageUrl}
          />
        ))}
      </div>
      <HotelInfo />
    </div>
  );
};

export default App;