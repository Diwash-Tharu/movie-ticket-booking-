
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import  SignUp  from './pages/SingUp'
import Movie from './pages/Movie'
import Release from './pages/Release'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import MoviesDetailPage from './pages/MoviesDetailPage'
import MoviesDetailPageHome from './pages/MovieDetailPageHome'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/movies" element={<Movie/>}/>
        <Route path="/bookings" element={<Booking/>}/>
        <Route path="/releases" element={<Release/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path="/movies/:id" element={<MoviesDetailPage/>}/>
        <Route path="/movie/:id" element={<MoviesDetailPageHome/>}/>
      </Routes>
    </>
  )
}

export default App