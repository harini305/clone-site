import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { awards, credentials, registrationId, trustPoints } from "@/data/accreditation";
import { contact } from "@/data/contact";
import styles from "./AccreditationSection.module.css";

/**
 * Accreditation card: badge row, one paragraph and the verify button in a
 * single white card. Inner pages can add a heading and the trust points.
 */
export default function AccreditationSection({
  id = "accreditation",
  eyebrow = "Accreditation",
  title = "A trusted global leader in yoga training for over 10 years",
  showTrust = true,
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <SectionHeading eyebrow={eyebrow} title={title} align="center" />}

        <div className={styles.card} data-reveal>
          <ul className={styles.badges}>
            {[...credentials, ...awards].map((b) => (
              <li key={b.label}>
                <Image src={b.src} alt={`${b.label}: ${b.text}`} width={140} height={140} sizes="96px" />
              </li>
            ))}
          </ul>
          <p className={styles.text}>
            Blooming Lotus Yoga is a Yoga Alliance Registered Yoga School (RYS 200) and a Yoga Alliance Continuing
            Education Provider (YACEP). Graduates are eligible to register as RYT-200.
          </p>
          <p className={styles.id}>
            RYS 200 • E-RYT 500 • YACEP · Registration ID: {registrationId}
          </p>
          <Button href={contact.yogaAllianceHref}>Verify credentials</Button>
        </div>

        {showTrust && (
          <ul className={styles.trust} data-stagger>
            {trustPoints.map((point) => (
              <li key={point}>
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="m6.5 11.2 3 3 6-6.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
