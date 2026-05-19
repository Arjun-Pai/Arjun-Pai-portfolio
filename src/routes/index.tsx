import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Boot } from "@/components/Boot";
import { Cursor } from "@/components/Cursor";
import { Starfield, DataRain } from "@/components/Starfield";
import { Globe3D } from "@/components/Globe3D";
import { GlitchText } from "@/components/GlitchText";
import { TiltCard } from "@/components/TiltCard";
import { CountUp } from "@/components/CountUp";
import arjunHero from "@/assets/arjun-hero.jpg";
import arjunPortrait from "@/assets/arjun-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Pai — Founder & CEO of PAIO International" },
      { name: "description", content: "Portfolio of Arjun Pai: middle school tech prodigy, robotics engineer, software developer, and founder of PAIO International." },
      { property: "og:title", content: "Arjun Pai — Founder & CEO of PAIO International" },
      { property: "og:description", content: "Building the future. One product at a time." },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "Delivery Drone", desc: "Autonomous aerial delivery prototype.", tech: "Arduino · ESP32 · Python" },
  { name: "Delivery Robot", desc: "Ground-based last-mile delivery bot.", tech: "Raspberry Pi · Python · ROS" },
  { name: "Seed Car", desc: "Self-planting agricultural rover.", tech: "Arduino · C++ · Sensors" },
  { name: "Mesh Comms", desc: "Robots talking without WiFi/Bluetooth.", tech: "ESP32 · LoRa · C" },
  { name: "AI Vision System", desc: "Real-time object detection pipeline.", tech: "Python · OpenCV · TensorFlow" },
  { name: "AI Robotic Hand", desc: "Gesture-controlled prosthetic prototype.", tech: "Arduino · Python · Servos" },
  { name: "Water Purifier Bottle", desc: "Portable UV+filtration system.", tech: "Hardware · Chemistry" },
  { name: "School Hub", desc: "Unified learning + activity platform.", tech: "React · TypeScript · Node" },
  { name: "Engineering Hub", desc: "Workspace for student engineers.", tech: "React · TSX · Firebase" },
  { name: "Robotic Dog", desc: "Quadruped companion robot.", tech: "Raspberry Pi · Python · Servos" },
];

const skills = ["Python","JavaScript","TypeScript","HTML","C","C++","React","TSX","Arduino","Raspberry Pi","ESP32","AI/ML","Robotics"];

const milestones = [
  { t: "Founded PAIO International", d: "Launched a multi-vertical technology company." },
  { t: "Organized CircuitBreak 2025", d: "Led an end-to-end student hackathon." },
  { t: "Byte Battle", d: "Competed against top student coders." },
  { t: "Presented at Synthax", d: "Showcased AI + robotics work to peers." },
  { t: "School Innovation Marathon", d: "Built and shipped under deadline." },
  { t: "Taekwondo Black Belt", d: "Years of discipline and focus." },
  { t: "Piano Level 3A", d: "Classical training and performance." },
  { t: "Boy Scouts Ranger", d: "Leadership and outdoor mastery." },
  { t: "Certified: Python · HTML · AI", d: "Continuous structured learning." },
];

