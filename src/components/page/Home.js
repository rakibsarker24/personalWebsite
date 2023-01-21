import React from 'react'
import Navber from "../navber/Navber"
import Slider from '../slider/Slider'
import About from "../about/About";
import Qualification from "../qualification/Qualification";
import Service from "../services/Service";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Portfolio from "../portfolio/Portfolio";
import CounterUp from '../counterUp/CounterUp';
const Home = () => {
  return (
    <>
      <Navber/>
      <Slider/>
      <CounterUp/>
      <About/>
      <Qualification/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home