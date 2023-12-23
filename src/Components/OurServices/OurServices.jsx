import './OurServices.css'
import React from 'react'
import ServiceBox from '../ServiceBox'
import Buttons from '../Generics/Buttons'
import whiteLines from '../../assets/images/background-lines-white-right.svg'
import SectionTitle from '../Generics/SectionTitle'



const OurServices = () => {
  return (
    <section className="service-section">
        <div className="container">
            <SectionTitle title="Our Services" description="We Provide The Best Consulting Services "/>
            <div className="service-boxes">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus" url="businessadvice"/>
                <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus" url="/services/startupbusiness"/>
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus" url="/services/financialadvice"/>
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus" url="/services/riskmanagement"/>
            </div>
            <div className="browse-services">
            <Buttons type="outline-dark" title="Browse services" url="/services"/>
            </div>  
        </div>
        <img className="background-lines-white-right" src={whiteLines} />
    </section>
  )
}

export default OurServices