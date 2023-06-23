import React, { useState } from 'react'
import Header from '../../Components/Header/Header';

import "./Contact.css"

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const fill = (e) => {

    if (e.target.name === "name") {
      setName(e.target.value);
    }
    else if (e.target.name === "email") {

      setEmail(e.target.value);
    }

    else if (e.target.name === "message") {
      setMessage(e.target.value);
    }

  }

  const validate = () => {

    if (name.length > 2) {
      setNameError(false);
    }
    else {
      setNameError(true);
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

      setEmailError(false);
    }

    else {
      setEmailError(true);
    }


    if (message.length > 15) {

      setMessageError(false);

    }
    else {

      setMessageError(true);
    }

  }

  const sumbit = () => {
    validate()

    if (nameError === false && emailError === false && messageError === false && name !== "" && email !== "" && message !== "") {
      console.log("submit", name, email);
    }

  }


  return (

    <div>
      <Header/>
      <div class="contact">
        <div class="left">
{/* <a className="logo" href="/"><img class="logo" src="https://www.coolgenerator.com/Data/Textdesign/202206/5c1c6730486a1af41de28a3f8ed63c82.png" alt='logo' /></a>*/}
        </div>
        <div class="right">
          <h1 className='h1c'>Contact us</h1>
          <p className='p1c'>Planning to visit Europe soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

          <form id="contact-form" />
          <label htmlFor="name">Full name</label>
          <input  className='inp' type="text" name="name" placeholder="Your Full Name" value={name} onBlur={() => validate()} onChange={(e) => fill(e)} />
          {nameError && <h4>Your name should be at least 2 characters long.</h4>}
          <label htmlFor="email">Email Address</label>
          <input  className='inp' id="email" placeholder='Email' type="text" name='email' value={email} onBlur={() => validate()} onChange={(e) => fill(e)} />
          {emailError && <h4>Please enter a valid email address.</h4>}
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Your Message" name="message" value={message} onBlur={() => validate()} onChange={(e) => fill(e)}></textarea>
          {messageError && <h4>Please write a longer message.</h4>}
          <button  onClick={() => sumbit()} className="btn1">Send</button>
          <form />
        
        </div>
      </div>
    </div>
  )
}

export default Contact;