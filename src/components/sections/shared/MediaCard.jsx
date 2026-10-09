import Image from "next/image";
import Link from "next/link";
import styles from "./MediaCard.module.css";

/**
 * Image + title card used for articles, courses, books and podcast episodes.
 * fit="contain" shows product art (book covers, album covers) uncropped.
 * External hrefs open in a new tab.
 */
export default function MediaCard({ href, image, title, meta, text, cta, fit = "cover", ratio = "3 / 2", children }) {
  const external = href && /^https?:/.test(href);
  const body = (
    <>
      {image && (
        <span className={`${styles.media} ${fit === "contain" ? styles.contain : ""} hover-zoom`} style={{ aspectRatio: ratio }}>
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 30vw"
            className={fit === "contain" ? styles.imgContain : "media-cover"}
          />
        </span>
      )}
      {meta && <span className={styles.meta}>{meta}</span>}
      <span className={styles.title}>{title}</span>
      {text && <span className={styles.text}>{text}</span>}
      {children}
      {href && cta && (
        <span className={styles.cta}>
          {cta} <span aria-hidden="true">{external ? "↗" : "→"}</span>
        </span>
      )}
    </>
  );

  if (!href) return <div className={styles.card}>{body}</div>;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.link}`}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={`${styles.card} ${styles.link}`}>
      {body}
    </Link>
  );
}

/**
 * Responsive grid of MediaCards (3 / 2 / 1 columns).
 * Phones: swipe = swipe carousel; dense = compact two-column grid.
 */
export function MediaGrid({ children, columns = 3, swipe = false, dense = false }) {
  return (
    <div
      className={`${styles.grid} ${columns === 4 ? styles.cols4 : ""} ${dense ? styles.dense : ""} ${swipe ? "swipe-mobile" : ""}`}
      data-stagger
    >
      {children}
    </div>
  );
}
