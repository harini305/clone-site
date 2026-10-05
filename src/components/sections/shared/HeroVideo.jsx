"use client";

import { useEffect, useRef } from "react";

const PHONE = "(max-width: 600px)";

/**
 * Muted background loop layered over the (priority) poster image.
 * - Desktop/tablet: the native 1916×1080 source (stream-copied, no re-encode).
 * - Phones: a native-resolution 608×1080 portrait crop, so a tall hero isn't
 *   filled by blowing up a small slice of a landscape frame.
 * - Never loads with prefers-reduced-motion or data-saver enabled.
 * - Pauses whenever the hero is off-screen.
 */
export default function HeroVideo({ src, portraitSrc, poster, portraitPoster, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (reduce || saveData) return undefined;

    const phone = portraitSrc && window.matchMedia(PHONE).matches;
    if (phone && portraitPoster) video.poster = portraitPoster;
    video.src = phone ? portraitSrc : src;

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
  }, [src, portraitSrc, portraitPoster]);

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
