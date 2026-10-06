"use client";

import { gsap } from "./gsap";
import { DURATION, EASE_REVEAL, REVEAL_TRIGGER, STAGGER } from "./presets";

/**
 * Fade-up reveals, staggered groups and image clip reveals. Numbers are
 * rendered final in the markup and never count up, so they are always right.
 */
export function setupReveals(root, { distance }) {
  root.querySelectorAll("[data-reveal]").forEach((el) => {
    const fadeOnly = el.dataset.reveal === "fade";
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: fadeOnly ? 0 : distance },
      {
        autoAlpha: 1,
        y: 0,
        duration: DURATION,
        ease: EASE_REVEAL,
        delay: parseFloat(el.dataset.delay || 0),
        clearProps: "transform",
        scrollTrigger: { trigger: el, ...REVEAL_TRIGGER },
      }
    );
  });

  root.querySelectorAll("[data-stagger]").forEach((group) => {
    const kids = Array.from(group.children);
    const from = { autoAlpha: 0, y: distance };
    const to = { autoAlpha: 1, y: 0, duration: DURATION, ease: EASE_REVEAL, clearProps: "transform" };
    // Large grids (e.g. 32 blog cards) reveal row by row as each row arrives,
    // staggered across the row, instead of one long sequence.
    if (kids.length > 8) {
      kids.forEach((el) => {
        const column = kids.filter((k) => k.offsetTop === el.offsetTop).indexOf(el);
        gsap.fromTo(el, from, {
          ...to,
          delay: Math.min(column, 3) * STAGGER,
          scrollTrigger: { trigger: el, ...REVEAL_TRIGGER },
        });
      });
      return;
    }
    gsap.fromTo(kids, from, { ...to, stagger: STAGGER, scrollTrigger: { trigger: group, ...REVEAL_TRIGGER } });
  });

  root.querySelectorAll("[data-reveal-image]").forEach((el) => {
    const media = el.querySelector("img, video");
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, ...REVEAL_TRIGGER },
    });
    tl.fromTo(
      el,
      { clipPath: "inset(4% 3% 4% 3% round 18px)", autoAlpha: 0 },
      { clipPath: "inset(0% 0% 0% 0% round 18px)", autoAlpha: 1, duration: 0.6, ease: "power3.out", clearProps: "clipPath" }
    );
    // Image settles from a slight zoom while it unmasks. Parallax frames
    // manage their own image scale.
    if (media && !el.hasAttribute("data-parallax")) {
      tl.fromTo(media, { scale: 1.05 }, { scale: 1, duration: 0.8, ease: "power3.out", clearProps: "transform" }, 0);
    }
  });
}

const ANIMATED = "[data-reveal], [data-stagger], [data-split], [data-reveal-image], [data-hero], [data-no-reveal]";

/**
 * Content blocks on any page that have no reveal of their own: the children of
 * each section's .container (descending into wrappers that hold animated
 * parts). Blocks already on screen are left alone so nothing flickers on load.
 */
function autoRevealTargets(root) {
  const out = [];
  const visit = (el, depth) => {
    if (el.matches(ANIMATED) || el.closest("[data-stagger], [data-hero], [data-no-reveal]")) return;
    if (out.some((o) => o.contains(el))) return;
    if (el.querySelector(ANIMATED)) {
      if (depth < 3) Array.from(el.children).forEach((child) => visit(child, depth + 1));
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    out.push(el);
  };
  root.querySelectorAll("section .container").forEach((container) => {
    Array.from(container.children).forEach((child) => visit(child, 0));
  });
  return out;
}

/** Fade-up for every content block that has no reveal of its own. */
export function setupAutoReveals(root, { distance }) {
  autoRevealTargets(root).forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: distance },
      { autoAlpha: 1, y: 0, duration: DURATION, ease: EASE_REVEAL, clearProps: "transform", scrollTrigger: { trigger: el, ...REVEAL_TRIGGER } }
    );
  });
}

/** Reduced motion: no transforms, just a gentle opacity fade. */
export function setupReducedReveals(root) {
  const targets = root.querySelectorAll(
    "[data-reveal], [data-stagger] > *, [data-reveal-image], [data-split], [data-hero-item]"
  );
  gsap.to(targets, { autoAlpha: 1, duration: 0.3, ease: "none" });
}

export function useReveal() {
  return { setupReveals, setupReducedReveals };
}
