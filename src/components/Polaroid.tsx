import Image from "next/image";
import { useEffect, useRef } from "react";
import { prefersReducedMotion, project, rubberband, Spring, SpringLoop } from "@/lib/spring";

const REST_ANGLE = 4;
const FREE_RADIUS = 90;

// A photo pinned to the page that can be grabbed, thrown and springs back home.
// It follows the pointer 1:1 from wherever it was grabbed, resists the further
// it is pulled, and hands the release velocity to the return spring.
export function Polaroid({
  src,
  alt,
  caption,
  hint,
}: {
  src: string;
  alt: string;
  caption: string;
  hint: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current!;
    const shadow = shadowRef.current!;
    const reduced = prefersReducedMotion();
    const bounce = { damping: reduced ? 1 : 0.62, response: 0.55 };

    const x = new Spring(0, bounce);
    const y = new Spring(0, bounce);
    const rotate = new Spring(0, { damping: reduced ? 1 : 0.7, response: 0.5 });
    const lift = new Spring(0, { damping: 1, response: 0.22 });

    const render = () => {
      card.style.transform = `translate3d(${x.value}px, ${y.value}px, 0) rotate(${REST_ANGLE + rotate.value}deg) scale(${1 + lift.value * 0.06})`;
      shadow.style.opacity = String(lift.value);
    };
    const loop = new SpringLoop([x, y, rotate, lift], render);
    render();

    let drag: { id: number; ox: number; oy: number; history: { x: number; y: number; t: number }[] } | null = null;

    const down = (e: PointerEvent) => {
      card.setPointerCapture(e.pointerId);
      // Grab from the live position so catching it mid-flight never jumps
      drag = {
        id: e.pointerId,
        ox: e.clientX - x.value,
        oy: e.clientY - y.value,
        history: [{ x: e.clientX, y: e.clientY, t: e.timeStamp }],
      };
      x.set(x.value);
      y.set(y.value);
      lift.target = 1;
      card.dataset.dragging = "";
      loop.start();
    };

    const move = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      let dx = e.clientX - drag.ox;
      let dy = e.clientY - drag.oy;
      const dist = Math.hypot(dx, dy);
      if (dist > FREE_RADIUS) {
        const eased = FREE_RADIUS + rubberband(dist - FREE_RADIUS, 260);
        dx *= eased / dist;
        dy *= eased / dist;
      }
      x.set(dx);
      y.set(dy);

      const h = drag.history;
      h.push({ x: e.clientX, y: e.clientY, t: e.timeStamp });
      while (h.length > 2 && e.timeStamp - h[0].t > 100) h.shift();
      const dt = (e.timeStamp - h[0].t) / 1000 || 1 / 60;
      // Tilt into the direction of travel, like a card held by one corner
      rotate.target = Math.max(-14, Math.min(14, (e.clientX - h[0].x) / dt / 90));
      loop.start();
    };

    const up = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const h = drag.history;
      const first = h[0];
      const dt = (e.timeStamp - first.t) / 1000;
      const vx = dt > 0 ? (e.clientX - first.x) / dt : 0;
      const vy = dt > 0 ? (e.clientY - first.y) / dt : 0;
      drag = null;
      delete card.dataset.dragging;

      // Velocity handoff: the return spring starts at the finger's speed
      x.target = 0;
      y.target = 0;
      x.velocity = vx;
      y.velocity = vy;
      rotate.target = 0;
      // A hard flick would have travelled far - spend that energy as a spin
      const flung = Math.hypot(project(vx), project(vy));
      if (!reduced && flung > 350) rotate.velocity += Math.sign(vx || 1) * Math.min(flung, 1400);
      lift.target = 0;
      loop.start();
    };

    const enter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || drag) return;
      lift.target = 0.35;
      rotate.target = -2;
      loop.start();
    };

    const leave = () => {
      if (drag) return;
      lift.target = 0;
      rotate.target = 0;
      loop.start();
    };

    card.addEventListener("pointerdown", down);
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerup", up);
    card.addEventListener("pointercancel", up);
    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointerleave", leave);
    return () => {
      loop.stop();
      card.removeEventListener("pointerdown", down);
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerup", up);
      card.removeEventListener("pointercancel", up);
      card.removeEventListener("pointerenter", enter);
      card.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="relative w-[200px] select-none">
      <div
        ref={cardRef}
        className="relative z-10 cursor-grab touch-none will-change-transform data-[dragging]:cursor-grabbing"
      >
        <div
          ref={shadowRef}
          className="absolute inset-0 -z-10 translate-y-6 scale-95 bg-black/70 blur-2xl opacity-0"
          aria-hidden
        />
        <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-3 bg-gold/25 backdrop-blur-[2px]" aria-hidden />
        <div className="bg-[#221f1a] border border-line-strong p-2.5 pb-0 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(236,231,220,0.08)]">
          <Image
            src={src}
            alt={alt}
            width={900}
            height={1200}
            draggable={false}
            sizes="200px"
            className="pointer-events-none block w-full aspect-[4/5] object-cover object-[50%_45%]"
          />
          <p className="py-3 text-center font-serif italic text-[15px] text-cream/80">{caption}</p>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[10.5px] tracking-widest text-faint" aria-hidden>
        ↖ {hint} ↗
      </p>
    </div>
  );
}
