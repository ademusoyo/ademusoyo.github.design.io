import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-nobg.png';


export default function Society() {
    return(
        <section id="final">
            <SectionHeader heading="Web Development"
                    subheading=""
                    imageId="travelix" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                                Final Website
                            </h2>
                            <p>Once I had an idea of what I wanted the website to look like and what I wanted the color to be. 
                                It was time to begin development. I used GatsbyJs an environment to build responsive static websites using React. Because of the additional blog component, I included a Content Management System (CMS) plugin that will allow content to be updated without it being through the code.</p>
                            <a className="btn btn-primary btn-xl" href="https://www.societyxtech.com" target="_blank" rel="noreferrer noopener">
                                Visit Website
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