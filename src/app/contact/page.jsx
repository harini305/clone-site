import PageHero from "@/components/sections/shared/PageHero";
import CTASection from "@/components/sections/shared/CTASection";
import ContactForm from "@/components/sections/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Blooming Lotus Yoga in Lodtunduh, Ubud, Bali — email admin@blooming-lotus-yoga.com or WhatsApp +62 819 9903 6200. We reply to all enquiries within 24 hours.",
  path: "/contact",
  image: "/assets/images/rooms/private-villa.webp",
});

const purposes = [
  {
    title: "Yoga teacher training",
    text: "Speak with Mandy, one of our lead teachers, about whether the course is right for you.",
    label: "WhatsApp a teacher",
    href: contact.whatsappTeacherHref,
  },
  {
    title: "Yoga retreats",
    text: "Check availability for a 4-day or 7-day retreat, room options or group bookings.",
    label: "Message bookings",
    href: contact.whatsappHref,
  },
  {
    title: "Meditation retreats",
    text: "Apply for a beginner or advanced silent retreat, or ask about the teachings.",
    label: "Email us",
    href: `mailto:${contact.email}?subject=${encodeURIComponent("Meditation retreat application")}`,
  },
  {
    title: "General enquiries",
    text: "Questions about payments, travel, visas or anything else — we’re here to help.",
    label: "Email us",
    href: `mailto:${contact.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/assets/images/rooms/private-villa.webp"
        imageAlt="A villa living room opening onto a private pool and the jungle"
        eyebrow="Contact us"
        title={
          <>
            We’re here <em>to help</em>
          </>
        }
        subtitle={`Feel free to contact our award-winning support team. ${contact.responseTime}`}
        size="compact"
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <SectionHeading eyebrow="Send a message" title="Questions? Feel free to contact us…" size="small" />
            <div data-reveal>
              <ContactForm />
            </div>
          </div>

          <aside className={styles.aside} aria-label="Contact details">
            <div className={styles.card} data-reveal>
              <Eyebrow>Our retreat location in Bali</Eyebrow>
              <h2 className={styles.cardTitle}>{contact.name}</h2>
              <address className={styles.address}>
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.country}
              </address>
              <dl className={styles.details}>
                <div>
                  <dt>Email · general enquiries</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp · new bookings & customer care</dt>
                  <dd>
                    <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                      {contact.whatsapp}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone · admin office</dt>
                  <dd>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </dd>
                </div>
              </dl>
              <a className={styles.mapLink} href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
                Open in Google Maps →
              </a>
            </div>
            <div className={`${styles.card} ${styles.cardMuted}`} data-reveal>
              <Eyebrow tone="brown">{contact.hongKong.role} · Hong Kong</Eyebrow>
              <p className={styles.hkName}>{contact.hongKong.name}</p>
              <p className={styles.hkAddress}>{contact.hongKong.address}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="How can we help?" title="Reach the right person, faster" />
          <ul className={styles.purposes} data-stagger>
            {purposes.map((p) => (
              <li key={p.title} className={styles.purpose}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href={p.href} {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {p.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="map-heading">
        <div className="container">
          <SectionHeading eyebrow="Location" title={<span id="map-heading">Find us in Lodtunduh, Ubud</span>} intro="About 15 minutes from central Ubud and one hour from Denpasar airport (DPS)." />
          <div className={styles.map} data-reveal-image>
            <iframe
              title="Map showing Blooming Lotus Yoga in Lodtunduh, Ubud, Bali"
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        image="/assets/images/venue/water-temple.webp"
        title="Prefer to talk it through?"
        text="WhatsApp a teacher to schedule a call — choosing a training or retreat is a big decision."
        primary={{ label: "WhatsApp a teacher", href: contact.whatsappTeacherHref }}
        secondary={{ label: "Read reviews", href: "/reviews" }}
      />
    </>
  );
}
