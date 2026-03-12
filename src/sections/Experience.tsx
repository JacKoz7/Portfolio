import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.webp";
import memojiAvatar2 from "@/assets/images/memoji-avatar-4.webp";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.webp";

const MobilePhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="url(#phone-gradient)"
    className={className}
  >
    <defs>
      <linearGradient id="phone-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

const DesktopComputerIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="url(#desktop-gradient)"
    className={className}
  >
    <defs>
      <linearGradient id="desktop-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
    />
  </svg>
);

const StarIconIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="url(#star-gradient)"
    className={className}
  >
    <defs>
      <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const experiences = [
  {
    title: "Software Developer",
    company: "diagno6.",
    period: "Jul 2025 – Present",
    description:
      "Single-handedly building a cross-platform mobile application available on both iOS and Android using React Native.",
    responsibilities: [
      "Implementing screens, features, and integrating user management with Firebase.",
      "Preparing test builds for TestFlight and production releases for Google Play and App Store.",
      "Tracking errors with PostHog and managing content in Strapi CMS using GraphQL.",
    ],
    avatar: memojiAvatar1,
    icon: MobilePhoneIcon,
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Transition Technologies MS",
    period: "Jul 2025 · 1 mo",
    description:
      "Developing web application using .NET (C#) on the backend and Angular on the frontend.",
    responsibilities: [
      "Developing and enhancing features across the full stack.",
      "Working within a Scrum framework (stand-ups, planning, demos).",
      "Collaborating with experienced developers to improve software workflows.",
    ],
    avatar: memojiAvatar2,
    icon: DesktopComputerIcon,
  },
  {
    title: "Your Next Developer?",
    company: "Your Company",
    period: "Near Future",
    description:
      "Are you looking for a dedicated developer eager to deliver high-quality software and tackle new challenges?",
    responsibilities: [
      "Bringing fresh ideas and strong technical skills to your projects.",
      "Collaborating with your team to build scalable applications.",
      "Continuously learning and adapting to your tech stack.",
    ],
    avatar: memojiAvatar3,
    icon: StarIconIcon,
  },
];

export const ExperienceSection = () => {
  return (
    <div className="py-16 lg:py-24" id="ExperienceSection">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Professional Experience"
          description="A look at my commercial experience, projects I've contributed to, and the skills I've developed along the way."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {experiences.map((experience) => {
                  const IconComponent = experience.icon;
                  return (
                    <Card
                      key={experience.company}
                      className="w-[350px] md:w-[550px] p-6 md:p-8 hover:-rotate-3 transition duration-300 flex-shrink-0 flex flex-col relative"
                    >
                      <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-80">
                        <IconComponent className="size-8 md:size-10" />
                      </div>

                      <div className="flex gap-4 items-center mb-6 pr-12">
                        <div className="size-14 bg-gradient-to-r from-indigo-700 to-purple-600 inline-flex items-center justify-center rounded-full flex-shrink-0 outline outline-2 outline-offset-2 outline-purple-500/30">
                          <Image priority
                            src={experience.avatar}
                            alt={experience.company}
                            className="max-h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-serif text-lg md:text-xl font-semibold">
                            {experience.title}
                          </div>
                          <div className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">
                            {experience.company} •{" "}
                            <span className="text-white/40">
                              {experience.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-white/80 mb-4">
                        {experience.description}
                      </p>

                      <ul className="list-disc pl-5 flex flex-col gap-2 text-sm md:text-base text-white/60 marker:text-purple-500 mt-auto">
                        {experience.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </Card>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
