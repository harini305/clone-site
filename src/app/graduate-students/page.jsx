import PageHero from "@/components/sections/shared/PageHero";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { luminaryDates, luminaryDetails, luminaryIntro, luminaryQuotes } from "@/data/community";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";
import styles from "@/components/sections/community/Community.module.css";

export const metadata = pageMetadata({
  title: "Graduate Students — The Luminary Course",
  description:
    "Blooming Lotus Yoga graduates can return to retake the teacher training free of charge as a Luminary, earning a 100-hour Certificate of Advanced Yoga Teacher Training.",
  path: "/graduate-students",
  image: "/assets/images/community/graduate.webp",
});

export default function GraduateStudentsPage() {
  return (
    <>
      <PageHero
        image="/assets/images/community/graduate.webp"
        imageAlt="A Blooming Lotus Yoga graduate holding their certificate"
        eyebrow="Graduate students"
        title="The Luminary Course"
        subtitle="Return to retake the yoga teacher training free of charge — and go deeper in sadhana and yogic knowledge."
        ctas={[
          { label: "Apply as a luminary", href: "#apply" },
          { label: "See the dates", href: "#dates", variant: "light" },
        ]}
      />

      <section id="content" className="section">
        <div className={`container ${styles.split}`}>
          <SectionHeading eyebrow="For returning students" title="Come back home to your sangha" />
          <div className={styles.prose} data-reveal>
            {luminaryIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="Good to know" title="How the Luminary Course works" />
          <GlanceGrid items={luminaryDetails} columns={4} variant="cards" />
        </div>
      </section>

      <section id="dates" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Dates"
            title="Upcoming teacher trainings"
            intro="Limited spaces are available. Register early to secure your place."
          />
          <GlanceGrid items={luminaryDates} columns={3} variant="cards" />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="In their words" title="What luminaries say about returning" />
          <ul className={styles.quotes} data-stagger>
            {luminaryQuotes.map((q) => (
              <li key={q.slice(0, 24)}>
                <blockquote className="hover-card">“{q}”</blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="container container--narrow text-center">
          <SectionHeading
            align="center"
            eyebrow="Apply"
            title="Yoga teacher training application for returning students"
            intro="Each year we can invite a limited number of luminaries per program, so places are offered through an application. Please spend some focused time, in a calm environment, preparing your application — then contact our team to apply."
          />
          <div className="cta-row cta-row--center" data-reveal>
            <Button href="/contact">Send us a message</Button>
            <Button href={contact.whatsappHref} variant="outline">
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        image="/assets/images/venue/shala-night.webp"
        title="Not a graduate yet?"
        text="Join a 225-hour yoga teacher training and become part of our lifelong community."
        primary={{ label: "Yoga teacher training", href: "/yoga-teacher-training" }}
        secondary={{ label: "Read student stories", href: "/reviews" }}
      />
    </>
  );
}
