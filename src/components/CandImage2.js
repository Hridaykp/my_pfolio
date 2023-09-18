import './CandImagestyles2.css';
 
import React, { Component } from 'react'

class CandImage2 extends Component {
    render(){
        return (
            <div className='cand-image'>
                <div className='heading'>
                    <h1>
                        {this.props.heading}
                    </h1>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>
          ); 
        }
    }
 

export default CandImage2