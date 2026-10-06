import PageHero from "@/components/sections/shared/PageHero";
import MediaCard, { MediaGrid } from "@/components/sections/shared/MediaCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/community";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Blog — BLISS! Magazine",
  description:
    "BLISS! Magazine by Blooming Lotus Yoga: articles on yoga, meditation, Ayurveda, Vedic astrology and living your yoga.",
  path: "/blog",
  image: "/assets/images/practice/rice-walk.webp",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="/assets/images/practice/rice-walk.webp"
        imageAlt="Students walking through the rice fields of Ubud"
        eyebrow="Blog"
        title="BLISS! Magazine"
        subtitle="Insights on yoga, meditation, Ayurveda and the yogic way of life from the Blooming Lotus Yoga teachers and community."
      />

      <section id="content" className="section">
        <div className="container">
          <SectionHeading
            layout="split"
            eyebrow="Read & explore"
            title="Articles"
            intro="Living your yoga, heart advice, the deeper dimensions of yoga, science & spirituality, Ayurveda, secret teachings, Vedic astrology and the best of Bali."
          />
          <MediaGrid dense>
            {blogPosts.map((post) => (
              <MediaCard
                key={post.href}
                href={post.href}
                image={post.image}
                meta={post.category}
                title={post.title}
                text={`By ${post.author}`}
                cta="Read the article"
              />
            ))}
          </MediaGrid>
        </div>
      </section>
    </>
  );
}
