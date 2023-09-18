import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CandImage2 from '../components/CandImage2';
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <CandImage2 heading="PROJECTS" text="some of my projects are"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project