import { motion } from "framer-motion";

const books = [
  { title: "Life of Doom", subtitle: "Book 1", blurb: "The origin. A young mind awakens to a world where shadows think back.", hue: "#00F5FF" },
  { title: "Life of Doom", subtitle: "Book 2", blurb: "The rise. Allies become enemies as the code beneath reality unravels.", hue: "#FFB700" },
  { title: "Life of Doom", subtitle: "Book 3", blurb: "The reckoning. Every circuit. Every choice. Every consequence.", hue: "#B26BFF" },
];

export function BooksSection() {
  return (
    <section id="books" className="relative overflow-hidden px-6 py-32 md:px-12">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 7px 7px",
          backgroundPosition: "0 0, 1px 2px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Author</p>
          <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">
            Beyond the Circuit — <span className="text-gold-glow">Life of Doom</span> Trilogy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-display italic text-white/70">
            "Because great minds don't just build — they tell stories."
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8" style={{ perspective: "1400px" }}>
          {books.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group mx-auto h-[380px] w-[260px] [transform-style:preserve-3d]"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className="absolute inset-0 flex flex-col justify-between rounded-md p-6 [backface-visibility:hidden]"
                  style={{
                    background: `linear-gradient(160deg, #0c1126, #050610)`,
                    border: `1px solid ${b.hue}55`,
                    boxShadow: `0 30px 60px -20px ${b.hue}55, inset 0 0 40px ${b.hue}22`,
                  }}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: b.hue }}>
                      {b.subtitle}
                    </div>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white">
                      {b.title}
                    </h3>
                  </div>
                  <div
                    className="mx-auto h-32 w-32 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${b.hue}99, transparent 70%)`,
                      filter: "blur(2px)",
                    }}
                  />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Arjun Pai</div>
                </div>
                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col justify-center rounded-md p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{
                    background: `linear-gradient(200deg, #0c1126, #050610)`,
                    border: `1px solid ${b.hue}77`,
                    boxShadow: `0 30px 60px -20px ${b.hue}77, inset 0 0 50px ${b.hue}33`,
                  }}
                >
                  <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: b.hue }}>
                    Synopsis
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{b.blurb}</p>
                  <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {b.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
