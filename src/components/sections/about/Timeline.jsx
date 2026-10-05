import styles from "./Timeline.module.css";

/** Vertical editorial timeline. items: [{ marker, title, text }] */
export default function Timeline({ items }) {
  return (
    <ol className={styles.timeline} data-stagger>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.marker}>{item.marker}</span>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
