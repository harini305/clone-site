import Eyebrow from "./Eyebrow";
import styles from "./SectionHeading.module.css";

/**
 * Eyebrow + editorial heading + optional intro.
 * align: left | center ; tone: dark | light
 * layout: stacked | split (eyebrow + heading left, intro right)
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  align = "left",
  tone = "dark",
  size = "default",
  layout = "stacked",
  className = "",
  children,
}) {
  return (
    <header className={`${styles.heading} ${styles[align]} ${styles[tone]} ${styles[size]} ${styles[layout]} ${className}`}>
      <div className={styles.lead}>
        {eyebrow && (
          <Eyebrow tone={tone === "light" ? "light" : "brown"} data-reveal="fade">
            {eyebrow}
          </Eyebrow>
        )}
        <Tag className={styles.title} data-split>
          {title}
        </Tag>
      </div>
      {(intro || children) && (
        <div className={styles.side}>
          {intro && (
            <p className={styles.intro} data-reveal>
              {intro}
            </p>
          )}
          {children}
        </div>
      )}
    </header>
  );
}
