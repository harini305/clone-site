import Image, { getImageProps } from "next/image";

const PHONE = "(max-width: 600px)";

/**
 * Full-bleed hero background photo. With a portraitImage, phones get a photo
 * composed for a tall screen (art direction via <picture>) instead of a crop
 * of the wide one.
 */
export default function HeroImage({ image, portraitImage, alt = "", className }) {
  if (!portraitImage) {
    return <Image src={image} alt={alt} fill priority quality={95} sizes="100vw" className={className} />;
  }
  const common = { alt, fill: true, priority: true, quality: 95, sizes: "100vw" };
  const { props: wide } = getImageProps({ ...common, src: image });
  const { props: tall } = getImageProps({ ...common, src: portraitImage });
  return (
    <picture>
      <source media={PHONE} srcSet={tall.srcSet} sizes={tall.sizes} />
      <img {...wide} alt={alt} className={className} />
    </picture>
  );
}
