import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React from 'react'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I ?</h1>
                <p>I am a Mern stack developer who developes and builds frontend & backend web applications</p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
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