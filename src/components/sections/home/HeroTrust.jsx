import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { credentials } from "@/data/accreditation";
import { contact } from "@/data/contact";
import styles from "./HeroTrust.module.css";

/** Frosted trust cards along the bottom of the home hero. */
export default function HeroTrust() {
  return (
    <ul className={styles.row} aria-label="Accreditation and ratings">
      {credentials.map((c) => (
        <li key={c.label} data-hero-item>
          <GlassCard className={styles.card}>
            <Image src={c.src} alt="" width={44} height={44} className={styles.badge} />
            <span>
              <strong>{c.label}</strong>
              <small>{c.text}</small>
            </span>
          </GlassCard>
        </li>
      ))}
      <li data-hero-item>
        <GlassCard className={styles.card}>
          <span className={styles.score}>{contact.reviews.rating}</span>
          <span>
            <strong>★★★★★</strong>
            <small>Google &amp; Tripadvisor</small>
          </span>
        </GlassCard>
      </li>
    </ul>
  );
}
