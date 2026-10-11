// Apple-style springs, described by a damping ratio and a response time (in
// seconds) instead of mass/stiffness/damping. A spring has no fixed duration:
// re-targeting it mid-flight keeps the current value and velocity, so motion
// can always be grabbed and redirected without a jump.
export type SpringConfig = { damping?: number; response?: number };

export class Spring {
  value: number;
  target: number;
  velocity = 0;
  private stiffness = 0;
  private friction = 0;

  constructor(initial = 0, config: SpringConfig = {}) {
    this.value = this.target = initial;
    this.configure(config);
  }

  configure({ damping = 1, response = 0.4 }: SpringConfig) {
    this.stiffness = (2 * Math.PI / response) ** 2;
    this.friction = (4 * Math.PI * damping) / response;
  }

  // Hold the spring at a value, e.g. while a finger is dragging it
  set(value: number) {
    this.value = this.target = value;
    this.velocity = 0;
  }

  step(dt: number) {
    const accel = -this.stiffness * (this.value - this.target) - this.friction * this.velocity;
    this.velocity += accel * dt;
    this.value += this.velocity * dt;
  }

  get settled() {
    return Math.abs(this.velocity) < 0.02 && Math.abs(this.value - this.target) < 0.02;
  }
}

// Drives a set of springs on requestAnimationFrame until they all come to rest
export class SpringLoop {
  private raf = 0;
  private last = 0;

  constructor(private springs: Spring[], private render: () => void) {}

  start() {
    if (this.raf) return;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.tick);
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  private tick = (now: number) => {
    // Fixed small substeps keep stiff springs stable on any refresh rate
    let dt = Math.min((now - this.last) / 1000, 1 / 30);
    this.last = now;
    while (dt > 0) {
      const h = Math.min(dt, 1 / 240);
      this.springs.forEach((s) => s.step(h));
      dt -= h;
    }

    if (this.springs.every((s) => s.settled)) {
      this.springs.forEach((s) => s.set(s.target));
      this.render();
      this.raf = 0;
      return;
    }

    this.render();
    this.raf = requestAnimationFrame(this.tick);
  };
}

// Where a flick would come to rest, using the same decay as scroll momentum
export function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

// Past a boundary, follow the pointer less and less instead of stopping hard
export function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
