import MainHotelPage from "@/assets/images/MainHotelPage.png";
import GreenPost from "@/assets/images/GreenPost.png";
import eShelf from "@/assets/images/eShelf.png";
import EasySpeak from "@/assets/images/EasySpeak.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Jacek Kozłowski",
    year: "2023",
    title: "Hotel Gosling",
    results: [
      { title: "Responsive hotel booking interface" },
      { title: "Built with HTML5, CSS3 & vanilla JS" },
      { title: "My first academic frontend project" },
    ],
    link: "https://github.com/JacKoz7/Hotel-Website",
    image: MainHotelPage,
  },
  {
    company: "Jacek Kozłowski",
    year: "2024",
    title: "GreenPost",
    results: [
      { title: "Full-stack social network React & Node.js" },
      { title: "Based on REST post management system" },
      { title: "Dockerized app with MySQL database" },
    ],
    link: "https://github.com/JacKoz7/GreenPost",
    image: GreenPost,
  },
  {
    company: "Jacek Kozłowski",
    year: "2023",
    title: "eShelf",
    results: [
      { title: "Digital library with multi-format exports" },
      { title: "Google Books API integration" },
      { title: "Dockerized app with Mongo database" },
    ],
    link: "https://github.com/JacKoz7/eShelf",
    image: eShelf,
  },
  {
    company: "Jacek Kozłowski",
    year: "2025",
    title: "EasySpeak ",
    results: [
      { title: "AWS-powered translation platform" },
      { title: "Next.js frontend with Tailwind CSS" },
      { title: "Full cloud infrastructure via CDK" },
    ],
    link: "https://github.com/JacKoz7/translator_typescript_aws",
    image: EasySpeak,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="ProjectsSection">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20  mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-indigo-700 to-purple-600 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-gradient-to-r from-indigo-700 to-purple-600 hover:from-indigo-600 hover:to-purple-500 hover:shadow-lg transition-all duration-300 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>See code</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl ring-4 ring-black"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
