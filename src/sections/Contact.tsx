import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="ContactSection">
      <div className="container relative z-10">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="relative z-20">
              <Link 
                href="mailto:jackkoz999@gmail.com" 
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};