import { useEffect, useRef } from 'react';

export const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isTouch = 'ontouchstart' in window;
    if (mq.matches || isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth follow with lerp
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.08;

      const glow = glowRef.current;
      if (glow) {
        glow.style.setProperty('--mx', `${currentRef.current.x}px`);
        glow.style.setProperty('--my', `${currentRef.current.y}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: 'radial-gradient(600px at var(--mx, -999px) var(--my, -999px), rgba(0, 243, 255, 0.06), transparent 80%)',
      }}
    />
  );
};
