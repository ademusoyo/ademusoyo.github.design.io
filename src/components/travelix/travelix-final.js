import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-nobg.png';


export default function TravelixFinal() {
    return(
        <section id="final">
            <SectionHeader heading="Final Designs"
                    subheading=""
                    imageId="travelix" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                                High-Definition Mockups
                            </h2>
                            <p>From the wireframes and style guide we were able to bring our designs to life. 
                                We went through several iterations to get to the finalized solution that is clean, simple, accessible and solves our original problem. 
                                The prototype was created using Figma.</p>
                            <a className="btn btn-primary btn-xl" href="https://www.figma.com/proto/f2n348DjtiG7jTwazMLorylD/Travel-App?node-id=53%3A1&viewport=322%2C202%2C0.371819&scaling=scale-down" target="_blank" rel="noreferrer noopener">
                                View Prototype
                            </a>
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                                <img className="img-fluid" src={p1} alt="travelix-iphone-images" />
                            </div>
                        </div>

                    </div>


        </section>
    );
}