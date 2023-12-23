import './ProjectSection.css'
import newspaperImg from '../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import computerImg from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import glassesImg from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg'
import notebookImg from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import SectionTitle from '../Generics/SectionTitle'

import React from 'react'
import Buttons from '../Generics/Buttons'

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="container">
        <SectionTitle title="Project & Case studies" description="Let's Looks Our Global Projects" />
        
        <div className="project-grid">
          <a href="#" className="project">
            <img src={newspaperImg} alt="Project Image"/>
            <h5>Grow your business</h5>
            <p>
              Read More
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </p>
          </a>
          <a href="#" className="project">
            <img src={glassesImg} alt="Project Image"/>
            <h5>Why your client needs a responsive website</h5>
            <p>
              Read More
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </p>
          </a>
          <a href="#" className="project">
            <img src={notebookImg} alt="Project Image"/>
            <h5>Educate your employees to get better results</h5>
            <p>
              Read More
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </p>
          </a>
          <a href="#" className="project">
            <img src={computerImg} alt="Project Image"/>
            <h5>Business insights is a important piece of your business</h5>
            <p>
              Read More
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </p>
          </a>
        </div>
        <div className="all-projects-link">
          <Buttons type="dark" title="All Projects" url="/allprojects" />
        </div>
      </div>
    </section>
  )
}

export default ProjectSection