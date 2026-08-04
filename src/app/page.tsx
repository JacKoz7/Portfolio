"use client";

import { useEffect, useState } from "react";
import { content, Lang } from "@/lib/content";
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
    if (saved === "en" || saved === "pl") setLang(saved);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "pl" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = content[lang];

  return (
    <div>
      <Header nav={t.nav} otherLang={lang === "en" ? "PL" : "EN"} onToggle={toggleLang} />
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
