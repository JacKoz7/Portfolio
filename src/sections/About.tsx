import SectionHeader from "@/components/SectionHeader";
import { Content } from "@/lib/content";

export const AboutSection = ({ t }: { t: Content["about"] }) => {
  return (
    <section id="about" className="border-t border-line">
      <div className="container py-20 lg:py-[88px]">
        <SectionHeader num="01" title={t.title} />
        <div className="reveal grid gap-14 lg:grid-cols-[1fr_1.4fr] mb-16">
          <p className="font-serif text-3xl leading-[1.25] tracking-[-0.015em] text-cream">{t.lede}</p>
          <div className="flex flex-col text-base leading-[1.7] text-muted">
            <p>{t.body1}</p>
            <p className="mt-4">{t.body2}</p>
          </div>
        </div>
        <p className="font-mono text-xs tracking-[0.14em] text-gold mb-6">{t.skillsTitle}</p>
        <div className="grid gap-px bg-line border border-line md:grid-cols-2 lg:grid-cols-4">
          {t.skills.map((group) => (
            <div key={group.name} className="reveal bg-cell p-6">
              <p className="font-mono text-[11.5px] tracking-widest uppercase text-cream mb-4">
                {group.name}
              </p>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <p key={item} className="text-[13.5px] leading-snug text-muted">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
