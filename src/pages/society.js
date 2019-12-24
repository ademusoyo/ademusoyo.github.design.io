import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocietyTop from '../components/society/society-top';
import SocietyOverview from '../components/society/society-overview';
import SocietyBranding from '../components/society/society-branding';
import SocietyFinal from '../components/society/society-final'




const SocietyCaseStudyPage = () => (
      <Layout>
        <Header id='society' />
        <SocietyTop />
        <SocietyOverview />
        <SocietyBranding />
        <SocietyFinal />
        <Footer />
      </Layout>

   

);

export default SocietyCaseStudyPage;