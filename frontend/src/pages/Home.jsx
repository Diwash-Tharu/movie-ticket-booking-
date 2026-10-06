import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Movies  from '../components/Movies'
import Trailers from '../components/Trailers' 
import News from '../components/News'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
          
        <Navbar/>
        <Banner/>
        <Movies/>
        <Trailers/>
        <News/>
        <Footer/>
        {/* <h1>Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
          <p>this is the home page</p> */}
    </div>
  )
}


export default Home



