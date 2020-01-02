import React from 'react';

export default function Process() {
  return (
    <section
    className="content-section bg-primary"
    id="process">
    <div className="container">
      <div className="content-section-heading">
        <h3 className="text-accent text-center mb-2">Design Process</h3>
        <h2 className="mb-5 text-center">How I Work</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.01</h2>
            <h4 className="font-lighter text-accent">UNDERSTAND</h4>
            <p>I take the time to understand you're problem engaging and setting the tone for a collaborative experience.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.02</h2>
            <h4 className="font-lighter text-accent">PROPSAL</h4>
            <p>Once I have an understanding of your problem, I provide you with a proposal of the steps needed to reach your solution. 
                Once we're in agreement, we can begin the work.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.03</h2>
            <h4 className="font-lighter text-accent">IDEATE</h4>
            <p>Now, I start sketching and wireframing different ideas based on a combination of competitive analysis, user personas, and user flows.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.04</h2>
            <h4 className="font-lighter text-accent">ITERATE</h4>
            <p>Together, we use the wireframes/sketches to make sure we're on the same page. 
                This could take a couple times, however, it isn't a problem.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.05</h2>
            <h4 className="font-lighter text-accent">BRANDING</h4>
            <p>Before we can bring our ideas to life, we need to determine a brand identity. 
                Through this I will get a better understanding of what you want your product to be and construct different color palettes 
                that I think would be a good fit in telling your story.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.06</h2>
            <h4 className="font-lighter text-accent">DESIGN</h4>
            <p>Now we bring our lo-fi wireframes with our color and real-life images. 
                It's here that we will see how things will look on a phone or computer.</p>
        </div>
        <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
            <h2 className="font-lighter">.07</h2>
            <h4 className="font-lighter text-accent">DEVELOPMENT</h4>
            <p>Finally, I develop functional prototypes and deliver finished products through frontend development.</p>
        </div>
      </div>
      {/* <div className="row" style={{marginTop: "4em"}}>

      </div> */}
    </div>
  </section>
  );
}