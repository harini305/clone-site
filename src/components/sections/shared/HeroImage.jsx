import Image, { getImageProps } from "next/image";
import { preload } from "react-dom";
import heroImages from "@/data/heroImages";

const PHONE = "(max-width: 600px)";

const srcSet = (list) => list.map(([w, src]) => `${src} ${w}w`).join(", ");

/**
 * Full-bleed hero background photo. Page headers use pre-sized static files
 * (scripts/make-hero-images.py) served straight from the CDN — no on-demand
 * optimization — as AVIF with a WebP fallback, with a blurred preview of the
 * same photo painted instantly underneath. With a portraitImage, phones get a photo composed for a tall
 * screen (art direction via <picture>). Falls back to next/image for any
 * image that has not been pre-sized.
 */
export default function HeroImage({ image, portraitImage, alt = "", className, priority = true }) {
  const wide = heroImages[image];
  const tall = portraitImage ? heroImages[portraitImage] : null;

  if (wide && (!portraitImage || tall)) {
    // Fetch the header photo before anything else on the page. (Off for the
    // not-found screen, which Next renders alongside every page.)
    if (priority) {
      preload(wide.avif.at(-1)[1], {
        as: "image",
        type: "image/avif",
        fetchPriority: "high",
        imageSrcSet: srcSet(wide.avif),
        imageSizes: "100vw",
        ...(tall ? { media: "(min-width: 601px)" } : {}),
      });
      if (tall) {
        preload(tall.avif.at(-1)[1], {
          as: "image",
          type: "image/avif",
          fetchPriority: "high",
          imageSrcSet: srcSet(tall.avif),
          imageSizes: "100vw",
          media: PHONE,
        });
      }
    }
    const blur = {
      backgroundImage: `url(${wide.blur})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    return (
      <picture>
        {tall && <source media={PHONE} type="image/avif" srcSet={srcSet(tall.avif)} sizes="100vw" />}
        {tall && <source media={PHONE} type="image/webp" srcSet={srcSet(tall.srcset)} sizes="100vw" />}
        <source type="image/avif" srcSet={srcSet(wide.avif)} sizes="100vw" />
        <img
          src={wide.srcset.at(-1)[1]}
          srcSet={srcSet(wide.srcset)}
          sizes="100vw"
          width={wide.width}
          height={wide.height}
          alt={alt}
          className={className}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          style={blur}
        />
      </picture>
    );
  }

  if (!portraitImage) {
    return <Image src={image} alt={alt} fill priority={priority} quality={95} sizes="100vw" className={className} />;
  }
  const common = { alt, fill: true, priority, quality: 95, sizes: "100vw" };
  const { props: wideProps } = getImageProps({ ...common, src: image });
  const { props: tallProps } = getImageProps({ ...common, src: portraitImage });
  return (
    <picture>
      <source media={PHONE} srcSet={tallProps.srcSet} sizes={tallProps.sizes} />
      <img {...wideProps} alt={alt} className={className} />
    </picture>
  );
}
