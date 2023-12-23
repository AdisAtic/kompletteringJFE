import './FooterSection.css'

import React from 'react'

import whiteLogo from '../../assets/images/logotype-white.svg'
import whiteLines from '../../assets/images/background-lines-white-right.svg'
import endLines from '../../assets/images/background-lines-right.svg'

const FooterSection = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="container">
          <div className="logo">
            <img className="logo" src={whiteLogo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
              {/* Add more list items as needed */}
            </ul>
          </div>
          <div>
            <h5>Help</h5>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
          <div>
            <h5>Link</h5>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>
      </section>
      <section className="copyright-section">
        <div className="container">
          <p> © 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="social-media">
            <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <img className="background-lines-white-right" src={whiteLines} />
        <img className="background-lines-right" src={endLines} />
      </section>
  </footer>
  )
}

export default FooterSection