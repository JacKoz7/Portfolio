"use client";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLicon from "@/assets/icons/html5.svg";
import CSSicon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import githubIcon from "@/assets/icons/github.svg";
import mongoIcon from "@/assets/icons/mongodb.svg";
import awsIcon from "@/assets/icons/aws.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import expressIcon from "@/assets/icons/express.svg";
import LaptopMemoji from "@/assets/images/memoji-computer.png"
import mapImage from "@/assets/images/Lublin.jpeg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLicon,
  },
  {
    title: "CSS3",
    iconType: CSSicon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Github",
    iconType: githubIcon,
  },
  {
    title: "MongoDB",
    iconType: mongoIcon,
  },
  {
    title: "AWS",
    iconType: awsIcon,
  },
  {
    title: "TailwindCSS",
    iconType: tailwindIcon,
  },
  {
    title: "ExpressJS",
    iconType: expressIcon,
  },
];

const hobbies = [
  {
    title: "Dancing",
    emoji: "🕺",
    left: "5%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "50%",
    top: "5%",
  },

  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Football",
    emoji: "⚽️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Electronics",
    emoji: "🔋",
    left: "5%",
    top: "65%",
  },
  {
    title: "Style",
    emoji: "😎",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="AboutSection">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Who am I?"
                description="• 3rd-year CS student hungry for tech experience"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={LaptopMemoji} alt="laptop memoji" unoptimized={true}/>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 ">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:45s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-white">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
                unoptimized={true}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 to-purple-600 -z-20 animate-ping [animation-duration:2s]">
                  {" "}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 to-purple-600 -z-10">
                  {" "}
                </div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-12"
                  unoptimized={true}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
