"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { prefersReducedMotion } from "@/animations/presets";

let lenis = null;

/** Document y of a node from layout offsets (ignores reveal transforms). */
function docTop(node) {
  let y = 0;
  for (let n = node; n; n = n.offsetParent) y += n.offsetTop;
  return y;
}

/**
 * Where a #section should land: the top of its content (first photo, label or
 * heading) just below the fixed header — skipping only the section's empty
 * top padding, so nothing at the top of the section is cut off.
 */
function targetY(el) {
  const header = document.querySelector("header")?.offsetHeight || 84;
  // Sticky bars under the header (e.g. the in-page section nav) also cover it.
  const sticky = document.querySelector("[data-sticky-offset]")?.offsetHeight || 0;
  let first = el;
  if (el.tagName === "SECTION") {
    const container = el.querySelector(".container") || el;
    first = container.firstElementChild || container;
  }
  return Math.max(0, Math.round(docTop(first) - header - sticky - 24));
}

/** Scroll to a y position; immediate jumps never glide. */
function scrollToY(y, immediate) {
  // Programmatic jumps keep the header visible (see useHeaderState).
  window.dispatchEvent(new Event("bly:show-header"));
  if (lenis) lenis.scrollTo(y, { immediate, force: true, duration: 1.1 });
  else window.scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
}

function scrollToHash(hash, immediate) {
  const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!el) return false;
  scrollToY(targetY(el), immediate);
  return true;
}

/**
 * Site-wide smooth, eased scrolling (Lenis) driven by GSAP's ticker so
 * ScrollTrigger animations stay in sync. Mouse wheel and trackpad only: touch
 * devices keep native scrolling. Off for prefers-reduced-motion.
 * - Elements with data-lenis-prevent (the full-screen menu) scroll natively;
 *   scrolling pauses while the page is locked by the menu or a lightbox.
 * - Navigation is handled here so leftover glide momentum can never carry
 *   onto the next page: every page opens at the top or at its #section.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (!prefersReducedMotion()) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
      });
      lenis.on("scroll", ScrollTrigger.update);
    }
    const tick = (time) => lenis?.raf(time * 1000);
    if (lenis) {
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Menu and lightbox lock the page with body.is-locked — pause with them.
    const lock = new MutationObserver(() => {
      if (document.body.classList.contains("is-locked")) lenis?.stop();
      else lenis?.start();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Stop any glide the moment a link is pressed, so the link can't slide
    // out from under the pointer and no momentum survives the navigation.
    const onPointerDown = (e) => {
      if (lenis && e.target.closest?.("a[href]")) lenis.scrollTo(window.scrollY, { immediate: true, force: true });
    };

    // Links to the current page: #section glides to its heading; a plain link
    // to the page you are on glides back to the top.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      e.preventDefault();
      if (url.hash) {
        if (scrollToHash(url.hash, false)) window.history.pushState(null, "", url.hash);
      } else {
        scrollToY(0, false);
        if (window.location.hash) window.history.pushState(null, "", url.pathname);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("click", onClick, true);
      lock.disconnect();
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // New page: open at the very top, or at the #section in the URL. Runs after
  // the router's own scroll, so it always has the final word.
  useEffect(() => {
    lenis?.resize();
    const hash = window.location.hash;
    if (!hash) {
      scrollToY(0, true);
      return undefined;
    }
    // Wait two frames so the new page is laid out before measuring.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => scrollToHash(hash, true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
}
