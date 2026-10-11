import { useEffect } from "react";
import { Lang } from "./content";

// Fades every element carrying the .reveal class in once it scrolls into view.
// With reduced motion the CSS drops the slide and keeps only a short cross-fade.
// Uses IntersectionObserver rather than CSS scroll-driven animations, which
// are still unsupported in a fair share of browsers.
export function useScrollReveal(lang: Lang) {
  useEffect(() => {
    // Switching language remounts nodes whose React key contains translated
    // text, so only pick up the ones not revealed yet.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger elements entering together so grids cascade instead of
        // popping in all at once.
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
            el.classList.add("is-visible");
            // Drop the stagger once revealed, or it would delay every later transition
            el.addEventListener("transitionend", () => (el.style.transitionDelay = ""), { once: true });
            observer.unobserve(el);
          });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);
}
