export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50"> {/* Increased z-index to 50 */}
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md"> {/* Fixed typo p=0.5 to p-1, added backdrop-blur-md */}
        <a href="#HeroSection" className="nav-item">
          Home
        </a>
        <a href="#ProjectsSection" className="nav-item">
          Projects
        </a>
        <a href="#AboutSection" className="nav-item">
          About
        </a>
        <a
          href="#ContactSection"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};