import './TeamSection.css'
import kristinePalmer from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import justinWilloman from '../../assets/images/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'
import kimberlyHansen from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import markAubri from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import jackMc from '../../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import cassandraW from '../../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import amandaT from '../../assets/images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'

import React from 'react'
import Buttons from '../Generics/Buttons'
import Testimonials from '../Generics/Testimonials'
import TeamMember from '../Generics/TeamMember'
import SectionTitle from '../Generics/SectionTitle'
import PageDots from '../Generics/PageDots'

const TeamSection = () => {
  return (
    <section className="team-section">
            <div className="container">
                <SectionTitle title="Meet Our Team" />
            
            <div className="browse-team">
                <h2>Experience team members</h2>
                <Buttons type="yellow" title="Browse Team" url="/browseteam"/>
            </div>
            <div className="team-members">
                <TeamMember imageSrc={kristinePalmer} name="Kristine Palmer" title="Chef Operation Officer" />
                <TeamMember imageSrc={markAubri} name="Mark Aubri" title="Senior Consultant" />
                <TeamMember imageSrc={kimberlyHansen} name="Kimberly Hansen" title="Senior Consultant" />
                <TeamMember imageSrc={justinWilloman} name="Justin Willoman" title="Senior Tech Consultant" />
            </div>
            </div>

            
      
      <PageDots numberOfDots={5} activeIndex={1} /> 
      

           

        <section className="testimonial-section">
            <div className="container">
                <div className="section-border">
                    <div className="section-title">
                        <p>Testimonal</p>
                    </div>
                    <h2>What Our Client Says</h2>
                    <div className="testimonials">
                     <div className="testimonial">
                        <Testimonials  rating={5} content="Lorem ipsum dolor, sit amet Consectetur elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" writerImage={cassandraW} writerName="Cassandra Warren"  writerTitle="Business Manager, Dorfus" />
                    </div>
                    <div className="testimonial">
                        <Testimonials  rating={5} content="Lorem ipsum dolor, sit amet Consectetur elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" writerImage={amandaT} writerName="Amanda Tulling"  writerTitle="Senior Developer, Square" />    
                    </div>
                    <div className="testimonial">
                        <Testimonials  rating={5} content="Lorem ipsum dolor, sit amet Consectetur elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" writerImage={jackMc} writerName="Jack McDouglas"  writerTitle="Key Account Manager, Gobona" /> 
                    </div>
                    </div>
                    <Buttons type="dark" title="All Reviews" url="/allreviews"/> 
                </div>
            </div>
        </section>    
    </section>
  )
}

export default TeamSection