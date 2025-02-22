import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import LodgeList from './LodgeList';
import StatsSection from './StatsSection';
import FAQSection from './FAQSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

import "./styles.css"; // Ensure the correct path to styles.css

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <LodgeList />
      <div className="pagination">1</div>
      <StatsSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
