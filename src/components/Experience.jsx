const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Development',
      type: 'Learning Journey',
      period: '2022 - Present',
      description:
        'Deep diving into the MERN stack, building production-ready applications with React.js frontend and Node.js/Express.js backend. Focused on creating scalable architectures and RESTful APIs.',
      highlights: [
        'Mastered React.js with hooks and functional components',
        'Built RESTful APIs with Express.js and Node.js',
        'Implemented real-time features using Socket.io',
        'Database design with MongoDB and SQL',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'indigo',
    },
    {
      title: 'Academic Projects',
      type: 'College Work',
      period: '2021 - Present',
      description:
        'Worked on multiple academic projects applying theoretical knowledge to practical implementations. Collaborated with team members and presented solutions to complex problems.',
      highlights: [
        'Led team projects in software development',
        'Applied data structures and algorithms',
        'Database management system projects',
        'Web development assignments and mini-projects',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: 'purple',
    },
    {
      title: 'Backend Development',
      type: 'Skill Development',
      period: '2023 - Present',
      description:
        'Specialized in backend development with focus on building secure, efficient, and scalable APIs. Experience with authentication, authorization, and database optimization.',
      highlights: [
        'JWT-based authentication systems',
        'API design and documentation',
        'Database optimization and indexing',
        'Deployment on cloud platforms',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'green',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      indigo: {
        bg: 'bg-indigo-500/20',
        text: 'text-indigo-400',
        border: 'border-indigo-500',
        dot: 'bg-indigo-500',
      },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500',
        dot: 'bg-purple-500',
      },
      green: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500',
        dot: 'bg-green-500',
      },
    };
    return colors[color];
  };

  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            My journey in software development through hands-on projects, academic work, and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 ${colors.dot} rounded-full transform -translate-x-1/2 z-10 ring-4 ring-slate-900`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="card-hover bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} shrink-0`}
                        >
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={colors.text}>{exp.type}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                            <svg
                              className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Always eager to learn new technologies and take on challenging projects
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
