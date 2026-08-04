import { Content, CV_HREF } from "@/lib/content";

export const Header = ({
  nav,
  otherLang,
  onToggle,
}: {
  nav: Content["nav"];
  otherLang: string;
  onToggle: () => void;
}) => {
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
          <button
            onClick={onToggle}
            className="font-mono text-xs tracking-widest text-gold border border-line-strong rounded-full px-3.5 py-1.5 hover:border-gold hover:bg-gold/10 transition-colors"
          >
            {otherLang}
          </button>
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
