// Shared motion language: quick, soft and never in the way of reading.
export const EASE = "power3.out";
export const EASE_SOFT = "expo.out";
export const EASE_INOUT = "power2.inOut";

// Scroll reveals: a soft, clearly visible rise as content arrives.
export const DURATION = 0.7;
export const DISTANCE = 32;
export const DISTANCE_MOBILE = 22;
export const STAGGER = 0.09;
export const EASE_REVEAL = "power2.out";

// Reveal once an element is a little way into the viewport, so it is seen
// arriving rather than finishing below the fold.
export const START = "top 90%";

// Play once and never reverse. Deliberately not `once: true`: once-triggers kill
// themselves inside ScrollTrigger.refresh(), which crashes GSAP 3.15 when a page
// opens part-way down (e.g. a link to /retreat-center#amenities).
export const REVEAL_TRIGGER = { start: START, toggleActions: "play none none none" };

export const MEDIA = {
  desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
