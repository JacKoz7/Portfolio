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
    // A language picked by hand wins; otherwise follow the browser's own
    // preference list and fall back to English
    const saved = localStorage.getItem("lang");
    const preferred = navigator.languages
      .map((l) => l.slice(0, 2).toLowerCase())
      .find((l) => LANGS.includes(l as Lang));
    setLang(LANGS.includes(saved as Lang) ? (saved as Lang) : ((preferred as Lang) ?? "en"));

    // iOS Safari only applies :active on touch when a touch listener exists
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  const changeLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem("lang", next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
