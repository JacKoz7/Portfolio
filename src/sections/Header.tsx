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
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  // The edge under the bar only shows once content actually scrolls beneath it
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`material sticky top-0 z-50 border-b transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-line shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]" : "border-transparent"
      }`}
    >
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
              className="press flex items-center gap-1.5 font-mono text-xs tracking-widest text-gold border border-line-strong rounded-full px-3.5 py-1.5 hover:border-gold hover:bg-gold/10"
            >
              {lang.toUpperCase()}
              <svg
                viewBox="0 0 10 6"
                className={`w-2 transition-transform duration-300 ease-spring ${open ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {/* Stays mounted so it can grow out of the trigger and shrink back into it */}
            <ul
              role="listbox"
              aria-hidden={!open}
              className={`absolute right-0 mt-2 min-w-full origin-top-right bg-ink/95 border border-line-strong rounded-2xl py-1.5 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7)] transition-[opacity,transform,filter,visibility] duration-200 ease-spring ${
                open ? "opacity-100 scale-100 blur-0 visible" : "opacity-0 scale-90 -translate-y-1 blur-[2px] invisible"
              }`}
            >
              {LANGS.map((l) => (
                <li key={l}>
                  <button
                    role="option"
                    aria-selected={l === lang}
                    tabIndex={open ? 0 : -1}
                    onClick={() => {
                      onChange(l);
                      setOpen(false);
                    }}
                    className={`block w-full text-left font-mono text-xs tracking-widest px-4 py-1.5 transition-colors hover:text-gold hover:bg-gold/10 active:bg-gold/20 ${l === lang ? "text-gold" : "text-muted"}`}
                  >
                    {l.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={CV_HREF}
            download
            className="press whitespace-nowrap font-mono text-xs tracking-widest font-medium text-ink bg-gold rounded-full px-4 py-[7px] hover:bg-gold-light"
          >
            {nav.cv}
          </a>
        </div>
      </div>
    </div>
  );
};
