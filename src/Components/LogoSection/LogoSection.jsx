import './LogoSection.css'
import React from 'react'


import paperzLogo from '../../assets/images/paperz.svg'
import dorfusLogo from '../../assets/images/dorfus.svg'
import martinoLogo from '../../assets/images/martino.svg'
import squareLogo from '../../assets/images/square.svg'
import gobonaLogo from '../../assets/images/gobona.svg'

const LogoSection = () => {
  return (
    <section className="brand-section">
        <div className="container">
            <a href="paperz.html"><img src={paperzLogo}/> </a>
            <a href="paperz.html"><img src={dorfusLogo}/> </a>
            <a href="paperz.html"><img src={martinoLogo}/> </a>
            <a href="paperz.html"><img src={squareLogo}/> </a>
            <a href="paperz.html"><img src={gobonaLogo}/> </a>
        </div>
    </section>
    )
}

export default LogoSection