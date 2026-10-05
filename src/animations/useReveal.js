"use client";

import { gsap } from "./gsap";
import { DURATION, EASE, STAGGER, START } from "./presets";

/** Fade-up reveals, staggered groups, image clip reveals and counters. */
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
        ease: EASE,
        delay: parseFloat(el.dataset.delay || 0),
        clearProps: "transform",
        scrollTrigger: { trigger: el, start: START, once: true },
      }
    );
  });

  root.querySelectorAll("[data-stagger]").forEach((group) => {
    gsap.fromTo(
      group.children,
      { autoAlpha: 0, y: distance },
      {
        autoAlpha: 1,
        y: 0,
        duration: DURATION,
        ease: EASE,
        stagger: STAGGER,
        clearProps: "transform",
        scrollTrigger: { trigger: group, start: START, once: true },
      }
    );
  });

  root.querySelectorAll("[data-reveal-image]").forEach((el) => {
    const media = el.querySelector("img, video");
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
    tl.fromTo(
      el,
      { clipPath: "inset(8% 6% 8% 6%)", autoAlpha: 0 },
      { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1, duration: 1.4, ease: "expo.out" }
    );
    // Parallax frames manage their own image scale.
    if (media && !el.hasAttribute("data-parallax")) {
      tl.fromTo(media, { scale: 1.16 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
    }
  });

  root.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    if (Number.isNaN(target)) return;
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    const suffix = el.dataset.suffix || "";
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: START, once: true },
      onUpdate: () => {
        el.textContent = state.value.toFixed(decimals) + suffix;
      },
    });
  });
}

/** Reduced motion: no transforms, just a gentle opacity fade. */
export function setupReducedReveals(root) {
  const targets = root.querySelectorAll(
    "[data-reveal], [data-stagger] > *, [data-reveal-image], [data-split], [data-hero-item]"
  );
  gsap.to(targets, { autoAlpha: 1, duration: 0.4, ease: "none" });
}

export function useReveal() {
  return { setupReveals, setupReducedReveals };
}
