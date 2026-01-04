import React from 'react';
import { Cpu, Code, Rocket, FlaskConical } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      icon: <Cpu size={32} />,
      title: 'AI/ML',
      description: 'Building intelligent systems with deep learning, neural networks, and advanced algorithms'
    },
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'Creating scalable web applications with modern frameworks and technologies'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Startups',
      description: 'Transforming ideas into market-ready products with lean and agile methodologies'
    },
    {
      icon: <FlaskConical size={32} />,
      title: 'Research',
      description: 'Exploring cutting-edge technologies and innovative solutions to complex problems'
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* Glass cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="card glass-panel rounded-2xl p-8 hover:border-[#ff5a1f] transition-all duration-300 group"
            >
              <div className="text-[#ff5a1f] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 glass-panel rounded-2xl p-10 md:p-12">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            I'm a passionate technologist specializing in artificial intelligence and full-stack development. 
            With a strong foundation in machine learning algorithms and modern web technologies, I create 
            innovative solutions that bridge the gap between complex AI systems and user-friendly applications. 
            My approach combines technical excellence with product thinking to build systems that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;