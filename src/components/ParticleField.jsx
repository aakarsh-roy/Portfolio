import { useEffect, useRef, useCallback } from 'react';

/**
 * ParticleField – A canvas-based starfield with glowing particles.
 * Stars twinkle, drift gently, and form faint constellation lines.
 * The mouse acts as a gravity well, pulling nearby stars toward the cursor.
 */
const ParticleField = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animId = useRef(null);
  const particles = useRef([]);
  const time = useRef(0);

  const isDark = theme === 'dark';

  // Star color palette: cool whites, blue-whites, and warm accent tones
  const STAR_COLORS = [
    { r: 200, g: 210, b: 255 }, // blue-white
    { r: 230, g: 230, b: 255 }, // cool white
    { r: 180, g: 190, b: 255 }, // light blue
    { r: 160, g: 170, b: 240 }, // periwinkle
    { r: 140, g: 150, b: 255 }, // indigo tint
    { r: 200, g: 180, b: 255 }, // lavender
    { r: 255, g: 240, b: 220 }, // warm white (rare bright star)
  ];

  const initParticles = useCallback((w, h) => {
    const count = Math.min(Math.floor((w * h) / 14000), 120);
    const arr = [];
    for (let i = 0; i < count; i++) {
      const isBright = Math.random() < 0.12; // ~12% are bright stars
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: isBright ? Math.random() * 2 + 1.5 : Math.random() * 1.4 + 0.4,
        baseOpacity: isBright ? Math.random() * 0.4 + 0.5 : Math.random() * 0.4 + 0.15,
        opacity: 0,
        twinkleSpeed: Math.random() * 2 + 1, // unique twinkle rate
        twinkleOffset: Math.random() * Math.PI * 2, // phase offset
        color,
        isBright,
        glowSize: isBright ? Math.random() * 8 + 6 : Math.random() * 4 + 2,
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

    const LINE_DIST = 150;
    const MOUSE_DIST = 200;

    const draw = () => {
      time.current += 0.016; // ~60fps time step
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const t = time.current;

      // Draw constellation lines first (behind stars)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const alpha = (1 - dist / LINE_DIST) * (isDark ? 0.1 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = isDark
              ? `rgba(140,160,255,${alpha})`
              : `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw stars with glow
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

        // Twinkle: oscillate opacity
        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinkleOffset);
        p.opacity = p.baseOpacity + twinkle * (p.isBright ? 0.25 : 0.15);
        p.opacity = Math.max(0.05, Math.min(1, p.opacity));

        const { r: cr, g: cg, b: cb } = p.color;

        if (isDark) {
          // Outer glow layer
          const glowAlpha = p.opacity * (p.isBright ? 0.35 : 0.2);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowSize);
          glow.addColorStop(0, `rgba(${cr},${cg},${cb},${glowAlpha})`);
          glow.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core star dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(${cr},${cg},${cb},${p.opacity})`
          : `rgba(79,70,229,${p.opacity * 0.7})`;
        ctx.fill();

        // Bright stars get a cross-spike highlight
        if (p.isBright && isDark) {
          const spikeLen = p.r * 2.5 + twinkle * 1.5;
          const spikeAlpha = p.opacity * 0.4;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${spikeAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x - spikeLen, p.y);
          ctx.lineTo(p.x + spikeLen, p.y);
          ctx.moveTo(p.x, p.y - spikeLen);
          ctx.lineTo(p.x, p.y + spikeLen);
          ctx.stroke();
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
