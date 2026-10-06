"use client";

import { useEffect, useRef } from "react";

const escape = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * Muted background loop: `autoplay muted loop playsinline preload="metadata"`.
 * The tag is written as raw markup because React does not render the `muted`
 * attribute on the server, and iOS only autoplays when it is present.
 * - The HD still underneath is the first paint; the video's sources are
 *   attached only after the page has loaded, so it never competes with the
 *   page itself for bandwidth, then fades in once it is playing.
 * - Never loads with prefers-reduced-motion or data-saver.
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
      return undefined;
    }

    const show = () => {
      video.style.opacity = "1";
    };
    video.addEventListener("playing", show, { once: true });

    let observer = null;
    const attach = () => {
      video.querySelectorAll("source[data-src]").forEach((s) => {
        s.src = s.dataset.src;
        s.removeAttribute("data-src");
      });
      video.load();
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0.05 }
      );
      observer.observe(video);
    };

    let idle = 0;
    const onLoad = () => {
      idle = window.setTimeout(attach, 150);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(idle);
      video.removeEventListener("playing", show);
      observer?.disconnect();
    };
  }, []);

  const markup =
    `<video class="${escape(className)}" autoplay muted loop playsinline preload="metadata"` +
    `${poster ? ` poster="${escape(poster)}"` : ""} aria-hidden="true" tabindex="-1"` +
    ` style="opacity:0;transition:opacity .8s ease">` +
    sources
      .map((s) => `<source data-src="${escape(s.src)}" type="${escape(s.type)}"${s.media ? ` media="${escape(s.media)}"` : ""}>`)
      .join("") +
    "</video>";

  return <div ref={ref} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
