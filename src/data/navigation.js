export const primaryNav = [
  {
    label: "Teacher Training",
    short: "YTT",
    href: "/yoga-teacher-training",
  },
  {
    label: "Yoga Retreats",
    short: "Retreats",
    href: "/yoga-retreats",
    children: [
      { label: "All Yoga Retreats", href: "/yoga-retreats" },
      { label: "4-Day Escape", href: "/yoga-retreats/4-day-escape" },
      { label: "7-Day Bliss", href: "/yoga-retreats/7-day-bliss" },
    ],
  },
  {
    label: "Meditation",
    short: "Meditation",
    href: "/meditation-retreats",
  },
  {
    label: "About",
    short: "About",
    href: "/about",
    children: [
      { label: "Our Story & Lineage", href: "/about" },
      { label: "The Retreat Center", href: "/retreat-center" },
      { label: "Student Reviews", href: "/reviews" },
    ],
  },
  {
    label: "Contact",
    short: "Contact",
    href: "/contact",
  },
];

export const footerNav = [
  {
    title: "Courses & Retreats",
    links: [
      { label: "Yoga Teacher Training", href: "/yoga-teacher-training" },
      { label: "4-Day Yoga Escape", href: "/yoga-retreats/4-day-escape" },
      { label: "7-Day Yoga Bliss", href: "/yoga-retreats/7-day-bliss" },
      { label: "Meditation Retreats", href: "/meditation-retreats" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Retreat Center", href: "/retreat-center" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Good To Know",
    links: [
      { label: "YTT Unfiltered Guide", href: "/assets/docs/ytt-unfiltered.pdf" },
      { label: "Amrita Menu", href: "/assets/docs/amrita-menu.pdf" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
