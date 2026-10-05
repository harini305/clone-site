import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./ForYouSection.module.css";

/** Two honest lists: who this is for, and who it isn’t for. */
export default function ForYouSection({ id = "for-you", forYou, notForYou, noun = "course" }) {
  return (
    <section id={id} className="section section--warm">
      <div className="container">
        <SectionHeading eyebrow="Is it right for you?" title={`Who this ${noun} is for`} align="center" />
        <div className={styles.grid}>
          <div className={`${styles.col} ${styles.yes}`} data-reveal>
            <h3 className={styles.title}>This {noun} is for you if…</h3>
            <ul className={styles.list}>
              {forYou.map((item) => (
                <li key={item}>
                  <span className={styles.icon} aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.col} ${styles.no}`} data-reveal data-delay="0.15">
            <h3 className={styles.title}>It’s not really for you if…</h3>
            <ul className={styles.list}>
              {notForYou.map((item) => (
                <li key={item}>
                  <span className={styles.icon} aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
