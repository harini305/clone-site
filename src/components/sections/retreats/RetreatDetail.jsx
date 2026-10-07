import Link from "next/link";
import PageHero from "@/components/sections/shared/PageHero";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import FeatureGrid from "@/components/sections/shared/FeatureGrid";
import CheckList from "@/components/sections/shared/CheckList";
import LocationSection from "@/components/sections/shared/LocationSection";
import { RoomGrid } from "@/components/sections/shared/RoomCard";
import RoomComparison from "@/components/sections/shared/RoomComparison";
import ForYouSection from "@/components/sections/shared/ForYouSection";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import FAQSection from "@/components/sections/shared/FAQSection";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FoodSection from "./FoodSection";
import UpcomingStarts from "./UpcomingStarts";
import { retreatAmenities, retreatFeatures, retreatForYou, retreatInclusions, retreatNotForYou, retreats } from "@/data/retreats";
import { contact } from "@/data/contact";
import styles from "./RetreatDetail.module.css";

/** Shared template for the 4-Day Escape and 7-Day Bliss retreat pages. */
export default function RetreatDetail({ retreatKey, testimonials, faqs, intro, splitImage, splitAlt }) {
  const r = retreats[retreatKey];
  const other = retreatKey === "escape" ? retreats.bliss : retreats.escape;
  const inclusions = [
    ...retreatInclusions,
    `${r.workshops} transformative workshop${r.workshops > 1 ? "s" : ""}`,
    "Accommodation in a jungle villa",
  ];

  return (
    <>
      <PageHero
        image={r.image}
        imageAlt=""
        eyebrow={`${r.duration} · ${r.starts}`}
        title={
          <>
            {r.name} <em>Retreat</em>
          </>
        }
        subtitle={`All-inclusive in Ubud, Bali — now from US$${r.from} per person (limited-time saving on the regular US$${r.wasFrom}).`}
        ctas={[
          { label: "See rooms & prices", href: "#rooms" },
          { label: "Upcoming dates", href: "#dates", variant: "light" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.priceStrip} data-reveal>
            <p>
              <span className={styles.from}>from</span>
              <span className={styles.amount}>US${r.from}</span>
              <span className={styles.was}>US${r.wasFrom}</span>
            </p>
            <p className={styles.priceNote}>
              per person · accommodation, 2 meals a day &amp; all classes · {r.checkIn}
            </p>
            <Button href="#rooms">Book now</Button>
          </div>

          <SectionHeading eyebrow="At a glance" title={intro} />
          <GlanceGrid items={r.glance} />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SplitFeature
            image={splitImage}
            imageAlt={splitAlt}
            portrait
            eyebrow="The program"
            title="Deepen your practice & immerse in the magic of Bali"
            cta={{ label: `Compare with the ${other.short}`, href: other.href, variant: "outline" }}
          >
            <p>{r.summary}</p>
            <p>
              While immersing in the peaceful, pristine surroundings of our luxury villas, soak in the exotic culture of
              Bali — art, dance, music, ceremonies, temples, beaches, volcano treks and waterfalls. If you’re looking for
              a stress-free holiday in a loving, nurturing community, this retreat is a rare gem of inner peace.
            </p>
          </SplitFeature>
          <div className="block-gap">
            <FeatureGrid items={retreatFeatures} columns={4} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.inclusions}`}>
          <SectionHeading
            eyebrow="All-inclusive packages include"
            title="Everything taken care of"
            intro="Lunch is not included, so you can explore Ubud on the free shuttle or order from the à la carte vegan menu."
          />
          <CheckList items={inclusions} />
        </div>
      </section>

      <LocationSection />

      <FoodSection />

      <section id="rooms" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Step 2 · Choose your room"
            title="Rooms & villas"
            intro={`All prices are per person for the full ${r.duration} retreat. Pay a 50% deposit now to save your space; free cancellation & change of dates (see FAQ). Prices exclude 5.6% tax & service fees.`}
          />
          <RoomComparison rooms={r.rooms} label={`Compare ${r.short} rooms`} />
          <RoomGrid rooms={r.rooms} ctaLabel="Book this room" />
          <p className={styles.roomsNote} data-reveal>
            The Shared Riverside Room and Family Villa are currently sold out. Need group options?{" "}
            <Link href="/contact">Contact us to customise your retreat.</Link>
          </p>
          <div className="block-gap">
            <h3 className={styles.subhead} data-reveal>
              Discover even more great features
            </h3>
            <CheckList items={retreatAmenities} />
          </div>
        </div>
      </section>

      <section id="dates" className="section section--warm">
        <div className={`container ${styles.dates}`}>
          <div>
            <SectionHeading
              eyebrow="Step 1 · Choose your date"
              title="Upcoming start dates"
              intro={r.checkIn}
            />
            <div className="cta-row" data-reveal>
              <Button href={contact.whatsappHref} variant="dark">
                Check availability
              </Button>
              <Button href="/assets/docs/retreat-welcome-guide.pdf" variant="text">
                Download the welcome guide
              </Button>
            </div>
          </div>
          <div data-reveal>
            <UpcomingStarts startDays={r.startDays} nights={r.nights} label={`${r.starts}`} />
          </div>
        </div>
      </section>

      <ForYouSection forYou={retreatForYou} notForYou={retreatNotForYou} noun="retreat" />

      <TestimonialsSection testimonials={testimonials} title="What people are saying…" tone="dark" />

      <FAQSection faqs={faqs} />

      <CTASection
        image={r.ctaImage}
        eyebrow={r.duration}
        title={`Book your ${r.name} retreat`}
        text={`From US$${r.from} per person. Starts ${r.starts.replace("Every", "every")}, for a maximum of 16 guests.`}
        primary={{ label: "Choose your room", href: "#rooms" }}
        secondary={{ label: "Speak to us first", href: "/contact" }}
      />
    </>
  );
}
