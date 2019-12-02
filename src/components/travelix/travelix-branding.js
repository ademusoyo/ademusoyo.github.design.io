import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/travelix-color-palette.png';


export default function MagnegBranding() {
    return(
        <section id="branding">
            <SectionHeader heading="Banding"
                    subheading=""
                    imageId="travelix" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Logo & Naming
                            </h2>
                            <p>We chose the name Travelix as a play on the word Travel and List. 
                                When you're planning a trip, you're typically making a list of places you want to travel. 
                                I did a mind mapping excercise to help get ideas on different names.</p>
                            <h2>
                            Branding
                            </h2>
                            <p>
                            We wanted Travelix to exude some sense of vibrancy while also being very minimalistic. 
                            The red and orange colors give off the sense of adventure while the brown/tannish colors 
                            give that base of calmness and reliability.
                            </p>
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                                <img className="img-fluid space" src={p1} alt="magneg-color-palette" />
                            </div>
                        </div>

                    </div>


        </section>
    );
}