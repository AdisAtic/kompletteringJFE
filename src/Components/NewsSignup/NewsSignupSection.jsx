import './NewsSignupSection.css'

import backgroundLinesRight from '../../assets/images/background-wavy-lines.svg'

import React from 'react'
import Buttons from '../Generics/Buttons'

const NewsSignupSection = () => {
  return (
    <div>
        <div className="newsletter-section">
      <div className="container">
        <h2>Get News Updated By Signup</h2>
        <form>
          <input type="email" placeholder="Enter your email"/>
          <Buttons type="yellow" title="Subscribe" url="/subscribe" />
          {/* Add your submit button or additional form elements here */}
          <img className="background-wavy-lines-right" src={backgroundLinesRight} />
        </form>
       
      </div>
      
    </div>
    </div>
  )
}

export default NewsSignupSection