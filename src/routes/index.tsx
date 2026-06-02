import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Boot } from "@/components/Boot";
import { Cursor } from "@/components/Cursor";
import { Starfield } from "@/components/Starfield";
import { Globe3D } from "@/components/Globe3D";
import { GlitchText } from "@/components/GlitchText";
import { TiltCard } from "@/components/TiltCard";
import { CountUp } from "@/components/CountUp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BooksSection } from "@/components/BooksSection";
import { TechStack } from "@/components/TechStack";
import { PaioHero } from "@/components/PaioHero";
import { MilestoneWheel } from "@/components/MilestoneWheel";
import { AwardsMarquee } from "@/components/AwardsMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import arjunHeadshot from "@/assets/arjun-headshot.png";
import paioLogo from "@/assets/paio-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Pai — Founder & CEO of PAIO International" },
      { name: "description", content: "Portfolio of Arjun Pai: middle school tech prodigy, robotics engineer, software developer, author of the Life of Doom trilogy, and founder of PAIO International." },
      { property: "og:title", content: "Arjun Pai — Founder & CEO of PAIO International" },
      { property: "og:description", content: "Building the future. One product at a time." },
    ],
  }),
  component: Index,
});

// Real (non-AI) photo placeholders from Unsplash.
const UNS = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70&sat=-100`;

const projects = [
  { name: "Delivery Drone",   desc: "Autonomous aerial delivery prototype.",   tech: "Arduino · ESP32 · Python",        img: UNS("1508614589041-895b88991e3e") },
  { name: "Delivery Robot",   desc: "Ground-based last-mile delivery bot.",     tech: "Raspberry Pi · Python · ROS",     img: UNS("1581090700227-1e37b190418e") },
  { name: "Seed Car",         desc: "Self-planting agricultural rover.",        tech: "Arduino · C++ · Sensors",         img: UNS("1592982537447-7440770cbfc9") },
  { name: "Mesh Comms",       desc: "Robots talking without WiFi or Bluetooth.",tech: "ESP32 · LoRa · C",                img: UNS("1518770660439-4636190af475") },
  { name: "AI Vision System", desc: "Real-time object detection pipeline.",     tech: "Python · OpenCV · TensorFlow",    img: UNS("1531297484001-80022131f5a1") },
  { name: "AI Robotic Hand",  desc: "Gesture-controlled prosthetic prototype.", tech: "Arduino · Python · Servos",       img: UNS("1581092580497-e0d23cbdf1dc") },
  { name: "Water Purifier Bottle", desc: "Portable UV and filtration system.",  tech: "Hardware · Chemistry",            img: UNS("1559757175-0eb30cd8c063") },
  { name: "School Hub",       desc: "Unified learning + activity platform.",    tech: "React · TypeScript · Node",       img: UNS("1498050108023-c5249f4df085") },
  { name: "Engineering Hub",  desc: "Workspace for student engineers.",         tech: "React · TSX · Firebase",          img: UNS("1542831371-29b0f74f9713") },
  { name: "Robotic Dog",      desc: "Quadruped companion robot.",               tech: "Raspberry Pi · Python · Servos",  img: UNS("1546776230-bb86256870ce") },
];

const futureProjects = [
  "Smart RC Car / FPV Rover",
  "Automatic Smart Trash Can",
  "Smart Fridge Inventory Tracker",
  "DIY Programmable Robotic Arm",
  "Autonomous Obstacle-Avoiding Rover",
  "Self-Balancing Two-Wheeled Robot",
  "DIY 3D Printer or CNC Carver",
  "Automated Color-Sorting Conveyor Belt",
  "Custom Car Infotainment System",
  "Smart GPS Car Tracker & Anti-Theft",
  "DIY Dash Cam",
  "Digital Parking Sensor / Backup Assistant",
  "Health-Tracking Smart Glasses",
  "DIY 2D Plotter / Drawing Machine",
  "E-Ink Desk Calendar & Task Dashboard",
  "Smart 'Busy' / Meeting Indicator Light",
  "Automated Attendance / Clock-In Station",
  "Smart Glasses / Heads-Up Display",
  "Smart Ring",
  "GPS Tracker / Route Logger",
  "Body-Worn Life-Logging Camera",
  "Smart Home Hub",
  "Retro Gaming Console",
  "DIY Handheld Gaming Device",
  "Custom Arcade / Virtual Pinball Cabinet",
  "Sim Racing / Flight Sim Hardware",
  "VR Haptic Gloves & Trackers",
  "Smart Security / IP Camera",
  "Wildlife Trail Camera",
  "Time-Lapse Camera Rig",
  "DIY Drone / UAV Flight Controller",
  "DIY Action Camera",
  "Bluetooth Speaker / Soundbar",
  "Custom Digital Audio Player",
  "DIY MIDI Controller / Synthesizer",
  "Internet Radio Streamer",
  "Voice Recorder / Smart Microphone",
  "Network Audio Receiver",
  "Smartphone",
  "Feature Phone",
  "Tablet",
  "Walkie Talkies",
  "Smartwatch",
  "Bluetooth Comms Headset",
];

const stats = [
  { n: 10, s: "+", l: "Projects Built" },
  { n: 1,  s: "",  l: "Hackathon Organized" },
  { n: 5,  s: "+", l: "Languages Mastered" },
  { n: 1,  s: "",  l: "Company Founded" },
  { n: 3,  s: "",  l: "Books Authored" },
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
      <ScrollProgress />

      <main className="relative z-10">
        {/* NAV */}
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/60 px-6 py-4 backdrop-blur-md md:px-12">
          <a href="#top" className="flex items-center gap-3">
            <img src={paioLogo.url} alt="PAIO" width={36} height={36} className="h-8 w-8 object-contain" />
            <span className="font-display text-sm font-bold tracking-[0.3em] text-white">PAIO</span>
          </a>
          <div className="hidden gap-9 text-[11px] uppercase tracking-[0.25em] text-white/65 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#paio" className="hover:text-white">PAIO</a>
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#future" className="hover:text-white">Future</a>
            <a href="#books" className="hover:text-white">Books</a>
            <a href="#skills" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section id="top" className="relative flex min-h-screen items-center px-6 pt-28 md:px-12">
          <div className="grid w-full items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Mission Online
              </div>
              <GlitchText />
              <p className="mt-8 max-w-xl text-base text-white/65 md:text-lg">
                Founder & CEO of PAIO International · Middle School · Robotics Engineer · Software Developer · Author
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full border border-white px-8 py-3 font-display text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black">View My Work</a>
                <a href="#paio" className="rounded-full border border-white/30 px-8 py-3 font-display text-xs uppercase tracking-[0.25em] text-white/80 transition hover:border-white hover:text-white">About PAIO</a>
              </div>
            </div>
            <div className="relative h-[420px] md:h-[560px]">
              <div className="absolute inset-0">
                <Globe3D />
              </div>
              <div className="animate-bob absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/40 md:h-44 md:w-44" style={{ boxShadow: "0 0 40px rgba(255,255,255,0.18)" }}>
                  <img src={arjunHeadshot} alt="Arjun Pai" width={768} height={768} className="h-full w-full grayscale object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative px-6 py-40 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/15">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={paioLogo.url} alt="PAIO" width={320} height={320} className="h-2/3 w-2/3 object-contain opacity-90" style={{ filter: "drop-shadow(0 0 24px rgba(255,255,255,0.18))" }} />
                </div>
                <div className="absolute bottom-6 left-6 font-display text-[10px] uppercase tracking-[0.3em] text-white/55">
                  operator · arjun.pai
                </div>
                <div className="absolute right-6 top-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> Online
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">About</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">A mind built for what's next.</h2>
              <p className="mt-8 text-white/70 leading-relaxed">
                Arjun Pai is a middle school student and self-taught tech prodigy — the Founder & CEO of
                PAIO International. From autonomous drones to AI vision systems, Arjun blends robotics,
                software engineering, and product thinking to ship real, working hardware. He organizes
                hackathons, mentors peers, and authored the Life of Doom trilogy — building the company
                he wants to lead, somewhere between Apple and Tata.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.l} className="holo-panel rounded-xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-white md:text-3xl">
                      <CountUp to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/55">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PAIO */}
        <PaioHero />

        {/* PROJECTS */}
        <section id="projects" className="relative px-6 py-40 md:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">010</p>
              <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">What I've Built</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.04}>
                  <TiltCard className="holo-panel group h-full overflow-hidden rounded-2xl p-5">
                    <div className="relative mb-5 h-44 overflow-hidden rounded-lg border border-white/10 bg-black">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 font-display text-[10px] uppercase tracking-[0.3em] text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/45">{p.tech}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FUTURE PROPOSED PROJECTS */}
        <section id="future" className="relative border-y border-white/10 bg-black/40 px-6 py-40 md:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Roadmap</p>
              <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">Future Proposed Projects</h2>
              <p className="mt-6 max-w-2xl text-white/60">
                A live backlog of hardware and software ideas being researched and prototyped next.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {futureProjects.map((name, i) => (
                <Reveal key={name} delay={Math.min(i, 8) * 0.02}>
                  <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-white/40">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/15 font-display text-[11px] text-white/55 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display text-sm text-white/85">{name}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKS */}
        <BooksSection />

        {/* SKILLS */}
        <section id="skills" className="relative px-6 py-40 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Stack</p>
              <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">Certified & Proficient</h2>
              <p className="mx-auto mt-6 max-w-xl text-white/60">
                Hover any certified language to flip the card and see the actual certificate.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <TechStack />
            </Reveal>
          </div>
        </section>

        {/* TIMELINE WHEEL */}
        <section id="milestones" className="relative px-6 py-40 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Timeline</p>
              <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">Milestones</h2>
              <p className="mx-auto mt-6 max-w-md text-sm text-white/55">A rotating constellation of moments — hover any node to learn more.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <MilestoneWheel />
            </Reveal>
          </div>
        </section>

        {/* AWARDS */}
        <AwardsMarquee />

        {/* CONTACT */}
        <section id="contact" className="relative border-t border-white/10 bg-black px-6 py-40 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Get in Touch</h2>
              <p className="mx-auto mt-6 max-w-xl text-white/60">
                Open to collaboration on robotics, AI, hardware and ambitious software projects.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="https://www.linkedin.com/in/arjun-prashanth-pai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group grid h-16 w-16 place-items-center rounded-full border border-white/20 transition hover:border-white hover:bg-white"
                >
                  <Linkedin className="h-6 w-6 text-white group-hover:text-black" strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/Arjun-Pai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group grid h-16 w-16 place-items-center rounded-full border border-white/20 transition hover:border-white hover:bg-white"
                >
                  <Github className="h-6 w-6 text-white group-hover:text-black" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:supersonicarjun123@gmail.com"
                  aria-label="Email"
                  className="group grid h-16 w-16 place-items-center rounded-full border border-white/20 transition hover:border-white hover:bg-white"
                >
                  <Mail className="h-6 w-6 text-white group-hover:text-black" strokeWidth={1.5} />
                </a>
              </div>
              <div className="mt-10 space-y-2 text-sm text-white/60">
                <div>supersonicarjun123@gmail.com</div>
                <div className="text-white/40">linkedin.com/in/arjun-prashanth-pai · github.com/Arjun-Pai</div>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
