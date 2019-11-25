import React from 'react';

export default function Services() {
  return (
    <section
    className="content-section bg-primary text-center"
    id="services">
    <div className="container">
      <div className="content-section-heading">
        <h3 className="text-secondary mb-0">Services</h3>
        <h2 className="mb-5">What I do</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <i className="fas fa-palette"></i>
          </span>
          <h4>
            <strong>Branding</strong>
          </h4>
          <p className="">Let me find the perfect color palette that captures your mood and elevates your brand.</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <i className="fas fa-tools"></i>
          </span>
          <h4>
            <strong>Prototyping</strong>
          </h4>
          <p className="">
            Get a high-fidelity prototype to pass on to developers for your next ios app.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <i className="fas fa-code"></i>
          </span>
          <h4>
            <strong>Web Development</strong>
          </h4>
          <p className="">
            Let me ensure that what you envision for your next website actually becomes a reality
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
