import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import AboutStory from './components/AboutStory';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 selection:bg-aqua-500 selection:text-navy-900">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSignals />
        <WhyChooseUs />
        <Services />
        <BeforeAfter />
        <Portfolio />
        <AboutStory />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
