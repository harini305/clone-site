"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/data/navigation";
import { contact } from "@/data/contact";
import { useHeaderState } from "@/animations/useHeaderState";
import MenuOverlay from "./MenuOverlay";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { scrolled, hidden } = useHeaderState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={[
          styles.header,
          scrolled ? styles.scrolled : "",
          hidden && !menuOpen ? styles.hidden : "",
          menuOpen ? styles.menuOpen : "",
        ].join(" ")}
      >
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="Blooming Lotus Yoga — home">
            <Image
              src="/assets/logos/wordmark.png"
              alt="Blooming Lotus Yoga"
              width={1196}
              height={131}
              priority
              sizes="220px"
            />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {primaryNav.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="m2 3.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <ul className={styles.dropdown}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a
              className={styles.cta}
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us
            </a>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={styles.menuLabel}>{menuOpen ? "Close" : "Menu"}</span>
              <span className={styles.burger} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
