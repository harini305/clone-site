"use client";

import { gsap } from "./gsap";
import { EASE, EASE_SOFT } from "./presets";

/**
 * Subtle scroll parallax for selected large images.
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

/** Page hero intro: media eases in from a slight zoom, copy rises softly. */
export function setupHero(root, { desktop }) {
  const hero = root.querySelector("[data-hero]");
  if (!hero) return;
  const media = hero.querySelector("[data-hero-media]");
  const items = hero.querySelectorAll("[data-hero-item]");
  const content = hero.querySelector("[data-hero-content]");

  const tl = gsap.timeline({ defaults: { ease: EASE } });
  // Subtle settle only: a large scale-up visibly softens a 1080p video.
  if (media) tl.fromTo(media, { scale: 1.03 }, { scale: 1, duration: 2, ease: EASE_SOFT, clearProps: "transform" }, 0);
  tl.fromTo(
    items,
    { autoAlpha: 0, y: desktop ? 30 : 18 },
    { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.12 },
    0.35
  );

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
