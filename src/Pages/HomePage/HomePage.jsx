import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { apiConnector } from '../../../utils/apiConnector';
import { Hotels_API } from '../../../utils/api';
import Pagination from '../../components/Pagination';
import  herobg  from '../../assets/hero-bg.jpg'

function HomePage() {

  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const [hotelsList, setHotelsList] = useState([])
  const [allHotels, setAllHotels] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [flag, setFlag] = useState(false)


  const [filteredHotels, setFilteredHotels] = useState([])
  const [priceRange, setPriceRange] = useState([]);
  const [rating, setRating] = useState([]);
  const [city, setCity] = useState([]);

  const handleFilterChange = (type, value, checked) => {
    console.log("type , value , checked", type, value, checked)
    if (type === "price") {
      const updatedPrice = checked
        ? [...priceRange, value]
        : priceRange.filter((item) => item !== value);
      setPriceRange(updatedPrice);
    } else if (type === "rating") {
      const updatedRating = checked
        ? [...rating, value]
        : rating.filter((item) => item !== value);
      setRating(updatedRating);
    } else if (type === "city") {
      const updatedCity = checked
        ? [...city, value]
        : city.filter((item) => item !== value);
      setCity(updatedCity);
    }
  };

  useEffect(() => {
    const filtered = allHotels.filter((hotel) => {
      const matchesPrice =
        priceRange.length === 0 ||
        priceRange.some((range) => {
          return hotel.rooms.some((room) => {
            const price = room.price;
            if (range === "upto1000") return price <= 1000;
            if (range === "1001to2000") return price > 1000 && price <= 2000;
            if (range === "2001to5000") return price > 2000 && price <= 5000;
            if (range === "above5000") return price > 5000;
            return false;
          });
        });
      const matchesRating =
        rating.length === 0 ||
        rating.some((rate) => {
          const [min, max] = rate.split("-").map(Number);
          return hotel.rating >= min && hotel.rating <= max;
        });

      const matchesCity =
        city.length === 0 || city.includes(hotel.city.toLowerCase());

      return matchesPrice && matchesRating && matchesCity;
    });

    console.log("hotels after fikter", filtered)

    setFilteredHotels(filtered);
  }, [priceRange, rating, city, allHotels]);

  const clearAllFilters = () => {
    setPriceRange([]);
    setRating([]);
    setCity([]);
    setFilteredHotels(allHotels);
  };



  const handlePageChange = (page) => {
    if (page < 1) return;
    setCurrentPage(page);
  };


  const fetchHotesList = async () => {
    try {
      const response = await apiConnector({ method: "GET", url: Hotels_API.searchHotels_API })
      console.log("hotelsList in ", response?.data)
      setHotelsList(response?.data)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const results = hotelsList.filter((hotel) =>
        hotel.name.toLowerCase().includes(value.toLowerCase()) ||
        hotel.city.toLowerCase().includes(value.toLowerCase())
      );

      console.log("results ", results)
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const fetchAllHotels = async (page, size = 6) => {
    try {
      const response = await apiConnector({ method: "GET", url: Hotels_API.allHotels_API + `?page=${page}&size=${size}` })
      console.log("allHotels in ", response?.data?.hotels)

      if (response?.data?.hotels.length < 1) {
        setFlag(true)
      } else {
        setFlag(false)
      }
      setAllHotels(response?.data?.hotels)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    fetchHotesList()
    fetchAllHotels(currentPage)
  }, [query, currentPage])

  return (
    <div className="homepage">
      <div className="hero-section">
        <img src={herobg} />
        <h1>Find the Perfect deal, always.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique officia non corrupti pariatur aspernatur sint modi
          commodi cum possimus blanditiis facilis beatae repellendus, autem voluptates ratione delectus architecto quae dolore.
        </p>
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
            {filteredResults.length > 0 && (
              <ul className="dropdown">
                {filteredResults.map((item, index) => (
                  <li key={index} className="dropdown-item">
                    {item?.name} - {item?.city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input type="date" className="date-input" placeholder="Check-in" />
          <input type="date" className="date-input" placeholder="Check-out" />
          <input type="number" className="guest-input" defaultValue={2} />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className='explore-hotel'>
        <div className="filters-section">
          <h3>Filters</h3>
          <button className="clear-button" onClick={clearAllFilters}>
            CLEAR ALL
          </button>

          <div className="filter-group">
            <h4>PRICE RANGE</h4>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("price", "upto1000", e.target.checked)
                }
              />
              Up to Rs. 1000
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("price", "1001to2000", e.target.checked)
                }
              />
              Rs. 1001 to Rs. 2000
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("price", "2001to5000", e.target.checked)
                }
              />
              Rs. 2001 to Rs. 5000
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange("price", "above5000", e.target.checked)
                }
              />
              Above Rs. 5000
            </label>
          </div>

          <div className="filter-group">
            <h4>RATING</h4>
            {[...Array(5).keys()].map((_, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterChange("rating", `${idx}-${idx + 1}`, e.target.checked)
                  }
                />
                {idx} - {idx + 1} Star
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>CITY</h4>
            {["Mumbai", "Kolkata", "Bangalore", "Jaipur"].map((cityName) => (
              <label key={cityName}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterChange("city", cityName.toLowerCase(), e.target.checked)
                  }
                />
                {cityName}
              </label>
            ))}
          </div>
        </div>


        <div className="hotels-section">
          <h2>Explore Hotels</h2>
          <div className="sort-section">
            <label>Sort by</label>
            <select>
              <option>Relevance</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Rating</option>
            </select>
          </div>
          <div className="hotel-cards">
            {
              allHotels.length > 0 ? (
                filteredHotels?.map((hotel, index) => {
                  return (
                    <div className="hotel-card">
                      <img src={hotel?.image_url} alt="Hotel" className="hotel-image" />
                      <div className="hotel-info">
                        <h3>{hotel?.name}</h3>
                        <p>{hotel?.city}</p>
                        <p>
                          <span className="price">&#8377; {hotel?.rooms[0]?.price} - {hotel?.rooms[2]?.price}</span>
                          <span className="rating">{hotel?.rating} &#9733;</span>
                        </p>
                        <button className="view-button">View &#8594;</button>
                      </div>
                    </div>
                  )
                })
              ) : (<p>No Hotel Found</p>)
            }
          </div>
        </div>
      </div>
      <div className="pagination">
        <button className="prev-button" onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
        <button className="page-number active">{currentPage}</button>
        <button className="next-button" disabled={flag} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default HomePage;
