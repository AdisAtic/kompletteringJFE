import './NavSection.css'

import React from 'react'
import Buttons from '../Generics/Buttons'
import critoLogo from '../../assets/images/logotype.svg'

const NavSection = () => {
  return (
    <section className="nav-section">
         <div className="container">
            <a href="home.html"><img className="logotype" src={critoLogo}/> </a>
            <nav> 
                <div className="first-row">
                    <div className="company-info">
                        <span><i className="fa-solid fa-phone-volume"></i>+46 (8) 121 470 50</span>
                        <span><i className="fa-regular fa-envelope"></i>info@crito.com</span>
                        <span><i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 Stockholm</span>    
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="second-row">
                <div className="navba">
                    <a href="/" >Home</a>
                    <a href="/service">Service</a>
                    <a href="/news">News</a>
                    <a href="/contacts">Contact</a>
                </div>
                    <Buttons type="yellow" title="Login" url="/login"/>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default NavSection