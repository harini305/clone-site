import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ShowMore from "@/components/ui/ShowMore";
import styles from "./LocationSection.module.css";

const bullets = [
  "Tropical jungle above a sacred holy river",
  "A private plunge pool in every villa complex",
  "Yoga shala, healing spa & Amrita vegan restaurant",
];

function LotusBullet() {
  return (
    <svg width="22" height="22" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M26 12c4.5 5 6.5 10 6.5 15S30.5 37 26 41c-4.5-4-6.5-9-6.5-14S21.5 17 26 12Z" />
      <path d="M19.5 22.5c-4.2-1.6-8.4-1.6-11.5-.3 1 6.8 5.7 13.5 13.6 17.4M32.5 22.5c4.2-1.6 8.4-1.6 11.5-.3-1 6.8-5.7 13.5-13.6 17.4" />
    </svg>
  );
}

/**
 * Our spectacular location: one tinted card for Ubud with a photo beside it.
 * tone="warm" sets it on the cream background, for alternating page rhythm.
 */
export default function LocationSection({
  id = "location",
  cta = { label: "Explore the retreat center", href: "/retreat-center" },
  tone = "default",
}) {
  return (
    <section id={id} className={`section ${tone === "warm" ? "section--warm" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow="Our location" title="Our spectacular location" align="center" />

        <article className={styles.card} data-reveal>
          <div className={styles.copy}>
            <h3 className={styles.place}>Ubud</h3>
            <p className={styles.tagline}>Jungle • River • Temple</p>
            <p className={styles.text}>
              Blooming Lotus Yoga sits in tropical jungle above a sacred holy river in Ubud, directly across from a
              traditional Balinese temple.
            </p>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>
                  <LotusBullet />
                  {b}
                </li>
              ))}
            </ul>
            <ShowMore>
              <p>
                With affordable prices, an intimate group experience, &amp; luxurious accommodation nestled in a
                spectacular jungle and temple setting, we offer you a <Link href="/yoga-retreats">Bali yoga retreat</Link>{" "}
                experience in a slice of heaven.
              </p>
              <p>
                We are situated in a stunningly beautiful tropical jungle, nested above a sacred holy river, and receiving
                the divine vibrations of a traditional Balinese Temple directly across our way. This oasis is truly a
                blessing from the “Island of the Gods”. Our 200hr. yoga training, yoga retreat and meditation retreat
                accommodations include a private plunge pool, kitchen and living room in each villa complex, and an
                additional large outdoor pool facility to play and rejuvenate in. Our Yoga Shala is built with intention and
                love, and the vegan cuisine is utterly divine. This is luxury living for well-deserved Yogis! Join us for
                this unforgettable experience into the heart of yoga and experience a Bali spiritual retreat like no other.
              </p>
            </ShowMore>
            {cta && (
              <div className={styles.cta}>
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            )}
          </div>
          <div className={`${styles.media} hover-zoom`}>
            <Image
              src="/assets/images/hero/aerial-pool.webp"
              alt="The Blooming Lotus Yoga villas and pool in the jungle above the river in Ubud"
              fill
              sizes="(max-width: 899px) 100vw, 62vw"
              className="media-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
