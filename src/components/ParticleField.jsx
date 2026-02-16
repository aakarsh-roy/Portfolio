import { useEffect, useRef, useCallback } from 'react';

/**
 * ParticleField – A lightweight canvas-based particle network.
 * Particles drift gently and form connecting lines when close enough.
 * The mouse acts as an attractor, pulling particles toward the cursor.
 */
const ParticleField = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animId = useRef(null);
  const particles = useRef([]);

  const isDark = theme === 'dark';

  const initParticles = useCallback((w, h) => {
    const count = Math.min(Math.floor((w * h) / 18000), 90);
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      particles.current = initParticles(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const LINE_DIST = 140;
    const MOUSE_DIST = 200;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      const baseColor = isDark ? '99,102,241' : '79,70,229';
      const lineColor = isDark ? '99,102,241' : '129,140,248';

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // Mouse attraction
        const dxm = mx - p.x;
        const dym = my - p.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < MOUSE_DIST) {
          const force = (MOUSE_DIST - distM) / MOUSE_DIST * 0.008;
          p.vx += dxm * force;
          p.vy += dym * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor},${p.opacity})`;
        ctx.fill();

        // Draw lines to nearby particles
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const alpha = (1 - dist / LINE_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${lineColor},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId.current = requestAnimationFrame(draw);
    };

    // Defer first frame so it doesn't block paint
    const t = setTimeout(() => {
      animId.current = requestAnimationFrame(draw);
    }, 200);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(animId.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
};

export default ParticleField;
