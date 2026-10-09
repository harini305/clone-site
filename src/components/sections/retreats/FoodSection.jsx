import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CheckList from "@/components/sections/shared/CheckList";
import { foodGallery } from "@/data/venue";
import styles from "./FoodSection.module.css";

/** Amrita vegan restaurant: copy, highlights, menu download and food imagery. */
export default function FoodSection({ meals = "breakfast and dinner", id = "food" }) {
  return (
    <section id={id} className="section section--warm">
      <div className={`container ${styles.grid}`}>
        <div>
          <Image src="/assets/logos/amrita.png" alt="" width={101} height={101} className={styles.logo} data-reveal="fade" />
          <SectionHeading
            eyebrow="Where you will eat"
            title="Organic, vegan & made with love"
            intro={`All meals are organic and vegan, served at our on-site Amrita restaurant — no meat, dairy or eggs. Your package includes ${meals} each day; following the yogic principle of ahimsa, the food is good for you, good for the planet and good for all its creatures.`}
          />
          <CheckList
            columns={1}
            items={[
              "Light breakfast of seasonal fruits, granola & fresh coconut yogurt",
              "Set dinner menu: soup, salad, main course & dessert",
              "Consciously designed to support your yoga practice",
              "We can accommodate low-gluten diets & peanut allergies",
            ]}
          />
          <div className="cta-row" data-reveal>
            <Button href="/assets/docs/amrita-menu.pdf" variant="dark">
              Download Amrita menu
            </Button>
          </div>
        </div>
        <ul className={styles.gallery} data-stagger>
          {foodGallery.map((f) => (
            <li key={f.src} className={`${styles.tile} hover-zoom`}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 900px) 50vw, 22vw" className="media-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
