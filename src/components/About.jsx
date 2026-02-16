import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  sectionHeader,
  underlineGrow,
  staggerContainer,
  cardItem,
  hoverLift,
  scrollViewport,
} from '../utils/motionVariants';

const About = ({ theme }) => {
  const isDark = theme === 'dark';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const infoCards = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      label: 'Education',
      value: 'B.E. in Information Technology',
      color: 'indigo',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: 'College',
      value: 'TCET, Mumbai',
      color: 'purple',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: 'Specialization',
      value: 'MERN Stack Development',
      color: 'green',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Focus',
      value: 'Scalable Web Apps',
      color: 'yellow',
    },
  ];

  const colorMap = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 ${isDark ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-primary)]'}`}
    >
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={underlineGrow}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Avatar / Image Section with parallax */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative"
          >
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-15 blur-2xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Main circle */}
              <div className={`relative w-full h-full rounded-full flex items-center justify-center border-2 ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-indigo-500/20' : 'bg-gradient-to-br from-gray-100 to-white border-indigo-300/30'}`}>
                <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold gradient-text select-none">AR</span>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/25"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                MERN Stack
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-purple-500/25"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                Full Stack
              </motion.div>

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"
                style={{ top: '10%', left: '10%' }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="space-y-6"
          >
            <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Full-Stack Developer & Tech Enthusiast
            </h3>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Aakarsh Roy</span>,
              a final year Information Technology engineering student at{' '}
              <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Thakur College of Engineering and Technology (TCET)</span>.
              My journey in tech has been driven by a deep passion for creating
              innovative solutions that make a real impact.
            </p>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I specialize in building scalable web applications using the MERN stack,
              with expertise in crafting robust backend APIs and intuitive frontend interfaces.
              My focus lies in developing real-world projects that solve practical problems
              while maintaining clean code architecture and best practices.
            </p>

            {/* Info Cards Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              {infoCards.map((card, i) => {
                const c = colorMap[card.color];
                return (
                  <motion.div
                    key={i}
                    variants={cardItem}
                    {...hoverLift}
                    className={`glass-card p-4 border ${isDark ? c.border : 'border-gray-200'} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center ${c.text}`}>
                        {card.icon}
                      </div>
                      <div>
                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{card.label}</p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
