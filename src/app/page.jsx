import HomeHero from "@/components/sections/home/HomeHero";
import HomeStory from "@/components/sections/home/HomeStory";
import { ContactClosing, FeaturedOn, Resources } from "@/components/sections/home/HomeExtras";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import { ProgrammeGrid } from "@/components/sections/shared/ProgrammeCard";
import LocationSection from "@/components/sections/shared/LocationSection";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import AccreditationSection from "@/components/sections/shared/AccreditationSection";
import GivingSection from "@/components/sections/shared/GivingSection";
import VideoEmbed from "@/components/sections/shared/VideoEmbed";
import GuideCTA from "@/components/sections/shared/GuideCTA";
import FAQSection from "@/components/sections/shared/FAQSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ShowMore from "@/components/ui/ShowMore";
import { homeFacts, homeGlanceIntro, programs } from "@/data/programs";
import { featuredTestimonials } from "@/data/testimonials";
import { homeFaqs, peopleAlsoAsk } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = {
  ...pageMetadata({
    path: "/",
    description:
      "Blooming Lotus Yoga in Ubud, Bali — a heart-based, holistic yoga school offering a 225-hour Yoga Alliance teacher training from US$2,770, 4 & 7-day yoga retreats from US$350 and silent meditation retreats.",
  }),
  title: { absolute: "Blooming Lotus Yoga | Yoga Teacher Training & Retreats in Ubud, Bali" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section section--warm" aria-labelledby="glance-heading">
        <div className="container">
          <SectionHeading
            layout="split"
            eyebrow="At a glance"
            title={<span id="glance-heading">Bali yoga teacher training &amp; retreats in Ubud</span>}
            intro={homeGlanceIntro}
          />
          <GlanceGrid items={homeFacts} columns={4} variant="cards" swipe />
        </div>
      </section>

      <HomeStory />

      <section id="courses" className="section section--warm">
        <div className="container">
          <SectionHeading
            layout="split"
            eyebrow="Courses & retreats"
            title="Find your next retreat or training course"
            intro="Our 225-hour training takes a maximum of 18 students. 4-day retreats start Sundays and Wednesdays, 7-day retreats start Sundays — and both welcome complete beginners."
          />
          <ProgrammeGrid programs={programs} />
        </div>
      </section>

      <AccreditationSection title={null} showTrust={false} />

      <LocationSection />

      <section id="online-courses" className="section section--warm">
        <div className="container">
          <SplitFeature
            reverse
            image="/assets/images/meditation/namaste-pair.webp"
            imageAlt="Two students with hands in prayer at the end of a practice"
            eyebrow="Vidya online learning"
            title="Online yoga trainings and courses"
            cta={{ label: "Explore online courses", href: "/continuing-education", variant: "primary" }}
          >
            <p>
              Discover the future of online yoga training and self-growth with our new collection of illuminating online
              courses, audio recordings, and eBooks that will help you deepen your practice &amp; understanding of the
              depths of yoga in the comfort of your own home.
            </p>
            <ShowMore>
              <p>
                “Vidya” is Blooming Lotus Yoga’s integrated suite of online resources full of self-transformation
                techniques and learning tools aimed at enhancing the study of all facets of yogic knowledge. This holistic
                collection of in-depth learning resources encompasses the wisdom of yoga, tantra, Vedanta, as well as the
                greater Vedic tradition of which they are a part, to accelerate the integration of yoga into every facet of
                your life.
              </p>
              <p>
                Spread out over numerous online courses, ebooks &amp; audio recordings, these comprehensive guides will
                allow you to climb the great mountain of Self-Realization one step at a time. Combining both theory and
                practice, the Vidya collection allows you to absorb the perennial wisdom of classical yoga while learning
                empowering techniques that can awaken your highest potential.
              </p>
            </ShowMore>
          </SplitFeature>
        </div>
      </section>

      <section className="section" aria-labelledby="video-heading">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Watch"
            title={<span id="video-heading">Experience oneness</span>}
            intro="A journey into the essence of Blooming Lotus Yoga."
          />
          {/* Source thumbnail is 510px wide, so it is shown close to native size. */}
          <div style={{ maxWidth: 600, marginInline: "auto" }}>
            <VideoEmbed
              youtubeId="u7wAg0IAd3Y"
              poster="/assets/images/video/experience-oneness.webp"
              title="Experience Oneness – A Journey Into the Essence of Blooming Lotus Yoga"
              showLabel={false}
            />
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={featuredTestimonials} />

      <FeaturedOn />

      <GivingSection />

      <Resources />

      <GuideCTA />

      <FAQSection faqs={homeFaqs} defaultOpen={null} secondary={{ title: "People also ask…", items: peopleAlsoAsk }} />

      <ContactClosing />
    </>
  );
}
