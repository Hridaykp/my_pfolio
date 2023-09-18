import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CandImage2 from '../components/CandImage2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar/>
      <CandImage2 heading="ABOUT "text="I am a MERN stack developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About