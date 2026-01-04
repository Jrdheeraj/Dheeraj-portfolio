import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI/ML',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 85 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 93 },
        { name: 'Next.js', level: 88 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind', level: 95 },
        { name: 'Framer Motion', level: 87 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'FastAPI', level: 92 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'Docker', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'AWS', level: 82 },
        { name: 'CI/CD', level: 85 },
        { name: 'Figma', level: 88 },
        { name: 'Linux', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            SKILLS
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel rounded-2xl p-8">
              <h3 className="text-[#ff5a1f] text-2xl font-bold mb-8">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#ff5a1f] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech icons showcase */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-8 uppercase tracking-widest">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Python', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Git'].map((tech, i) => (
              <div 
                key={i}
                className="glass-panel px-6 py-3 rounded-full hover:border-[#ff5a1f] transition-all cursor-default"
              >
                <span className="text-white text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;