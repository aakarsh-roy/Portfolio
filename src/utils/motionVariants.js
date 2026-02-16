/**
 * motionVariants.js
 * Reusable Framer Motion animation variants for the portfolio site.
 * Import and spread these into <motion.div> components for consistent animations.
 */

/* ─── Fade Variants ─────────────────────────────────────────────── */

/** Simple fade-in from below */
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade-in from above */
export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade-in from the left */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade-in from the right */
export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Pure opacity fade */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ─── Scale Variants ────────────────────────────────────────────── */

/** Scale up from slightly smaller */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Scale up with a slight spring bounce */
export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

/* ─── Container / Stagger Variants ──────────────────────────────── */

/** Parent container that staggers children */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Slower stagger for grids / cards */
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ─── Card Variants ─────────────────────────────────────────────── */

/** Card item used inside a stagger container */
export const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Hover / Tap Interactions ──────────────────────────────────── */

/** Lift with shadow on hover, slight shrink on tap */
export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  whileTap: { scale: 0.98 },
};

/** Subtle scale bump on hover */
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  whileTap: { scale: 0.95 },
};

/** Magnetic-style hover for CTA buttons */
export const magneticHover = {
  whileHover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
  whileTap: { scale: 0.95 },
};

/* ─── Section Header Variants ───────────────────────────────────── */

export const sectionHeader = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Animated underline bar that grows from center */
export const underlineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
};

/* ─── Letter / Text Reveal ──────────────────────────────────────── */

/** Container for staggered letter animation */
export const letterContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

/** Individual letter in a text reveal */
export const letterChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 12 },
  },
};

/* ─── Slide-in Variants ─────────────────────────────────────────── */

/** Slide in from the left — useful for timeline items */
export const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from the right */
export const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Floating / Background Element Animations ──────────────────── */

/** Continuous gentle float (for decorative elements) */
export const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

/** Slow rotation for background shapes */
export const rotateFloat = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 20, repeat: Infinity, ease: 'linear' },
  },
};

/** Pulsing glow effect */
export const pulseGlow = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

/* ─── Progress / Draw Variants ──────────────────────────────────── */

/** For animated SVG path drawing */
export const drawLine = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

/** Progress bar fill animation */
export const progressFill = (width) => ({
  hidden: { width: 0 },
  visible: {
    width: `${width}%`,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
});

/* ─── Navbar Variants ───────────────────────────────────────────── */

export const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/* ─── Page / Section Transition ─────────────────────────────────── */

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* ─── Viewport trigger defaults for scroll animations ──────────── */

export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -50px 0px',
};
