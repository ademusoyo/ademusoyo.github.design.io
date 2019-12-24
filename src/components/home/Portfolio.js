import React from 'react';
import p1 from '../../assets/images/magneg.png';
import p2 from '../../assets/images/coming-soon.jpg';
import p3 from '../../assets/images/travelix.png';
import p4 from '../../assets/images/macscientists.png';

export default function Portfolio() {
  return (
    <section className="content-section bg-accent"  id="portfolio">
    <div className="container">
      <div className="content-section-heading text-center">
        <h3 className="text-tertiary mb-0">Portfolio</h3>
        <h2 className="mb-5">Recent Projects</h2>
      </div>
      <div className="row no-gutters">
      <div className="col-lg-6">
          <a className="portfolio-item" href="/#">
            <span className="caption">
              <span className="caption-content">
                <h2>Coming Soon</h2>
                <p className="mb-0">
                MacScientists
                </p>
              </span>
            </span>
            <img className="img-fluid" src={p4} alt="macscientist-mockups" style={{opacity: "0.4"}} />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="/society">
            <span className="caption">
              <span className="caption-content">
                <h2>Society x Tech</h2>
                <p className="mb-0">
                  A website for a monthly newsletter.
                </p>
              </span>
            </span>
            <img className="img-fluid" src={p2} alt="" />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="/travelix">
            <span className="caption">
              <span className="caption-content">
                <h2>Travelix</h2>
                <p className="mb-0">
                Travelix empowers you to discover new places and dream up your next travel destination.
                </p>
              </span>
            </span>
            <img className="img-fluid" src={p3} alt="travelix-mockups" style={{opacity: "0.4"}} />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="/magneg">
            <span className="caption">
              <span className="caption-content">
                <h2>Magneg</h2>
                <p className="mb-0">
                A cloud storage mobile application
                </p>
              </span>
            </span>
            <img className="img-fluid" src={p1} alt="magneg-mockups" style={{opacity: "0.4"}} />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
