import { motion } from 'framer-motion';
import {
  sectionHeader,
  underlineGrow,
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  cardItem,
  magneticHover,
  scrollViewport,
} from '../utils/motionVariants';

const Experience = ({ theme }) => {
  const isDark = theme === 'dark';

  const experiences = [
    {
      title: 'Full-Stack Development',
      type: 'Learning Journey',
      period: '2024 - Present',
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
      period: '2022 - Present',
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
      period: '2024 - Present',
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

  const colorMap = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', dot: 'bg-indigo-500', ring: 'ring-indigo-500/30' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', dot: 'bg-purple-500', ring: 'ring-purple-500/30' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500', ring: 'ring-green-500/30' },
  };

  return (
    <section id="experience" className="py-24 lg:py-32 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.h2
            variants={sectionHeader}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Experience & <span className="gradient-text">Learning</span>
          </motion.h2>
          <motion.div
            variants={underlineGrow}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full origin-center"
          />
          <motion.p
            variants={fadeInUp}
            className={`mt-6 max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            My journey in software development through hands-on projects, academic work, and continuous learning
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/10' : 'bg-gray-200'} transform md:-translate-x-1/2`}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const c = colorMap[exp.color];
              const isEven = index % 2 === 0;
              const slideVariant = isEven ? slideInFromLeft : slideInFromRight;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={scrollViewport}
                >
                  {/* Timeline dot with pulse */}
                  <motion.div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 ${c.dot} rounded-full transform -translate-x-1/2 z-10 ring-4 ${isDark ? 'ring-[#0a0a1a]' : 'ring-white'}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    {/* Pulse ring */}
                    <span className={`absolute inset-0 rounded-full ${c.dot} animate-ping opacity-20`} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    variants={slideVariant}
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:pr-16' : 'md:ml-auto md:pl-16'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-card p-6 transition-shadow duration-300 ${isDark ? 'hover:shadow-lg hover:shadow-indigo-500/5' : 'hover:shadow-lg hover:shadow-indigo-200/20'}`}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text} shrink-0`}
                          whileHover={{ rotate: 10 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className={c.text + ' text-sm font-medium'}>{exp.type}</span>
                            <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>•</span>
                            <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <motion.ul
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        {exp.highlights.map((highlight, hi) => (
                          <motion.li
                            key={hi}
                            variants={cardItem}
                            className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            <svg
                              className={`w-4 h-4 ${c.text} shrink-0 mt-0.5`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.p
            variants={fadeInUp}
            className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Always eager to learn new technologies and take on challenging projects
          </motion.p>
          <motion.a
            href="#contact"
            variants={fadeInUp}
            {...magneticHover}
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/25"
          >
            Let's Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
