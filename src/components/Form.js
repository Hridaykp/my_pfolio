import './FormStyles.css';

import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <form action='https://getform.io/f/8246abf9-4bd3-41d7-b0fe-cae9ea8ae1de' method='POST'>
                <label>Your name</label>
                <input type='text' name='name'></input>
                <label>Email</label>
                <input type='email' name='email'></input>
                <label>Subject</label>
                <input type='text' name='subject'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='type your message here...' name='message'/>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form