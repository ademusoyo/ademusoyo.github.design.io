import React from 'react';
import SectionHeader from '../SectionHeader'
import p1 from '../../assets/images/society-color-palette.png';


export default function SocietyBranding() { 
    return(
        <section id="branding">
            <SectionHeader heading="Banding"
                    subheading="Naming & Color"
                    imageId="travelix" />
                    <div className="case-study-grid">
                    
                        <div>
                        <h2>
                            Naming
                        </h2>
                        <p>I chose the name Society x Tech (pronounced: Society by Tech) 
                            simply because the newsletter is discussing how society is impacted BY tech.</p>

                        <h2>
                        Color
                        </h2>
                        <p>I chose green as the primary color because as green represents growth, it is my hope that from subscribers reading the newsletter, 
                            they would have growth in their own perspective. The other colors provide a sense of tranquility and stability.</p>
                        
                        </div>
                        <div>
                        <img className="img-fluid" src={p1} alt="society x tech color palette" />
                        </div>
                        

                    </div>


        </section>
    );
}