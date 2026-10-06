import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/shared/PageHero";
import VideoEmbed from "@/components/sections/shared/VideoEmbed";
import MediaCard, { MediaGrid } from "@/components/sections/shared/MediaCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { blogPosts } from "@/data/community";
import { pageMetadata } from "@/data/site";
import styles from "@/components/sections/community/Article.module.css";

const FALLBACK_IMAGE = "/assets/images/practice/rice-walk.webp";

function postFor(slug) {
  return blogPosts.find((p) => p.href === `/blog/${slug}`);
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  const post = postFor(slug);
  const lead = article.blocks.find((b) => b.html)?.html.replace(/<[^>]+>/g, "") || "";
  return pageMetadata({
    title: article.title,
    description: lead.slice(0, 155),
    path: `/blog/${slug}`,
    image: post?.image || FALLBACK_IMAGE,
  });
}

/** Content is converted from the source articles and whitelisted to text,
    internal links, <strong>, <em> and <br> — safe to render as HTML. */
function Block({ block, poster, title }) {
  switch (block.type) {
    case "h2":
      return <h2 dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "h3":
      return <h3 dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "lead":
      return <p className={styles.lead} dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "quote":
      return <blockquote dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.cells.map((cell, j) =>
                    row.head ? (
                      <th key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                    ) : (
                      <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "img":
      return (
        <figure className={styles.figure}>
          <Image src={block.src} alt={block.alt || ""} width={block.w} height={block.h} sizes="(max-width: 860px) 100vw, 760px" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "video":
      return <VideoEmbed youtubeId={block.youtube} poster={poster} title={title} />;
    default:
      return null;
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();
  const post = postFor(slug);
  const image = post?.image || article.blocks.find((b) => b.type === "img")?.src || FALLBACK_IMAGE;
  const related = blogPosts.filter((p) => p.href !== `/blog/${slug}` && p.category === post?.category).slice(0, 3);
  const more = related.length ? related : blogPosts.filter((p) => p.href !== `/blog/${slug}`).slice(0, 3);

  return (
    <>
      <PageHero
        image={image}
        imageAlt=""
        eyebrow={post?.category || "BLISS! Magazine"}
        title={article.title}
        subtitle={post?.author ? `By ${post.author}` : "BLISS! Magazine by Blooming Lotus Yoga"}
        size="compact"
      />

      <article id="content" className="section">
        <div className={`container container--narrow ${styles.body}`} data-no-reveal>
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} poster={image} title={article.title} />
          ))}
          <div className={styles.back}>
            <Button href="/blog" variant="outline">
              All articles
            </Button>
          </div>
        </div>
      </article>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="Keep reading" title="More from BLISS! Magazine" />
          <MediaGrid swipe>
            {more.map((p) => (
              <MediaCard key={p.href} href={p.href} image={p.image} meta={p.category} title={p.title} cta="Read the article" />
            ))}
          </MediaGrid>
        </div>
      </section>
    </>
  );
}
