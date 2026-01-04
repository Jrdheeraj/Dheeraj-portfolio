import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b0b0f] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-white text-3xl font-black mb-4 tracking-wider">
              DHEERAJ
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI/ML Engineer • Full-Stack Developer • Startup Builder
            </p>
            <p className="text-white/40 text-sm mt-4">
              Building intelligent systems & future products
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a href="#about" className="block text-white/60 hover:text-[#ff5a1f] transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-white/60 hover:text-[#ff5a1f] transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="block text-white/60 hover:text-[#ff5a1f] transition-colors text-sm">
                Skills
              </a>
              <a href="#experience" className="block text-white/60 hover:text-[#ff5a1f] transition-colors text-sm">
                Experience
              </a>
              <a href="#contact" className="block text-white/60 hover:text-[#ff5a1f] transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-[#0b0b0f] transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-[#0b0b0f] transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-[#0b0b0f] transition-all"
                title="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:your.email@gmail.com"
                className="w-10 h-10 rounded-full border border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-[#0b0b0f] transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              <a href="mailto:your.email@gmail.com" className="hover:text-[#ff5a1f] transition-colors">
                your.email@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 DHEERAJ. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#ff5a1f] flex items-center justify-center text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-[#0b0b0f] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
