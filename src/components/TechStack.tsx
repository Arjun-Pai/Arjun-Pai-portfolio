import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck } from "lucide-react";
import certPython from "@/assets/cert-python.png.asset.json";
import certJs from "@/assets/cert-javascript.png.asset.json";
import certHtml from "@/assets/cert-html.png.asset.json";

type Certified = {
  name: string;
  cert: { image: string; link: string; label: string };
};

const certified: Certified[] = [
  {
    name: "Python",
    cert: {
      image: certPython.url,
      link: "https://www.freecodecamp.org/certification/fcc-700e9974-8998-4439-93cb-8fbdea173b0f/machine-learning-with-python-v7",
      label: "Machine Learning with Python",
    },
  },
  {
    name: "JavaScript",
    cert: {
      image: certJs.url,
      link: "https://www.freecodecamp.org/certification/fcc-700e9974-8998-4439-93cb-8fbdea173b0f/javascript-algorithms-and-data-structures",
      label: "JS Algorithms & Data Structures",
    },
  },
  {
    name: "HTML & CSS",
    cert: {
      image: certHtml.url,
      link: "https://www.freecodecamp.org/certification/fcc-700e9974-8998-4439-93cb-8fbdea173b0f/responsive-web-design",
      label: "Responsive Web Design",
    },
  },
  {
    name: "C++",
    cert: {
      image: "",
      link: "#",
      label: "Self-taught proficiency",
    },
  },
];

const known = ["TypeScript", "C", "React", "Arduino", "Raspberry Pi", "ESP32", "AI / ML", "Robotics"];

function FlipCard({ name, cert }: Certified) {
  const isReal = cert.link !== "#";
  return (
    <div className="flip-card h-72 w-56" tabIndex={0}>
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-face flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/[0.02] p-6">
          <BadgeCheck className="h-9 w-9 text-white/80" strokeWidth={1.25} />
          <div className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
            {name}
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/55">
            {isReal ? "Certified" : "Proficient"}
          </div>
          <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-white/35">
            Hover to view
          </div>
        </div>
        {/* Back */}
        <div className="flip-face flip-face-back flex flex-col rounded-2xl border border-white/30 bg-black p-3">
          {isReal ? (
            <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-white">
              <img
                src={cert.image}
                alt={`${name} certification`}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="relative flex flex-1 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
              <BadgeCheck className="h-8 w-8 text-white/70" strokeWidth={1.25} />
              <div className="mt-4 font-display text-base font-bold text-white">Proficient</div>
              <div className="mt-2 text-[11px] leading-relaxed text-white/60">
                Self-taught working knowledge. No formal certificate yet.
              </div>
            </div>
          )}
          <div className="mt-3 text-center">
            <div className="font-display text-xs font-bold text-white">{name}</div>
            {isReal ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white"
              >
                Verify <ExternalLink size={10} />
              </a>
            ) : (
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                {cert.label}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <div className="mt-16 space-y-16">
      <div className="flex flex-wrap justify-center gap-6">
        {certified.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <FlipCard {...c} />
          </motion.div>
        ))}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Also known</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {known.map((k) => (
            <span
              key={k}
              className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2 font-display text-xs tracking-wide text-white/75"
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
