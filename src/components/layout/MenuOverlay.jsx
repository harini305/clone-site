"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import { primaryNav } from "@/data/navigation";
import { contact } from "@/data/contact";
import styles from "./MenuOverlay.module.css";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Full-screen menu with GSAP open/close timeline, focus trap and scroll lock. */
export default function MenuOverlay({ open, onClose }) {
  const rootRef = useRef(null);
  const tlRef = useRef(null);
  const lastFocus = useRef(null);
  const [expanded, setExpanded] = useState(null);

  // Build the timeline once.
  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gsap.set(root, { autoAlpha: 0 });
      tlRef.current = gsap
        .timeline({ paused: true })
        .set(root, { autoAlpha: 1 })
        .fromTo(
          root,
          { clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)", opacity: reduce ? 0 : 1 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: reduce ? 0.3 : 0.9, ease: "power3.inOut" }
        )
        .fromTo(
          "[data-menu-item]",
          { autoAlpha: 0, y: reduce ? 0 : 40 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "power3.out" },
          reduce ? 0 : 0.45
        )
        .fromTo(
          "[data-menu-aside]",
          { autoAlpha: 0, y: reduce ? 0 : 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          reduce ? 0 : 0.6
        );
    }, root);
    return () => ctx.revert();
  }, []);

  // Play / reverse + body lock + focus management.
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return undefined;
    if (open) {
      lastFocus.current = document.activeElement;
      document.body.classList.add("is-locked");
      tl.timeScale(1).play();
      const first = rootRef.current.querySelector("a, button");
      window.setTimeout(() => first?.focus(), 350);
    } else {
      document.body.classList.remove("is-locked");
      tl.timeScale(1.6).reverse();
      if (lastFocus.current && rootRef.current.contains(document.activeElement)) {
        lastFocus.current.focus();
      }
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusables = rootRef.current.querySelectorAll("a[href], button:not([disabled])");
      const list = Array.from(focusables).filter((el) => el.offsetParent !== null);
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={rootRef}
      id="site-menu"
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      inert={!open}
    >
      <div className={`container ${styles.grid}`}>
        <nav aria-label="Menu" className={styles.nav}>
          <ul className={styles.list}>
            <li data-menu-item>
              <Link href="/" className={styles.link} onClick={onClose}>
                Home
              </Link>
            </li>
            {primaryNav.map((item, index) => (
              <li key={item.href} data-menu-item>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={styles.link}
                      aria-expanded={expanded === index}
                      aria-controls={`submenu-${index}`}
                      onClick={() => setExpanded(expanded === index ? null : index)}
                    >
                      {item.label}
                      <span className={`${styles.plus} ${expanded === index ? styles.plusOpen : ""}`} aria-hidden="true" />
                    </button>
                    <ul id={`submenu-${index}`} className={`${styles.sub} ${expanded === index ? styles.subOpen : ""}`}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={styles.subLink}
                            onClick={onClose}
                            tabIndex={expanded === index ? 0 : -1}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className={styles.link} onClick={onClose}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <aside className={styles.aside} data-menu-aside>
          <div className={styles.media}>
            <Image
              src="/assets/images/venue/aerial-villas-2.webp"
              alt="The Blooming Lotus Yoga villas above the jungle in Ubud"
              fill
              sizes="(max-width: 900px) 0px, 40vw"
              className="media-cover"
            />
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Visit</p>
            <p>
              {contact.address.line1}
              <br />
              {contact.address.line2}
            </p>
            <p className={styles.label}>Talk to us</p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <br />
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp {contact.whatsapp}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
