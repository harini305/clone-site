import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MotionProvider from "@/components/layout/MotionProvider";
import { defaultDescription, siteName, siteUrl } from "@/data/site";
import "@/styles/globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Yoga Teacher Training & Retreats in Ubud, Bali`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  icons: {
    icon: "/assets/icons/favicon.png",
    apple: "/assets/icons/favicon.png",
  },
  // Training project: keep this copy out of search results so it never
  // competes with the official blooming-lotus-yoga.com site.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#1b1f1b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Flag JS before first paint so reveal targets start hidden (no flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-motion')",
          }}
        />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MotionProvider />
      </body>
    </html>
  );
}
