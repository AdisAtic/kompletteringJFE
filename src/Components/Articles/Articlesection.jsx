import './ArticleSection.css'

import smilingWoman from '../../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import chatGPT from '../../assets/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import bookCSS from '../../assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg'

import React from 'react'
import Articles from '../Generics/Articles'

const Articlesection = () => {
  return (
    <section className="article-section">
        <div className="container">
        <div className="section-title">
            <p>Article & News</p>
        </div>
        <div className="browse-news">
            <h2>Get Every Single Articles & News</h2>
            {/* Add your browse news content or components here */}
        </div>
        <div className="articles">
        <Articles date={{ day: 25, month: 'Mar' }} imageSrc={smilingWoman}  category="Business" title="How To Use Digitalization In The Classroom"  content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
        <Articles date={{ day: 17, month: 'Mar' }} imageSrc={chatGPT}  category="Business" title="How To Implement Chat GPT In Your Projects"  content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
        <Articles date={{ day: 13, month: 'Mar' }} imageSrc={bookCSS}  category="Business" title="The Guide To Support Modern CSS Design"  content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
            
        </div>
        </div>

        <div className="dot-circles">
            <div className="dot-circle active"></div>
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
        </div>
       


    </section>
  )
}

export default Articlesection