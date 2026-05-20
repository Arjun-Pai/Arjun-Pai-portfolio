import { motion } from "framer-motion";

const stack = [
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "HTML", slug: "html5" },
  { name: "C", slug: "c" },
  { name: "C++", slug: "cplusplus" },
  { name: "React", slug: "react" },
  { name: "TSX", slug: "react" },
  { name: "Arduino", slug: "arduino" },
  { name: "Raspberry Pi", slug: "raspberrypi" },
  { name: "ESP32", slug: "espressif" },
  { name: "AI/ML", slug: "tensorflow" },
  { name: "Robotics", slug: "robotframework" },
];

export function TechStack() {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-5">
      {stack.map((s, i) => (
        <motion.div
          key={s.name + i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          whileHover={{ y: -6, scale: 1.06 }}
          className="relative flex h-[140px] w-[130px] flex-col items-center justify-center"
          style={{
            clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
            background:
              "linear-gradient(160deg, rgba(0,245,255,0.10), rgba(8,10,18,0.9))",
            border: "1px solid rgba(0,245,255,0.25)",
            boxShadow: "inset 0 0 30px rgba(0,245,255,0.08)",
            animation: `bob 4s ease-in-out ${i * 0.15}s infinite`,
          }}
        >
          <img
            src={`https://cdn.simpleicons.org/${s.slug}/00F5FF`}
            alt={`${s.name} logo`}
            width={36}
            height={36}
            loading="lazy"
            className="drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]"
          />
          <div className="mt-2 font-display text-[11px] uppercase tracking-widest text-white/85">
            {s.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
