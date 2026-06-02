import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border md:block"
        style={{ borderColor: "rgba(255,255,255,0.7)", boxShadow: "0 0 14px rgba(255,255,255,0.25)" }} />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full md:block"
        style={{ background: "#fff", boxShadow: "0 0 10px rgba(255,255,255,0.6)" }} />
    </>
  );
}
