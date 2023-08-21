import React from 'react';
import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                        style={{color:'white', marginRight: '2rem'}}
                    />
                    <div>
                        <p>DownTown Pg, sec-51</p>
                        <p>Gurgaon, Haryana</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} 
                            style={{color:'white', marginRight: '2rem'}}
                    />
                    700783434</h4>
                </div>
                <div className='phone'>
                    <h4><FaWhatsapp size={20} 
                            style={{color:'white', marginRight: '2rem'}}
                    />
                    8193911829</h4>
                </div>

                <div className='gmail'>
                    <h4><FaMailBulk size={20} 
                            style={{color:'white', marginRight: '2rem'}}
                    />
                    hridaykp21@gmail.com </h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>hjjkdkjkjdkjkjkjkfdjdjsjkskjsjsjk
                    sjjsjbjjsnsmsm ssmnsnsmnmsnmsnms
                    sjjsnsjs
                </p>
                <div className='social'>
                    <FaFacebook size={30} 
                            style={{color:'white', marginRight: '1rem'}}
                    />
                    <FaTwitter size={30} 
                            style={{color:'white', marginRight: '1rem'}}
                    />
                    <FaLinkedin size={30} 
                            style={{color:'white', marginRight: '1rem'}}
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer