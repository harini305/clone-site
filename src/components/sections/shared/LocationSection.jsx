import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { locationFacts } from "@/data/venue";
import styles from "./LocationSection.module.css";

const strip = [
  { src: "/assets/images/venue/gangga-pool.webp", alt: "The Gangga pool surrounded by jungle" },
  { src: "/assets/images/venue/water-temple.webp", alt: "The sacred water temple across the river" },
  { src: "/assets/images/rooms/bedroom-view.webp", alt: "A villa bedroom opening onto the jungle" },
  { src: "/assets/images/venue/dining-view.webp", alt: "The view from Amrita restaurant" },
];

/** Immersive Bali / Ubud location section with parallax backdrop. */
export default function LocationSection({ id = "location", cta = { label: "Explore the retreat center", href: "/retreat-center" } }) {
  return (
    <section id={id} className={styles.location}>
      <div className={styles.bg} data-parallax="12">
        <Image src="/assets/images/hero/aerial-pool.webp" alt="" fill sizes="100vw" className="media-cover" data-parallax-target />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <Eyebrow tone="light" data-reveal="fade">
            Our spectacular location
          </Eyebrow>
          <h2 className={styles.title} data-split>
            A slice of heaven above a sacred river in Ubud
          </h2>
          <p className={styles.text} data-reveal>
            Blooming Lotus Yoga sits in tropical jungle above a sacred holy river, directly across from a traditional
            Balinese water temple. Every villa complex has a private plunge pool, kitchen and living room — with a large
            outdoor pool, a yoga shala, a healing spa and the Amrita vegan restaurant.
          </p>
          <ul className={styles.facts} data-stagger>
            {locationFacts.map((f) => (
              <li key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
          {cta && (
            <div className="cta-row" data-reveal>
              <Button href={cta.href} variant="light">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className={`container ${styles.stripWrap}`}>
        <ul className={styles.strip} data-stagger>
          {strip.map((img) => (
            <li key={img.src} className={styles.stripItem}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 700px) 70vw, 25vw" className="media-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
