import Image from "next/image";
import { useEffect, useRef } from "react";
import { Content, CV_HREF } from "@/lib/content";
import { prefersReducedMotion, Spring, SpringLoop } from "@/lib/spring";

const MAX_TILT = 9;

export const HeroSection = ({ t }: { t: Content["hero"] }) => {
  const heroRef = useRef<HTMLElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // Portrait tilts toward the pointer, with the frame and tag on their own
  // depth layers, and a soft light trails the pointer across the hero.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const hero = heroRef.current!;
    const stage = stageRef.current!;
    const light = lightRef.current!;

    const tiltX = new Spring(0, { damping: 1, response: 0.45 });
    const tiltY = new Spring(0, { damping: 1, response: 0.45 });
    const hover = new Spring(0, { damping: 1, response: 0.3 });
    const lightX = new Spring(0, { damping: 1, response: 0.9 });
    const lightY = new Spring(0, { damping: 1, response: 0.9 });

    const render = () => {
      const rx = tiltX.value;
      const ry = tiltY.value;
      photoRef.current!.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${1 + hover.value * 0.02})`;
      frameRef.current!.style.transform = `translate3d(${-ry * 1.6}px, ${rx * 1.6}px, 0)`;
      tagRef.current!.style.transform = `translate3d(${ry * 2.4}px, ${-rx * 2.4}px, 0)`;
      glareRef.current!.style.opacity = String(hover.value * 0.9);
      glareRef.current!.style.background = `radial-gradient(circle at ${50 + ry * 4}% ${50 - rx * 4}%, rgba(255,240,210,0.16), transparent 60%)`;
      light.style.transform = `translate3d(${lightX.value}px, ${lightY.value}px, 0) translate(-50%, -50%)`;
    };
    const loop = new SpringLoop([tiltX, tiltY, hover, lightX, lightY], render);

    const heroMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = hero.getBoundingClientRect();
      lightX.target = e.clientX - r.left;
      lightY.target = e.clientY - r.top;
      light.style.opacity = "1";
      loop.start();
    };
    const heroLeave = () => {
      light.style.opacity = "0";
    };

    const stageMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tiltY.target = px * 2 * MAX_TILT;
      tiltX.target = -py * 2 * MAX_TILT;
      hover.target = 1;
      loop.start();
    };
    const stageLeave = () => {
      tiltX.target = 0;
      tiltY.target = 0;
      hover.target = 0;
      loop.start();
    };

    // Start the light where the static glow sits, so the first move is not a jump
    const r = hero.getBoundingClientRect();
    lightX.set(r.width * 0.8);
    lightY.set(r.height * 0.15);
    render();

    hero.addEventListener("pointermove", heroMove);
    hero.addEventListener("pointerleave", heroLeave);
    stage.addEventListener("pointermove", stageMove);
    stage.addEventListener("pointerleave", stageLeave);
    return () => {
      loop.stop();
      hero.removeEventListener("pointermove", heroMove);
      hero.removeEventListener("pointerleave", heroLeave);
      stage.removeEventListener("pointermove", stageMove);
      stage.removeEventListener("pointerleave", stageLeave);
    };
  }, []);

  const words = [
    ...t.title1.split(" ").map((w) => ({ w, em: false })),
    ...t.titleEm.split(" ").map((w) => ({ w, em: true })),
  ];

  return (
    <header ref={heroRef} id="top" className="relative overflow-hidden">
      <div className="absolute -top-56 -right-40 size-[640px] pointer-events-none animate-glow bg-[radial-gradient(circle,rgba(232,182,74,0.13)_0%,rgba(232,182,74,0)_65%)]" />
      <div
        ref={lightRef}
        className="absolute left-0 top-0 size-[560px] pointer-events-none opacity-0 transition-opacity duration-700 will-change-transform bg-[radial-gradient(circle,rgba(232,182,74,0.09)_0%,rgba(232,182,74,0)_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none [background-image:repeating-linear-gradient(90deg,rgba(236,231,220,0.025)_0_1px,transparent_1px_96px)]" />
      <div className="container relative grid items-center gap-16 py-20 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1
            aria-label={`${t.title1} ${t.titleEm}`}
            className="font-serif text-[44px] md:text-6xl lg:text-[68px] leading-[1.04] tracking-[-0.02em] mb-6"
          >
            {words.map(({ w, em }, i) => (
              <span key={`${i}-${w}`} aria-hidden>
                <span
                  className={`word ${em ? "text-gold" : ""}`}
                  style={{ animationDelay: `${80 + i * 70}ms` }}
                >
                  {w}
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="animate-fade-up [animation-delay:600ms] text-[17.5px] leading-relaxed text-muted max-w-[540px] mb-9">
            {t.sub}
          </p>
          <div className="animate-fade-up [animation-delay:750ms] flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="press font-mono text-[13px] tracking-wider font-medium bg-gold text-ink px-6 py-3 rounded-full hover:bg-gold-light"
            >
              {t.cta1}
            </a>
            <a
              href={CV_HREF}
              download
              className="press font-mono text-[13px] tracking-wider text-cream border border-line-strong px-6 py-3 rounded-full hover:border-gold hover:text-gold"
            >
              {t.cta2}
            </a>
          </div>
        </div>
        <div
          ref={stageRef}
          className="relative justify-self-center lg:justify-self-end animate-fade-up [animation-delay:300ms]"
        >
          <div
            ref={frameRef}
            className="absolute top-[18px] left-[18px] -right-[18px] -bottom-[18px] border border-gold/45 pointer-events-none will-change-transform"
          />
          <div ref={photoRef} className="relative will-change-transform">
            <Image
              src="/portrait-2026.webp"
              alt="Jacek Kozłowski"
              width={400}
              height={500}
              priority
              className="block w-full max-w-[400px] aspect-[3/3.8] object-cover object-[50%_28%] border border-line saturate-[0.95]"
            />
            <div ref={glareRef} className="absolute inset-0 pointer-events-none opacity-0" aria-hidden />
          </div>
          <div
            ref={tagRef}
            className="absolute -bottom-3.5 -left-3.5 bg-ink border border-line px-4 py-2.5 font-mono text-[11.5px] tracking-widest text-muted will-change-transform"
          >
            {t.photoTag}
          </div>
        </div>
      </div>
    </header>
  );
};
