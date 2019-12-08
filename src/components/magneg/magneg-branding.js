import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/magneg-color-palette.png';
import p2 from '../../assets/images/magneg-logo-sketches.png';


export default function MagnegBranding() {
    return(
        <section id="branding">
            <SectionHeader heading="Banding"
                    subheading="Logo & Color"
                    imageId="magneg" />
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h2>
                            Logo & Naming
                            </h2>
                            <p>Magneg aims to portray that is fun, reliable and collaborative. 
                                It is the one-stop shop for the people both create and collaborate. 
                                We wanted to use an icon that represents attraction because the aim is for people to be drawn to use Magneg instead of other cloud-sharing services. 
                                When I think of attraction, I think of magnets. 
                                We chose to use something that was a play on the word magnet, and thus Magneg was born.</p>
                                <img className="img-fluid" src={p2} alt="magneg logo sketches" />
                            
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                                <h2>
                                
                                Branding
                                </h2>
                                <p>
                                Before jumping into the design, we wanted to determine the overall look and feel for the app. We wanted it to be colorful, but also present a very minimalistic look and feel for the design. We chose to use more cool colors that symbolize reliability and trust within the platform.
                                </p>
                                <img className="img-fluid" src={p1} alt="magneg-color-palette" />
                            </div>
                        </div>

                    </div>


        </section>
    );
}