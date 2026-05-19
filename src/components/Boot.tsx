import { useEffect, useState } from "react";

export function Boot({ onDone }: { onDone: () => void }) {
  const [text, setText] = useState("");
  const full = "PAIO International — Initializing...";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setTimeout(onDone, 700);
      }
    }, 45);
    return () => clearInterval(id);
  }, [onDone]);
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#080A12]">
      <div className="text-center">
        <div className="mb-6 font-display text-2xl text-cyan-glow md:text-4xl">{text}<span className="animate-pulse">_</span></div>
        <div className="mx-auto h-px w-64 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse" style={{ background: "linear-gradient(90deg, transparent, #00F5FF, transparent)" }} />
        </div>
      </div>
    </div>
  );
}
