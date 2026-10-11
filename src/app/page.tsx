"use client";

import { useEffect, useState } from "react";
import { content, Lang, LANGS } from "@/lib/content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { EducationSection } from "@/sections/Education";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved as Lang)) setLang(saved as Lang);
  }, []);

  const changeLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem("lang", next);
  };

  useScrollReveal(lang);

  const t = content[lang];

  return (
    <div>
      <Header nav={t.nav} lang={lang} onChange={changeLang} />
      <HeroSection t={t.hero} />
      <AboutSection t={t.about} />
      <ProjectsSection t={t.proj} />
      <ExperienceSection t={t.exp} />
      <EducationSection t={t.edu} />
      <ContactSection t={t.contact} />
      <Footer />
    </div>
  );
}
