import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/magneg-iphone.png';


export default function MagnegOverview() {
    return(
        <section id="overview">
            <SectionHeader heading="Overview"
                    subheading=""
                    imageId="magneg" />
                    <div className="case-study-grid">
                        <div>
                        <h2>
                        Problem
                        </h2>
                        <p>Creating, sharing, and collaborating on different projects can be frustrating especially when trying to organize. 
                            Individuals need a tool that allows people to not only stay connected, 
                            but to allow content creation and collaboration in a uniformed organized way.</p>
                        <h2>
                        Solution
                        </h2>
                        <p>
                        Creating, sharing, and collaborating on different projects can be frustrating especially when trying to organize. 
                        Individuals need a tool that allows people to not only stay connected, 
                        but to allow content creation and collaboration in a uniformed organized way.
                        </p>
                        
                        </div>
                        <div>
                            <img className="case-study-image" src={p1} alt="magneg-iphone-images" />
                        </div>
                    </div>


        </section>
    );
}