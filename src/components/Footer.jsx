import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollViewport } from '../utils/motionVariants';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      href: 'https://github.com/aakarsh-roy',
      label: 'GitHub',
      path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      href: 'https://www.linkedin.com/in/aakarsh-roy',
      label: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
  ];

  return (
    <footer className={`py-12 border-t ${isDark ? 'bg-[#060614] border-white/5' : 'bg-gray-50 border-gray-200'}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2">
            <span className="text-2xl font-extrabold gradient-text">AR</span>
            <span className={isDark ? 'text-white/20' : 'text-gray-300'}>|</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Aakarsh Roy</span>
          </motion.div>

          {/* Copyright */}
          <motion.p variants={fadeInUp} className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {currentYear} Aakarsh Roy. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, rotate: 5, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isDark
                    ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-gray-100 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
                aria-label={s.label}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div variants={fadeInUp} className="mt-8 text-center">
          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-400 hover:text-indigo-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
