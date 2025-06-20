import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import Footer from './components/Footer'
import MoviesDetails from './pages/MoviesDetails'
import SeatLayout from './pages/SeatLayout'
import Mybookings from './pages/Mybookings'
import {Toaster} from "react-hot-toast"


const App = () => {
  const[isAdminRoute]=useState(false);
  return (
    <>
    <Toaster/>
 
   {! isAdminRoute ? <Navbar/>:""}


   {/* <MoviesDetails/> */}
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MoviesDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<Mybookings/>} />
        
        <Route path='/theaters' element={<Movies/>} />
        <Route path='/releases' element={<Movies/>} />
        <Route path='/favorites' element={<Favorites/>} />
    </Routes>

     {! isAdminRoute ?     <Footer/>:""}
    
    </>
   
   
  )
}

export default App