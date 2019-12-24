import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-iphone.png';


export default function SocietyOverview() {
    return(
        <section id="overview">
            <SectionHeader heading="Overview"
                    subheading=""
                    imageId="travelix" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Problem
                            </h2>
                            <p>Previously, for people to subscribe to the newsletter, they were redirected to a landing page on mailchimp. 
                                While, this got the job done, Society x Tech did not have it's own platform and there was minimal 
                                customization in what the landing page could look like.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Solution
                            </h2>
                            <p>
                            This website design and development identifies Society x Tech as a consistent brand with it's own platform as well as:
                            </p>
                            <ul>
                                <li>Allow visitors to subscribe</li>
                                <li>Read previous issues</li>
                                <li>Read blog posts featuring different interviews</li>
                            </ul>
                            </div>
                        </div>

                    </div>


        </section>
    );
}