import React from 'react';
import SectionHeader from '../SectionHeader'


export default function MagnegFinal() {
    return(
        <section id="final">
            <SectionHeader heading="Final Designs"
                    subheading=""
                    imageId="magneg" />
                    <div className="content">
                            <h2>
                                High-Definition Mockups
                            </h2>
                            <p>Taking in the concluding results of the preference and usability tests and the personas from the very beginning,
                                 it's time to finalize the designs. 
                                 We went through several iterations to get to the finalized solution that is clean, 
                                 simple and solves our original problem. The prototype was created using Figma.</p>
                            <a className="btn btn-primary btn-xl" href="https://www.figma.com/proto/MLLZbAK70j2aG3NCv8Lad28h/Cloud-Storage-App?node-id=140%3A2&viewport=2036%2C1388%2C0.5&scaling=scale-down" target="_blank" rel="noreferrer noopener">
                                View Prototype
                            </a>
                            
                </div>


        </section>
    );
}