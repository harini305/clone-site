// Retreat details from blooming-lotus-yoga.com (4-day Escape & 7-day Bliss pages, Oct 2026).

export const retreatInclusions = [
  "2 yoga classes daily",
  "Daily meditation",
  "2 vegan meals per day",
  "Balinese ceremony",
  "Free shuttle to Ubud",
  "Pool access",
  "Fast wi-fi",
  "Welcome drink",
];

export const retreatFeatures = [
  {
    title: "Daily Yoga Classes That Energize Body & Mind",
    text: "Vinyasa Flow taught as a morning Sunrise Sequence to energise you for the day and an afternoon Sunset Sequence to unwind with gentle, nourishing postures. Classes are tailored to individual needs — challenging, yet never overwhelming.",
  },
  {
    title: "Transformative Workshops",
    text: "Heart-to-heart sessions on Yoga Nidra, the chakras, Ayurveda and yogic philosophy — plus healthy eating patterns, daily rituals that promote inner peace and psychological attitudes that nurture self-healing.",
  },
  {
    title: "A Step-By-Step Meditation Technique",
    text: "Learn how to breathe, how to sit and what to focus on, with powerful pranayama techniques that reduce stress and promote mental clarity — so you leave with the tools to meditate confidently on your own.",
  },
  {
    title: "Cultural Experiences in Sacred Bali",
    text: "The magic of Bali is no myth. Enjoy enriching cultural experiences, including a Balinese water purification ceremony, and discover the beauty of Ubud and its people.",
  },
];

export const retreatAmenities = [
  "Fully equipped yoga resort 15 mins from Ubud",
  "In-house spa, massage & healing treatments",
  "All-inclusive packages for stress-free travel",
  "Airport transfers, early check-in & late checkout available",
  "Free shuttle to Ubud every Monday, Wednesday & Friday",
  "Filtered water on demand — no plastic bottles",
  "24-hour front desk & doctor/nurse on call",
  "Epic waterfall 10 mins away, beaches 35 mins away",
];

const roomBase = {
  sharedSuite: {
    name: "Shared Suite",
    tag: "Lowest price · best for budget travellers",
    image: "/assets/images/rooms/shared-suite.webp",
    specs: ["2 people per room", "2 twin beds", "Small bathroom", "Air conditioning", "River & jungle views"],
    text: "The cosiest and most affordable option, and very often where the closest friendships begin — inside a large three-room villa with a shared living room, kitchen and pool.",
  },
  sharedDeluxe: {
    name: "Shared Deluxe",
    tag: "Limited rooms available",
    image: "/assets/images/rooms/shared-deluxe.webp",
    specs: ["2 people per room", "2 twin beds (or king by request)", "Large bathroom", "Balcony, desk & lounge chair", "River & jungle views"],
    text: "Much larger than the suites, with a full-size bathroom and a balcony looking out over the jungle valley and river. Shared with one other same-sex guest.",
  },
  sharedVilla: {
    name: "Shared Villa",
    tag: "Popular · ideal for couples",
    image: "/assets/images/rooms/shared-villa.webp",
    specs: ["2 people per villa", "1 king bed (or 2 twins)", "2 bathrooms", "Private pool & living room", "River & jungle views"],
    text: "A 1-bedroom villa with breathtaking views, a private pool, spacious living room, kitchen and dining room shared only by the two of you.",
  },
  privateSuite: {
    name: "Private Suite",
    tag: "Best value",
    image: "/assets/images/rooms/private-suite.webp",
    specs: ["1 person per room", "1 twin bed (or king by request)", "Small private bathroom", "Air conditioning", "River & jungle views"],
    text: "A modern, minimalist room all to yourself — ideal if you want privacy without being completely alone, with the villa’s shared pool and living room right there.",
  },
  privateDeluxe: {
    name: "Private Deluxe",
    tag: "Popular with solo travellers",
    image: "/assets/images/rooms/private-deluxe.webp",
    specs: ["1 person per room", "1 king bed", "Large private bathroom", "Balcony, desk & lounge chair", "River & jungle views"],
    text: "A large and spacious private room with a king bed, full-size bathroom and your own balcony, within a three-room villa with shared pool and kitchen.",
  },
  privateVilla: {
    name: "Private Villa",
    tag: "In high demand",
    image: "/assets/images/rooms/private-villa.webp",
    specs: ["1 person per villa", "1 king bed", "2 private bathrooms", "Private pool, living room & kitchen", "Jungle, river & temple views"],
    text: "The ultimate luxury experience for a solo traveller — a 1-bedroom villa with its own pool, living room, kitchen and dining area. No other guests.",
  },
};

