import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React, {useState} from 'react'
import Skills from './Skills';

const AboutContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I ?</h1>
                <p> Hello, I'm Hriday Kumar Parnit, a passionate MERN stack developer with 
                    a strong enthusiasm for creating innovative and user-centric web 
                    applications. Currently I am looking for great opportunity 
                    where I can make an impact and continue my journey in web development and 
                    I am eager to learn more technologies.

                </p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
                <div>
                    <button onClick={()=>{setIsOpen(!isOpen)}} className='btn btn-light' style={{marginTop:'20px'}}>Skills</button>
                    {isOpen && <Skills/>}
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