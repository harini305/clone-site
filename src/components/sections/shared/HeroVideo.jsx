"use client";

import { useEffect, useRef } from "react";

const escape = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * Muted background loop that autoplays from the first HTML response:
 * `autoplay muted loop playsinline preload="metadata"`, with the still image as
 * poster. The tag is written as raw markup because React does not render the
 * `muted` attribute on the server, and iOS only autoplays when it is present.
 * - Paused for prefers-reduced-motion and data-saver.
 * - Paused while the hero is off-screen.
 * sources: [{ src, type, media? }] in order of preference — `media` lets phones
 * pick a portrait file.
 */
export default function HeroVideo({ sources, poster, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current?.querySelector("video");
    if (!video) return undefined;
    video.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || navigator.connection?.saveData) {
      video.removeAttribute("autoplay");
      video.pause();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const markup =
    `<video class="${escape(className)}" autoplay muted loop playsinline preload="metadata"` +
    `${poster ? ` poster="${escape(poster)}"` : ""} aria-hidden="true" tabindex="-1">` +
    sources
      .map((s) => `<source src="${escape(s.src)}" type="${escape(s.type)}"${s.media ? ` media="${escape(s.media)}"` : ""}>`)
      .join("") +
    "</video>";

  return <div ref={ref} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
