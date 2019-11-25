import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ScrollToTop from '../components/ScrollToTop';



const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
          <a className="btn btn-primary btn-xl" href="mailto:ademusoyo@gmail.com?subject=Design">
            Email Me
          </a>
      </div>
      <div className="overlay"></div>
    </header>

    <Services />
    <Portfolio />

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
