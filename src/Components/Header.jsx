import './Header.css'

import React from 'react'
import OurServices from './OurServices/OurServices'
import NavSection from './NavBar/NavSection'
import ShowcaseSection from './ShowcaseSection/ShowcaseSection'
import backgroundLines from '../assets/images/background-lines.svg'

import LogoSection from './LogoSection/LogoSection'
import FeatureSection from './FeatureSection/FeatureSection'
import AboutSection from './AboutUs/AboutSection'
import WhyChoose from './ChooseUs/WhyChoose'
import ProjectSection from './Project/ProjectSection'
import TeamSection from './Teams/TeamSection'
import Articlesection from './Articles/Articlesection'
import NewsSignupSection from './NewsSignup/NewsSignupSection'
import FooterSection from './Footer/FooterSection'

const Header = () => {
  return (
    <>
    <div className="background-lines">
      <img src={backgroundLines}/>
    </div>
    
    <NavSection />
    

    </>
  )
}

export default Header