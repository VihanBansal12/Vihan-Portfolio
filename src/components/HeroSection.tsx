import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/30 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-gray-300 text-lg md:text-2xl mb-3">Hello, I'm</h3>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500 drop-shadow-none">
                Vihan Bansal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-purple-300 drop-shadow-sm">
              Frontend Developer
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I build exceptional and accessible digital experiences for the web. Specializing in creating responsive, user-friendly interfaces with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 lg:pl-12 lg:ml-8">
              <a 
                href="#projects" 
                className="glow-button px-10 py-4 rounded-md bg-purple-700 text-white font-medium text-base hover:bg-purple-600 transition-all duration-300 text-center min-w-[180px]"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 rounded-md bg-transparent border-2 border-purple-500 text-white font-medium text-base hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-center min-w-[180px]"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-8">
            <div className="w-full max-w-[280px] lg:max-w-[340px] relative lg:mr-0">
              <div className="rounded-lg overflow-hidden border border-purple-500/50 neon-border-purple max-h-[450px] lg:max-h-[500px]">
                <img 
                  src="/lovable-uploads/profile-vihan.jpeg" 
                  alt="Vihan Bansal Profile" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-xl rounded-lg transform translate-x-2 translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;