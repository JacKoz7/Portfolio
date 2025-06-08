import Jacek from "@/assets/images/Jacek2noBG.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative overflow-x-clip"
      id="HeroSection"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-8 text-purple-900/75" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-5 text-purple-900/75" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-indigo-800/75 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-purple-900/75" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="5s"
        >
          <StarIcon className="size-12 text-purple-600" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="7s"
        >
          <StarIcon className="size-8 text-purple-600" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-indigo-800/75  rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="7s"
        >
          <SparkleIcon className="size-14 text-purple-900/75" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-indigo-800/75  rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="7s"
        >
          <StarIcon className="size-28 text-purple-600" />
        </HeroOrbit>
        <HeroOrbit
          size={880}
          rotation={-105}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-20 text-purple-900/75" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-3 -mt-10 h-[148px] w-[148px] rounded-full bg-transparent p-1 shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            <Image
              src={Jacek}
              className="h-[140px] w-[140px] rounded-full object-cover"
              alt="My handsome face"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new challenges
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Shaping ideas into interactive realities
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I build digital solutions that not only work but feel right. With
            focus on fullstack and cloud-native tech, I turn complexity into
            clarity - one commit at a time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20">
          <a href="#ProjectsSection" className="relative z-20">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-colors hover:bg-white/10">
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>

          <a href="#ContactSection" className="relative z-20">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-colors hover:bg-gray-200">
              <span>🤝</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
