import React from "react";
import "./HotelList.css";



const rooms = [
  {
    title: "Deluxe Room",
    price: "₹ 5,000/Night",
    image:   "../../assets/grand-hotel.jpg",
  },
  {
    title: "Executive Room with Balcony",
    price: "₹ 7,500/Night",
    image:  "../../assets/grand-hotel.jpg",
  },
  {
    title: "Executive Room with View",
    price: "₹ 10,000/Night",
    image:  "../../assets/grand-hotel.jpg",
  },
];

function HotelList() {
  return (
    <section className="room-preview-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Rooms & Suites</h2>
          <p className="section-description">
            Explore our luxurious rooms designed to provide ultimate comfort.
          </p>
        </div>

        <div className="room-grid">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img
                src={room.image}
                alt={room.title}
                className="room-image"
              />
              <div className="room-details">
                <h3 className="room-title">{room.title}</h3>
                <p className="room-price">{room.price}</p>
                <a href="/rooms" className="book-now-button">
                  Book Now <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotelList;
