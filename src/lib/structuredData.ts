import { content, EMAIL, GITHUB, LINKEDIN } from "./content";

export const SITE_URL = "https://www.jacekkozlowski.com";

const en = content.en;
const current = en.exp.items.find((e) => e.period.includes("present"));

// schema.org description of the person behind the site, so search engines and
// AI assistants can answer "who is Jacek Kozłowski" from facts, not guesses
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Jacek Kozłowski",
      alternateName: "Jacek Kozlowski",
      url: SITE_URL,
      image: `${SITE_URL}/portrait-2026.webp`,
      email: `mailto:${EMAIL}`,
      jobTitle: "AI Engineer",
      description: en.hero.sub,
      ...(current && {
        worksFor: { "@type": "Organization", name: current.org },
        hasOccupation: {
          "@type": "Occupation",
          name: current.role,
          occupationLocation: { "@type": "City", name: current.place },
        },
      }),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Lublin University of Technology",
        alternateName: "Politechnika Lubelska",
      },
      address: { "@type": "PostalAddress", addressLocality: "Lublin", addressCountry: "PL" },
      knowsLanguage: ["pl", "en", "de", "fr"],
      knowsAbout: [
        "Artificial intelligence engineering",
        "Machine learning",
        "Deep learning",
        "Natural language processing",
        "Large language models",
        "Retrieval-augmented generation",
        "Vector search",
        "Recommender systems",
        "Explainable AI",
        "Python",
        "PyTorch",
        "TypeScript",
        "Next.js",
        "React Native",
      ],
      sameAs: [GITHUB, LINKEDIN],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Jacek Kozłowski Portfolio",
      inLanguage: ["en", "pl", "fr"],
      mainEntity: { "@id": `${SITE_URL}/#person` },
      hasPart: en.proj.items.map((p) => ({
        "@type": "SoftwareSourceCode",
        name: p.title,
        description: p.desc,
        codeRepository: p.link,
        author: { "@id": `${SITE_URL}/#person` },
      })),
    },
  ],
};
