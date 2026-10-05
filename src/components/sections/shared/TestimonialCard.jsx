import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ testimonial, tone = "light" }) {
  return (
    <figure className={`${styles.card} ${styles[tone]}`}>
      <div className={styles.stars} aria-label="5 out of 5 stars" role="img">
        ★★★★★
      </div>
      <h3 className={styles.title}>{testimonial.title}</h3>
      <blockquote className={styles.quote}>
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <strong>{testimonial.name}</strong>
          {testimonial.meta && <span className={styles.meta}>{testimonial.meta}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
