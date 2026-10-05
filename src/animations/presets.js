// Shared motion language: slow, soft, editorial.
export const EASE = "power3.out";
export const EASE_SOFT = "expo.out";
export const EASE_INOUT = "power2.inOut";

export const DURATION = 1.1;
export const DISTANCE = 36;
export const DISTANCE_MOBILE = 22;
export const STAGGER = 0.09;

export const START = "top 86%";

export const MEDIA = {
  desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
