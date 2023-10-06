import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React from 'react'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I ?</h1>
                <p> Hello, I'm Hriday Kumar Parnit, a passionate MERN stack developer with 
                    a strong enthusiasm for creating innovative and user-centric web 
                    applications. Currently I am looking for great opportunity 
                    where I can make an impact and continue my journey in web development.
                </p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
                <div>
                    <h1 className='skills'>Skills</h1>
                </div>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src='https://wallpapercave.com/wp/wp8903962.jpg' alt='true' className='img'/>
                    </div>

                    <div className='img-stack bottom'>
                        <img src='https://wallpapercave.com/wp/wp8903936.jpg' alt='true' className='img'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutContent