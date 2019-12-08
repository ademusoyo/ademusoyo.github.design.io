import React from 'react';
import p1 from '../../assets/images/magneg-one.png';



export default function MagnegTop() {
    return(
        <section id="magneg-top">
            <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <h1 className="mb-4">Magneg</h1>
                            <h5 className="font-lighter mb-4">Magneg is a new cloud storage mobile application that allows users to create, store and collaborate all in one platform.</h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Role:</span> <span className="font-lighter">UX Research, UX Design, Brand Identity, Prototyping</span>
                            </h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Tools:</span> <span className="font-lighter">Figma, InVision, Maze, Google Forms</span>
                            </h5>
                            <h5 className="mb-4">
                                <span className="emphasis">Duration:</span> <span className="font-lighter">18 weeks</span>
                            </h5>
                            <h5>
                                <span className="emphasis">Deliverables:</span> <span className="font-lighter"> Style Guide & Prototype</span>
                            </h5>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                            <img className="img-fluid space" src={p1} alt="magneg iphone mockup one image" />
                        </div>
                    </div>
            </div>

        </section>
    );
}