import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StaraIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLicon from "@/assets/icons/html5.svg";
import CSSicon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import { TechIcon } from "@/components/TechIcon";

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
];

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="About me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me"
      />
      <div>
        <Card>
          <div>
            <StaraIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspactives.</p>
          </div>
          <Image src={bookImage} alt="book cover" />
        </Card>
        <Card>
          <div>
            <StaraIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map(item =>(
              <div key={item.title}>
                <TechIcon component={item.iconType}/>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
