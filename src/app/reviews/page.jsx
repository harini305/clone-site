import PageHero from "@/components/sections/shared/PageHero";
import ReviewsBoard from "@/components/sections/shared/ReviewsBoard";
import StatsBand from "@/components/sections/shared/StatsBand";
import AccreditationSection from "@/components/sections/shared/AccreditationSection";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviewCategories, testimonials } from "@/data/testimonials";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Reviews & Student Stories",
  description:
    "Read reviews from Blooming Lotus Yoga teacher training graduates, retreat guests and meditators — rated 4.9 on Google and Tripadvisor.",
  path: "/reviews",
  image: "/assets/images/venue/loungers.webp",
});

const stats = [
  { value: "4.9", label: "Google rating", text: "Average across Google reviews." },
  { value: "4.9", label: "Tripadvisor rating", text: "Average across Tripadvisor reviews." },
  { value: "30+", label: "Countries", text: "Our students come from all over the world." },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        image="/assets/images/venue/loungers.webp"
        imageAlt="Guests relaxing on sun loungers above the jungle"
        eyebrow="Student stories"
        title={
          <>
            Go there one person, <em>come home</em> renewed
          </>
        }
        subtitle="Words from our teacher training graduates, retreat guests and meditators — in their own voices."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Rated 4.9 on Google & Tripadvisor"
            title="Trusted by students from around the world"
          />
          <StatsBand stats={stats} />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <ReviewsBoard testimonials={testimonials} categories={reviewCategories} />
        </div>
      </section>

      <AccreditationSection />

      <CTASection
        image="/assets/images/venue/gangga-pool.webp"
        title="Write your own story with us"
        primary={{ label: "Yoga teacher training", href: "/yoga-teacher-training" }}
        secondary={{ label: "Yoga retreats", href: "/yoga-retreats" }}
      />
    </>
  );
}
