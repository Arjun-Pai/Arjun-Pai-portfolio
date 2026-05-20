import { useState } from "react";
import { Rocket, Trophy, Code, Cpu, Award, Music, Compass, Flame } from "lucide-react";

const items = [
  { icon: Rocket, title: "Founded PAIO", year: "2024", desc: "Launched PAIO International — a multi-vertical tech company." },
  { icon: Code, title: "CircuitBreak 2025", year: "2025", desc: "Organized and led an end-to-end student hackathon." },
  { icon: Cpu, title: "Byte Battle", year: "2025", desc: "Competed against top student coders in a head-to-head bracket." },
  { icon: Flame, title: "Synthax", year: "2025", desc: "Presented AI + robotics work to peers and judges." },
  { icon: Trophy, title: "Innovation Marathon", year: "2024", desc: "Built and shipped a working prototype under a hard deadline." },
  { icon: Award, title: "Taekwondo Black Belt", year: "2023", desc: "Years of discipline, focus, and structured training." },
  { icon: Music, title: "Piano Level 3A", year: "2023", desc: "Classical training and performance milestones." },
  { icon: Compass, title: "Boy Scouts Ranger", year: "2024", desc: "Leadership and outdoor mastery." },
];

export function MilestoneWheel() {
  const [active, setActive] = useState<number | null>(null);
  const paused = active !== null;

  return (
    <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
      {/* outer glowing ring */}
      <div className="absolute inset-0 rounded-full border border-[#00F5FF]/30" style={{boxShadow:"0 0 80px rgba(0,245,255,0.15), inset 0 0 60px rgba(0,245,255,0.08)"}} />
      <div className="absolute inset-6 rounded-full border border-dashed border-[#00F5FF]/15" />
      <div className="absolute inset-12 rounded-full border border-[#FFB700]/15" />

      {/* rotating layer */}
      <div
        className="absolute inset-0"
        style={{
          animation: "spinSlow 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((it, i) => {
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
          const r = 44; // % radius
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          const Icon = it.icon;
          const isActive = active === i;
          return (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* counter-rotate so labels stay upright */}
              <div
                style={{
                  animation: "spinSlow 40s linear infinite reverse",
                  animationPlayState: paused ? "paused" : "running",
                }}
                className="flex w-24 flex-col items-center"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#FFB700] bg-[#FFB700]/10 scale-110"
                      : "border-[#00F5FF]/60 bg-[#080A12]/80"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 30px rgba(255,183,0,0.7)"
                      : "0 0 18px rgba(0,245,255,0.4)",
                  }}
                >
                  <Icon size={22} className={isActive ? "text-[#FFB700]" : "text-[#00F5FF]"} />
                </div>
                <div className="mt-2 text-center font-display text-[10px] uppercase tracking-widest text-white/80">
                  {it.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* center detail card */}
      <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 text-center">
        {active === null ? (
          <div className="space-y-2">
            <div className="mx-auto h-3 w-3 animate-pulse rounded-full bg-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.8)]" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-glow">
              Milestones
            </p>
            <p className="text-[11px] text-white/50">Hover a node</p>
          </div>
        ) : (
          <div className="holo-panel rounded-xl p-4 animate-fade-in">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-glow">
              {items[active].year}
            </div>
            <h4 className="mt-1 font-display text-base font-bold text-cyan-glow">
              {items[active].title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{items[active].desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
