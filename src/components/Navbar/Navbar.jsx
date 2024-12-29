import React from 'react'
import './Navbar.css' 
import logo from "../../assets/BookMyHotel.png"
function Navbar() {
  return (
    <div className='navbar'>
    {/* navbar logo */}
        <div className='logo'>
            <img src={logo} />
        </div>
    {/* navbar links */}
        <ul>
            <li>Home</li>
            <li>Hotels</li>
            <li>Places</li>
        </ul>
    </div>
  )
}

export default Navbar