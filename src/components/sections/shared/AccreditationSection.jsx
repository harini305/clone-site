import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { awards, credentials, registrationId, trustPoints } from "@/data/accreditation";
import { contact } from "@/data/contact";
import styles from "./AccreditationSection.module.css";

/** Yoga Alliance credentials, awards and trust points. */
export default function AccreditationSection({
  id = "accreditation",
  eyebrow = "Accreditation",
  title = "A trusted global leader in yoga training for over 10 years",
  showTrust = true,
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="center"
          intro="Blooming Lotus Yoga is a Yoga Alliance Registered Yoga School (RYS 200) and Continuing Education Provider (YACEP)."
        />

        <ul className={styles.badges} data-stagger>
          {[...credentials, ...awards].map((b) => (
            <li key={b.label} className={styles.badge}>
              <div className={styles.badgeImg}>
                <Image src={b.src} alt="" width={140} height={140} />
              </div>
              <p className={styles.badgeLabel}>{b.label}</p>
              <p className={styles.badgeText}>{b.text}</p>
            </li>
          ))}
        </ul>

        <p className={styles.verify} data-reveal>
          Yoga Alliance Registration ID: {registrationId} ·{" "}
          <a href={contact.yogaAllianceHref} target="_blank" rel="noopener noreferrer">
            Verify credentials →
          </a>
        </p>

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
