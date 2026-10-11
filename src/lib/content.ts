export type Lang = "en" | "pl" | "fr";

export const LANGS: Lang[] = ["en", "pl", "fr"];

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
  role: string;
  org: string;
  place: string;
  points: string[];
}

export interface Content {
  nav: { about: string; projects: string; exp: string; edu: string; contact: string; cv: string };
  hero: {
    title1: string;
    titleEm: string;
    sub: string;
    cta1: string;
    cta2: string;
    photoTag: string;
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
      title1: "I build intelligent systems -",
      titleEm: "from model to product.",
      sub: "Computer science engineer specializing in AI engineering: machine learning, deep learning, NLP and vector search - grounded in real-world fullstack and mobile development.",
      cta1: "See projects",
      cta2: "Download CV",
      photoTag: "JACEK KOZŁOWSKI · BEng 2026",
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
        { name: "Data & cloud", items: ["PostgreSQL, MongoDB, Prisma", "Firebase, Supabase", "AWS - core services, Amazon Bedrock", "Qdrant - vector database", "Docker", "REST API design - Swagger / OpenAPI"] },
        { name: "Ways of working", items: ["Git / GitHub, CI/CD", "Agile / Scrum", "Cross-functional teamwork", "Releases - TestFlight, Google Play Console, fastlane", "Analytics - PostHog", "Claude Code - AI speeds up the typing; the logic and system architecture stay mine"] },
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
        { n: "06", title: "Portfolio", tags: "Next.js · TypeScript · Tailwind CSS", desc: "This site: a trilingual (EN/PL/FR) portfolio built on the Next.js App Router, statically exported and deployed to GitHub Pages through a GitHub Actions pipeline.", mv: null, ml: null, link: "https://github.com/JacKoz7/Portfolio" },
      ],
    },
    exp: {
      title: "Experience",
      items: [
        { period: "Oct 2026 - present", role: "AI Engineer - Schuman Trainee", org: "European Parliament", place: "Brussels, Belgium", points: ["Five-month traineeship in the AI team of the Website Management Unit, DG Communication", "Contributing to a RAG-based assistant that answers natural-language questions over survey documents and returns verifiable sources", "Fullstack work on a Python codebase - ingestion pipeline, chunking strategy and vector search - plus the JavaScript front end", "Python · Amazon Bedrock · Qdrant · GitLab CI/CD", "Agile delivery in a cross-functional team of engineers, testers, analysts and designers"] },
        { period: "Jul 2025 - Oct 2026", role: "Mobile Application Developer", org: "diagno6", place: "Wrocław, Poland", points: ["My first commercial product: a health-analysis app shipped to iOS, Android and the web from a single React Native / Expo codebase", "Features end to end, from Figma design to production screen - medical interview flow, lab test uploads, generated reports, patient profile and education section", "Auth and user management on Firebase: email verification, role and approval gates via custom claims, token handling and centralized backend auth error handling", "Extended the mobile app to the web with React Native Web - platform split files and a responsive layout that holds from phone to desktop", "Own the release pipeline: fastlane and GitHub Actions for TestFlight builds, App Store and Google Play releases, automatic version bumps, separate dev and prod environments, Cloudflare Pages for the web build", "Minimum supported version gate driven by Firebase Remote Config, so a breaking backend change ships without waiting for store review", "Design system built with a designer - shared colors, spacing, dark theme UI and i18n (English and Polish)", "TypeScript in strict mode, unit and integration tests in Jest and React Native Testing Library, PR reviews and PostHog product analytics"] },
        { period: "Jul 2025", role: "Fullstack Developer - apprenticeship", org: "Transition Technologies MS", place: "Lublin, Poland", points: ["Built and maintained a web application with .NET (C#) on the backend and Angular on the frontend", "Developed and enhanced features on both sides of the stack, from API endpoints to UI", "Worked in a Scrum framework - daily stand-ups, sprint planning, demos and retrospectives", "Collaborated closely with experienced developers and picked up professional delivery workflows"] },
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
        { name: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp", org: "Udemy", date: "2026" },
        { name: "Transformer-Based Natural Language Processing", org: "NVIDIA", date: "2026" },
        { name: "AI in Business Development", org: "Google", date: "2025" },
        { name: "Networking Basics", org: "Cisco Networking Academy", date: "2024" },
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
      title1: "Buduję inteligentne systemy -",
      titleEm: "od modelu po produkt.",
      sub: "Inżynier informatyki specjalizujący się w inżynierii AI: uczenie maszynowe, deep learning, NLP i wyszukiwanie wektorowe - na fundamencie realnego doświadczenia fullstack i mobile.",
      cta1: "Zobacz projekty",
      cta2: "Pobierz CV",
      photoTag: "JACEK KOZŁOWSKI · inż. 2026",
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
        { name: "Dane i chmura", items: ["PostgreSQL, MongoDB, Prisma", "Firebase, Supabase", "AWS - podstawowe usługi, Amazon Bedrock", "Qdrant - wektorowa baza danych", "Docker", "Projektowanie REST API - Swagger / OpenAPI"] },
        { name: "Sposób pracy", items: ["Git / GitHub, CI/CD", "Agile / Scrum", "Praca w zespołach interdyscyplinarnych", "Wydania - TestFlight, Google Play Console, fastlane", "Analityka - PostHog", "Claude Code - AI przyspiesza pisanie kodu; logika i architektura systemu pozostają moje"] },
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
        { n: "06", title: "Portfolio", tags: "Next.js · TypeScript · Tailwind CSS", desc: "Ta strona: trójjęzyczne (EN/PL/FR) portfolio zbudowane na Next.js App Router, eksportowane statycznie i wdrażane na GitHub Pages przez pipeline w GitHub Actions.", mv: null, ml: null, link: "https://github.com/JacKoz7/Portfolio" },
      ],
    },
    exp: {
      title: "Doświadczenie",
      items: [
        { period: "Paź 2026 - obecnie", role: "AI Engineer - Schuman Trainee", org: "Parlament Europejski", place: "Bruksela, Belgia", points: ["Pięciomiesięczny staż w zespole AI w Website Management Unit (DG Communication)", "Udział w budowie asystenta opartego na RAG, który odpowiada na pytania w języku naturalnym na podstawie dokumentów ankietowych i wskazuje weryfikowalne źródła", "Praca fullstack na kodzie w Pythonie - pipeline ingestii, strategia chunkingu i wyszukiwanie wektorowe - oraz front end w JavaScripcie", "Python · Amazon Bedrock · Qdrant · GitLab CI/CD", "Praca zwinna w interdyscyplinarnym zespole programistów, testerów, analityków i projektantów"] },
        { period: "Lip 2025 - Paź 2026", role: "Mobile Application Developer", org: "diagno6", place: "Wrocław, Polska", points: ["Mój pierwszy produkt komercyjny: aplikacja do analizy zdrowia wydana na iOS, Androida i web z jednej bazy kodu w React Native / Expo", "Funkcjonalności end to end, od projektu w Figmie po ekran produkcyjny - wywiad medyczny, wgrywanie wyników badań, generowane raporty, profil pacjenta i sekcja edukacyjna", "Autoryzacja i zarządzanie użytkownikami w Firebase: weryfikacja e-mail, kontrola ról i zatwierdzeń przez custom claims, obsługa tokenów i scentralizowana obsługa błędów autoryzacji z backendu", "Rozszerzenie aplikacji mobilnej na web przy użyciu React Native Web - pliki rozdzielone per platforma i responsywny layout działający od telefonu po desktop", "Odpowiadam za pipeline wydawniczy: fastlane i GitHub Actions dla buildów TestFlight, wydania w App Store i Google Play, automatyczne podbijanie wersji, osobne środowiska dev i prod oraz deploy webu na Cloudflare Pages", "Bramka minimalnej wspieranej wersji sterowana przez Firebase Remote Config - zmiana łamiąca zgodność backendu wchodzi bez czekania na review w sklepie", "Design system tworzony we współpracy z projektantem - wspólne kolory, odstępy, ciemny motyw i i18n (angielski i polski)", "TypeScript w trybie strict, testy jednostkowe i integracyjne w Jest oraz React Native Testing Library, code review i analityka produktowa w PostHog"] },
        { period: "Lip 2025", role: "Fullstack Developer - praktyki", org: "Transition Technologies MS", place: "Lublin, Polska", points: ["Budowa i utrzymanie aplikacji webowej w .NET (C#) na backendzie i Angularze na froncie", "Rozwój i rozbudowa funkcjonalności po obu stronach stacku, od endpointów API po interfejs", "Praca w Scrumie - daily stand-upy, planowanie sprintów, demo i retrospektywy", "Bliska współpraca z doświadczonymi programistami i poznanie profesjonalnych procesów wytwarzania oprogramowania"] },
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
        { name: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp", org: "Udemy", date: "2026" },
        { name: "Transformer-Based Natural Language Processing", org: "NVIDIA", date: "2026" },
        { name: "AI in Business Development", org: "Google", date: "2025" },
        { name: "Networking Basics", org: "Cisco Networking Academy", date: "2024" },
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
  fr: {
    nav: { about: "À propos", projects: "Projets", exp: "Expérience", edu: "Formation", contact: "Contact", cv: "CV (PDF)" },
    hero: {
      title1: "Je construis des systèmes intelligents -",
      titleEm: "du modèle au produit.",
      sub: "Ingénieur en informatique spécialisé en ingénierie de l'IA : machine learning, deep learning, NLP et recherche vectorielle - avec une solide expérience concrète en développement fullstack et mobile.",
      cta1: "Voir les projets",
      cta2: "Télécharger le CV",
      photoTag: "JACEK KOZŁOWSKI · Ingénieur 2026",
    },
    about: {
      title: "À propos",
      lede: "Ce qui m'importe, c'est une IA qui arrive vraiment entre les mains des utilisateurs.",
      body1:
        "Je prépare un master en ingénierie de l'intelligence artificielle à l'Université de technologie de Lublin, après un diplôme d'ingénieur en génie logiciel obtenu avec la note finale de 5.0. Mon travail couvre le machine learning classique, le deep learning, les LLM, les systèmes de recommandation et l'IA interprétable - toujours avec un souci d'ingénieur pour des résultats mesurables.",
      body2:
        "Avant l'IA, je livrais des produits : une application mobile en production sur iOS et Android, des applications web fullstack et des API documentées. Grâce à ces bases, mes modèles ne restent pas dans des notebooks - ils deviennent des systèmes que les gens utilisent.",
      skillsTitle: "BOÎTE À OUTILS",
      skills: [
        { name: "IA / ML", items: ["Modèles ML - classification, régression", "Deep learning - PyTorch, TensorFlow", "LLM et prompt engineering", "NLP - transformers", "Bases de données vectorielles et RAG", "Systèmes de recommandation", "Systèmes flous et interprétables (XAI)"] },
        { name: "Langages et frameworks", items: ["Python - NumPy, pandas", "TypeScript / JavaScript", "Next.js, React", "React Native / Expo", "FastAPI, Express.js"] },
        { name: "Données et cloud", items: ["PostgreSQL, MongoDB, Prisma", "Firebase, Supabase", "AWS - services de base, Amazon Bedrock", "Qdrant - base de données vectorielle", "Docker", "Conception d'API REST - Swagger / OpenAPI"] },
        { name: "Méthodes de travail", items: ["Git / GitHub, CI/CD", "Agile / Scrum", "Travail en équipes pluridisciplinaires", "Mises en production - TestFlight, Google Play Console, fastlane", "Analytique - PostHog", "Claude Code - l'IA accélère l'écriture du code ; la logique et l'architecture du système restent les miennes"] },
      ],
    },
    proj: {
      title: "Projets choisis",
      all: "Tous les dépôts",
      sub: "Des projets d'IA de niveau recherche avec des métriques publiées, aux côtés d'une ingénierie pensée pour la production.",
      items: [
        { n: "01", title: "Fuzzy Sleep Apnea Detector", tags: "Python · scikit-learn · logique floue · XAI", desc: "Système expert flou hybride qui détecte l'apnée du sommeil à partir d'un signal ECG brut. Quatre modèles ML calibrés (RF, SVM, KNN, MLP) alimentent un moteur d'inférence floue qui produit un score de risque interprétable.", mv: "AUC 0.822", ml: "35 nouveaux patients - PhysioNet Apnea-ECG", link: "https://github.com/JacKoz7/fuzzy-sleep-apnea-detector" },
        { n: "02", title: "LightGCN Recommender", tags: "PyTorch · réseaux de neurones sur graphes", desc: "Implémentation de LightGCN à partir de zéro (He et al., SIGIR 2020) : filtrage collaboratif sur graphe avec propagation des embeddings sur K couches et fonction de perte BPR, entraîné sur Gowalla - 1M d'interactions.", mv: "Recall@20 = 0.1773", ml: "97.3% du résultat publié dans l'article", link: "https://github.com/JacKoz7/LightGCN-Recommender" },
        { n: "03", title: "Percipio", tags: "ESP32 · Next.js · Firebase · radar mmWave", desc: "Système IoT de surveillance de pièce de bout en bout : le firmware ESP32 envoie en temps réel vers Firestore les données du radar mmWave, des capteurs climatiques et des accès RFID, visualisées en direct dans un tableau de bord Next.js avec des alertes Telegram.", mv: null, ml: null, link: "https://github.com/percipio-hq/percipio-web", link2: "https://github.com/percipio-hq/percipio-firmware" },
        { n: "04", title: "PetStayTion API", tags: "Next.js · PostgreSQL · Firebase · Docker", desc: "Backend d'une plateforme de services de garde d'animaux - gestion des utilisateurs, des animaux et des offres. Entièrement documenté avec Swagger / OpenAPI et conteneurisé avec Docker.", mv: null, ml: null, link: "https://github.com/JacKoz7/PetStayTion-API" },
        { n: "05", title: "Hotel Website", tags: "HTML · CSS · JavaScript", desc: "Un site vitrine soigné et responsive pour un hôtel - du front-end propre, sans aucune dépendance.", mv: null, ml: null, link: "https://github.com/JacKoz7/Hotel-Website" },
        { n: "06", title: "Portfolio", tags: "Next.js · TypeScript · Tailwind CSS", desc: "Ce site : un portfolio trilingue (EN/PL/FR) construit avec le Next.js App Router, exporté en statique et déployé sur GitHub Pages via un pipeline GitHub Actions.", mv: null, ml: null, link: "https://github.com/JacKoz7/Portfolio" },
      ],
    },
    exp: {
      title: "Expérience",
      items: [
        { period: "Oct. 2026 - aujourd'hui", role: "AI Engineer - Schuman Trainee", org: "Parlement européen", place: "Bruxelles, Belgique", points: ["Stage de cinq mois dans l'équipe IA de la Website Management Unit (DG Communication)", "Contribution à un assistant basé sur le RAG qui répond à des questions en langage naturel à partir de documents d'enquête et fournit des sources vérifiables", "Travail fullstack sur une base de code Python - pipeline d'ingestion, stratégie de découpage (chunking) et recherche vectorielle - ainsi que sur le front end en JavaScript", "Python · Amazon Bedrock · Qdrant · GitLab CI/CD", "Méthodes agiles au sein d'une équipe pluridisciplinaire de développeurs, testeurs, analystes et designers"] },
        { period: "Juil. 2025 - Oct. 2026", role: "Mobile Application Developer", org: "diagno6", place: "Wrocław, Pologne", points: ["Mon premier produit commercial : une application d'analyse de santé publiée sur iOS, Android et le web à partir d'une seule base de code React Native / Expo", "Fonctionnalités de bout en bout, de la maquette Figma à l'écran en production - questionnaire médical, envoi de résultats d'analyses, rapports générés, profil patient et section éducative", "Authentification et gestion des utilisateurs avec Firebase : vérification de l'e-mail, contrôle des rôles et des validations via des custom claims, gestion des tokens et traitement centralisé des erreurs d'authentification du backend", "Extension de l'application mobile au web avec React Native Web - fichiers séparés par plateforme et mise en page responsive, du téléphone au desktop", "Responsable du pipeline de publication : fastlane et GitHub Actions pour les builds TestFlight, publications sur l'App Store et Google Play, incrémentation automatique des versions, environnements dev et prod séparés, Cloudflare Pages pour la version web", "Version minimale supportée pilotée par Firebase Remote Config, pour qu'un changement incompatible du backend soit déployé sans attendre la validation des stores", "Design system conçu avec un designer - couleurs, espacements, thème sombre et i18n (anglais et polonais) partagés", "TypeScript en mode strict, tests unitaires et d'intégration avec Jest et React Native Testing Library, revues de code et analytique produit avec PostHog"] },
        { period: "Juil. 2025", role: "Fullstack Developer - stage", org: "Transition Technologies MS", place: "Lublin, Pologne", points: ["Développement et maintenance d'une application web avec .NET (C#) côté backend et Angular côté frontend", "Développement et amélioration de fonctionnalités des deux côtés de la stack, des endpoints d'API à l'interface", "Travail en Scrum - daily stand-ups, planification de sprints, démos et rétrospectives", "Collaboration étroite avec des développeurs expérimentés et apprentissage des processus de livraison professionnels"] },
      ],
    },
    edu: {
      title: "Formation et certificats",
      degrees: [
        { period: "Févr. 2026 - aujourd'hui", name: "Master d'ingénieur, Informatique", detail: "Spécialisation : ingénierie de l'intelligence artificielle - Université de technologie de Lublin" },
        { period: "Oct. 2022 - Févr. 2026", name: "Diplôme d'ingénieur, Informatique - 5.0", detail: "Spécialisation : génie logiciel - Université de technologie de Lublin" },
      ],
      award: "Bourse du Recteur pour l'excellence académique - deux années consécutives",
      certsTitle: "CERTIFICATS",
      certs: [
        { name: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp", org: "Udemy", date: "2026" },
        { name: "Transformer-Based Natural Language Processing", org: "NVIDIA", date: "2026" },
        { name: "AI in Business Development", org: "Google", date: "2025" },
        { name: "Networking Basics", org: "Cisco Networking Academy", date: "2024" },
        { name: "LanguageCert Test of English - C1", org: "LanguageCert", date: "2023" },
      ],
      langsTitle: "LANGUES",
      langs: "polonais - langue maternelle · anglais - C1 · allemand - B1 · français - en cours d'apprentissage",
    },
    contact: {
      kicker: "CONTACT",
      title1: "Construisons quelque chose",
      titleEm: "d'intelligent.",
      sub: "Ouvert aux opportunités en ingénierie de l'IA, aux collaborations sur des problèmes intéressants et aux bonnes discussions sur le ML.",
      location: "Lublin, Pologne",
    },
  },
};
