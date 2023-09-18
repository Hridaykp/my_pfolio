import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CandImage2 from '../components/CandImage2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <CandImage2 heading="CONTACT" text="Let's have some chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact