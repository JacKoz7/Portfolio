import Image from "next/image";
import { Content, CV_HREF } from "@/lib/content";

export const HeroSection = ({ t }: { t: Content["hero"] }) => {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="absolute -top-56 -right-40 size-[640px] pointer-events-none animate-glow bg-[radial-gradient(circle,rgba(232,182,74,0.13)_0%,rgba(232,182,74,0)_65%)]" />
      <div className="absolute inset-0 pointer-events-none [background-image:repeating-linear-gradient(90deg,rgba(236,231,220,0.025)_0_1px,transparent_1px_96px)]" />
      <div className="container relative grid items-center gap-16 py-20 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <h1 className="font-serif text-[44px] md:text-6xl lg:text-[68px] leading-[1.06] mb-6">
            {t.title1} <span className="text-gold">{t.titleEm}</span>
          </h1>
          <p className="text-[17.5px] leading-relaxed text-muted max-w-[540px] mb-9">{t.sub}</p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="font-mono text-[13px] tracking-wider font-medium bg-gold text-ink px-6 py-3 rounded-full hover:bg-gold-light transition-all hover:-translate-y-0.5"
            >
              {t.cta1}
            </a>
            <a
              href={CV_HREF}
              download
              className="font-mono text-[13px] tracking-wider text-cream border border-line-strong px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
            >
              {t.cta2}
            </a>
          </div>
        </div>
        <div className="relative justify-self-center lg:justify-self-end animate-fade-up [animation-delay:150ms]">
          <div className="absolute top-[18px] left-[18px] -right-[18px] -bottom-[18px] border border-gold/45 pointer-events-none" />
          <Image
            src="/portrait-2026.webp"
            alt="Jacek Kozłowski"
            width={400}
            height={500}
            priority
            className="block w-full max-w-[400px] aspect-[3/3.8] object-cover object-[50%_28%] border border-line saturate-[0.95] transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute -bottom-3.5 -left-3.5 bg-ink border border-line px-4 py-2.5 font-mono text-[11.5px] tracking-widest text-muted">
            {t.photoTag}
          </div>
        </div>
      </div>
    </header>
  );
};
