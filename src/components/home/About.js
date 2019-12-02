import React from 'react';
import p1 from '../../assets/images/soyo-headshot.jpg';

export default function About() {
  return (
    <section
    className="content-section bg-primary text-center"
    id="about">
    <div className="container">
      <div className="content-section-heading">
        <h2 className="text-accent mb-5">About Me</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
        <img className="img-fluid" src={p1} alt="soyo-headshot" style={{paddingTop: "15px"}} />
        </div>
        <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
        <div className="about-body">
        <span className="emphasis">I'm passionate about technology and it's impact on society. </span>
                   As technology keeps advancing, we have been able to see the ways in which it has impacted our lives in both a positive way. I believe in the importance of understanding humanities and how we create new products with people in mind.
                   I don't want to create new products for the sake of creating them, I want to make sure that what I'm creating will make a <span className="emphasis">lasting impact</span>.
        </div>
        <div className="about-body">
                My interest and passion for design stems from my desire to pair <span className="emphasis">creativity</span> with <span className="emphasis">science.</span> 
                To understand why and how people interact with products are some very complex problems that stretch my imagination and bring me out of my comfort zone.
        </div>
        <div className="about-body">With a background in both engineering and design, <span className="emphasis">I can make sure your vision turns into a reality. </span>
                I can make sure that the designs that I create are feasible when beginning to development work and/or developing it myself. 
                My engineer side fuels my design and my designer side drives my software development.
        </div>
        </div>
      </div>
    </div>
  </section>
  );
}
