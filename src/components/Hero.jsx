import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeIn,
  magneticHover,
  staggerContainer,
  letterContainer,
  letterChild,
} from '../utils/motionVariants';

/* ─── Floating Particle shapes for background depth ─────────────── */
const FloatingShapes = ({ isDark }) => {
  const shapes = [
    { size: 'w-72 h-72', color: 'bg-indigo-500/8', pos: '-top-20 -right-20', delay: 0, blur: 'blur-3xl' },
    { size: 'w-96 h-96', color: 'bg-purple-500/6', pos: '-bottom-32 -left-32', delay: 2, blur: 'blur-3xl' },
    { size: 'w-64 h-64', color: 'bg-pink-500/5', pos: 'top-1/3 right-1/4', delay: 4, blur: 'blur-3xl' },
    { size: 'w-40 h-40', color: 'bg-indigo-400/10', pos: 'top-20 left-1/4', delay: 1, blur: 'blur-2xl' },
    { size: 'w-32 h-32', color: 'bg-violet-500/8', pos: 'bottom-1/4 right-1/3', delay: 3, blur: 'blur-2xl' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora gradient layers */}
      <div
        className={`absolute -top-1/2 -left-1/4 w-[800px] h-[600px] rounded-full blur-3xl aurora-layer-1 ${isDark ? 'bg-indigo-600/8' : 'bg-indigo-400/6'}`}
      />
      <div
        className={`absolute -bottom-1/3 -right-1/4 w-[700px] h-[500px] rounded-full blur-3xl aurora-layer-2 ${isDark ? 'bg-purple-600/6' : 'bg-purple-400/4'}`}
      />
      <div
        className={`absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl aurora-layer-3 ${isDark ? 'bg-cyan-500/5' : 'bg-cyan-400/3'}`}
      />

      {/* Existing blob shapes */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.size} ${s.color} rounded-full ${s.blur} ${s.pos} animate-blob`}
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}

      {/* Tiny floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute rounded-full ${i % 3 === 0 ? 'w-1 h-1 bg-indigo-400/20' : i % 3 === 1 ? 'w-1.5 h-1.5 bg-purple-400/25' : 'w-1 h-1 bg-cyan-400/20'}`}
          style={{
            top: `${10 + i * 11}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -(15 + i * 3), 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      {/* Floating geometric accents */}
      <motion.div
        className={`absolute top-[15%] right-[10%] w-8 h-8 border rounded-lg ${isDark ? 'border-indigo-500/15' : 'border-indigo-400/10'}`}
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -10, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className={`absolute bottom-[20%] left-[8%] w-6 h-6 border rounded-full ${isDark ? 'border-purple-500/15' : 'border-purple-400/10'}`}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute top-[60%] right-[20%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] ${isDark ? 'border-b-indigo-500/15' : 'border-b-indigo-400/10'}`}
        animate={{ rotate: [0, 360], y: [0, -15, 0] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
      />
    </div>
  );
};

/* ─── Typewriter Effect Hook ────────────────────────────────────── */
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 60, pause = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';
  const typedText = useTypewriter(
    ['MERN Stack Developer', 'Full Stack Engineer', 'React Specialist', 'Problem Solver'],
    80,
    50,
    2500
  );

  /* Animated name letters */
  const firstName = 'Aakarsh';
  const lastName = 'Roy';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <FloatingShapes isDark={isDark} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting badge */}
          <motion.div variants={fadeIn} className="flex justify-center">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-200'}`}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Animated Name */}
          <div>
            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-3 font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={letterContainer}
              initial="hidden"
              animate="visible"
              className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              {firstName.split('').map((letter, i) => (
                <motion.span key={`fn-${i}`} variants={letterChild} className="inline-block">
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block w-4" />
              {lastName.split('').map((letter, i) => (
                <motion.span key={`ln-${i}`} variants={letterChild} className="inline-block gradient-text">
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Typewriter subtitle */}
          <motion.h2
            variants={fadeInUp}
            className={`text-xl md:text-2xl lg:text-3xl font-light min-h-[2.5rem] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>{typedText}</span>
            <span className="typewriter-cursor text-indigo-500">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          >
            Passionate about building scalable web applications and creating
            seamless user experiences. Specializing in full-stack development
            with the MERN stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              {...magneticHover}
              className="btn-magnetic px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              {...magneticHover}
              className={`px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 ${isDark ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10' : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'}`}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href="#about"
            className={`flex flex-col items-center gap-2 ${isDark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-400 hover:text-indigo-600'} transition-colors`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
