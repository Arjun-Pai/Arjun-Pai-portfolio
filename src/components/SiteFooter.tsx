export function SiteFooter() {
  return (
    <footer className="relative border-t border-cyan bg-[#05060d]/80 px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan font-display text-sm font-bold text-cyan-glow">
            P
          </span>
          <span className="font-display text-sm tracking-widest text-white/80">PAIO</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-5 text-[11px] uppercase tracking-widest text-white/60">
          <a href="#about" className="hover:text-cyan-glow">About</a>
          <a href="#projects" className="hover:text-cyan-glow">Work</a>
          <a href="#skills" className="hover:text-cyan-glow">Stack</a>
          <a href="#contact" className="hover:text-cyan-glow">Contact</a>
        </nav>
        <p className="text-[11px] text-white/40">© 2025 PAIO International. All rights reserved.</p>
      </div>
    </footer>
  );
}
