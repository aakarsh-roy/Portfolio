import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  sectionHeader,
  underlineGrow,
  fadeInUp,
  staggerContainer,
  cardItem,
  scrollViewport,
} from '../utils/motionVariants';

const Projects = ({ theme }) => {
  const isDark = theme === 'dark';
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Localify',
      description:
        'Full-stack MERN web application for discovering and booking local service providers like electricians, plumbers, carpenters, and technicians. Features include user authentication, service listing, booking management, and provider profiles.',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'fullstack',
      color: 'indigo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      github: 'https://github.com/aakarsh-roy/Localify',
      liveDemo: 'https://localify-tau.vercel.app/',
    },
    {
      title: 'BizFlow360',
      description:
        'Business Process Automation (BPA) and KPI analytics platform designed for enterprise workflow management. Enables organizations to streamline operations, track performance metrics, and automate repetitive business processes.',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'fullstack',
      color: 'purple',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      github: 'https://github.com/aakarsh-roy/BizFlow360',
    },
    {
      title: 'Chat-App',
      description:
        'Production-ready real-time chat application built using MERN stack and Socket.io. Features include instant messaging, user authentication, online status indicators, and MongoDB-backed message persistence.',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
      category: 'fullstack',
      color: 'green',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      github: 'https://github.com/aakarsh-roy/Chat-App',
    },
    {
      title: 'MovieFlix',
      description:
        'Movie ticket booking platform that allows users to browse movies, check showtimes, select seats, and book tickets online. Built with Python Flask backend featuring a clean and intuitive user interface.',
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      category: 'backend',
      color: 'yellow',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      github: 'https://github.com/aakarsh-roy/movieflix',
    },
  ];

  const colorMap = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/15', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/15', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/15', badge: 'bg-green-500/10 text-green-400 border-green-500/20' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/15', badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  };

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Backend', value: 'backend' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={`py-24 lg:py-32 ${isDark ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-primary)]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.h2
            variants={sectionHeader}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={underlineGrow}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full origin-center"
          />
          <motion.p
            variants={fadeInUp}
            className={`mt-6 max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            A showcase of my recent work in full-stack development, from real-time applications to enterprise solutions
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="flex justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : isDark
                    ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const c = colorMap[project.color];
              return (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardItem}
                  initial="hidden"
                  whileInView="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  viewport={scrollViewport}
                  whileHover={{ y: -8 }}
                  className={`glass-card overflow-hidden group transition-shadow duration-500 ${isDark ? 'hover:shadow-xl hover:shadow-indigo-500/5' : 'hover:shadow-xl hover:shadow-indigo-200/30'}`}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center ${c.text}`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-colors`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        aria-label="View on GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack - animated on hover */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, ti) => (
                        <motion.span
                          key={ti}
                          initial={{ opacity: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${c.badge}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className={`px-6 pb-6 flex flex-wrap gap-4 border-t pt-4 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${c.text} font-medium text-sm`}
                      whileHover={{ x: 4 }}
                    >
                      View Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-400 font-medium text-sm"
                        whileHover={{ x: 4 }}
                      >
                        Live Demo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
