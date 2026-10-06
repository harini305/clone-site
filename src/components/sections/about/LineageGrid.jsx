import Image from "next/image";
import { lineage } from "@/data/teachers";
import styles from "./LineageGrid.module.css";

/** The masters who inspire the Blooming Lotus Yoga programmes. */
export default function LineageGrid() {
  return (
    <ul className={`${styles.grid} swipe-mobile`} data-stagger>
      {lineage.map((m) => (
        <li key={m.name} className={styles.item}>
          <div className={styles.portrait}>
            <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="160px" className="media-cover" />
          </div>
          <h3 className={styles.name}>{m.name}</h3>
          <p className={styles.text}>{m.text}</p>
        </li>
      ))}
    </ul>
  );
}
