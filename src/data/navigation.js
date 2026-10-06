export const primaryNav = [
  {
    label: "Teacher training",
    short: "YTT",
    href: "/yoga-teacher-training",
  },
  {
    label: "Yoga retreats",
    short: "Retreats",
    href: "/yoga-retreats",
    children: [
      { label: "All yoga retreats", href: "/yoga-retreats" },
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
      { label: "Our story & lineage", href: "/about" },
      { label: "The retreat center", href: "/retreat-center" },
      { label: "Student reviews", href: "/reviews" },
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
    title: "Courses & retreats",
    links: [
      { label: "Yoga teacher training", href: "/yoga-teacher-training" },
      { label: "4-Day Yoga Escape", href: "/yoga-retreats/4-day-escape" },
      { label: "7-Day Yoga Bliss", href: "/yoga-retreats/7-day-bliss" },
      { label: "Meditation retreats", href: "/meditation-retreats" },
    ],
  },
  {
    title: "Location",
    links: [
      { label: "The Retreat Center", href: "/retreat-center" },
      { label: "The Villas", href: "/retreat-center#villas" },
      { label: "Amrita Restaurant & Spa", href: "/retreat-center#amrita-food" },
      { label: "Facilities & Amenities", href: "/retreat-center#amenities" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { label: "About us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Graduate Students", href: "/graduate-students" },
      { label: "Continuing Education", href: "/continuing-education" },
      { label: "Charitable Activities", href: "/charitable-activities" },
      { label: "Blog", href: "/blog" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
  {
    title: "Good to know",
    links: [
      { label: "YTT Unfiltered guide", href: "/assets/docs/ytt-unfiltered.pdf" },
      { label: "Amrita menu", href: "/assets/docs/amrita-menu.pdf" },
      { label: "Terms & conditions", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
];

// Source menu group "Explore student resources".
export const resourceLinks = [
  { label: "Online learning", href: "/continuing-education" },
  { label: "BLISS! Magazine", href: "/blog" },
  { label: "Our podcast", href: "/podcast" },
];
