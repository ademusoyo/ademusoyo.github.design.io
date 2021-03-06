import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MagnegTop from '../components/magneg/magneg-top';
import MagnegOverview from '../components/magneg/magneg-overview';
import MagnegBranding from '../components/magneg/magneg-branding';
import MagnegFinal from '../components/magneg/magneg-final'
import ScrollToTop from '../components/ScrollToTop';




const MagnegCaseStudyPage = () => (
      <Layout>
        <Header id='magneg' />
        <MagnegTop />
        <MagnegOverview />
        <MagnegBranding />
        <MagnegFinal />
        <Footer />
        <ScrollToTop />
      </Layout>

   

);

export default MagnegCaseStudyPage;