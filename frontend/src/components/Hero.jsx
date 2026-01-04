import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f]">
      {/* Background subtle particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff5a1f] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#ff5a1f] rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#ff5a1f] rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        
        {/* Main hero layout */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Large split text - DHEE on left, RAJ on right */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Left side - DHEE */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end w-[38%]">
              <h1 className="text-[13vw] md:text-[15vw] lg:text-[16vw] font-black text-white tracking-tighter leading-none select-none whitespace-nowrap">
                DHE
              </h1>
            </div>
            
            {/* Right side - RAJ */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-start w-[38%]">
              <h1 className="text-[13vw] md:text-[15vw] lg:text-[16vw] font-black text-white tracking-tighter leading-none select-none whitespace-nowrap">
                RAJ
              </h1>
            </div>
          </div>

          {/* Center card with gray outer frame - SMALLER SIZE */}
          <div className="relative z-20 floating-animation">
            <div className="relative w-[200px] md:w-[280px] lg:w-[330px] h-[360px] md:h-[480px] lg:h-[580px]">
              
              {/* Gray Outer Border Frame */}
              <div className="absolute inset-0 bg-[#4a4a4a]/40 rounded-[32px] border-[8px] border-[#666666]/60 depth-shadow">
              </div>

              {/* Top notch - Black Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[20px] bg-black rounded-b-2xl z-20">
              </div>

              {/* Portfolio Badge - TOP RIGHT */}
              <div className="absolute top-6 right-6 bg-[#666666] text-white px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest z-10">
                [PORTFOLIO]
              </div>

              {/* Main Content Container */}
              <div className="absolute inset-[12px] bg-[#0b0b0f] rounded-[24px] overflow-hidden flex flex-col">
                
                {/* Full Height Photo Section with Text Overlay */}
                <div className="relative flex-1 bg-[#ff5a1f] overflow-hidden group">
                  {/* Photo Image */}
                  <img 
                    src="/dheeraj-photo.jpg" 
                    alt="DHEERAJ" 
                    className="w-full h-full object-cover"
                  />

                  {/* Text Overlay - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pb-5">
                    <p className="text-[#ff5a1f] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                      UI/UX
                    </p>
                    <h3 className="text-white text-base md:text-lg lg:text-xl font-black leading-tight">
                      PRODUCT<br/>DESIGNER
                    </h3>
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="bg-[#0b0b0f] px-3 py-2.5 border-t border-[#ff5a1f]/20">
                  <div className="text-center">
                    <p className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.1em] mb-0.5">
                      DHEERAJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
