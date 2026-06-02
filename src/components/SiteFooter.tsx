import paioLogo from "@/assets/paio-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={paioLogo} alt="PAIO" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-sm tracking-[0.3em] text-white/80">PAIO</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-7 text-[11px] uppercase tracking-[0.25em] text-white/55">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#future" className="hover:text-white">Future</a>
          <a href="#books" className="hover:text-white">Books</a>
          <a href="#skills" className="hover:text-white">Stack</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-[11px] text-white/40">© 2025 PAIO International</p>
      </div>
    </footer>
  );
}
