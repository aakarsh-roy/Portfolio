const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              
              {/* Main circle with initials */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center border-4 border-indigo-500/30">
                <span className="text-7xl md:text-8xl font-bold gradient-text">AR</span>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                MERN Stack
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Full Stack
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Full-Stack Developer & Tech Enthusiast
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm <span className="text-indigo-400 font-semibold">Aakarsh Roy</span>, 
              a final year Information Technology engineering student at{' '}
              <span className="text-indigo-400 font-semibold">Thakur College of Engineering and Technology (TCET)</span>. 
              My journey in tech has been driven by a deep passion for creating 
              innovative solutions that make a real impact.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in building scalable web applications using the MERN stack, 
              with expertise in crafting robust backend APIs and intuitive frontend interfaces. 
              My focus lies in developing real-world projects that solve practical problems 
              while maintaining clean code architecture and best practices.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Education</p>
                    <p className="text-white font-medium">B.E. in Information Technology</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">College</p>
                    <p className="text-white font-medium">TCET, Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Specialization</p>
                    <p className="text-white font-medium">MERN Stack Development</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Focus</p>
                    <p className="text-white font-medium">Scalable Web Apps</p>
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

export default About;
