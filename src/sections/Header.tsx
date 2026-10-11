import { useEffect, useRef, useState } from "react";
import { Content, CV_HREF, Lang, LANGS } from "@/lib/content";

export const Header = ({
  nav,
  lang,
  onChange,
}: {
  nav: Content["nav"];
  lang: Lang;
  onChange: (lang: Lang) => void;
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-ink/80 border-b border-line">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-mono text-[15px] font-medium text-gold tracking-wide">
          portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-[12.5px] tracking-wider">
          <a href="#about" className="text-muted hover:text-cream transition-colors">{nav.about}</a>
          <a href="#projects" className="text-muted hover:text-cream transition-colors">{nav.projects}</a>
          <a href="#experience" className="text-muted hover:text-cream transition-colors">{nav.exp}</a>
          <a href="#education" className="text-muted hover:text-cream transition-colors">{nav.edu}</a>
          <a href="#contact" className="text-muted hover:text-cream transition-colors">{nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3.5">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-gold border border-line-strong rounded-full px-3.5 py-1.5 hover:border-gold hover:bg-gold/10 transition-colors"
            >
              {lang.toUpperCase()}
              <svg viewBox="0 0 10 6" className={`w-2 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 min-w-full bg-ink border border-line-strong rounded-2xl py-1.5 shadow-lg"
              >
                {LANGS.map((l) => (
                  <li key={l}>
                    <button
                      role="option"
                      aria-selected={l === lang}
                      onClick={() => {
                        onChange(l);
                        setOpen(false);
                      }}
                      className={`block w-full text-left font-mono text-xs tracking-widest px-4 py-1.5 transition-colors hover:text-gold hover:bg-gold/10 ${l === lang ? "text-gold" : "text-muted"}`}
                    >
                      {l.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a
            href={CV_HREF}
            download
            className="font-mono text-xs tracking-widest font-medium text-ink bg-gold rounded-full px-4 py-[7px] hover:bg-gold-light transition-all hover:-translate-y-px"
          >
            {nav.cv}
          </a>
        </div>
      </div>
    </div>
  );
};
