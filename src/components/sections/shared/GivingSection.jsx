import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./GivingSection.module.css";

const posters = [
  { src: "/assets/images/giving/spreading-the-light.webp", alt: "Spreading the Light — the Blooming Lotus Charitable Fund" },
  { src: "/assets/images/giving/empower.webp", alt: "Empower — supporting education for young women" },
  { src: "/assets/images/giving/bali-projects.webp", alt: "Charitable projects supported in Bali" },
  { src: "/assets/images/giving/india-projects.webp", alt: "Charitable projects supported in India" },
];

/** The Blooming Lotus Charitable Fund. */
export default function GivingSection({ id = "giving" }) {
  return (
    <section id={id} className="section section--sage">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Eyebrow tone="light" data-reveal="fade">
            Giving back to the community
          </Eyebrow>
          <h2 className={styles.title} data-split>
            The circle of giving never ends
          </h2>
          <div className={styles.text} data-reveal>
            <p>
              Blooming Lotus Yoga donates a portion of all teacher training and yoga retreat proceeds to charities serving
              impoverished communities in Bali and rural India.
            </p>
            <p>
              Focused on the bare necessities of life — food, clean water, housing and medical care — the Blooming Lotus
              Charitable Fund also supports schools and empowers young women with the gift of education, while helping
              preserve the living wisdom of their yogic culture.
            </p>
            <p>When you join a course or retreat, you are directly contributing to relieve the suffering of countless beings.</p>
          </div>
        </div>
        <ul className={styles.posters} data-stagger>
          {posters.map((p) => (
            <li key={p.src} className={styles.poster}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 45vw, 20vw" className="media-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
