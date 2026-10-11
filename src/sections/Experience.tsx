import SectionHeader from "@/components/SectionHeader";
import { Content } from "@/lib/content";

export const ExperienceSection = ({ t }: { t: Content["exp"] }) => {
  return (
    <section id="experience" className="border-t border-line">
      <div className="container py-20 lg:py-[88px]">
        <SectionHeader num="03" title={t.title} />
        <div className="flex flex-col">
          {t.items.map((e) => (
            <div
              key={e.role + e.org}
              className="reveal grid gap-4 md:gap-9 md:grid-cols-[200px_1fr] py-9 border-b border-line"
            >
              <div>
                <p className="font-mono text-[12.5px] tracking-wide text-muted">{e.period}</p>
              </div>
              <div>
                <h3 className="font-serif text-[26px] leading-tight tracking-[-0.01em] mb-1">{e.role}</h3>
                <p className="text-[14.5px] mb-4">
                  <span className="text-gold">{e.org}</span>
                  <span className="text-faint"> - {e.place}</span>
                </p>
                <div className="flex flex-col gap-2">
                  {e.points.map((point) => (
                    <div key={point} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                      <span className="text-gold shrink-0">·</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
