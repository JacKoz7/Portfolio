import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "JacKoz Company",
    year: "2024",
    title: "GreenPost",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "JacKoz Company",
    year: "2025",
    title: "eShelf",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "JacKoz Company",
    year: "2025",
    title: "EasySpeak - Typescript translator created using AWS",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
          Real-World Results
        </p>
      </div>

      <h2 className="font-serif text-3xl text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center text-white/60 mt-4">
        See how i transformed concepts into engaging digital experiences.
      </p>
      <div className="flex flex-col mt-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 p-8 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20"
          >
            <div className="flex">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4" />
            <ul className="flex flex-col gap-4 mt-4">
              {project.results.map((result) => (
                <li
                  key={result.title}
                  className="flex gap-2 text-sm text-white/50"
                >
                  <CheckCircleIcon className="size-5" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>View live site</span>
                <ArrowUpRight className="size-4" /> 
              </button>
            </a>
            <Image src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
