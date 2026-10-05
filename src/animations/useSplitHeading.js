"use client";

import { gsap } from "./gsap";
import { EASE_SOFT, START } from "./presets";

/**
 * Wrap every word of an element in a masked span so it can rise into view.
 * Nested inline elements (<em>, <span>) are preserved. Returns a revert fn.
 */
export function splitWords(el) {
  if (el.dataset.splitDone) return () => {};
  const original = el.innerHTML;

  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const outer = document.createElement("span");
          outer.className = "split-word";
          const inner = document.createElement("span");
          inner.className = "split-inner";
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== "BR") {
        walk(child);
      }
    });
  };

  walk(el);
  el.dataset.splitDone = "true";
  return () => {
    el.innerHTML = original;
    delete el.dataset.splitDone;
  };
}

/** Split all [data-split] headings inside root. Returns revert fns. */
export function splitHeadings(root) {
  return Array.from(root.querySelectorAll("[data-split]")).map(splitWords);
}

/** Animate previously split headings: words rise from behind a mask. */
export function animateSplitHeadings(root) {
  root.querySelectorAll("[data-split]").forEach((el) => {
    const words = el.querySelectorAll(".split-inner");
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      words,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: EASE_SOFT,
        stagger: 0.035,
        scrollTrigger: el.closest("[data-hero]")
          ? undefined
          : { trigger: el, start: START, once: true },
        delay: el.closest("[data-hero]") ? 0.25 : 0,
      }
    );
  });
}

/** Hook form, for components that want to split their own heading. */
export function useSplitHeading() {
  return { splitWords, animateSplitHeadings };
}
