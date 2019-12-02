import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Process from '../components/home/Process';
import ScrollToTop from '../components/ScrollToTop';



const IndexPage = () => (
  <Layout>
    <Header id='home' />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h4 className="mb-5 font-lighter">
         {config.subHeading}
        </h4>
          <a className="btn btn-primary btn-xl" href="mailto:ademusoyo@gmail.com?subject=Design">
            Email Me
          </a>
      </div>
      <div className="overlay"></div>
    </header>
    <About />
    <Services />
    <Process />
    <Portfolio />

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
