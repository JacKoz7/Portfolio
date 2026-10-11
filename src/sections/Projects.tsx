import SectionHeader from "@/components/SectionHeader";
import { Content, GITHUB } from "@/lib/content";

export const ProjectsSection = ({ t }: { t: Content["proj"] }) => {
  return (
    <section id="projects" className="border-t border-line bg-panel">
      <div className="container py-20 lg:py-[88px]">
        <SectionHeader num="02" title={t.title}>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12.5px] tracking-wider text-gold hover:text-gold-light transition-colors whitespace-nowrap"
          >
            {t.all} ↗
          </a>
        </SectionHeader>
        <p className="text-muted text-[15.5px] max-w-[560px] -mt-6 mb-11">{t.sub}</p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p) => (
            // The reveal lives on a wrapper so its fade never fights the card's hover motion
            <div key={p.n} className="reveal">
              <div
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="spotlight relative h-full bg-card border border-line p-7 flex flex-col gap-4 transition-[border-color,transform,box-shadow] duration-500 ease-spring hover:border-gold/60 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-8px_rgba(0,0,0,0.6)]"
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-xs text-faint">{p.n}</span>
                  <div className="flex gap-4">
                    {p.link2 && (
                      <a
                        href={p.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-wider text-gold hover:text-gold-light transition-colors"
                      >
                        Firmware ↗
                      </a>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-wider text-gold hover:text-gold-light transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[27px] font-normal leading-tight tracking-[-0.01em] mb-1.5">{p.title}</h3>
                  <p className="font-mono text-[11.5px] tracking-wide text-gold">{p.tags}</p>
                </div>
                <p className="text-[14.5px] leading-[1.65] text-muted flex-1">{p.desc}</p>
                {p.mv && (
                  <div className="border-t border-line pt-4 flex flex-wrap items-baseline gap-3">
                    <span className="font-serif text-[22px] text-gold">{p.mv}</span>
                    <span className="font-mono text-[11px] tracking-wide text-muted">{p.ml}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
