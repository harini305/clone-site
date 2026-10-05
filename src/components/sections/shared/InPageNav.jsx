"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/animations/gsap";
import styles from "./InPageNav.module.css";

/** Sticky in-page section navigation; the active link follows scroll. */
export default function InPageNav({ sections, label = "On this page" }) {
  const [active, setActive] = useState(sections[0]?.id);
  const listRef = useRef(null);

  useEffect(() => {
    const triggers = sections
      .map(({ id }, index) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => self.isActive && setActive(id),
          // Back above the first section: highlight it again.
          onLeaveBack: index === 0 ? () => setActive(id) : undefined,
        });
      })
      .filter(Boolean);
    return () => triggers.forEach((t) => t.kill());
  }, [sections]);

  // Keep the active link visible in the horizontally scrolling bar.
  useEffect(() => {
    const link = listRef.current?.querySelector(`[data-id="${active}"]`);
    const list = listRef.current;
    if (!link || !list) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav className={styles.nav} aria-label={label}>
      <div className="container">
        <ul className={styles.list} ref={listRef}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-id={s.id}
                className={`${styles.link} ${active === s.id ? styles.active : ""}`}
                aria-current={active === s.id ? "location" : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
