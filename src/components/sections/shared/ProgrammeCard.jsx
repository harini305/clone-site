import Image from "next/image";
import Link from "next/link";
import styles from "./ProgrammeCard.module.css";

/** Large portrait programme card — the whole card is one link. */
export default function ProgrammeCard({ program, headingLevel: H = "h3" }) {
  return (
    <article className={styles.card}>
      <Link href={program.href} className={styles.link}>
        <div className={styles.media}>
          <Image src={program.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className={styles.img} />
          <span className={styles.price}>
            {program.price}
            {program.priceNote && <small> · {program.priceNote}</small>}
          </span>
        </div>
        <div className={styles.body}>
          <p className={styles.eyebrow}>{program.eyebrow}</p>
          <H className={styles.title}>{program.title}</H>
          <p className={styles.text}>{program.text}</p>
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
    <div className={styles.grid} data-stagger>
      {programs.map((program) => (
        <ProgrammeCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
