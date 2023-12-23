import './ContactBox.css'

import React from 'react'

const ContactBox = () => {
  return (
    <div className="contactbox-section">
    <div className="container">
      <div className="infobox">
        <a className="black-circle"><i className="fa-solid fa-location-dot"></i></a>
        <h6 className="title">Visit Us</h6>
        <div className="info">Sveavägen 31 <br></br>111 34 STOCKHOLM</div>
      </div>
      <div className="infobox">
        <a className="black-circle"><i className="fa-solid fa-phone"></i></a>
        <h6 className="title">Call Us</h6>
        <div className="info">+46 (8) 121 470 50 <br></br>+46 (8) 121 470 51</div>
      </div>
      <div className="infobox">
        <a className="black-circle"><i className="fa-solid fa-envelope"></i></a>
        <h6 className="title">Email us</h6>
        <p className="info">info@crito.com<br></br>support@crito.com</p>
      </div>
    
    </div>
  </div>
  )
}

export default ContactBox