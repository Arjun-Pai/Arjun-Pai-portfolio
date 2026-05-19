import { useEffect, useState } from "react";

export function GlitchText() {
  const words = ["Founder.", "Builder.", "Innovator.", "Arjun Pai"];
  const [idx, setIdx] = useState(0);
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    if (idx >= words.length - 1) return;
    const t = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => { setIdx((i) => i + 1); setGlitch(false); }, 200);
    }, 900);
    return () => clearTimeout(t);
  }, [idx]);
  const w = words[idx];
  return (
    <h1 className="relative font-display text-5xl font-bold leading-none tracking-tighter md:text-7xl lg:text-8xl">
      <span className={glitch ? "opacity-50" : ""} style={{ color: idx === words.length - 1 ? "#F0F4FF" : "#00F5FF", textShadow: idx === words.length - 1 ? "0 0 40px rgba(0,245,255,0.5)" : "0 0 30px rgba(0,245,255,0.6)" }}>
        {w}
      </span>
      {glitch && (
        <>
          <span className="absolute left-0 top-0" style={{ color: "#FFB700", clipPath: "inset(0 0 60% 0)", transform: "translate(2px,-2px)" }}>{w}</span>
          <span className="absolute left-0 top-0" style={{ color: "#00F5FF", clipPath: "inset(60% 0 0 0)", transform: "translate(-2px,2px)" }}>{w}</span>
        </>
      )}
    </h1>
  );
}
