import React from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Mindset from '../components/Mindset';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GridOverlay from '../components/GridOverlay';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">

      {/* Subtle background grid */}
      <GridOverlay />

      {/* Content layer */}
      <div className="relative z-10">

        <Navigation />

        <main className="space-y-32">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Mindset />
          <Contact />
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Home;
