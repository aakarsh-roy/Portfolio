import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  sectionHeader,
  underlineGrow,
  fadeInUp,
  staggerContainer,
  cardItem,
  hoverLift,
  progressFill,
  scrollViewport,
} from '../utils/motionVariants';

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'indigo',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
      ],
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'green',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Languages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'yellow',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 88 },
      ],
    },
  ];

  const colorMap = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', progress: 'bg-indigo-500', progressBg: 'bg-indigo-500/10' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', progress: 'bg-purple-500', progressBg: 'bg-purple-500/10' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20', progress: 'bg-green-500', progressBg: 'bg-green-500/10' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20', progress: 'bg-yellow-500', progressBg: 'bg-yellow-500/10' },
  };

  const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'REST APIs', 'Socket.io', 'Tailwind CSS', 'Bootstrap', 'npm', 'Vite'];

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 lg:py-32 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.h2
            variants={sectionHeader}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={underlineGrow}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full origin-center"
          />
          <motion.p
            variants={fadeInUp}
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            A comprehensive toolkit for building modern web applications from frontend to backend
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => {
            const c = colorMap[category.color];
            return (
              <motion.div
                key={index}
                variants={cardItem}
                {...hoverLift}
                className={`glass-card p-4 sm:p-6 transition-all duration-300 hover:shadow-lg ${isDark ? 'hover:shadow-indigo-500/5' : 'hover:shadow-indigo-200/30'}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className={`text-base sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills with animated progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold ${c.text}`}>{skill.level}%</span>
                      </div>
                      <div className={`h-2 ${c.progressBg} rounded-full overflow-hidden`}>
                        <motion.div
                          className={`h-full ${c.progress} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 + si * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="mt-12 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.h3
            variants={fadeInUp}
            className={`text-center text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Tools & Technologies
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="flex flex-wrap justify-center gap-3"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                variants={cardItem}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 cursor-default ${
                  isDark
                    ? 'bg-white/5 text-gray-300 border-white/10 hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/5'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
