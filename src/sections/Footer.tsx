export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container flex justify-center py-5 font-mono text-[11.5px] text-faint">
        <span>&copy; {year} Jacek Kozłowski</span>
      </div>
    </footer>
  );
};
