"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { MEDIA } from "@/animations/presets";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./ScheduleTimeline.module.css";

/**
 * Daily schedule. Desktop: the left panel is pinned with ScrollTrigger while
 * the day scrolls past; the active slot updates and a progress line fills.
 * Mobile / reduced motion: a simple stacked list, no pinning.
 */
export default function ScheduleTimeline({ id, eyebrow, title, intro, image, imageAlt = "", items, tone = "dark" }) {
  const rootRef = useRef(null);
  const asideRef = useRef(null);
  const listRef = useRef(null);
  const barRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const mm = gsap.matchMedia();

    mm.add(MEDIA.desktop, () => {
      const aside = asideRef.current;
      const list = listRef.current;
      ScrollTrigger.create({
        trigger: list,
        start: "top top+=120",
        end: () => `+=${Math.max(0, list.offsetHeight - aside.offsetHeight)}`,
        pin: aside,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      gsap.fromTo(
        barRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: list, start: "top center", end: "bottom center", scrub: true } }
      );
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      root.querySelectorAll("[data-slot]").forEach((slot, i) => {
        ScrollTrigger.create({
          trigger: slot,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  const current = items[active];

  return (
    <section id={id} ref={rootRef} className={`section ${tone === "dark" ? "section--dark" : "section--warm"} ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.asideWrap}>
          <div ref={asideRef} className={styles.aside} data-schedule-aside>
            <Eyebrow tone={tone === "dark" ? "light" : "sage"}>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            {intro && <p className={styles.intro}>{intro}</p>}
            <div className={styles.now} aria-live="polite">
              <span className={styles.nowTime}>{current.time}</span>
              <span className={styles.nowTitle}>{current.title}</span>
            </div>
            {image && (
              <div className={`${styles.media} hover-zoom`}>
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 80vw" className="media-cover" />
              </div>
            )}
          </div>
        </div>

        <div className={styles.timeline}>
          <span className={styles.track} aria-hidden="true">
            <span ref={barRef} className={styles.bar} />
          </span>
          <ol ref={listRef} className={styles.list}>
            {items.map((item, i) => (
              <li key={item.time + item.title} data-slot className={`${styles.slot} ${i === active ? styles.active : ""}`}>
                <span className={styles.time}>{item.time}</span>
                <div>
                  <h3 className={styles.slotTitle}>{item.title}</h3>
                  <p className={styles.slotText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
