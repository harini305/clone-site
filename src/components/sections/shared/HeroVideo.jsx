"use client";

import { useEffect, useRef } from "react";

const PHONE = "(max-width: 600px)";

/**
 * Muted background loop layered over the HD hero photo (which doubles as the
 * poster and LCP image). Rendered from the same HD stills, so the photo and
 * the first video frame match.
 * - Screens > 600px: 1920×1080 loop. Phones: 1080×1920 portrait loop.
 * - Never loads with prefers-reduced-motion or data-saver enabled.
 * - Pauses whenever the hero is off-screen.
 */
export default function HeroVideo({ src, portraitSrc, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || navigator.connection?.saveData) return undefined;

    video.src = portraitSrc && window.matchMedia(PHONE).matches ? portraitSrc : src;
    const onReady = () => video.classList.add("is-ready");
    video.addEventListener("playing", onReady, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("playing", onReady);
    };
  }, [src, portraitSrc]);

  return <video ref={ref} className={className} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />;
}
