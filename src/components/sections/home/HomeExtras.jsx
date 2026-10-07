import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/contact/ContactForm";
import MediaCard from "@/components/sections/shared/MediaCard";
import { featuredOn, resources } from "@/data/resources";
import { contact } from "@/data/contact";
import styles from "./HomeExtras.module.css";

/** “We’re featured on” — the four press logos from the source homepage. */
export function FeaturedOn() {
  return (
    <section className={`section section--tight section--plain ${styles.featured}`} aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading" className={styles.featuredTitle} data-reveal>
          We’re featured on
        </h2>
        <ul className={styles.logos} data-stagger>
          {featuredOn.map((logo) => (
            <li key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={270} height={94} sizes="200px" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Resources carousel — BLISS! Magazine posts. */
export function Resources() {
  return (
    <section className="section section--tight" aria-labelledby="resources-heading">
      <div className="container">
        <SectionHeading
          layout="split"
          eyebrow="Read & explore"
          title={<span id="resources-heading">BLISS! Magazine</span>}
          intro="Articles on yoga, meditation and the yogic way of life from the Blooming Lotus Yoga blog."
        />
        <div data-reveal>
          <Carousel label="BLISS! Magazine articles">
            {resources.map((post) => (
              <MediaCard key={post.href} href={post.href} image={post.image} title={post.title} cta="Read the article" />
            ))}
          </Carousel>
        </div>
        <div className="cta-row" data-reveal>
          <Button href="/blog" variant="outline">
            View all articles
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Closing: a contact band with the real Blooming Lotus route (WhatsApp, for
 * new bookings & customer care), then the enquiry form.
 */
export function ContactClosing() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.band} data-reveal>
          <h2 id="contact-heading" className={styles.bandTitle}>
            Let’s find your path
          </h2>
          <p className={styles.bandText}>
            Not sure which training or retreat is right for you? Message us on WhatsApp for new bookings and customer care.{" "}
            {contact.responseTime}
          </p>
          <div className="cta-row cta-row--center">
            <Button href={contact.whatsappHref} size="lg">
              Message us on WhatsApp
            </Button>
            <Button href={`mailto:${contact.email}`} variant="outline" size="lg">
              Email us
            </Button>
          </div>
        </div>

        <div className={styles.form}>
          <SectionHeading
            align="center"
            eyebrow="Contact us"
            title="Questions? Feel free to contact us…"
            intro="We respond to all inquiries within 24 hours."
          />
          <div className={styles.formCard} data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
