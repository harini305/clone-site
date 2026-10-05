"use client";

import { useEffect, useRef } from "react";

/**
 * Muted background loop layered over the (priority) poster image.
 * - Chooses a 1080p or 720p source by screen width, after hydration.
 * - Never loads with prefers-reduced-motion or data-saver enabled.
 * - Pauses whenever the hero is off-screen so it costs nothing while scrolling.
 */
export default function HeroVideo({ src, mobileSrc, poster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (reduce || saveData) return undefined;

    video.src = mobileSrc && window.matchMedia("(max-width: 899px)").matches ? mobileSrc : src;
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
  }, [src, mobileSrc]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
