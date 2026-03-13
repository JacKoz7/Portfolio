"use client";
import MainHotelPage from "@/assets/images/MainHotelPage.webp";
import HotelPage2 from "@/assets/images/HotelPage2.webp";
import HotelPage3 from "@/assets/images/HotelPage3.webp";
import CopColorCode from "@/assets/images/CopColorCode.webp";
import diagnoScreen1 from "@/assets/images/diagno1.webp";
import diagnoScreen2 from "@/assets/images/diagno2.webp";
import diagnoScreen3 from "@/assets/images/diagno3.webp";
import AndroidIcon from "@/assets/icons/android.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CodeIcon from "@/assets/icons/laptop_code.svg";
import Image, { StaticImageData } from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

type Project = {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  type: "web" | "mobile";
  link?: string;
  codeLink?: string;
  links?: { android: string; ios: string };
  image?: StaticImageData;
  images?: StaticImageData[];
};

const portfolioProjects: Project[] = [
  {
    company: "diagno6.",
    year: "2026",
    title: "diagno6.",
    results: [
      {
        title:
          "Educational app helping users organize and understand lab results to prepare for medical consultations.",
      },
      {
        title:
          "Built with React Native, Expo, and EAS for a streamlined mobile development lifecycle.",
      },
      {
        title:
          "Delivers a seamless, fully optimized native experience across both iOS and Android.",
      },
    ],
    type: "mobile",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.healix.android",
      ios: "#",
    },
    images: [diagnoScreen1, diagnoScreen2, diagnoScreen3],
  },
  {
    company: "Jacek Kozłowski",
    year: "2025",
    title: "CopColorCode",
    results: [
      {
        title:
          "A system analyzing USA crime statistics from multiple angles to actively support police workflows.",
      },
      {
        title:
          "Developed using React, Express.js, and MySQL, with the entire infrastructure containerized via Docker.",
      },
      {
        title:
          "Features complex data integration by concurrently consuming and syncing both REST and SOAP APIs.",
      },
    ],
    type: "web",
    codeLink: "https://github.com/JacKoz7/CopColorCode",
    image: CopColorCode,
  },
  {
    company: "Jacek Kozłowski",
    year: "2023",
    title: "Hotel Gosling",
    results: [
      {
        title:
          "Responsive hotel booking interface built from scratch using HTML5, CSS3, Bootstrap, and vanilla JS.",
      },
      {
        title:
          "Features a robust reservation form with custom validation and Local Storage for data management.",
      },
      {
        title:
          "Utilizes the Fetch API for asynchronous content loading to dynamically render server data.",
      },
    ],
    type: "web",
    link: "https://jackoz7.github.io/Hotel-Website/",
    codeLink: "https://github.com/JacKoz7/Hotel-Website",
    images: [HotelPage3, HotelPage2, MainHotelPage],
  },
];

