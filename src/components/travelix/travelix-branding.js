import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-color-palette.png';
import p2 from '../../assets/images/travelix-typography.png';
import p3 from '../../assets/images/travelix-mind-map.jpeg';


export default function TravelixBranding() {
    return(
        <section id="branding">
            <SectionHeader heading="Banding"
                    subheading="Logo & Naming, Color, & Typography"
                    imageId="travelix" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Logo & Naming
                            </h2>
                            <p>I chose the name Travelix as a play on the word Travel and List. 
                                When you're planning a trip, you're typically making a list of places you want to travel. 
                                I did a mind mapping excercise to help get ideas on different names.</p>
                                <img className="img-fluid" src={p3} alt="travelix mind map" />
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Branding
                            </h2>
                            <p>I wanted Travelix to exude some sense of vibrancy while also being very minimalistic. 
                            The red and orange colors give off the sense of adventure while the brown/tannish colors 
                            give that base of calmness and reliability.</p>
                            <img className="img-fluid" src={p1} alt="travelix color palette" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-5 mb-lg-0">
                            <h2>
                            Typography
                            </h2>
                            <p>My goals when choosing a font was to provide dramatic, bold text paired with subtle minimalistic text. 
                                Within the application we decided to use Abril Fatface and Josephin Sans because the bold, geometric shapes of Abril Fatface pairs well with the 
                                San-Serif font Josefin Sans to create a vibrant yet minimalistic look and feel.</p>
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5 mb-lg-0">
                                <img className="img-fluid" src={p2} alt="travelix typography" />
                            </div>
                        </div>

                    </div>


        </section>
    );
}