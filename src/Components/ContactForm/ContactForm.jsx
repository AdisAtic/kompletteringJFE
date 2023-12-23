import './ContactForm.css'
<Buttons type="yellow" title="Send Message" />

import React from 'react'
import Buttons from '../Generics/Buttons'

const ContactForm = () => {
  return (
    <div className="contactform-section">
      <div className="container">
        <form>
            <h2>Leave us a message for any information.</h2>
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Your Email*" />
            <textarea placeholder="Your Message*"></textarea>
            <Buttons type="yellow" title="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default ContactForm