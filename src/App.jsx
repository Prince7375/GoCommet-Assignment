import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import HotelList from './Pages/HotelList/HotelList'
import Navbar from './components/navbar/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotellist" element={<HotelList />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
