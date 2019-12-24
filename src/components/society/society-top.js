import React from 'react';
import p1 from '../../assets/images/travelix-one.png';


export default function SocietyTop() {
    return(
        <section id="society-top">
            <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h1 className="mb-4">Society x Tech</h1>
                            <h5 className="font-lighter mb-4">Society x Tech is a monthly newsletter discussing the societal implications of technology trends through a hand-picked curation of articles, podcasts, books and interviews.</h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Role:</span> <span className="font-lighter">UX Design, Content Strategy, Prototyping, Brand Identity, Web Development</span>
                            </h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Tools:</span> <span className="font-lighter">Figma, Mailchimp, GatsbyJs</span>
                            </h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Duration:</span> <span className="font-lighter">4 weeks</span>
                            </h5>
                            <h5>
                                <span className="emphasis">Deliverables:</span> <span className="font-lighter">Branding & Website</span>
                            </h5>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <img className="img-fluid" src={p1} alt="travelix-iphone-mockup-one-i-phone" />
                        </div>
                    </div>
            </div>
        </section>
    );
}