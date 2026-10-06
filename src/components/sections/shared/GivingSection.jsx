import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import Eyebrow from "@/components/ui/Eyebrow";
import ShowMore from "@/components/ui/ShowMore";
import styles from "./GivingSection.module.css";

// Photos and captions from “Spreading the Light”, the source article on the
// charitable projects the fund supports.
const STORY = "/blog/spreading-the-light";
const photos = [
  {
    src: "/assets/images/giving/backpacks.webp",
    alt: "Ni Komang Sriani saying thank you to Blooming Lotus Yoga students",
    caption: "Ni Komang Sriani saying thanks to the participants of our retreats and courses",
  },
  {
    src: "/assets/images/giving/school.webp",
    alt: "Demulih Kindergarten in Bali after its renovation",
    caption: "The new Blooming Lotus School: Demulih Kindergarten, renovated",
  },
  {
    src: "/assets/images/giving/food-aid.webp",
    alt: "Food relief packages for families in Bali",
    caption: "Pandemic food relief for families in Bali",
  },
  {
    src: "/assets/images/giving/disaster-relief.webp",
    alt: "Disaster relief in Indonesia supported by Blooming Lotus Yoga",
    caption: "Disaster relief in Indonesia",
  },
  {
    src: "/assets/images/giving/donations.webp",
    alt: "Charitable donations from Blooming Lotus Yoga",
    caption: "Some of the projects you help us support",
  },
];

/** Giving back: photo-background band, then a captioned gallery of charity photos. */
export default function GivingSection({ id = "giving" }) {
  return (
    <section id={id} className={styles.band}>
      <div className={styles.bg} aria-hidden="true">
        <Image src="/assets/images/meditation/rice-terrace.webp" alt="" fill sizes="100vw" className="media-cover" />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className="container">
        <div className={styles.head}>
          <div>
            <Eyebrow tone="light" data-reveal="fade">
              Charitable fund
            </Eyebrow>
            <h2 className={styles.title} data-split>
              Giving back to the community
            </h2>
          </div>
          <div className={styles.text} data-reveal>
            <p>
              Blooming Lotus Yoga donates a portion of all teacher training and yoga retreat proceeds to charities serving
              impoverished communities in Bali and rural India.
            </p>
            <ShowMore tone="light">
              <p>
                The aim of yoga is to return back to oneness and to dissolve the concept of self and other. Ultimately, the
                practice of yoga asana, meditation, and the devotional practices of prayer and offerings lead us to
                experience a love for all of creation.
              </p>
              <p>
                Spreading the dharma, in order to alleviate the deepest causes of suffering through yoga and meditation, is
                one part of our mission. Yet, as we spread the teachings of liberation to those who join us, we also give
                back to our brothers and sisters who are lacking the most basic human needs – food, shelter, health care,
                and education.
              </p>
              <p>
                As such, significant portions of all proceeds from our yoga teacher training and yoga retreats are donated
                to charities in Bali, Indonesia and India. Many charitable projects have touched our hearts, and here are
                just some of the{" "}
                <Link href={STORY}>charitable projects</Link>{" "}
                you help us support.
              </p>
            </ShowMore>
          </div>
        </div>

        <div className={styles.gallery} data-reveal>
          <Carousel label="Charitable projects" tone="light">
            {photos.map((p) => (
              <figure key={p.src} className={styles.photo}>
                <div className={styles.frame}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 30vw" className="media-cover" />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
