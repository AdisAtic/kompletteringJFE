import './WhyChoose.css'

import React from 'react'
import chattingWomen from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const WhyChoose = () => {
  return (
    <section className="chooseus-section">
      <div className="container">
        <div className="content-column">
          <div className="section-title">
            <p>Why Choose Us</p>
          </div>
          <h2>Why We Are The Best Business Consulting Agency</h2>
          <ul>
            <li>
              <i className="fa-regular fa-thumbs-up"></i>
              <h5>Process Excellence</h5>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <i className="fa-solid fa-pen-nib"></i>
              <h5>Strategic Planning</h5>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <i className="fa-solid fa-pen-nib"></i>
              <h5>Experience Design</h5>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <i className="fa-solid fa-brain"></i>
              <h5>Artificial Inteligence</h5>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="image-column">
          <img src={chattingWomen}/>
          <div className="background-rectangle"></div>
        </div>
        
      </div>
    </section>
  )
}

export default WhyChoose