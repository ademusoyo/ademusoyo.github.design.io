import React from 'react';
import SectionHeader from '../SectionHeader'


export default function MagnegTop() {
    return(
        <section id="magneg-top">
            <SectionHeader heading="Magneg"
                    subheading="A new cloud storage mobile application that allows users to create, store and collaborate all in one platform."
                    imageId="magneg" />
                    <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <h5>
                            <span className="emphasis">Role:</span> <span className="font-lighter">UX Research, UX Design, Brand Identity, Prototyping</span>
                        </h5>
                        <h5>
                            <span className="emphasis">Tools:</span> <span className="font-lighter">UX Figma, InVision, Maze, Google Forms</span>
                        </h5>
                        
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <h5>
                            <span className="emphasis">Duration:</span> <span className="font-lighter">18 weeks</span>
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