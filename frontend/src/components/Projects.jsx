import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'OxyWalls',
      description: 'AI-powered wallpaper generation platform using advanced neural networks for creating stunning, personalized backgrounds',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'GigNavi',
      description: 'Smart navigation system for gig workers optimizing routes and maximizing earnings through ML-based predictions',
      tech: ['React Native', 'Node.js', 'MongoDB', 'ML'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'SafeStep',
      description: 'Real-time safety monitoring application using computer vision and IoT sensors for workplace hazard detection',
      tech: ['OpenCV', 'PyTorch', 'Flask', 'IoT'],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Eco Packaging',
      description: 'Sustainable packaging solution platform connecting businesses with eco-friendly alternatives and carbon tracking',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            PROJECTS
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group relative overflow-hidden rounded-2xl perspective-container"
            >
              {/* Project card */}
              <div className="glass-panel rounded-2xl overflow-hidden transform-3d transition-all duration-500 hover:border-[#ff5a1f]">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#0b0b0f]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent"></div>
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-[#0b0b0f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a 
                      href={project.github}
                      className="text-[#ff5a1f] hover:text-white transition-colors p-3 rounded-full border-2 border-[#ff5a1f] hover:border-white"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href={project.live}
                      className="text-[#ff5a1f] hover:text-white transition-colors p-3 rounded-full border-2 border-[#ff5a1f] hover:border-white"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white text-2xl font-bold">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#ff5a1f] flex items-center justify-center text-[#0b0b0f] text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-[#ff5a1f] text-xs border border-[#ff5a1f] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;