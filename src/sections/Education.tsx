import SectionHeader from "@/components/SectionHeader";
import { Polaroid } from "@/components/Polaroid";
import { Content } from "@/lib/content";

export const EducationSection = ({ t }: { t: Content["edu"] }) => {
  return (
    <section id="education" className="border-t border-line bg-panel">
      <div className="container py-20 lg:py-[88px]">
        <SectionHeader num="04" title={t.title} />
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-7">
              {t.degrees.map((d) => (
                <div key={d.name} className="reveal border-l border-line-strong pl-5">
                  <p className="font-mono text-xs text-muted mb-1.5">{d.period}</p>
                  <h3 className="font-serif text-[23px] mb-1">{d.name}</h3>
                  <p className="text-sm text-muted">{d.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 grid items-start gap-12 md:grid-cols-[1fr_auto] md:gap-10">
              <div>
                <div className="bg-card border border-line px-5 py-4 flex items-baseline gap-3.5">
                  <span className="font-serif text-xl text-gold">3×</span>
                  <span className="text-sm leading-normal text-muted">{t.award}</span>
                </div>
                <div className="mt-7">
                  <p className="font-mono text-xs tracking-[0.14em] text-gold mb-3.5">{t.langsTitle}</p>
                  <p className="text-[14.5px] text-muted leading-[1.7]">{t.langs}</p>
                </div>
              </div>
              <div className="reveal justify-self-center md:mt-2">
                <Polaroid src="/graduation-2026.webp" alt={t.photoAlt} caption={t.photoCaption} hint={t.photoHint} />
              </div>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-gold mb-5">{t.certsTitle}</p>
            <div className="flex flex-col border-t border-line">
              {t.certs.map((c) => (
                <div
                  key={c.name}
                  className="flex justify-between items-baseline gap-4 py-4 border-b border-line"
                >
                  <div>
                    <p className="text-[15.5px] text-cream">{c.name}</p>
                    <p className="font-mono text-[11.5px] text-muted mt-0.5">{c.org}</p>
                  </div>
                  <p className="font-mono text-xs text-faint">{c.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
