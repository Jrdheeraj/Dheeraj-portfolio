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
    <div className="relative bg-[#0b0b0f] min-h-screen">
      <GridOverlay />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Mindset />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
