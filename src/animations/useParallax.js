"use client";

import { gsap } from "./gsap";

/**
 * Subtle scroll parallax for selected large images. The image is scaled just
 * enough (1 + amount/50) to cover its travel — keep amounts small (~4) so HD
 * photos aren't visibly enlarged.
 * Usage: <div data-parallax="8"><img data-parallax-target … /></div>
 * Only called on desktop without reduced motion.
 */
export function setupParallax(root) {
  root.querySelectorAll("[data-parallax]").forEach((el) => {
    const target = el.querySelector("[data-parallax-target]") || el.firstElementChild;
    if (!target) return;
    const amount = parseFloat(el.dataset.parallax || 8);
    gsap.set(target, { scale: 1 + amount / 50 });
    gsap.fromTo(
      target,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
      }
    );
  });
}

/**
 * Page hero: the copy fades in with CSS on first paint (see [data-hero-item]
 * in globals.css). The media is never scaled on load — a zoom-settle reads as
 * a shake — so GSAP only adds the gentle drift as the hero scrolls away.
 */
export function setupHero(root, { desktop }) {
  const hero = root.querySelector("[data-hero]");
  if (!hero) return;
  const content = hero.querySelector("[data-hero-content]");

  // As the hero scrolls away the copy drifts up and fades — desktop only.
  if (desktop && content) {
    gsap.to(content, {
      yPercent: -12,
      autoAlpha: 0.2,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });
  }
}

export function useParallax() {
  return { setupParallax, setupHero };
}
