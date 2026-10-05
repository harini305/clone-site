import PageHero from "@/components/sections/shared/PageHero";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import { RoomGrid } from "@/components/sections/shared/RoomCard";
import CheckList from "@/components/sections/shared/CheckList";
import Gallery from "@/components/sections/shared/Gallery";
import LocationSection from "@/components/sections/shared/LocationSection";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import CTASection from "@/components/sections/shared/CTASection";
import FoodSection from "@/components/sections/retreats/FoodSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { gettingThere, venueGallery, venueHighlights, villaAmenities } from "@/data/venue";
import { retreats } from "@/data/retreats";
import { byCategory } from "@/data/testimonials";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "The Retreat Center in Ubud, Bali",
  description:
    "Eight jungle villas with private plunge pools above the sacred Wos River, the Amrita vegan restaurant, Supraba Spa, the spring-fed Gangga pool and our yoga shala — 15 minutes from Ubud.",
  path: "/retreat-center",
  image: "/assets/images/hero/aerial-villas.webp",
});

// Room types without prices — prices vary by programme.
const roomTypes = retreats.bliss.rooms.map((room) => ({ ...room, price: undefined, deposit: undefined }));

export default function RetreatCenterPage() {
  return (
    <>
      <PageHero
        image="/assets/images/hero/aerial-villas.webp"
        imageAlt="Aerial view of the Blooming Lotus Yoga villas in the Ubud jungle"
        eyebrow="Welcome to Blooming Lotus Yoga in Ubud, Bali"
        title={
          <>
            An exquisitely <em>divine</em> location
          </>
        }
        subtitle="Exotic birdsong, the trickling of a sacred river and sunrise skies painted pink and orange — a slice of heaven for every course and retreat."
        ctas={[
          { label: "Explore the villas", href: "#villas" },
          { label: "View gallery", href: "#gallery", variant: "light" },
        ]}
      />

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/venue/river-flow.webp"
            imageAlt="The Wos River flowing through the jungle below the villas"
            secondaryImage="/assets/images/community/staff.webp"
            secondaryAlt="Balinese staff walking along a garden path"
            eyebrow="Natural tranquility in the village of Mawang"
            title="The tranquility & community of Ubud, Bali"
            parallax
          >
            <p>
              Just 15 minutes from Ubud, you are surrounded by luscious greenery and magnificent views of the Wos River and
              the Tirta Empul Temple of Singapadu Village. You are greeted by a team of kind-hearted Balinese staff who
              cater to all your needs.
            </p>
            <p>
              The holy river below and the powerful vibrations of the traditional temple directly across the river create
              an ideal environment for self-transformation — while keeping costs affordable and numbers intimate.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section id="villas" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="The sanctuary"
            title="Villas, Amrita, spa, pool & shala"
            intro="Fine dining and the healing energy Bali is famous for — all within a few steps of your villa."
          />
          {venueHighlights.map((h, i) => (
            <div key={h.key} id={h.key} className={i ? "block-gap" : undefined}>
              <SplitFeature image={h.image} imageAlt={h.title} eyebrow={h.eyebrow} title={h.title} reverse={i % 2 === 1}>
                <p>{h.text}</p>
              </SplitFeature>
            </div>
          ))}
        </div>
      </section>

      <section id="rooms" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Rooms & villas"
            title="Find your space to unwind"
            intro="Every room enjoys river and jungle views. Villas have 1–3 bedrooms, each with its own plunge pool, living room and fully equipped kitchen."
          />
          <RoomGrid rooms={roomTypes} ctaLabel="Enquire" />
          <div className="block-gap">
            <SectionHeading eyebrow="Villa amenities" title="Everything for a rejuvenating stay" size="small" />
            <CheckList items={villaAmenities} columns={3} />
          </div>
        </div>
      </section>

      <FoodSection id="amrita-food" />

      <section id="gallery" className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="A glimpse of paradise" align="center" />
          <Gallery images={venueGallery} label="Retreat center gallery" />
        </div>
      </section>

      <LocationSection id="location" cta={{ label: "Plan your visit", href: "/contact" }} />

      <section className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Getting there"
            title="Br. Mawang Kaja, Lodtunduh, Ubud"
            intro="In the Gianyar Regency of Bali, about 15 minutes from central Ubud and one hour from Denpasar airport."
          />
          <GlanceGrid items={gettingThere} />
        </div>
      </section>

      <TestimonialsSection testimonials={byCategory("location")} title="What guests say about our location…" />

      <CTASection
        image="/assets/images/venue/main-pool.webp"
        title="Experience this sanctuary for yourself"
        text="Join a teacher training, a 4 or 7-day retreat, or a silent meditation retreat."
        primary={{ label: "Find your retreat", href: "/yoga-retreats" }}
        secondary={{ label: "Teacher training", href: "/yoga-teacher-training" }}
      />
    </>
  );
}
