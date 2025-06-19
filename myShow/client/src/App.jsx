import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
const App = () => {
  return (
    <>
     <Navbar/>
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/theaters' element={<Movies/>} />
        <Route path='/releases' element={<Movies/>} />
        <Route path='/favorites' element={<Favorites/>} />
    </Routes>
    
    
    </>
   
  )
}

export default App