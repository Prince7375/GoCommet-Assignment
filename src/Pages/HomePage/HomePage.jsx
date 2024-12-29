import React , {useEffect , useState} from 'react';
import './HomePage.css';
import { apiConnector } from '../../../utils/apiConnector';
import { Hotels_API } from '../../../utils/api';
import  herobg  from '../../assets/hero-bg.jpg'

function HomePage() {

  const [hotelsList , setHotelsList] = useState([])

  const fetchHotesList = async () => {
    try {
      const response = await apiConnector({ method: "GET", url: Hotels_API.searchHotels_API })
      console.log("hotelsList in ", hotelsList)
      setHotelsList(response?.data)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    fetchHotesList()
  },[])

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
          <input
            type="text"
            className="search-input"
            placeholder="Type city, place, or hotel name"
          />
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
            {Array(6).fill(0).map((_, index) => (
              <div className="hotel-card" key={index}>
                <img src="hotel-image.jpg" alt="Hotel" className="hotel-image" />
                <div className="hotel-info">
                  <h3>The Peninsula Hotel</h3>
                  <p>Mumbai</p>
                  <p>
                    <span className="price">&#8377; 1700 - 5500</span>
                    <span className="rating">4.6 &#9733;</span>
                  </p>
                  <button className="view-button">View &#8594;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pagination">
        <button className="prev-button">Prev</button>
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}

export default HomePage;
