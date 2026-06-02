import { useEffect, useState } from "react";
import paioLogo from "@/assets/paio-logo.png";

export function Boot({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      setProgress(t);
      if (t >= 1) {
        clearInterval(id);
        setTimeout(onDone, 500);
      }
    }, 30);
    return () => clearInterval(id);
  }, [onDone]);

  const dots = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <img
          src={paioLogo}
          alt="PAIO"
          width={160}
          height={160}
          className="mb-12 h-32 w-32 object-contain"
          style={{ filter: "drop-shadow(0 0 28px rgba(255,255,255,0.35))" }}
        />

        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-[spinSlow_1.6s_linear_infinite]">
            {dots.map((_, i) => {
              const angle = (i / dots.length) * Math.PI * 2;
              const r = 24;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-white"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: 0.15 + (i / dots.length) * 0.85,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-12 font-display text-base tracking-[0.35em] text-white/90 md:text-lg">
          PAIO INTERNATIONAL
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
          Initializing… {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
}
