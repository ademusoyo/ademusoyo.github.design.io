import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/magneg-color-palette.png';


export default function MagnegBranding() {
    return(
        <section id="branding">
            <SectionHeader heading="Banding"
                    subheading=""
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
                                When we think of attraction, we think of magnets. 
                                We chose to use something that was a play on the word magnet, and thus Magneg was born.</p>
                            <h2>
                            Branding
                            </h2>
                            <p>
                            Magneg aims to portray that is fun, reliable and collaborative. 
                            It is the one-stop shop for the people both create and collaborate. 
                            We wanted to use an icon that represents attraction because the aim is for people to be drawn to use Magneg instead of other cloud-sharing services. 
                            When we think of attraction, we think of magnets. 
                            We chose to use something that was a play on the word magnet, and thus Magneg was born.
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