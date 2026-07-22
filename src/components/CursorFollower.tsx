import { useEffect, useRef } from 'react';

export const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices and reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isTouch = 'ontouchstart' in window;
    if (mq.matches || isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dot = dotRef.current;
      if (!dot) return;
      dot.style.translate = `${posRef.current.x}px ${posRef.current.y}px`;
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
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{ translate: '-100px -100px' }}
    >
      {/* Main dot */}
      <div className="w-3 h-3 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
      {/* Outer glow ring */}
      <div className="w-8 h-8 rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0 animate-ping-slow" />
    </div>
  );
};
