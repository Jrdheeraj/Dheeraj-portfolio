import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI/ML Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Leading AI initiatives and developing machine learning models for production systems. Focused on computer vision and NLP applications.',
      achievements: [
        'Developed ML models with 95% accuracy',
        'Reduced inference time by 60%',
        'Led team of 5 engineers'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Built scalable web applications and RESTful APIs. Worked with React, Node.js, and cloud infrastructure.',
      achievements: [
        'Architected microservices platform',
        'Improved app performance by 45%',
        'Shipped 10+ features to production'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Future Corp',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Contributed to frontend development and participated in agile development processes. Gained experience in modern web technologies.',
      achievements: [
        'Built responsive UI components',
        'Collaborated with design team',
        'Fixed 50+ bugs and issues'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#ff5a1f]/30"></div>

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <div className="glass-panel rounded-2xl p-8 hover:border-[#ff5a1f] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-[#ff5a1f] text-lg font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] mt-2 flex-shrink-0"></div>
                          <p className="text-white/60 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#ff5a1f] border-4 border-[#0b0b0f] glow-orange z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;