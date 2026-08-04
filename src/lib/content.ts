export type Lang = "en" | "pl";

export interface Project {
  n: string;
  title: string;
  tags: string;
  desc: string;
  mv: string | null;
  ml: string | null;
  link: string;
  link2?: string;
}

export interface ExperienceItem {
  period: string;
  badge: string | null;
  role: string;
  org: string;
  place: string;
  points: string[];
}

export interface Content {
  nav: { about: string; projects: string; exp: string; edu: string; contact: string; cv: string };
  hero: {
    kicker: string;
    title1: string;
    titleEm: string;
    sub: string;
    cta1: string;
    cta2: string;
    photoTag: string;
    facts: { v: string; l: string }[];
  };
  about: {
    title: string;
    lede: string;
    body1: string;
    body2: string;
    skillsTitle: string;
    skills: { name: string; items: string[] }[];
  };
  proj: { title: string; all: string; sub: string; items: Project[] };
  exp: { title: string; items: ExperienceItem[] };
  edu: {
    title: string;
    degrees: { period: string; name: string; detail: string }[];
    award: string;
    certsTitle: string;
    certs: { name: string; org: string; date: string }[];
    langsTitle: string;
    langs: string;
  };
  contact: { kicker: string; title1: string; titleEm: string; sub: string; location: string };
}

