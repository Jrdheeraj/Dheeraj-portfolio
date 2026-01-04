import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Navigation - HIDDEN WHEN SCROLLING */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="px-6 py-4 flex justify-between items-center">
          
          {/* Full Name - Aligned with Left Icons */}
          <div className="flex flex-col justify-center h-16" style={{ marginLeft: '24px' }}>
            <h2 className="text-xl md:text-2xl font-black text-white tracking-wider leading-none">
              KANNEMADUGU DHEERAJ
            </h2>
            <p className="text-xs md:text-sm text-[#ff5a1f] uppercase tracking-[0.25em] font-light mt-1">
              (HELLO! I'M DHEERAJ)
            </p>
          </div>
          
          {/* Navigation Links - Right Side */}
          <div className="hidden md:flex items-center gap-8 h-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/80 hover:text-[#ff5a1f] transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-[#ff5a1f] transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              About
            </button>
            <a 
              href="#resume"
              className="text-white/80 hover:text-[#ff5a1f] transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              Resume
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#ff5a1f] text-white px-6 py-2.5 rounded-full hover:bg-[#ff7a3f] transition-all text-sm uppercase tracking-wider font-bold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Left Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#ff5a1f] hover:scale-125 transition-transform"
          title="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#ff5a1f] hover:scale-125 transition-transform"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#ff5a1f] hover:scale-125 transition-transform"
          title="Twitter"
        >
          <Twitter size={24} />
        </a>
        <a 
          href="mailto:hello@dheeraj.com"
          className="text-[#ff5a1f] hover:scale-125 transition-transform"
          title="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </>
  );
};

export default Navigation;
