import Link from "next/link";
import PageHero from "@/components/sections/shared/PageHero";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Blooming Lotus Yoga collects, uses and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero image="/assets/images/venue/sacred-river.webp" eyebrow="Legal" title="Privacy Policy" size="compact" align="left" />
      <section className="section">
        <div className="container container--narrow prose" data-reveal>
          <h2>What information do we collect?</h2>
          <p>
            We collect information from you when you register on our site, subscribe to our newsletter or fill out a form.
            Any data we request that is not required will be specified as voluntary or optional. When ordering or
            registering, you may be asked to enter your name, e-mail address or phone number. You may, however, visit our
            site anonymously.
          </p>
          <p>
            Like most websites, we use cookies to enhance your experience, gather general visitor information and track
            visits to our website.
          </p>

          <h2>What do we use your information for?</h2>
          <ul>
            <li>To personalize your experience and better respond to your individual needs</li>
            <li>To improve our website based on the information and feedback we receive from you</li>
            <li>To improve customer service and respond more effectively to your requests</li>
            <li>
              To send periodic emails — the email address you provide will only be used to send information and updates
              about your order or request
            </li>
          </ul>
          <p>
            If you opt in to our mailing list, you will receive emails that may include company news, updates and related
            product or service information. Every email includes instructions to unsubscribe.
          </p>

          <h2>Do we use cookies?</h2>
          <p>
            Yes. Cookies are small files that a site or its service provider transfers to your computer through your web
            browser (if you allow) so that systems can recognize your browser and remember certain information. Third-party
            vendors, including Google, may use cookies to serve ads based on prior visits. You can opt out of Google’s use
            of cookies via Google’s ad settings, or through the Network Advertising Initiative opt-out page.
          </p>

          <h2>Do we disclose any information to outside parties?</h2>
          <p>
            We do not sell, trade or otherwise transfer your personally identifiable information to outside parties. This
            does not include trusted third parties who assist us in operating our website, conducting our business or
            servicing you, so long as they agree to keep this information confidential. We may release information when
            required to comply with the law, enforce our site policies, or protect our or others’ rights, property or safety.
          </p>

          <h2>CAN-SPAM compliance</h2>
          <p>We have taken the necessary steps to ensure that we are compliant with the CAN-SPAM Act of 2003 by never sending out misleading information.</p>

          <h2>Online privacy policy only</h2>
          <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>

          <h2>Your consent</h2>
          <p>By using our site, you consent to our privacy policy.</p>

          <h2>Changes to our privacy policy</h2>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply
            only to information collected after the date of the change.
          </p>

          <h2>About this website</h2>
          <p>
            This site is a training project built with content from blooming-lotus-yoga.com. Its contact form does not
            store or transmit data — submitting it simply opens your own email app.
          </p>

          <h2>Contacting us</h2>
          <p>
            If there are any questions regarding this privacy policy, please <Link href="/contact">contact us</Link> or email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