export const CV_HREF = "/Jacek_Kozlowski_AI_Engineer_CV.pdf";
export const EMAIL = "jacek.kozlovski@gmail.com";
export const GITHUB = "https://github.com/JacKoz7";
export const LINKEDIN = "https://www.linkedin.com/in/jacek-kozlowski1/";
export const PHONE = "+48 794 347 195";

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: "About", projects: "Projects", exp: "Experience", edu: "Education", contact: "Contact", cv: "CV (PDF)" },
    hero: {
      kicker: "AI ENGINEER · FULL STACK DEVELOPER · COMPUTER SCIENCE STUDENT",
      title1: "I build intelligent systems -",
      titleEm: "from model to product.",
      sub: "Computer science engineer specializing in AI engineering: machine learning, deep learning, NLP and vector search - grounded in real-world fullstack and mobile development.",
      cta1: "See projects",
      cta2: "Download CV",
      photoTag: "JACEK KOZŁOWSKI · BEng 2026",
      facts: [
        { v: "5.0", l: "BEng final grade" },
        { v: "2×", l: "Rector's Scholarship" },
        { v: "C1", l: "English - LanguageCert" },
      ],
    },
    about: {
      title: "About",
      lede: "I care about AI that actually ships.",
      body1:
        "I'm pursuing a Master's in Artificial Intelligence Engineering at Lublin University of Technology, after finishing my engineering degree in software engineering with a 5.0 final grade. My work spans classical machine learning, deep learning, LLMs, recommender systems and interpretable AI - always with an engineer's bias for measurable results.",
      body2:
        "Before AI, I shipped products: a production mobile app on iOS and Android, fullstack web applications and documented APIs. That foundation means my models don't stay in notebooks - they become systems people use.",
      skillsTitle: "TOOLBOX",
      skills: [
        { name: "AI / ML", items: ["ML models - classification, regression", "Deep learning - PyTorch, TensorFlow", "LLMs & prompt engineering", "NLP - transformers", "Vector databases & RAG", "Recommender systems", "Fuzzy & interpretable systems (XAI)"] },
        { name: "Languages & frameworks", items: ["Python - NumPy, pandas", "TypeScript / JavaScript", "Next.js, React", "React Native / Expo", "FastAPI, Express.js"] },
        { name: "Data & cloud", items: ["PostgreSQL, MongoDB, Prisma", "Firebase, Supabase", "AWS - core services, Amazon Bedrock", "Qdrant - vector database (basics)", "Docker", "REST API design - Swagger / OpenAPI"] },
        { name: "Ways of working", items: ["Git / GitHub, CI/CD", "Agile / Scrum", "Cross-functional teamwork", "Releases - TestFlight, Google Play Console, fastlane", "Analytics - PostHog"] },
      ],
    },
    proj: {
      title: "Selected projects",
      all: "All repositories",
      sub: "Research-grade AI work with published metrics, next to production-minded engineering.",
      items: [
        { n: "01", title: "Fuzzy Sleep Apnea Detector", tags: "Python · scikit-learn · fuzzy logic · XAI", desc: "Hybrid fuzzy expert system detecting sleep apnea from raw ECG. Four calibrated ML models (RF, SVM, KNN, MLP) feed a fuzzy inference engine that produces an interpretable risk score.", mv: "AUC 0.822", ml: "35 unseen patients - PhysioNet Apnea-ECG", link: "https://github.com/JacKoz7/fuzzy-sleep-apnea-detector" },
        { n: "02", title: "LightGCN Recommender", tags: "PyTorch · graph neural networks", desc: "From-scratch implementation of LightGCN (He et al., SIGIR 2020): graph-based collaborative filtering with K-layer embedding propagation and BPR loss, trained on Gowalla - 1M interactions.", mv: "Recall@20 = 0.1773", ml: "97.3% of the paper's reported result", link: "https://github.com/JacKoz7/LightGCN-Recommender" },
        { n: "03", title: "Percipio", tags: "ESP32 · Next.js · Firebase · mmWave radar", desc: "End-to-end IoT room-awareness system: ESP32 firmware streams mmWave radar tracking, climate and RFID access data to Firestore in real time, visualised live in a Next.js dashboard with Telegram alerts.", mv: null, ml: null, link: "https://github.com/percipio-hq/percipio-web", link2: "https://github.com/percipio-hq/percipio-firmware" },
        { n: "04", title: "PetStayTion API", tags: "Next.js · PostgreSQL · Firebase · Docker", desc: "Backend for a pet-care services platform - user, pet and service-offer management. Fully documented with Swagger / OpenAPI and containerized with Docker.", mv: null, ml: null, link: "https://github.com/JacKoz7/PetStayTion-API" },
        { n: "05", title: "Hotel Website", tags: "HTML · CSS · JavaScript", desc: "A polished, responsive marketing site for a hotel - clean, dependency-free front-end craft.", mv: null, ml: null, link: "https://github.com/JacKoz7/Hotel-Website" },
      ],
    },
    exp: {
      title: "Experience",
      items: [
        { period: "Oct 2026 - Feb 2027", badge: "Incoming", role: "AI Engineer - Schuman Trainee", org: "European Parliament", place: "Brussels", points: ["Joining the AI team of DG Communication's Website Management Unit", "RAG-based AI assistant for natural-language search over public survey documents", "Python · Amazon Bedrock · Qdrant · GitLab CI/CD"] },
        { period: "Jul 2025 - present", badge: null, role: "Mobile Application Developer", org: "diagno6", place: "Wrocław", points: ["Developing the diagno6 mobile app in React Native / Expo - iOS & Android", "Backend integration and user management in Firebase; product analytics with PostHog", "Managing releases across TestFlight, Google Play and the App Store"] },
        { period: "Jul 2025", badge: null, role: "Fullstack Developer - apprenticeship", org: "Transition Technologies MS", place: "Lublin", points: ["Built a web application with .NET (C#) and Angular in a Scrum team", "Developed backend and frontend features alongside senior developers"] },
      ],
    },
    edu: {
      title: "Education & certificates",
      degrees: [
        { period: "Feb 2026 - present", name: "MSc Eng, Computer Science", detail: "Specialization: Artificial Intelligence Engineering - Lublin University of Technology" },
        { period: "Oct 2022 - Feb 2026", name: "BEng, Computer Science - 5.0", detail: "Specialization: Software Engineering - Lublin University of Technology" },
      ],
      award: "Rector's Scholarship for academic excellence - two consecutive years",
      certsTitle: "CERTIFICATES",
      certs: [
        { name: "Transformer-Based Natural Language Processing", org: "NVIDIA", date: "2026" },
        { name: "AI in Business Development", org: "Google", date: "2025" },
        { name: "LanguageCert Test of English - C1", org: "LanguageCert", date: "2023" },
      ],
      langsTitle: "LANGUAGES",
      langs: "Polish - native · English - C1 · German - B1 · French - learning",
    },
    contact: {
      kicker: "GET IN TOUCH",
      title1: "Let's build something",
      titleEm: "intelligent.",
      sub: "Open to AI engineering opportunities, collaboration on interesting problems, and good conversations about ML.",
      location: "Lublin, Poland",
    },
  },
  pl: {
    nav: { about: "O mnie", projects: "Projekty", exp: "Doświadczenie", edu: "Edukacja", contact: "Kontakt", cv: "CV (PDF)" },
    hero: {
      kicker: "AI ENGINEER · FULL STACK DEVELOPER · STUDENT INFORMATYKI",
      title1: "Buduję inteligentne systemy -",
      titleEm: "od modelu po produkt.",
      sub: "Inżynier informatyki specjalizujący się w inżynierii AI: uczenie maszynowe, deep learning, NLP i wyszukiwanie wektorowe - na fundamencie realnego doświadczenia fullstack i mobile.",
      cta1: "Zobacz projekty",
      cta2: "Pobierz CV",
      photoTag: "JACEK KOZŁOWSKI · inż. 2026",
      facts: [
        { v: "5.0", l: "ocena końcowa - inż." },
        { v: "2×", l: "Stypendium Rektora" },
        { v: "C1", l: "angielski - LanguageCert" },
      ],
    },
    about: {
      title: "O mnie",
      lede: "Zależy mi na AI, które naprawdę trafia do użytkowników.",
      body1:
        "Studiuję na kierunku magisterskim ze specjalizacją inżynieria sztucznej inteligencji na Politechnice Lubelskiej - po ukończeniu studiów inżynierskich z inżynierii oprogramowania z oceną 5.0. Zajmuję się klasycznym uczeniem maszynowym, deep learningiem, LLM-ami, systemami rekomendacyjnymi i interpretowalnym AI - zawsze z inżynierskim naciskiem na mierzalne wyniki.",
      body2:
        "Zanim zająłem się AI, dostarczałem produkty: produkcyjną aplikację mobilną na iOS i Androida, aplikacje fullstack i udokumentowane API. Dzięki temu moje modele nie zostają w notebookach - stają się systemami, z których korzystają ludzie.",
      skillsTitle: "WARSZTAT",
      skills: [
        { name: "AI / ML", items: ["Modele ML - klasyfikacja, regresja", "Deep learning - PyTorch, TensorFlow", "LLM-y i prompt engineering", "NLP - transformery", "Wektorowe bazy danych i RAG", "Systemy rekomendacyjne", "Systemy rozmyte i interpretowalne (XAI)"] },
        { name: "Języki i frameworki", items: ["Python - NumPy, pandas", "TypeScript / JavaScript", "Next.js, React", "React Native / Expo", "FastAPI, Express.js"] },
        { name: "Dane i chmura", items: ["PostgreSQL, MongoDB, Prisma", "Firebase, Supabase", "AWS - podstawowe usługi, Amazon Bedrock", "Qdrant - wektorowa baza danych (podstawy)", "Docker", "Projektowanie REST API - Swagger / OpenAPI"] },
        { name: "Sposób pracy", items: ["Git / GitHub, CI/CD", "Agile / Scrum", "Praca w zespołach interdyscyplinarnych", "Wydania - TestFlight, Google Play Console, fastlane", "Analityka - PostHog"] },
      ],
    },
    proj: {
      title: "Wybrane projekty",
      all: "Wszystkie repozytoria",
      sub: "Projekty AI z opublikowanymi metrykami, obok solidnej inżynierii produktowej.",
      items: [
        { n: "01", title: "Fuzzy Sleep Apnea Detector", tags: "Python · scikit-learn · logika rozmyta · XAI", desc: "Hybrydowy rozmyty system ekspercki wykrywający bezdech senny z surowego sygnału EKG. Cztery skalibrowane modele ML (RF, SVM, KNN, MLP) zasilają silnik wnioskowania rozmytego, który zwraca interpretowalny wskaźnik ryzyka.", mv: "AUC 0.822", ml: "35 nowych pacjentów - PhysioNet Apnea-ECG", link: "https://github.com/JacKoz7/fuzzy-sleep-apnea-detector" },
        { n: "02", title: "LightGCN Recommender", tags: "PyTorch · grafowe sieci neuronowe", desc: "Implementacja LightGCN od zera (He i in., SIGIR 2020): grafowy collaborative filtering z K-warstwową propagacją embeddingów i funkcją straty BPR, trenowany na zbiorze Gowalla - 1M interakcji.", mv: "Recall@20 = 0.1773", ml: "97.3% wyniku z oryginalnej publikacji", link: "https://github.com/JacKoz7/LightGCN-Recommender" },
        { n: "03", title: "Percipio", tags: "ESP32 · Next.js · Firebase · radar mmWave", desc: "System IoT monitorujący pomieszczenie end-to-end: firmware ESP32 przesyła w czasie rzeczywistym dane z radaru mmWave, czujników klimatu i RFID do Firestore, wizualizowane na żywo w dashboardzie Next.js z powiadomieniami Telegram.", mv: null, ml: null, link: "https://github.com/percipio-hq/percipio-web", link2: "https://github.com/percipio-hq/percipio-firmware" },
        { n: "04", title: "PetStayTion API", tags: "Next.js · PostgreSQL · Firebase · Docker", desc: "Backend platformy usług opieki nad zwierzętami - zarządzanie użytkownikami, zwierzętami i ofertami. W pełni udokumentowany w Swagger / OpenAPI, skonteneryzowany w Dockerze.", mv: null, ml: null, link: "https://github.com/JacKoz7/PetStayTion-API" },
        { n: "05", title: "Hotel Website", tags: "HTML · CSS · JavaScript", desc: "Dopracowana, responsywna strona marketingowa hotelu - czysty front-end bez zależności.", mv: null, ml: null, link: "https://github.com/JacKoz7/Hotel-Website" },
      ],
    },
    exp: {
      title: "Doświadczenie",
      items: [
        { period: "Paź 2026 - Lut 2027", badge: "Wkrótce", role: "AI Engineer - Schuman Trainee", org: "Parlament Europejski", place: "Bruksela", points: ["Dołączam do zespołu AI w Website Management Unit (DG Communication)", "Asystent AI oparty na RAG do wyszukiwania dokumentów ankietowych w języku naturalnym", "Python · Amazon Bedrock · Qdrant · GitLab CI/CD"] },
        { period: "Lip 2025 - obecnie", badge: null, role: "Mobile Application Developer", org: "diagno6", place: "Wrocław", points: ["Rozwój aplikacji mobilnej diagno6 w React Native / Expo - iOS i Android", "Integracja z backendem i zarządzanie użytkownikami w Firebase; analityka w PostHog", "Zarządzanie wydaniami: TestFlight, Google Play, App Store"] },
        { period: "Lip 2025", badge: null, role: "Fullstack Developer - praktyki", org: "Transition Technologies MS", place: "Lublin", points: ["Budowa aplikacji webowej w .NET (C#) i Angular w zespole Scrum", "Rozwój funkcjonalności backendowych i frontendowych u boku doświadczonych programistów"] },
      ],
    },
    edu: {
      title: "Edukacja i certyfikaty",
      degrees: [
        { period: "Lut 2026 - obecnie", name: "Magister inżynier, Informatyka", detail: "Specjalizacja: inżynieria sztucznej inteligencji - Politechnika Lubelska" },
        { period: "Paź 2022 - Lut 2026", name: "Inżynier, Informatyka - 5.0", detail: "Specjalizacja: inżynieria oprogramowania - Politechnika Lubelska" },
      ],
      award: "Stypendium Rektora za wybitne wyniki w nauce - dwa lata z rzędu",
      certsTitle: "CERTYFIKATY",
      certs: [
        { name: "Transformer-Based Natural Language Processing", org: "NVIDIA", date: "2026" },
        { name: "AI in Business Development", org: "Google", date: "2025" },
        { name: "LanguageCert Test of English - C1", org: "LanguageCert", date: "2023" },
      ],
      langsTitle: "JĘZYKI",
      langs: "polski - ojczysty · angielski - C1 · niemiecki - B1 · francuski - w trakcie nauki",
    },
    contact: {
      kicker: "KONTAKT",
      title1: "Zbudujmy coś",
      titleEm: "inteligentnego.",
      sub: "Otwarty na możliwości w obszarze AI engineeringu, współpracę przy ciekawych problemach i dobre rozmowy o ML.",
      location: "Lublin, Polska",
    },
  },
};
