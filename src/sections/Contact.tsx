import { Content, EMAIL, GITHUB, LINKEDIN, PHONE } from "@/lib/content";

export const ContactSection = ({ t }: { t: Content["contact"] }) => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[720px] h-[520px] pointer-events-none animate-glow bg-[radial-gradient(circle,rgba(232,182,74,0.1)_0%,rgba(232,182,74,0)_65%)]" />
      <div className="container reveal relative text-center py-24 lg:pt-[110px] lg:pb-24">
        <p className="font-mono text-[12.5px] tracking-[0.18em] text-gold mb-6">{t.kicker}</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[58px] leading-[1.1] mb-5">
          {t.title1} <em className="text-gold">{t.titleEm}</em>
        </h2>
        <p className="text-muted text-[16.5px] max-w-[480px] mx-auto mb-10 leading-relaxed">{t.sub}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-lg md:text-[22px] text-gold border-b border-gold/50 pb-1 hover:text-gold-light transition-colors"
        >
          {EMAIL}
        </a>
        <div className="flex flex-wrap justify-center gap-7 mt-11 font-mono text-[12.5px] tracking-wider">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-gold transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-gold transition-colors"
          >
            LinkedIn ↗
          </a>
          <span className="text-muted">{PHONE}</span>
          <span className="text-faint">{t.location}</span>
        </div>
      </div>
    </section>
  );
};
