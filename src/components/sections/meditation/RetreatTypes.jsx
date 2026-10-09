import Button from "@/components/ui/Button";
import styles from "./RetreatTypes.module.css";

const types = [
  {
    key: "beginner",
    label: "Beginner Retreat",
    for: "For people new to meditation",
    items: [
      "7-day yoga & meditation retreat",
      "World-class luxury accommodation",
      "2 yoga classes daily",
      "4 lifestyle workshops",
      "2 short meditation sessions daily",
      "2 cultural events",
      "2 meals per day",
    ],
  },
  {
    key: "advanced",
    label: "Advanced Retreat",
    for: "For people with meditation experience",
    items: [
      "7-day silent retreat",
      "On-site or off-site accommodation",
      "1 yoga class daily",
      "Evening dharma talks",
      "4 intensive meditation sessions daily",
      "5 days of complete silence",
      "3 meals per day",
    ],
  },
];

/** Beginner vs advanced meditation retreats. */
export default function RetreatTypes() {
  return (
    <div className={styles.grid} data-stagger>
      {types.map((t) => (
        <article key={t.key} className={`${styles.card} ${styles[t.key]} hover-card`}>
          <p className={styles.for}>{t.for}</p>
          <h3 className={styles.title}>{t.label}</h3>
          <ul className={styles.list}>
            {t.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className={styles.price}>Teachings offered freely · food &amp; accommodation charged</p>
          <Button href="/contact" variant={t.key === "advanced" ? "light" : "dark"}>
            Apply now
          </Button>
        </article>
      ))}
    </div>
  );
}
