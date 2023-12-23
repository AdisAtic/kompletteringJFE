import Buttons from '../Generics/Buttons'
import FeatureBox from '../Generics/FeatureBox'
import SectionTitle from '../Generics/SectionTitle'
import './FeatureSection.css'

import React from 'react'

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="container">
      <div className="section-title"></div>
        <div className="section-border">
          <div className="feature-grid">
             <div className="feature-learnmore">
              <SectionTitle title="Features" description="Our Accounting is trusted by thousad of companies"/>
              <Buttons type="yellow" title="Learn More" url="/features"/>
            </div>
            <div className="feature-boxes">
            <FeatureBox iconClass="fa-regular fa-handshake" title="Business Advice" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus"/>
            <FeatureBox iconClass="fa-regular fa-lightbulb" title="Startup Business" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus"/>
            <FeatureBox iconClass="fa-solid fa-chart-line" title="Financial Advice" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus"/>
            <FeatureBox iconClass="fa-solid fa-boxes-stacked" title="Risk Management" description="Lorem, ipsum dolor sit amet consectur adipisicing elit. Officiis in nam possimus"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection