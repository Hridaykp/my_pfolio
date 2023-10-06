import React from "react";
import "./CandImagestyles.css"
import { Link } from "react-router-dom";
import Resume from 'file:///C:/Users/Hriday/Desktop/Hriday%20Kumar%20Pranit.pdf'

const CandImage = () => {
  return (
    <div className="cand">
        <div className="mask">
            <img className="intro-img" src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"alt="Itroimg"/>
        </div>
        <div className="content">
            <p>HRIDAY KUMAR PRANIT</p>
            <h1>Full stack Developer</h1>
            <div >
                <Link to ='/project' className="btn">Project</Link>
                {/* <Link to ='/contact' className="btn btn-light">Contact</Link> */}
                <a href={Resume} rel ='noreferrer' target="_blank"> <button className="btn btn-light"> Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default CandImage;