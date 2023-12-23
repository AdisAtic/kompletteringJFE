import './AboutSection.css'

import React from 'react'
import aboutImage from '../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import Buttons from '../Generics/Buttons'

const AboutSection = () => {
  return (
    <section className="about-section">
        <div className="container">
        <div className="image-column">
            <img src={aboutImage}/>
            <div className="image-quote">
            <h4>Samantha Brown,<span> Founder</span></h4>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="content-column">
            <p className="section-title">About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br></br> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident</p>
            <div className="about-links">
                <Buttons type="dark" title="Learn More" url="/learnmore"/>
                <button className="btn-white-play"><i className="fa-solid fa-play"></i></button> <a><span className="intro-span">Intro Video</span></a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection