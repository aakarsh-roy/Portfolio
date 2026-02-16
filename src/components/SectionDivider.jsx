/**
 * SectionDivider – Animated SVG wave separator between sections.
 * Use `flip` to mirror it for bottom-of-section placement.
 */
const SectionDivider = ({ theme, flip = false, variant = 'wave' }) => {
  const isDark = theme === 'dark';

  const fill = isDark ? '#0a0a1a' : '#f8fafc';
  const fillAlt = isDark ? '#111127' : '#f1f5f9';

  if (variant === 'wave') {
    return (
      <div
        className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? 'rotate-180' : ''}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill={fillAlt}
            className="transition-colors duration-500"
          />
          <path
            d="M0,80 C360,20 720,110 1080,50 C1260,20 1380,40 1440,80 L1440,120 L0,120 Z"
            fill={fill}
            fillOpacity="0.6"
            className="transition-colors duration-500"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'tilt') {
    return (
      <div
        className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? 'rotate-180' : ''}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,80 L1440,0 L1440,80 Z" fill={fill} className="transition-colors duration-500" />
        </svg>
      </div>
    );
  }

  // Curved variant
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-12 md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 Q720,-40 1440,80 Z"
          fill={fill}
          className="transition-colors duration-500"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
