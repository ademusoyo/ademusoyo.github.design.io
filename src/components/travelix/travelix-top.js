import React from 'react';
import SectionHeader from '../SectionHeader'


export default function TravelixTop() {
    return(
        <section id="travelix-top">
            <SectionHeader heading="Travelix"
                    subheading="a new mobile application that allows you plan your next vacation by giving you reviews, articles, and photos relevant to that area."
                    imageId="travelix" />
                    <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <h5>
                            <span className="emphasis">Role:</span> <span className="font-lighter">Ideation, User Research, UX Design, Content Strategy, Prototyping, and Brand Identity</span>
                        </h5>
                        <h5>
                            <span className="emphasis">Tools:</span> <span className="font-lighter">Figma, InVision, Maze, Google Forms</span>
                        </h5>
                        
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <h5>
                            <span className="emphasis">Duration:</span> <span className="font-lighter">8 weeks</span>
                        </h5>
                        <h5>
                            <span className="emphasis">Deliverables:</span> <span className="font-lighter"> Competitive analysis, Survey results, User personas, Branding, Sitemap, Wireframes, Prototype</span>
                        </h5>
                        </div>
                </div>

                    </div>


        </section>
    );
}