"use client";

import { gsap } from "./gsap";
import { DURATION, EASE_REVEAL, REVEAL_TRIGGER } from "./presets";

/**
 * Animate [data-split] headings as whole blocks: a short fade and rise.
 * Headings are never masked word-by-word, so letters are never clipped.
 */
export function animateSplitHeadings(root, { distance }) {
  root.querySelectorAll("[data-split]").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: distance },
      {
        autoAlpha: 1,
        y: 0,
        duration: DURATION,
        ease: EASE_REVEAL,
        clearProps: "transform",
        scrollTrigger: { trigger: el, ...REVEAL_TRIGGER },
      }
    );
  });
}

/** Hook form, for components that want to animate their own heading. */
export function useSplitHeading() {
  return { animateSplitHeadings };
}
