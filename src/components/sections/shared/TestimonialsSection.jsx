import Carousel from "@/components/ui/Carousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialsSection.module.css";

/** Testimonial carousel with the 4.9 rating summary and verify links. */
export default function TestimonialsSection({
  testimonials,
  eyebrow = "Student Stories",
  title = "What students are saying…",
  tone = "warm",
  id,
}) {
  const dark = tone === "dark";
  return (
    <section id={id} className={`section ${dark ? "section--dark" : "section--warm"}`}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading eyebrow={eyebrow} title={title} tone={dark ? "light" : "dark"} />
          <div className={styles.rating} data-reveal>
            <p className={styles.score}>
              {contact.reviews.rating}
              <span>/5</span>
            </p>
            <p className={styles.ratingText}>Average rating on Google and Tripadvisor</p>
            <p className={styles.verify}>
              <a href={contact.reviews.google} target="_blank" rel="noopener noreferrer">
                Verify Google reviews
              </a>
              <a href={contact.reviews.tripadvisor} target="_blank" rel="noopener noreferrer">
                Verify Tripadvisor reviews
              </a>
            </p>
          </div>
        </div>
        <div data-reveal>
          <Carousel label="Student testimonials" tone={dark ? "light" : "dark"}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} tone={dark ? "dark" : "light"} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
