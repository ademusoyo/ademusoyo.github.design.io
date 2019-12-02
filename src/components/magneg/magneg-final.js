import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/magneg-nobg.png';


export default function MagnegFinal() {
    return(
        <section id="final">
            <SectionHeader heading="Final Designs"
                    subheading=""
                    imageId="magneg" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                                High-Definition Mockups
                            </h2>
                            <p>Taking in the concluding results of the preference and usability tests and the personas from the very beginning,
                                 it's time to finalize the designs. 
                                 We went through several iterations to get to the finalized solution that is clean, 
                                 simple and solves our original problem. The prototype was created using Figma.</p>
                            <a className="btn btn-primary btn-xl" href="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Cloud-Storage-App?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down" target="_blank">
                                View Prototype
                            </a>
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                                <img className="img-fluid space" src={p1} alt="magneg-iphone-images" />
                            </div>
                        </div>

                    </div>


        </section>
    );
}