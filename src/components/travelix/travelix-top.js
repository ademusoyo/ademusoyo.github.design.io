import React from 'react';
import p1 from '../../assets/images/travelix-one.png';


export default function TravelixTop() {
    return(
        <section id="travelix-top">
            <div className="case-study-grid">
                <div>
                    <h1 className="mb-4">Travelix</h1>
                    <h5 className="font-lighter mb-4">Travelix is a new mobile application that allows you plan your next vacation by giving you reviews, articles, and photos relevant to that area.</h5>
                    <h5 className="mb-4">
                        <span className="emphasis">Role:</span> <span className="font-lighter">Ideation, User Research, UX Design, Content Strategy, Prototyping, and Brand Identity</span>
                    </h5>
                    <h5 className="mb-4">
                        <span className="emphasis">Tools:</span> <span className="font-lighter">Figma, InVision, Maze, Google Forms</span>
                    </h5>
                    <h5 className="mb-4">
                        <span className="emphasis">Duration:</span> <span className="font-lighter">8 weeks</span>
                    </h5>
                    <h5>
                        <span className="emphasis">Deliverables:</span> <span className="font-lighter"> Style Guide & Prototype</span>
                    </h5>
                </div>
                <div>
                    <img className="img-fluid" src={p1} alt="travelix-iphone-mockup-one-i-phone" />
                </div>
            </div>
        </section>
    );
}