const stats = [
  { n: 10, s: "+", l: "Projects Built" },
  { n: 1, s: "", l: "Hackathon Organized" },
  { n: 5, s: "+", l: "Languages Mastered" },
  { n: 1, s: "", l: "Company Founded" },
  { n: 3, s: "", l: "Achievements" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [booted, setBooted] = useState(false);
  useEffect(() => { document.documentElement.classList.add("dark"); }, []);

  return (
    <>
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <Cursor />
      <Starfield />
      <DataRain />

      <main className="relative z-10">
        {/* NAV */}
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
          <a href="#top" className="font-display text-lg font-bold tracking-widest text-cyan-glow">PAIO</a>
          <div className="hidden gap-8 text-sm uppercase tracking-widest text-white/70 md:flex">
            <a href="#about" className="hover:text-cyan-glow">About</a>
            <a href="#paio" className="hover:text-cyan-glow">PAIO</a>
            <a href="#projects" className="hover:text-cyan-glow">Work</a>
            <a href="#skills" className="hover:text-cyan-glow">Stack</a>
            <a href="#contact" className="hover:text-cyan-glow">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section id="top" className="relative flex min-h-screen items-center px-6 pt-24 md:px-12">
          <div className="grid w-full items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan px-3 py-1 text-xs uppercase tracking-widest text-cyan-glow">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F5FF]" /> Mission Online
              </div>
              <GlitchText />
              <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
                CEO & Founder of PAIO International · Middle School · Robotics Engineer · Software Developer
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-cyan-glow border-cyan glow-cyan transition hover:scale-105">View My Work</a>
                <a href="#paio" className="rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-gold-glow border-gold glow-gold transition hover:scale-105">About PAIO</a>
              </div>
            </div>
            <div className="relative h-[420px] md:h-[560px]">
              <div className="absolute inset-0">
                <Globe3D />
              </div>
              <div className="animate-bob absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan glow-cyan md:h-36 md:w-36">
                  <img src={arjunHero} alt="Arjun Pai" width={768} height={768} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="mx-auto flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
              <div className="scroll-dot h-2 w-1 rounded-full bg-[#00F5FF]" />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest text-white/40">Scroll</div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-cyan glow-cyan">
                <img src={arjunPortrait} alt="Arjun in his lab" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A12] via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// About</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A mind built for what's next.</h2>
              <p className="mt-6 text-white/70">
                Arjun Pai is a <span className="text-gold-glow">middle school</span> student and self-taught
                <span className="text-gold-glow"> tech prodigy</span> — the Founder & CEO of
                <span className="text-gold-glow"> PAIO International</span>. From autonomous drones to AI vision systems,
                Arjun blends <span className="text-gold-glow">robotics</span>, <span className="text-gold-glow">software engineering</span>,
                and product thinking to ship real, working hardware. He organizes hackathons, mentors peers,
                and is building the company he wants to lead — somewhere between <span className="text-gold-glow">Apple</span> and
                <span className="text-gold-glow"> Tata</span>.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.l} className="holo-panel rounded-xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-cyan-glow md:text-3xl">
                      <CountUp to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PAIO */}
        <section id="paio" className="relative overflow-hidden border-y border-white/5 bg-black/40 px-6 py-32 md:px-12">
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-cyan glow-cyan">
                <span className="font-display text-3xl font-bold text-cyan-glow">P</span>
              </div>
              <h2 className="mt-8 font-display text-5xl font-bold md:text-7xl">PAIO <span className="text-gold-glow">International</span></h2>
              <p className="mt-4 font-display text-lg italic text-white/80">"Building the Future. One Product at a Time."</p>
              <p className="mx-auto mt-6 max-w-2xl text-white/60">
                Inspired by the design rigor of Apple and the breadth of Tata, PAIO is a multi-vertical
                technology company designing consumer devices, robotics, and software for the next generation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="spin-slow mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                {["📱 Phone","🚁 Drone","📺 TV","🤖 Robot"].map((p) => (
                  <div key={p} className="holo-panel rounded-xl p-8 text-center font-display text-xl text-white/80">{p}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// 010</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">What I've <span className="text-gold-glow">Built</span></h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.04}>
                  <TiltCard className="holo-panel group h-full rounded-2xl p-6">
                    <div className="mb-4 flex h-32 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-[#0c1126] to-[#080A12]">
                      <span className="font-display text-4xl text-cyan-glow opacity-50 group-hover:text-gold-glow">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-glow">{p.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-widest text-cyan-glow">{p.tech}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-10 right-10 hidden text-[10rem] opacity-5 md:block">🤖</div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Stack</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">My <span className="text-gold-glow">Stack</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-16 flex flex-wrap justify-center gap-4">
                {skills.map((s, i) => (
                  <div
                    key={s}
                    className="holo-panel relative font-display text-sm uppercase tracking-widest text-white/80"
                    style={{
                      clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
                      padding: "1.5rem 2.5rem",
                      animation: `bob 4s ease-in-out ${i * 0.1}s infinite`,
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-5xl">
                <span>🚁</span><span>🔌</span><span>🦾</span><span>💾</span><span>📡</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="milestones" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Timeline</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">Mile<span className="text-gold-glow">stones</span></h2>
            </Reveal>
            <div className="relative mt-16">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00F5FF] via-[#FFB700] to-transparent md:left-1/2" />
              {milestones.map((m, i) => (
                <Reveal key={m.t} delay={i * 0.03}>
                  <div className={`relative mb-10 flex items-start gap-6 md:gap-10 ${i % 2 ? "md:flex-row-reverse md:text-right" : ""}`}>
                    <div className="relative z-10 mt-2 h-3 w-3 shrink-0 rounded-full bg-[#00F5FF] animate-pulse-glow md:absolute md:left-1/2 md:-translate-x-1/2" />
                    <div className="holo-panel ml-6 flex-1 rounded-xl p-5 md:ml-0 md:max-w-[42%]">
                      <h3 className="font-display text-lg font-bold text-cyan-glow">{m.t}</h3>
                      <p className="mt-1 text-sm text-white/60">{m.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative border-t border-white/5 bg-black/40 px-6 py-32 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                Let's <span className="text-cyan-glow">Build the Future</span> Together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={(e) => e.preventDefault()} className="mt-12 grid gap-4 text-left">
                <input className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Name" />
                <input className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Email" type="email" />
                <textarea rows={5} className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Message" />
                <button className="mt-2 rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-cyan-glow border-cyan glow-cyan transition hover:scale-[1.02]">
                  Transmit Signal →
                </button>
              </form>
              <div className="mt-10 flex justify-center gap-6 text-sm uppercase tracking-widest text-white/60">
                <a href="#" className="hover:text-cyan-glow">LinkedIn</a>
                <a href="#" className="hover:text-cyan-glow">GitHub</a>
                <a href="#" className="hover:text-cyan-glow">Email</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-cyan px-6 py-8 text-center text-xs text-white/50 md:px-12">
          © 2025 Arjun Pai · PAIO International
        </footer>
      </main>
    </>
  );
}
