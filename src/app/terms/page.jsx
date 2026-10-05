import Link from "next/link";
import PageHero from "@/components/sections/shared/PageHero";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms & conditions and the cancellation & refund policy for Blooming Lotus Yoga courses, retreats and products.",
  path: "/terms",
});

const sections = [
  {
    h: "Acceptance of terms",
    p: [
      "By accessing and using the Blooming Lotus Yoga Limited website (the “Site”) and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our Site or services.",
    ],
  },
  {
    h: "Changes to terms",
    p: [
      "Blooming Lotus Yoga Limited reserves the right to modify or replace these Terms and Conditions at any time. It is your responsibility to review these terms periodically. Continued use of the Site following any changes constitutes acceptance of those changes.",
    ],
  },
  {
    h: "Services",
    p: [
      "Blooming Lotus Yoga Limited promotes yoga retreats, yoga teacher training courses and private yoga classes, as well as related products and services offered by PT. Olah Cipta Karya. All services are subject to availability, and PT. Olah Cipta Karya reserves the right to modify or discontinue any service at any time.",
    ],
  },
  {
    h: "User accounts",
    p: [
      "To access certain features of our Site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account, and agree to provide accurate and complete information.",
    ],
  },
  {
    h: "Payment and pricing",
    p: [
      "Prices for services and products promoted on this Site are subject to change without notice. Payments can be made in deposits or in full at the time of booking. All financial transactions, including payments and refunds, are the sole responsibility of Blooming Lotus Yoga Limited.",
    ],
  },
  {
    h: "Conduct",
    p: [
      "You agree to use the Site and our services only for lawful purposes. You must not use the Site to post or transmit any material that is offensive, defamatory, obscene, or infringes on the rights of others. We reserve the right to terminate your access if you violate these terms.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "All content on the Site, including text, graphics, logos, images and software, is the property of Blooming Lotus Yoga Limited or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "Blooming Lotus Yoga Limited shall not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or inability to use the Site or the services offered by PT. Olah Cipta Karya, including damages for errors, omissions, interruptions, defects, delays or computer viruses.",
    ],
  },
  {
    h: "Indemnification",
    p: [
      "You agree to indemnify and hold Blooming Lotus Yoga Limited harmless from any claims, damages, losses, liabilities and expenses arising out of your use of the Site and services or any violation of these Terms and Conditions.",
    ],
  },
  {
    h: "Events",
    p: [
      "PT. Olah Cipta Karya reserves the right to add, substitute and cancel any activities or classes from its schedule as deemed necessary to provide better service and experience to customers.",
    ],
  },
  {
    h: "Customer’s health and physical condition",
    p: [
      "The customer confirms that they are in good physical condition and know of no medical or other reason why they are not capable of engaging in active or passive exercise, and that such exercise would not be detrimental to their health, safety, comfort or physical condition.",
      "The customer shall not use any facilities while suffering from any infection, contagious illness or other ailment where there is a risk that such use may be detrimental to the health, safety, comfort or physical condition of other customers.",
    ],
  },
  {
    h: "The management reserves the right to refuse service",
    p: [
      "Including, without prior notice, where a customer’s conduct is in the reasonable opinion of the Management harmful to the character or interests of PT. Olah Cipta Karya; where the Code of Conduct and Ethics is breached; where a customer violates the privacy of others; or where theft has occurred on the premises.",
    ],
  },
  {
    h: "Force majeure",
    p: [
      "Neither Blooming Lotus Yoga Limited nor PT. Olah Cipta Karya shall be liable for delays or failures in performance resulting from acts beyond their reasonable control — including acts of God, fire, flood, earthquake, volcanic eruptions, pandemic, war, civil unrest or labour disturbance. Each party agrees to make a good faith effort to perform its obligations.",
    ],
  },
  {
    h: "Code of conduct and ethics",
    p: [
      "We are committed to a safe, respectful and inclusive environment. Treat every individual with kindness, dignity and respect; embrace diversity; and practise mindfulness on and off the mat. Promoting or selling personal sessions, goods or services to other customers is not permitted.",
    ],
  },
];

const refunds = [
  {
    h: "Yoga teacher training courses",
    p: [
      "If you are unable to attend due to unforeseen circumstances, you can transfer your tuition to another course within 1 year (once), subject to availability, with a minimum of 2 months’ notice. Within 60 days of the start date, tuition becomes non-refundable and non-transferable.",
      "The US$500 deposit is fully refundable for 7 days* and is transferable to another course. The remaining tuition is fully refundable before 6 months*, 50% refundable before 2 months*, and non-refundable less than 2 months before the start date. Changing your original date makes tuition non-refundable.",
      "On-site accommodation becomes non-changeable within 2 months of the start date. Once the course has begun, accommodation and meal costs are non-refundable. *Minus 3.6% (credit card) or 4.4% (PayPal) payment processor fees.",
    ],
  },
  {
    h: "Yoga retreats",
    p: [
      "You can transfer to another retreat within the next 3 years or receive a refund (minus 5.6% service fees) with a minimum of 7 days’ notice before check-in. Once the retreat has begun, tuition, accommodation and meal costs are non-refundable.",
    ],
  },
  {
    h: "Meditation retreats",
    p: [
      "You can transfer to another retreat within the next 3 years or receive a full refund with a minimum of 48 hours’ notice before check-in. Once the retreat has begun, tuition, accommodation and meal costs are non-refundable.",
    ],
  },
  {
    h: "Physical goods",
    p: [
      "Unused products can be returned within 14 days for a full refund (excluding shipping), in original packaging. Please allow 1–2 weeks for processing. Discounted items and items purchased through other entities are not eligible.",
    ],
  },
  {
    h: "Digital goods",
    p: ["Online courses, ebooks and MP3s come with a 60-day money-back guarantee — just email us for a no-questions-asked refund."],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero image="/assets/images/venue/koi-pond.webp" eyebrow="Legal" title="Terms & Conditions" size="compact" align="left" />
      <section className="section">
        <div className="container container--narrow prose" data-reveal>
          <p className="lead">
            Welcome to Blooming Lotus Yoga! These terms outline the rules and regulations for the use of our website and
            services. The Site is owned and operated by Blooming Lotus Yoga Limited, a company incorporated in Hong Kong,
            which promotes yoga retreats and courses operated by its Indonesian partner company, PT. Olah Cipta Karya.
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          ))}
          <h2 id="refunds">Cancellation &amp; refund policy</h2>
          {refunds.map((s) => (
            <div key={s.h}>
              <h3>{s.h}</h3>
              {s.p.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          ))}
          <h2>Contacting us</h2>
          <p>
            If you have any questions regarding these terms, please <Link href="/contact">contact us</Link> or email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
