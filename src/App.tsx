import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;