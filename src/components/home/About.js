import React from 'react';
import p1 from '../../assets/images/soyo10.jpg';

export default function About() {
  return (
    <section
    className="content-section bg-primary text-center"
    id="about">
    <div className="container">
      <div className="content-section-heading">
        <h3 className="text-primary">About Me</h3>
        <h2 className="mb-5">Why Design?</h2>
      </div>
      <div className="grid">
        <div>
        <img className="img-fluid" src={p1} alt="soyo-headshot" style={{paddingTop: "15px", maxWidth: "360px"}} />
        </div>
        <div>
        <p className="about-body">
                My interest and passion for design stems from my desire to pair <span className="emphasis">creativity</span> with <span className="emphasis">science.</span> 
                To understand why and how people interact with products are some very complex problems that stretch my imagination and bring me out of my comfort zone.
        </p>
        <p className="about-body">With a background in both engineering and design, <span className="emphasis">I can make sure your vision turns into a reality. </span>
                I can make sure that the designs that I create are feasible when beginning to development work and/or developing it myself. 
                My engineer side fuels my design and my designer side drives my software development.
        </p>
        </div>
      </div>
    </div>
  </section>
  );
}
