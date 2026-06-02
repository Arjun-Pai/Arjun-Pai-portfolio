import { motion } from "framer-motion";
import { Smartphone, Plane, Bot, Tv, Car } from "lucide-react";
import paioLogo from "@/assets/paio-logo.png.asset.json";

const products = [
  { name: "Phone", Icon: Smartphone },
  { name: "Drone", Icon: Plane },
  { name: "Robot", Icon: Bot },
  { name: "TV", Icon: Tv },
  { name: "Auto", Icon: Car },
];

export function PaioHero() {
  return (
    <section
      id="paio"
      className="relative overflow-hidden border-y border-white/10 bg-black px-6 py-40 md:px-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="grid-bg absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex h-40 w-40 items-center justify-center"
        >
          <img
            src={paioLogo.url}
            alt="PAIO International logo"
            width={320}
            height={320}
            className="h-full w-full object-contain"
            style={{ filter: "drop-shadow(0 0 28px rgba(255,255,255,0.25))" }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 font-display text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          PAIO International
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 font-display text-lg italic text-white/80 md:text-2xl"
        >
          "Building the future. One product at a time."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          Inspired by the design rigor of Apple and the breadth of Tata, PAIO is a multi-vertical
          technology company designing consumer devices, robotics, and software for the next
          generation.
        </motion.p>

        <div className="mt-24 flex flex-wrap items-end justify-center gap-6 md:gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              whileHover={{ y: -8 }}
              className="group flex h-40 w-32 cursor-default flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.02] p-5 transition-colors hover:border-white/60 md:h-48 md:w-36"
            >
              <p.Icon className="h-12 w-12 text-white/80 transition-colors group-hover:text-white md:h-14 md:w-14" strokeWidth={1.25} />
              <div className="mt-5 font-display text-[11px] uppercase tracking-[0.25em] text-white/70 md:text-xs">
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 inline-flex items-center gap-2 rounded-full border border-white/30 px-9 py-3 font-display text-xs uppercase tracking-[0.25em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
        >
          Explore Products →
        </motion.a>
      </div>
    </section>
  );
}