const withPrices = (prices) =>
  Object.entries(prices).map(([key, [price, deposit]]) => ({
    ...roomBase[key],
    key,
    price,
    deposit,
  }));

export const retreats = {
  escape: {
    slug: "4-day-escape",
    href: "/yoga-retreats/4-day-escape",
    name: "4-Day Yoga Escape",
    short: "4-Day Escape",
    duration: "4 days / 3 nights",
    nights: 3,
    from: 350,
    wasFrom: 500,
    starts: "Every Sunday & Wednesday",
    startDays: [0, 3],
    workshops: 1,
    badge: "Most Affordable",
    offsite: 150,
    image: "/assets/images/hero/river-meditation.webp",
    cardImage: "/assets/images/community/pool-friends.webp",
    ctaImage: "/assets/images/venue/pool-umbrella.webp",
    checkIn: "Check-in 1:30–3:30 pm on day one · check-out by 12:00 noon on the last day",
    summary:
      "A perfect choice if you have a short trip to Bali planned and want to relax, unwind and slow down for a few days. Ideal for beginner and intermediate students, or anyone trying a yoga retreat for the first time.",
    glance: [
      { title: "Who It’s For", text: "Beginner and intermediate practitioners — no previous yoga experience required." },
      { title: "How Long", text: "4 days / 3 nights, starting every Sunday and Wednesday." },
      { title: "What It Costs", text: "From US$350 per person, including accommodation, two meals a day and all classes." },
      { title: "Where You’ll Stay", text: "15 minutes south of central Ubud and one hour from Denpasar airport (DPS)." },
      { title: "Group Size", text: "A maximum of 16 retreat guests at a time." },
      { title: "Check-in", text: "1:30–3:30 pm on the first day; check-out by 12:00 noon on the last day." },
    ],
    rooms: withPrices({
      sharedSuite: [350, 175],
      sharedDeluxe: [400, 200],
      privateSuite: [450, 225],
      sharedVilla: [500, 250],
      privateDeluxe: [550, 275],
      privateVilla: [750, 375],
    }),
  },
  bliss: {
    slug: "7-day-bliss",
    href: "/yoga-retreats/7-day-bliss",
    name: "7-Day Yoga Bliss",
    short: "7-Day Bliss",
    duration: "7 days / 6 nights",
    nights: 6,
    from: 700,
    wasFrom: 1000,
    starts: "Every Sunday",
    startDays: [0],
    workshops: 3,
    badge: "Most Popular",
    offsite: 300,
    image: "/assets/images/hero/aerial-pool.webp",
    cardImage: "/assets/images/practice/rice-walk.webp",
    ctaImage: "/assets/images/venue/infinity-villa.webp",
    checkIn: "Check-in Sunday 1:30–3:30 pm, orientation at 5:00 pm · check-out Saturday by 12:00 noon",
    summary:
      "The perfect choice if you are ready to deepen your practice while enjoying the stunning beauty of Bali — a strong foundation in the essential practices of yoga asana and meditation so you can practise with confidence on your own.",
    glance: [
      { title: "Who It’s For", text: "Beginner and intermediate practitioners — no previous yoga experience required." },
      { title: "How Long", text: "7 days / 6 nights, from Sunday to the following Saturday." },
      { title: "What It Costs", text: "From US$700 per person, including accommodation, two meals a day, all classes and workshops." },
      { title: "Where You’ll Stay", text: "15 minutes south of central Ubud and one hour from Denpasar airport (DPS)." },
      { title: "Group Size", text: "A maximum of 16 guests per week." },
      { title: "Check-in", text: "Sunday 1:30–3:30 pm, with a group orientation at 5:00 pm." },
    ],
    rooms: withPrices({
      sharedSuite: [700, 350],
      sharedDeluxe: [800, 400],
      privateSuite: [900, 450],
      sharedVilla: [1000, 500],
      privateDeluxe: [1100, 550],
      privateVilla: [1500, 750],
    }),
  },
};

