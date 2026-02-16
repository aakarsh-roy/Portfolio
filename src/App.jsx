import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import ParticleField from './components/ParticleField';
import MouseGlow from './components/MouseGlow';
import PageLoader from './components/PageLoader';
import SectionDivider from './components/SectionDivider';

/* ─── Custom Cursor Component ───────────────────────────────────── */
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth <= 768) return;

    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));

    // Track hovers on interactive elements
    const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [visible]);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? 'hovering' : ''}`}
        style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      />
      <div
        className="cursor-dot"
        style={{ left: dotPos.x, top: dotPos.y, opacity: visible ? 1 : 0 }}
      />
    </>
  );
};

/* ─── Theme Toggle Button ──────────────────────────────────────── */
const ThemeToggle = ({ theme, toggle }) => (
  <motion.button
    onClick={toggle}
    className="fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    <AnimatePresence mode="wait">
      {theme === 'dark' ? (
        <motion.svg
          key="sun"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </motion.svg>
      ) : (
        <motion.svg
          key="moon"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </motion.svg>
      )}
    </AnimatePresence>
  </motion.button>
);

/* ─── Main App ──────────────────────────────────────────────────── */
function App() {
  const { scrollYProgress } = useScroll();

  /* Page loading state */
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  /* Theme state */
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /* Re-attach cursor hover listeners when DOM changes */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Force cursor re-init by dispatching a synthetic mousemove
      document.dispatchEvent(new Event('mousemove'));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page loader */}
      <PageLoader isLoading={isLoading} />

      <div className={`min-h-screen noise-overlay transition-colors duration-500 ${theme === 'dark' ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-primary)]'}`}>
        {/* Global background layers */}
        <ParticleField theme={theme} />
        <MouseGlow theme={theme} />

        {/* Scroll progress bar */}
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Theme toggle */}
        <ThemeToggle theme={theme} toggle={toggleTheme} />

        {/* Page content */}
        <Navbar theme={theme} />
        <Hero theme={theme} />
        <SectionDivider theme={theme} variant="wave" />
        <About theme={theme} />
        <SectionDivider theme={theme} variant="tilt" />
        <Skills theme={theme} />
        <SectionDivider theme={theme} variant="curve" flip />
        <Projects theme={theme} />
        <SectionDivider theme={theme} variant="wave" />
        <Experience theme={theme} />
        <SectionDivider theme={theme} variant="tilt" flip />
        <Contact theme={theme} />
        <Footer theme={theme} />

        {/* Interactive Terminal */}
        <Terminal theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default App;
