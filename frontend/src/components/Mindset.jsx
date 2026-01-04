import React from 'react';

const Mindset = () => {
  return (
    <section id="mindset" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            THE MINDSET
          </h2>
        </div>

        {/* Main mindset card */}
        <div className="relative perspective-container">
          <div className="glass-panel rounded-3xl p-12 md:p-16 depth-shadow transform-3d hover:scale-[1.01] transition-all duration-500">
            
            {/* Quote content */}
            <div className="space-y-8 text-white/90">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                I don't just build projects.
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                I build <span className="text-[#ff5a1f] font-bold">systems</span>, <span className="text-[#ff5a1f] font-bold">brands</span>, and <span className="text-[#ff5a1f] font-bold">future products</span>.
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                I think in <span className="text-[#ff5a1f] font-bold">products</span>, not features.
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                I focus on <span className="text-[#ff5a1f] font-bold">long-term impact</span>, <span className="text-[#ff5a1f] font-bold">scalability</span>, and <span className="text-[#ff5a1f] font-bold">user experience</span>.
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                My goal is not just to code —
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-[#ff5a1f] text-glow">
                but to engineer real-world change.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 text-[#ff5a1f]/20 text-8xl font-black">
              "
            </div>
            <div className="absolute bottom-8 left-8 text-[#ff5a1f]/20 text-8xl font-black rotate-180">
              "
            </div>
          </div>
        </div>

        {/* Supporting text */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-lg md:text-xl italic">
            This mindset drives every decision, every line of code, and every product I create.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mindset;