import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { apiConnector } from '../../../utils/apiConnector';
import { Hotels_API } from '../../../utils/api';
import Pagination from '../../components/Pagination';



function HomePage() {

  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const [hotelsList, setHotelsList] = useState([])
  const [allHotels, setAllHotels] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [flag, setFlag] = useState(false)


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
          <button className="clear-button">CLEAR ALL</button>
          <div className="filter-group">
            <h4>PRICE RANGE</h4>
            <label><input type="checkbox" /> Up to Rs. 1000</label>
            <label><input type="checkbox" /> Rs. 1001 to Rs. 2000</label>
            <label><input type="checkbox" /> Rs. 2001 to Rs. 5000</label>
            <label><input type="checkbox" /> Above Rs. 5000</label>
          </div>
          <div className="filter-group">
            <h4>RATING</h4>
            <label><input type="checkbox" /> 0 - 1 Star</label>
            <label><input type="checkbox" /> 1 - 2 Star</label>
            <label><input type="checkbox" /> 2 - 3 Star</label>
            <label><input type="checkbox" /> 3 - 4 Star</label>
            <label><input type="checkbox" defaultChecked /> 4 - 5 Star</label>
          </div>
          <div className="filter-group">
            <h4>CITY</h4>
            <label><input type="checkbox" defaultChecked /> Mumbai</label>
            <label><input type="checkbox" /> Kolkata</label>
            <label><input type="checkbox" /> Bangalore</label>
            <label><input type="checkbox" /> Jaipur</label>
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
                allHotels?.map((hotel, index) => {
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
