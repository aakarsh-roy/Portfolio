import { useEffect, useState } from 'react';

/**
 * MouseGlow – A large radial gradient spotlight that follows the
 * cursor, adding depth and ambiance to the page background.
 * Disabled on mobile (no hover) for performance.
 */
const MouseGlow = ({ theme }) => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const isDark = theme === 'dark';

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const handler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2] transition-opacity duration-500"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${
          isDark
            ? 'rgba(99,102,241,0.06), rgba(139,92,246,0.03), transparent 70%'
            : 'rgba(99,102,241,0.04), rgba(139,92,246,0.02), transparent 70%'
        })`,
      }}
    />
  );
};

export default MouseGlow;
