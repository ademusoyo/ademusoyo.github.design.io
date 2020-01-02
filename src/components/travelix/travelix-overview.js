import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-iphone.png';


export default function TravelixOverview() { 
    return(
        <section id="overview">
            <SectionHeader heading="Overview"
                    subheading=""
                    imageId="travelix" />
        
                        <div className="case-study-grid">
                            <div>
                            <h2>
                            Problem
                            </h2>
                            <p>Currently, people use multiple websites and applications to gain insight about a new place that they are visiting. 
                                This process can be really overwhelming and hard to synthesize into understanding what you want to to do 
                                and information tends to be missing.</p>
                            <h2>
                            Solution
                            </h2>
                            <p>
                                 Travelix aims to be that new mobile application that centralizes all types of media for you to plan your dream location. Users have the ability to:
                            </p>
                            <ul>
                                <li>View articles, photos, and reviews within the platform</li>
                                <li>Create their own content</li>
                                <li>Organize your favorite content into collections to save for later.</li>
                            </ul>
                            
                            </div>
                            <div>
                                <img className="img-fluid" src={p1} alt="travelix-iphone-images" />
                            </div>
                        </div>


        </section>
    );
}