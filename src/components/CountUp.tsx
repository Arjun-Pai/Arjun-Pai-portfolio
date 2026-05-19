import { useEffect, useRef, useState } from "react";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}
