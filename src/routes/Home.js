import React from "react";
import Navbar from "../components/Navbar";
import CandImage from "../components/CandImage";
import Footer from "../components/Footer";
import Work from '../components/Work'
const Home = () => {
  return (
    <div>
      <Navbar />
      <CandImage/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Home;
