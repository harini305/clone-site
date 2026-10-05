import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { contact } from "@/data/contact";
import { credentials, registrationId } from "@/data/accreditation";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Image
            src="/assets/logos/lotus-mark.png"
            alt=""
            width={340}
            height={233}
            className={styles.mark}
          />
          <p className={styles.tagline}>
            A heart-based, holistic yoga school &amp; lifelong community in Ubud, Bali.
          </p>
          <address className={styles.address}>
            {contact.address.line1}
            <br />
            {contact.address.line2}, {contact.address.country}
          </address>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp {contact.whatsapp}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref}>{contact.phone} · Admin office</a>
            </li>
          </ul>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} className={styles.col} aria-label={group.title}>
            <h2 className={styles.colTitle}>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  {link.href.endsWith(".pdf") ? (
                    <a href={link.href} target="_blank" rel="noopener">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={`container ${styles.middle}`}>
        <div className={styles.badges}>
          {credentials.map((badge) => (
            <Image key={badge.label} src={badge.src} alt={`${badge.label} — ${badge.text}`} width={72} height={72} />
          ))}
          <p>
            Yoga Alliance Certified · RYS 200 · E-RYT 500 · YACEP
            <br />
            Registration ID: {registrationId} ·{" "}
            <a href={contact.yogaAllianceHref} target="_blank" rel="noopener noreferrer">
              Verify credentials
            </a>
          </p>
        </div>
        <ul className={styles.social} aria-label="Social media">
          {contact.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} Blooming Lotus Yoga Limited ·{" "}
          <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
        </p>
        <p className={styles.disclaimer}>
          Training project — a design concept built with content from blooming-lotus-yoga.com. Not the official
          Blooming Lotus Yoga website; please book via{" "}
          <a href="https://www.blooming-lotus-yoga.com/" target="_blank" rel="noopener noreferrer">
            blooming-lotus-yoga.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
