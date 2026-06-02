import { motion } from "framer-motion";
import { Download, Clock } from "lucide-react";
import book1 from "@/assets/life-of-doom-1.pdf.asset.json";
import book2 from "@/assets/life-of-doom-2.pdf.asset.json";

const books = [
  {
    title: "Life of Doom",
    subtitle: "Book 1",
    blurb:
      "An ordinary boy stumbles into a world where shadows think back and the rules of reality begin to bend. The origin story that ignites the trilogy — a quiet awakening, a first taste of power, and the dawning fear that someone, somewhere, is watching.",
    download: book1.url,
    available: true,
  },
  {
    title: "Life of Doom",
    subtitle: "Book 2",
    blurb:
      "Allies become strangers and strangers become threats as the code beneath the world unravels. Stakes climb, secrets surface, and the line between hero and machine starts to dissolve. The middle chapter that turns curiosity into consequence.",
    download: book2.url,
    available: true,
  },
  {
    title: "Life of Doom",
    subtitle: "Book 3",
    blurb:
      "The reckoning. Every circuit, every choice, every consequence converges in a final confrontation with what was always waiting in the dark. The closing chapter of the Life of Doom trilogy — releasing October 31.",
    download: null,
    available: false,
  },
];

export function BooksSection() {
  return (
    <section id="books" className="relative overflow-hidden px-6 py-40 md:px-12">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Author</p>
          <h2 className="mt-4 font-display text-5xl font-bold md:text-6xl">
            Beyond the Circuit — Life of Doom Trilogy
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-display italic text-white/65">
            "Because great minds don't just build — they tell stories."
          </p>
        </motion.div>

        <div className="mt-24 grid gap-10 md:grid-cols-3" style={{ perspective: "1400px" }}>
          {books.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flip-card mx-auto h-[440px] w-[280px]"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div
                  className="flip-face flex flex-col justify-between rounded-lg border border-white/20 bg-gradient-to-b from-[#0a0a0a] to-black p-7"
                  style={{ boxShadow: "0 30px 60px -20px rgba(255,255,255,0.08)" }}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                      {b.subtitle}
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white">
                      {b.title}
                    </h3>
                  </div>
                  <div className="mx-auto h-32 w-32 rounded-full border border-white/15" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Arjun Pai</div>
                </div>
                {/* Back */}
                <div
                  className="flip-face flip-face-back flex flex-col justify-between rounded-lg border border-white/30 bg-gradient-to-b from-[#0a0a0a] to-black p-7 text-center"
                  style={{ boxShadow: "0 30px 60px -20px rgba(255,255,255,0.12)" }}
                >
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                    Synopsis
                  </div>
                  <p className="text-[13px] leading-relaxed text-white/80">{b.blurb}</p>
                  {b.available && b.download ? (
                    <a
                      href={b.download}
                      download
                      className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <Download size={14} /> Download PDF
                    </a>
                  ) : (
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-white/60">
                      <Clock size={14} /> Releasing Oct 31
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