// Sub-komponent dla efektu ułożonych kart WEB
const WebImageStack = ({
  images,
  title,
}: {
  images: StaticImageData[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(images.length - 1);
  const imgCount = images.length;

  return (
    <div
      className="relative w-full max-h-[250px] lg:max-h-full flex justify-center items-center"
      onMouseLeave={() => setActiveIndex(images.length - 1)}
    >
      <Image
        priority
        src={images[0]}
        alt="placeholder"
        className="w-full h-auto opacity-0 pointer-events-none"
      />

      {images.map((img, i) => {
        const isTop = i === activeIndex;
        let baseTransform = "";

        if (imgCount === 2) {
          if (i === 0) {
            baseTransform =
              "-rotate-3 -translate-x-6 translate-y-4 lg:-translate-x-8 lg:translate-y-6";
          } else {
            baseTransform =
              "rotate-2 translate-x-4 -translate-y-2 lg:translate-x-6 lg:-translate-y-4";
          }
        } else if (imgCount >= 3) {
          if (i === 0) {
            baseTransform =
              "-rotate-6 -translate-x-8 translate-y-6 lg:-translate-x-12 lg:translate-y-10";
          } else if (i === 1) {
            baseTransform =
              "rotate-3 translate-x-8 translate-y-2 lg:translate-x-12 lg:translate-y-4";
          } else {
            baseTransform =
              "rotate-0 translate-x-0 -translate-y-4 lg:-translate-y-6";
          }
        }

        const baseZIndex = i === 0 ? "z-0" : i === 1 ? "z-10" : "z-20";

        return (
          <Image
            key={i}
            priority
            src={img}
            alt={`${title} - widok ${i + 1}`}
            className={twMerge(
              "absolute inset-0 w-full h-auto object-contain rounded-xl md:rounded-2xl shadow-2xl ring-2 ring-white/10 transition-all duration-300 ease-out cursor-pointer",
              baseTransform,
              isTop
                ? "z-30 scale-[1.05] opacity-100 drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                : `${baseZIndex} scale-95 opacity-40`,
            )}
            onMouseEnter={() => setActiveIndex(i)}
          />
        );
      })}
    </div>
  );
};

export const ProjectsSection = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleStoreClick = (
    e: React.MouseEvent,
    platform: "Android" | "iOS",
  ) => {
    e.preventDefault();
    setToastMessage(
      `Available on ${platform === "Android" ? "Play Store" : "App Store"} soon!`,
    );
  };

  return (
    <section className="pb-16 lg:py-24" id="ProjectsSection">
      <div
        className={twMerge(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-900 border border-white/20 px-6 py-3 rounded-full text-sm font-medium shadow-2xl transition-all duration-150 pointer-events-none",
          toastMessage
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4",
        )}
      >
        <span className="bg-gradient-to-r from-[#54CFB2] to-[#3bb197] bg-clip-text text-transparent">
          {toastMessage}
        </span>
      </div>

      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => {
            const isDiagno6 = project.company === "diagno6.";

            const displayImages =
              project.images && project.images.length > 0
                ? project.images
                : project.image
                  ? [project.image]
                  : [];
            const imgCount = displayImages.length;

            return (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 h-[710px] md:h-[650px] lg:h-[550px] flex flex-col overflow-hidden"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 h-full">
                  <div className="flex flex-col justify-start lg:justify-center pb-4 lg:pb-16">
                    <div
                      className={twMerge(
                        "inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text",
                        isDiagno6
                          ? "bg-gradient-to-r from-[#54CFB2] to-[#3bb197]"
                          : "bg-gradient-to-r from-indigo-700 to-purple-600",
                      )}
                    >
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {isDiagno6 ? (
                        <>
                          diagno<span className="text-[#54CFB2]">6</span>.
                        </>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon
                            className={twMerge(
                              "size-5 md:size-6 flex-shrink-0",
                              isDiagno6 ? "text-[#54CFB2]" : "text-purple-500",
                            )}
                          />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 mb-4 lg:mb-0">
                      {project.type === "mobile" && project.links ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href={project.links.android}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex-1 cursor-pointer"
                          >
                            <button
                              className={twMerge(
                                "hover:shadow-lg transition-all duration-300 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 px-6",
                                isDiagno6
                                  ? "bg-gradient-to-r from-[#54CFB2] to-[#3bb197] hover:from-[#3bb197] hover:to-[#54CFB2]"
                                  : "bg-gradient-to-r from-indigo-700 to-purple-600 hover:from-indigo-600 hover:to-purple-500",
                              )}
                            >
                              <AndroidIcon className="size-5" />
                              <span>Android</span>
                            </button>
                          </a>
                          <a
                            href={project.links.ios}
                            onClick={(e) => handleStoreClick(e, "iOS")}
                            className="w-full sm:w-auto flex-1 cursor-pointer"
                          >
                            <button className="bg-gray-800 hover:bg-gray-700 border border-white/20 hover:shadow-lg transition-all duration-300 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 px-6">
                              <AppleIcon className="size-5" />
                              <span>iOS</span>
                            </button>
                          </a>
                        </div>
                      ) : (
                        <div className="flex flex-col sm:flex-row gap-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto"
                            >
                              <button
                                className={twMerge(
                                  "hover:shadow-lg transition-all duration-300 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6",
                                  isDiagno6
                                    ? "bg-gradient-to-r from-[#54CFB2] to-[#3bb197] hover:from-[#3bb197] hover:to-[#54CFB2]"
                                    : "bg-gradient-to-r from-indigo-700 to-purple-600 hover:from-indigo-600 hover:to-purple-500",
                                )}
                              >
                                <span>See in action</span>
                                <ArrowUpRight className="size-4" />
                              </button>
                            </a>
                          )}

                          {project.codeLink && (
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto"
                            >
                              <button className="bg-gray-800 hover:bg-gray-700 border border-white/20 hover:shadow-lg transition-all duration-300 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6">
                                <span>See code</span>
                                <CodeIcon className="size-5" />
                              </button>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative flex-1 w-full lg:h-full mt-2 lg:mt-0 flex flex-col justify-end lg:justify-center pb-6 lg:pb-0">
                    {project.type === "mobile" ? (
                      <div className="relative w-full h-[250px] md:h-[300px] lg:h-full flex justify-center items-center -mt-4 lg:-mt-8">
                        <div
                          className={twMerge(
                            "absolute inset-x-0 lg:-inset-x-8 top-[35%] bottom-[35%] bg-[#54CFB2] blur-xl lg:blur-3xl rounded-[1.2rem] -z-10 transition-opacity duration-300",
                            isDiagno6
                              ? "opacity-25 lg:opacity-40"
                              : "opacity-0",
                          )}
                        />

                        {/* Wersja mobilna z czystym hoverem na oś Y */}
                        {imgCount === 1 && (
                          <Image
                            priority
                            src={displayImages[0]}
                            alt="Mobile Screen"
                            className="absolute w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] z-10 rounded-[1.2rem] shadow-2xl drop-shadow-2xl transition-transform duration-500 hover:-translate-y-4"
                          />
                        )}

                        {imgCount === 2 && (
                          <>
                            <Image
                              priority
                              src={displayImages[0]}
                              alt="Screen 1"
                              className="absolute w-[95px] sm:w-[115px] md:w-[135px] lg:w-[150px] -rotate-6 -translate-x-10 sm:-translate-x-14 z-0 rounded-[1.2rem] shadow-xl drop-shadow-xl transition-transform duration-500 hover:-translate-y-4"
                            />
                            <Image
                              priority
                              src={displayImages[1]}
                              alt="Screen 2"
                              className="absolute w-[95px] sm:w-[115px] md:w-[135px] lg:w-[150px] rotate-6 translate-x-10 sm:translate-x-14 z-10 rounded-[1.2rem] shadow-xl drop-shadow-xl transition-transform duration-500 hover:-translate-y-4"
                            />
                          </>
                        )}

                        {imgCount >= 3 && (
                          <>
                            <Image
                              priority
                              src={displayImages[0]}
                              alt="Screen 1"
                              className="absolute w-[85px] sm:w-[105px] md:w-[125px] lg:w-[140px] -rotate-12 -translate-x-18 sm:-translate-x-24 z-0 rounded-[1.2rem] shadow-xl drop-shadow-xl transition-transform duration-500 hover:-translate-y-4"
                            />
                            <Image
                              priority
                              src={displayImages[1]}
                              alt="Screen 2"
                              className="absolute w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] z-10 rounded-[1.2rem] shadow-2xl drop-shadow-2xl transition-transform duration-500 hover:-translate-y-4"
                            />
                            <Image
                              priority
                              src={displayImages[2]}
                              alt="Screen 3"
                              className="absolute w-[85px] sm:w-[105px] md:w-[125px] lg:w-[140px] rotate-12 translate-x-18 sm:translate-x-24 z-0 rounded-[1.2rem] shadow-xl drop-shadow-xl transition-transform duration-500 hover:-translate-y-4"
                            />
                          </>
                        )}
                      </div>
                    ) : (
                      // ZMIANA: Zamiast przylegać do dołu (items-end mt-auto), obraz zrówna się bliżej góry używając mt-8 i mb-auto dla urządzeń mobilnych
                      <div className="relative w-full flex justify-center items-center lg:h-[80%] mt-8 md:mt-12 mb-auto lg:m-auto">
                        <div className="absolute inset-x-0 lg:-inset-x-10 top-[35%] bottom-[35%] bg-purple-600 blur-xl lg:blur-3xl opacity-25 lg:opacity-45 rounded-3xl -z-10" />

                        {imgCount === 1 ? (
                          <Image
                            priority
                            src={displayImages[0]}
                            alt={project.title}
                            className="w-full h-auto max-h-[250px] lg:max-h-full object-contain rounded-xl md:rounded-2xl shadow-2xl ring-2 ring-white/10 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
                          />
                        ) : (
                          <WebImageStack
                            images={displayImages}
                            title={project.title}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
