import React from "react";
import "./CandImagestyles.css"
import { Link } from "react-router-dom";


const CandImage = () => {
  return (
    <div className="cand">
        <div className="mask">
            <img className="intro-img" src="https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"alt="Itroimg"/>
        </div>
        <div className="content">
            <p>HRIDAY KUMAR PRANIT</p>
            <h1>MERN Developer</h1>
            <div >
                <Link to ='/project' className="btn">Projects</Link>
                <Link to ='/contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default CandImage