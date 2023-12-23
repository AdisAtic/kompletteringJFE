import React from 'react'
import Header from '../Components/Header'
import ShowcaseSection from '../Components/ShowcaseSection/ShowcaseSection'
import LogoSection from '../Components/LogoSection/LogoSection'
import FeatureSection from '../Components/FeatureSection/FeatureSection'
import AboutSection from '../Components/AboutUs/AboutSection'
import OurServices from '../Components/OurServices/OurServices'
import WhyChoose from '../Components/ChooseUs/WhyChoose'
import ProjectSection from '../Components/Project/ProjectSection'
import TeamSection from '../Components/Teams/TeamSection'
import Articlesection from '../Components/Articles/Articlesection'
import NewsSignupSection from '../Components/NewsSignup/NewsSignupSection'

const Home = () => {
  return (
    <>
    <ShowcaseSection />
    <LogoSection />
    <FeatureSection />
    <AboutSection/>
    <OurServices />
    <WhyChoose />
    <ProjectSection />
    <TeamSection />
    <Articlesection />
    <NewsSignupSection />

    </>
  )
}

export default Home