import Image from "next/image";
import Link from "next/link";
import styles from "./ProgrammeCard.module.css";

/**
 * Full-image programme card: price tag pill, title and location overlaid on
 * the photo. The whole card is one link.
 */
export default function ProgrammeCard({ program, headingLevel: H = "h3" }) {
  return (
    <article className={styles.card}>
      <Link href={program.href} className={styles.link}>
        <Image
          src={program.image}
          alt=""
          fill
          // Landscape photos fill a tall card, so they draw far wider than it.
          sizes="(max-width: 699px) 170vw, (max-width: 1099px) 100vw, 66vw"
          className={styles.img}
        />
        <span className={styles.shade} aria-hidden="true" />
        <div className={styles.body}>
          <span className={styles.price}>
            {program.price}
            {program.priceNote && <small> · {program.priceNote}</small>}
          </span>
          <H className={styles.title}>{program.title}</H>
          <p className={styles.location}>
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
              <path d="M6 13s5-4.6 5-8.2A5 5 0 0 0 1 4.8C1 8.4 6 13 6 13Z" fill="currentColor" />
              <circle cx="6" cy="5" r="1.7" fill="#1b1f1b" />
            </svg>
            {program.location}
          </p>
          <span className={styles.cta}>
            {program.cta}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ProgrammeGrid({ programs }) {
  return (
    <div className={`${styles.grid} swipe-mobile`} data-stagger>
      {programs.map((program) => (
        <ProgrammeCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
