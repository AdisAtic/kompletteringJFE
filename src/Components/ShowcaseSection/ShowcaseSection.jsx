import './ShowcaseSection.css'

import React from 'react'
import showcaseImage from '../../assets/images/showcase-image.svg'
import Buttons from '../Generics/Buttons'

const ShowcaseSection = () => {
  return (
    
     <section className="showcase-section">
        <div className="container">
            <div className="content-column">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into tesable prototypes.</p>
                <div className="button-links">
                    <Buttons type="yellow" title="Get Consulting" url="/consulting"/>
                    <Buttons type="outline-dark" title="Learn more" url="/learnmore"/>
                </div>
            </div>
            <div className="image-column">
              <img src={showcaseImage}/>
            </div>
        </div>
    </section>
    
  )
}

export default ShowcaseSection