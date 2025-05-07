import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/jackatday.pl.3",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jacek-kozlowski1/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/jacek_k7?igsh=bzl4c3ZpZ2F4dDhk&utm_source=qr",
  },
  {
    title: "X",
    href: "https://x.com/JacKoz77",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip"> 
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-700/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10"> 
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {year}. All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors relative z-20" 
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};