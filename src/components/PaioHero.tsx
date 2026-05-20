import { motion } from "framer-motion";

const products = [
  { name: "Phone", icon: "📱" },
  { name: "Drone", icon: "🚁" },
  { name: "Robot", icon: "🤖" },
  { name: "TV", icon: "📺" },
  { name: "Auto", icon: "🚗" },
];

export function PaioHero() {
  return (
    <section
      id="paio"
      className="relative overflow-hidden border-y border-white/5 bg-black/40 px-6 py-32 md:px-12"
    >
      {/* animated gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-[#00F5FF]/15 blur-[120px] animate-pulse" />
        <div
          className="absolute -right-1/4 bottom-0 h-[60vh] w-[60vh] rounded-full bg-[#FFB700]/15 blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="grid-bg absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Logo P */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl border-2 border-cyan"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,245,255,0.25), transparent 70%)",
            animation: "pulseGlow 2.5s ease-in-out infinite",
          }}
        >
          <span className="font-display text-5xl font-extrabold text-cyan-glow">P</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-6xl font-extrabold tracking-tight md:text-8xl"
        >
          PAIO <span className="text-gold-glow">International</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 font-display text-xl italic text-white/90 md:text-2xl"
          style={{ textShadow: "0 0 24px rgba(0,245,255,0.35)" }}
        >
          "Building the Future. One Product at a Time."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-white/65"
        >
          Inspired by the design rigor of Apple and the breadth of Tata, PAIO is a multi-vertical
          technology company designing consumer devices, robotics, and software for the next
          generation.
        </motion.p>

        {/* 3D perspective carousel */}
        <div
          className="mt-20 flex items-end justify-center gap-4 md:gap-8"
          style={{ perspective: "1200px" }}
        >
          {products.map((p, i) => {
            const offset = i - (products.length - 1) / 2;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                whileHover={{ scale: 1.08, rotateY: 0, y: -10 }}
                style={{
                  transform: `rotateY(${offset * 14}deg) translateZ(${-Math.abs(offset) * 20}px)`,
                  transformStyle: "preserve-3d",
                }}
                className="group relative flex h-44 w-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-cyan bg-gradient-to-b from-[#0c1126] to-[#080A12] p-4 md:h-56 md:w-36"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{boxShadow:"0 0 40px rgba(0,245,255,0.55), inset 0 0 20px rgba(0,245,255,0.25)"}}/>
                <div className="text-5xl md:text-6xl">{p.icon}</div>
                <div className="mt-4 font-display text-xs uppercase tracking-widest text-white/80 md:text-sm">
                  {p.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group relative mt-16 inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-cyan px-8 py-3 font-display text-sm uppercase tracking-widest text-cyan-glow transition-all hover:text-[#080A12]"
        >
          <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[#00F5FF] transition-transform duration-500 group-hover:scale-x-100" />
          <span className="relative z-10">Explore Products →</span>
        </motion.a>
      </div>
    </section>
  );
}
