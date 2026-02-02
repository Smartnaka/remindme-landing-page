
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UniLogos from './components/UniLogos';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import FAQ from './components/FAQ';
import TrustStory from './components/TrustStory';
import FinalCTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <UniLogos />
        <Features />
        <HowItWorks />
        <AppPreview />
        <TrustStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
