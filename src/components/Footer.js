import React from 'react';
import "./FooterStyles.css";
import { FaCode, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {} from 'react-icons/cg'

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
                            <p>DownTown Pg, vill-samaspur, sec-51</p>
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
                    <p> Hello, I'm Hriday Kumar Parnit, a passionate MERN stack developer with 
                        a strong enthusiasm for creating innovative and user-centric web 
                        applications. Currently I am looking for great opportunity 
                        where I can make an impact and continue my journey in web development.
                    </p>
                    <div className='social'> 
                        <Link to='https://www.linkedin.com/in/hriday-kumar-pranit-2a096114b/' target='_blank'>
                            <FaLinkedin size={30} 
                                style={{color:'white', marginRight: '1rem'}}
                            />
                        </Link>
                        
                        <Link to='https://github.com/Hridaykp' target='_blank'>
                            <FaGithub size={30} 
                                    style={{color:'white', marginRight: '1rem'}}>
                            </FaGithub>
                        </Link>
                        
                        <Link to ='https://leetcode.com/im_BUG/' target='_blank'>
                            <FaCode size={30} 
                                    style={{color:'white', marginRight: '1rem'}}>
                            </FaCode>
                        </Link>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer