import Image from "next/image";
import PageHero from "@/components/sections/shared/PageHero";
import GivingSection from "@/components/sections/shared/GivingSection";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { charityIntro, charityPosters } from "@/data/community";
import { pageMetadata } from "@/data/site";
import styles from "@/components/sections/community/Community.module.css";

export const metadata = pageMetadata({
  title: "Charitable Activities — The Blooming Lotus Charitable Fund",
  description:
    "Blooming Lotus Yoga donates a portion of all teacher training and retreat proceeds to charities serving impoverished communities in Bali and rural India.",
  path: "/charitable-activities",
  image: "/assets/images/community/smile-white.webp",
});

export default function CharitableActivitiesPage() {
  return (
    <>
      <PageHero
        image="/assets/images/community/smile-white.webp"
        imageAlt="Smiling Blooming Lotus Yoga students dressed in white"
        eyebrow="Charitable activities"
        title="The Blooming Lotus Charitable Fund"
        subtitle="The circle of giving never ends."
      />

      <section id="content" className="section">
        <div className={`container ${styles.split}`}>
          <SectionHeading eyebrow="Giving back" title="An outpouring of pure love and compassion" />
          <div className={styles.prose} data-reveal>
            {charityIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="The fund" title="Where your contribution goes" />
          <ul className={styles.posters} data-stagger>
            {charityPosters.map((p) => (
              <li key={p.src} className="hover-zoom">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 24vw" className="media-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GivingSection id="projects" />

      <CTASection
        image="/assets/images/venue/aerial-villas-2.webp"
        title="Practice with purpose"
        text="When you join our courses and Bali yoga retreats you directly help relieve the suffering of countless beings."
        primary={{ label: "Yoga teacher training", href: "/yoga-teacher-training" }}
        secondary={{ label: "Yoga retreats", href: "/yoga-retreats" }}
      />
    </>
  );
}
