import PageHero from "@/components/sections/shared/PageHero";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PageHero
      image="/assets/images/meditation/rice-terrace.webp"
      eyebrow="404"
      title={
        <>
          This path has <em>wandered off</em>
        </>
      }
      subtitle="The page you’re looking for can’t be found — but every path leads back home."
      ctas={[
        { label: "Back to home", href: "/" },
        { label: "Contact us", href: "/contact", variant: "light" },
      ]}
    />
  );
}