export const retreatComparison = [
  { label: "Length", escape: "4 days / 3 nights", bliss: "7 days / 6 nights" },
  { label: "Starts", escape: "Sundays & Wednesdays", bliss: "Sundays" },
  { label: "Price from", escape: "US$350", bliss: "US$700" },
  { label: "Yoga classes", escape: "2 daily", bliss: "2 daily" },
  { label: "Workshops", escape: "1", bliss: "3" },
  { label: "Daily meditation", escape: "Included", bliss: "Included" },
  { label: "Meals", escape: "Breakfast & dinner", bliss: "Breakfast & dinner" },
  { label: "Classes only (off-site)", escape: "US$150", bliss: "US$300" },
  { label: "Best for", escape: "Short trips & first retreats", bliss: "Going deeper & long-haul travellers" },
];

export const retreatForYou = [
  "You are looking for transformation, an extraordinary experience in Bali with like-minded people, and powerful new tools for your practice and life.",
  "You want modern, luxurious accommodation in a naturally stunning location — close enough to Ubud to enjoy its shops and restaurants.",
  "You want to eat healthy, organic, delicious food and feel more energised and alive.",
  "You want expert help refining your asana or learning the basics, so you can practise with greater confidence at home.",
  "You want a step-by-step meditation technique to find inner peace, focus your mind and unleash your creativity.",
  "You are travelling solo and slightly nervous — our team will make your journey effortless, easy and safe.",
  "You need to disconnect from the hectic pace of life and take some serious ‘me’ time to recharge.",
];

export const retreatNotForYou = [
  "You only want a body-image-centred fitness regime. We teach real yoga here.",
  "You can’t wake up by 7:00 each morning to dedicate yourself to your practice.",
  "You wish to practise Ashtanga, Bikram or Hot yoga — we teach Vinyasa, Hatha and Restorative/Yin.",
  "You are an advanced asana practitioner — these retreats are for beginner and intermediate levels.",
];

export const retreatPlanning = [
  {
    title: "Getting here",
    text: "We are one hour from Ngurah Rai International Airport (DPS) in Denpasar. Airport transfer costs US$35 each way and can be arranged in advance.",
  },
  {
    title: "Visas & tourist levy",
    text: "Most nationalities can enter on a visa on arrival (about US$35, valid 30 days, extendable once). Every visitor also pays the Bali Tourist Levy of IDR 150,000 (about US$10) per entry.",
  },
  {
    title: "When to come",
    text: "The dry season runs roughly April to October and fills up early. The wet season brings sunny mornings, occasional afternoon showers, fewer tourists and more intimate groups.",
  },
  {
    title: "Getting around",
    text: "A free shuttle runs to central Ubud on Mondays, Wednesdays and Fridays. Ubud is 15 minutes away, a waterfall 10 minutes and Bali’s southern beaches about 35 minutes.",
  },
  {
    title: "Comparing prices",
    text: "Compare per night, all-in. Our retreats work out at about US$117 per night including accommodation, two meals a day, classes, meditation and workshops (a 5.6% tax and service fee applies).",
  },
  {
    title: "Good to know",
    text: "Our retreats are entirely alcohol-free, and smoking is not permitted inside the villas or the retreat venue.",
  },
];
