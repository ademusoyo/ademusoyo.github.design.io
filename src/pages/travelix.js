import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TravelixTop from '../components/travelix/travelix-top';
import TravelixOverview from '../components/travelix/travelix-overview';
import TravelixBranding from '../components/travelix/travelix-branding';
import TravelixFinal from '../components/travelix/travelix-final'




const TravelixCaseStudyPage = () => (
      <Layout>
        <Header id='travelix' />
        <TravelixTop />
        <TravelixOverview />
        <TravelixBranding />
        <TravelixFinal />
        <Footer />
      </Layout>

   

);

export default TravelixCaseStudyPage;