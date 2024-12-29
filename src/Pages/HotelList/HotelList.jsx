import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import HotelInfo from '../../components/HotelInfo/HotelInfo';
import HotelHeader from '../../components/HotelHeader/HotelHeader';
import './HotelList.css';

const HotelList = () => {
  const roomDetails = [
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/grand-hotel.jpg", 
    },
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/royal-palace.jpg",
    },
    {
      title: "Grand Couple Room",
      price: 1700,
      capacity: 2,
      imageUrl: "https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/main/hotels/oberoi-amarvilas.jpg",
    },
  ];

  const hotelInfo = {
    name: "The Peninsula Hotel",
    location: "Mumbai, India",
    rating: "4.5",
  }

  return (
    <div className="App">
      <HotelHeader 
        name={hotelInfo.name}
        location={hotelInfo.location}
        rating={hotelInfo.rating}
      />
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
      <HotelInfo 
        name={hotelInfo.name} 
      />
    </div>
  );
};

export default HotelList;