import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { retreats } from "@/data/retreats";
import styles from "./RetreatCards.module.css";

/** The two retreat options side by side. */
export default function RetreatCards() {
  return (
    <div className={styles.grid} data-stagger>
      {Object.values(retreats).map((r) => (
        <article key={r.slug} className={styles.card}>
          <div className={styles.media}>
            <Image src={r.cardImage} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.img} />
            <Badge tone="glass" className={styles.badge}>
              {r.badge}
            </Badge>
          </div>
          <div className={styles.body}>
            <p className={styles.duration}>{r.duration}</p>
            <h3 className={styles.title}>{r.name}</h3>
            <p className={styles.price}>
              from <strong>US${r.from}</strong> per person
            </p>
            <ul className={styles.list}>
              <li>Starts {r.starts.toLowerCase()}</li>
              <li>Private &amp; shared villa accommodation</li>
              <li>2 yoga classes daily</li>
              <li>
                {r.workshops} yoga workshop{r.workshops > 1 ? "s" : ""}
              </li>
              <li>Daily meditation classes</li>
              <li>2 meals per day</li>
            </ul>
            <p className={styles.summary}>{r.summary}</p>
            <div className={styles.ctas}>
              <Button href={r.href} variant="dark">
                See dates &amp; prices
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
