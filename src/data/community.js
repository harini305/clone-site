// Community pages — content from blooming-lotus-yoga.com (/graduate-students,
// /vidya, /giving, /bliss, /drops-of-nectar), Oct 2026.

const SOURCE = "https://www.blooming-lotus-yoga.com";
const BLISS = `${SOURCE}/bliss`;
const COURSES = "https://courses.blooming-lotus-yoga.com";
const STORE = "https://www.blooming-lotus-yoga.store";

// ── Graduate students: the Luminary Course ────────────────────────────────
export const luminaryIntro = [
  "Joining us for another YTT is a wonderful opportunity to go deeper in sadhana and yogic knowledge (vidya). It is a precious time to spend with your teachers, other students (sangha or community), and the Way of Yoga Dharma.",
  "The Luminary Courses are offered completely for free as a means of supporting your continuing education in the depths of yoga and your on-going spiritual evolution.",
  "Upon the successful completion of this course, you will be awarded an official “Certificate of Advanced Yoga Teacher Training” for 100 HRS which you can use for continuing education credits with Yoga Alliance.",
  "Each year we are limited in the number of Luminaries (return grad students) that we can invite per YTT program, and as a result, need to have an application process from which we will select our return Luminaries for each program.",
];

export const luminaryDetails = [
  {
    title: "The intention",
    text: "This is a rare time for us to take in our life to deepen our connection inside, spend time with our teachers and like-minded students, and be devoted to sadhana (spiritual practices) and vidya (higher learning). We invite you to take part in as much of the program as possible – with the greatest importance placed on our meditation sessions. This is a gift to our students – our Luminaries – and as such we don’t require any tuition. We simply ask that you consider offering your unique skills in seva (selfless service). Seva is not mandatory.",
  },
  {
    title: "Accommodation",
    text: "Luminaries can stay on-site or off-site during the course. Staying on-site depends on availability and cannot be confirmed until 2 weeks before the course begins. Once you have been confirmed, we will share your contact details with other luminaries so that you can organize living together off-site or find your own accommodation.",
  },
  {
    title: "Transportation",
    text: "If you stay off-site you will need to either motorbike into the course daily (rentals can be around $7/day), or we can help arrange a vehicle pick-up to/from the retreat center (cost depends on the numbers sharing the taxi and distance). It is wise to source your accommodation beforehand as the Ubud area can be quite busy.",
  },
  {
    title: "Food",
    text: "Luminaries are required to eat breakfast, lunch, and dinner on-site at the low cost of $19/day for all 3 meals. All meals are vegan and mostly organic. Eating together with the other students – your sangha – is an opportunity to connect with each other and spread more love.",
  },
];

export const luminaryDates = [
  { title: "February 2027", text: "February 11 (Thursday) 4:00 pm – March 5 (Friday) 2:00 pm · 225 Hr. Yoga & Meditation Teacher Training · Teachers: Mandy, Via & Lily" },
  { title: "May 2027", text: "May 12 (Wednesday) 4:00 pm – June 3 (Thursday) 2:00 pm · 225 Hr. Yoga & Meditation Teacher Training · Teachers: Lily, Mandy & Via" },
];

export const luminaryQuotes = [
  "If your heart is one with the Blooming Lotus family, you are so lucky, because you don’t have to look any further. You have found your path to truth. And now, it is your duty to follow it. With sincere devotion, you will notice that you will be guided effortlessly. Return as a luminary and really allow the teachings to be grounded and anchored in your being.",
  "Returning as a luminary is an opportunity to ‘check in/re-evaluate,’ to connect, to be, to receive/awaken the wisdom that resides within, and to really listen to what speaks loudest to the heart. It is an opportunity to observe, to reflect, and to breathe through all that arises from extended time in a shared space.",
  "Traditionally, yoga students would learn from their teachers for many years, and after venturing out into the world to share their knowledge, they continually returned to their teachers for guidance and blessings. I would encourage any former YTT student to take advantage of this generous invitation to reawaken as a luminary and come back home to love. Om Shanti Shanti Shanti.",
  "Returning to do multiple YTTs and silent retreats gave me the fuel and inspiration to remind me of my path back home. Committing to one practice regularly over time leaves me feeling full on a deep level rather than just satisfying a momentary desire for pleasure. It anchors me and continually reminds me that it’s not about how we show up to our practice — it’s just that we show up.",
  "During my first YTT I learned what practice is. Before beginning my 2nd YTT I was compelled to fully dedicate myself to practice. Come with an intention, be open to the unexpected, take refuge in true teachers and supportive community, and trust the journey.",
  "Although my first YTT was life changing, perhaps an even more powerful and transformative experience was returning to Blooming Lotus as a luminary. The start of my second YTT brought an immediate deepness in my meditation practice, in my embodiment of love and truth, and in my reconnection to the divine within.",
];

// ── Continuing education: Vidya online learning ───────────────────────────
export const vidyaIntro = [
  "“Vidya” is Blooming Lotus Yoga’s integrated suite of online resources full of self-transformation techniques and learning tools aimed at enhancing the study of all facets of yogic knowledge. This holistic collection of in-depth learning resources encompasses the wisdom of yoga, tantra, Vedanta, as well as the greater Vedic tradition of which they are a part, to accelerate the integration of yoga into every facet of your life.",
  "Spread out over numerous online courses, ebooks & audio recordings, these comprehensive guides will allow you to climb the great mountain of Self-Realization one step at a time. Combining both theory and practice, the Vidya collection allows you to absorb the perennial wisdom of classical yoga, while simultaneously learning empowering techniques that have the power to awaken your highest potential.",
];

export const vidyaCourses = [
  {
    title: "The power of conscious sleep",
    text: "Learn how to use Yoga Nidra as a powerful therapeutic tool for self-healing, transformation & awakening, as you become a certified Yoga Nidra instructor in this 25 hr. online certification course.",
    image: "/assets/images/vidya/power-of-conscious-sleep.webp",
    href: `${COURSES}/the-power-of-conscious-sleep/discount`,
  },
  {
    title: "Living your best life",
    text: "Explore a step-by-step life coaching program to unlock your true life’s purpose, overcome self-limiting beliefs and develop the skills you need to guide others to live a more fulfilling life.",
    image: "/assets/images/vidya/living-your-best-life.webp",
    href: `${COURSES}/living-your-best-life/discount`,
  },
  {
    title: "Prana Flow online yoga retreat",
    text: "Discover an inspirational 5-day online yoga retreat that’s fun & easy to follow, and learn a step-by-step yoga practice designed to energize your body, expand your mind & enliven your soul.",
    image: "/assets/images/vidya/prana-flow-retreat.webp",
    href: `${COURSES}/prana-flow-yoga-retreat/`,
  },
];

export const vidyaAudio = [
  {
    title: "The Yoga Nidra Collection",
    text: "A unique set of guided meditation MP3s engineered to effortlessly guide you into deep meditation.",
    image: "/assets/images/vidya/yoga-nidra-collection.webp",
    href: `${SOURCE}/yoga-nidra`,
  },
  {
    title: "Meditation Made Easy",
    text: "A set of guided meditation MP3s consciously designed to help you derive all the endless mental health and spiritual benefits of deep meditation.",
    image: "/assets/images/vidya/meditation-made-easy.webp",
    soon: true,
  },
  {
    title: "Yoga Nidra for Children",
    text: "A collection of guided meditations for introducing children to meditation. Simply ask your children to lie down, press play and let them follow along with the instructions.",
    image: "/assets/images/vidya/yoga-nidra-for-children.webp",
    href: `${SOURCE}/yoga-nidra`,
  },
];

export const vidyaBooks = [
  {
    title: "Awakening the Bliss of Being",
    text: "Based on ancient Vedic wisdom, the essential teachings of yoga offer powerful insights that can quickly elevate your life to new heights of happiness, inner peace, and fulfillment.",
    image: "/assets/images/vidya/awakening-the-bliss-of-being.webp",
    href: `${STORE}/awakening-the-bliss-of-being`,
  },
  {
    title: "The Way of Oneness",
    text: "Illuminating, inspiring and insightful, “The Way of Oneness” reveals a profound way of perception that can rapidly transform your life towards the experience of true happiness and freedom.",
    image: "/assets/images/vidya/the-way-of-oneness.webp",
    href: `${STORE}/the-way-of-oneness`,
  },
  {
    title: "Becoming the Goddess",
    text: "Learn secret tantric techniques for connecting to your highest self by using the ancient practice of “Deity Yoga” to embody your divine self.",
    image: "/assets/images/vidya/becoming-the-goddess.webp",
    soon: true,
  },
  {
    title: "Pure Wisdom (Book 1)",
    text: "Awaken your inner wisdom with easy to understand teachings that you can apply immediately to find inner peace & balance, with 100 inspirational gems of insight from enlightened saints and sages.",
    image: "/assets/images/vidya/pure-wisdom-1.webp",
    href: `${STORE}/pure-wisdom-book-1`,
  },
  {
    title: "Mala Magic",
    text: "Learn the secrets of the sacred rudraksha beads that have been used by yogis for thousands of years to elevate their consciousness to the heights of liberation.",
    image: "/assets/images/vidya/mala-magic.webp",
    href: `${STORE}/mala-magic`,
  },
  {
    title: "Pure Wisdom (Book 2)",
    text: "Read 7 illuminating biographies that will inspire your yoga & meditation practice and receive inspirational gems of insight on how to live a life full of greater love, wisdom & compassion.",
    image: "/assets/images/vidya/pure-wisdom-2.webp",
    href: `${STORE}/pure-wisdom-book-2`,
  },
];

export const vidyaFree = [
  {
    title: "Yoga Nidra meditation masterclass",
    text: "A free masterclass on using Yoga Nidra meditation for personal growth & self transformation — a powerful tool to help your students, clients & family improve their health, cultivate inner peace, and live a more fulfilling life.",
    image: "/assets/images/vidya/yoga-nidra-masterclass.webp",
    href: `${COURSES}/yoga-nidra-masterclass/`,
  },
  {
    title: "Psychology of happiness masterclass",
    text: "Learn essential positive psychology practices & self-empowerment rituals to break through self-limiting beliefs and self-sabotaging habits, in this free 45 minute masterclass.",
    image: "/assets/images/vidya/psychology-of-happiness.webp",
    href: `${COURSES}/psychology-of-happiness-masterclass`,
  },
];

export const vidyaStart = `${COURSES}/#overview`;

// ── Charitable activities ─────────────────────────────────────────────────
export const charityIntro = [
  "The Blooming Lotus Charitable Fund is an outpouring of pure love and compassion. To help provide relief to some of the most impoverished individuals and communities in the world, large portions of the proceeds of our yoga retreats in Bali go directly to support charitable organizations in India. Focused upon providing the bare necessities of life like food, clean water, housing and medical care, we also foster long term sustainable goals by supporting schools and empowering young women with the gift of education.",
  "Our charitable efforts aim towards not only providing material well-being to rural communities but also nourishing their spiritual connection through the timeless wisdom of the Vedic tradition. By also helping preserve their sacred traditions, humanity as a whole benefits and the living wisdom of their yogic culture is allowed to continue to future generations.",
  "The circle of giving never ends, and when you join our courses and Bali yoga retreats you are directly contributing to help relieve the outer and inner suffering of countless living beings. We invite you into this magical journey of pure giving and allowing the natural expression of “living your yoga” to unfold…",
];

export const charityPosters = [
  { src: "/assets/images/giving/spreading-the-light.webp", alt: "Spreading the Light — the Blooming Lotus Charitable Fund" },
  { src: "/assets/images/giving/empower.webp", alt: "Empower — supporting education for young women" },
  { src: "/assets/images/giving/bali-projects.webp", alt: "Charitable projects supported in Bali" },
  { src: "/assets/images/giving/india-projects.webp", alt: "Charitable projects supported in India" },
];

// ── Blog: BLISS! Magazine (articles live on the source site) ──────────────
const post = (title, slug, image, author, category) => ({
  title,
  href: `${BLISS}/${slug}/`,
  image: `/assets/images/blog/${image}.webp`,
  author,
  category,
});

export const blogPosts = [
  post("How to practice Yoga Nidra to reduce stress, improve mental health & increase happiness", "how-to-practice-yoga-nidra", "yoga-nidra", "Lily", "Deeper dimensions of yoga"),
  post("Satisfying side-bends: an exploration of lateral bends", "satisfying-side-bends-an-exploration-of-lateral-bends", "side-bends", "Bindi Stables", "Living your yoga"),
  post("Spreading the light: a look into the charitable projects you help us support", "spreading-the-light", "spreading-the-light", "Anisha Rajguru", "Living your yoga"),
  post("The essentials of balancing postures", "essentials-of-balancing-postures", "balancing-postures", "Bindi Stables", "Living your yoga"),
  post("Who are “you” anyway?", "who-are-you-anyway", "who-are-you", "Jeremy Brinkerhoff", "Living your yoga"),
  post("Tips for living a yogic lifestyle", "tips-for-living-a-yogic-lifestyle", "yogic-lifestyle", "Emily Cronkleton", "Living your yoga"),
  post("How to embrace a beginner’s mind and get the most out of your yoga", "how-to-embrace-a-beginners-mind-and-get-the-most-out-of-your-yoga", "beginners-mind", "Anisha Rajguru", "Heart advice"),
  post("How to spiritually evolve when everything seems to be falling apart", "how-to-spiritually-evolve-when-everything-seems-to-be-falling-apart", "spiritually-evolve", "Meghann Thomas", "Heart advice"),
  post("8 super useful ways to invite more gratitude into your life", "8-super-useful-ways-to-invite-more-gratitude-into-your-life", "gratitude", "Nathaniel Simha", "Heart advice"),
  post("How to use the power of mindfulness to live fearless and free", "how-to-use-the-power-of-mindfulness-to-live-fearless-and-free", "mindfulness", "Lily", "Heart advice"),
  post("The power of patience – how to overcome irritation, frustration & anger with ease", "the-power-of-patience", "patience", "Nathaniel Simha", "Heart advice"),
  post("The sacred art of mantra chanting: 6 foundations every yogini must know", "the-sacred-art-of-mantra-chanting-6-foundations-every-yogini-must-know", "mantra-chanting", "Bindi Stables", "Deeper dimensions of yoga"),
  post("The wondrous life and non-dual teachings of Adi Shankara", "the-life-and-non-dual-teachings-of-adi-shankara", "adi-shankara", "Lily", "Deeper dimensions of yoga"),
  post("Learn how to use the power of intention in Yoga Nidra", "learn-how-to-use-the-power-of-intention-in-yoga-nidra", "intention-yoga-nidra", "Lily", "Deeper dimensions of yoga"),
  post("Embracing “crazy wisdom” – the divine life of Neem Karoli Baba", "embracing-crazy-wisdom-the-life-of-neem-karoli-baba", "neem-karoli-baba", "Anisha Rajguru", "Deeper dimensions of yoga"),
  post("Everything is not as it appears: the doctrine of Maya unveiled by the new quantum reality", "everything-is-not-as-it-appears", "maya", "Ramananda Mayi", "Science & spirituality"),
  post("Neuroscientists unlock the secrets of the body, breath, mind connection", "neuroscientists-unlock-the-secrets-of-the-breath", "breath", "Megan Lipps", "Science & spirituality"),
  post("How meditation affects the cortexes of the brain", "how-meditation-affects-the-cortexes-of-the-brain", "brain-meditation", "Daniel Cordaro", "Science & spirituality"),
  post("Cooking as a spiritual practice: a yogi’s guide to Ayurvedic cooking", "guide-to-ayurvedic-cooking", "ayurvedic-cooking", "Bindi Stables", "Awesome Ayurveda"),
  post("The healing power of rudraksha malas", "the-healing-power-of-rudraksha-malas", "rudraksha", "Lily", "Awesome Ayurveda"),
  post("An energizing yoga sequence to balance Kapha", "an-energizing-yoga-sequence-to-balance-kapha", "kapha", "Emily Cronkleton", "Awesome Ayurveda"),
  post("Yogi superfoods 101: the healing benefits of ghee", "yogi-superfoods-101-the-healing-benefits-of-ghee", "ghee", "Lisa Flynn", "Awesome Ayurveda"),
  post("Yogi superfoods 101: jaggery, the ancient Ayurvedic sugar substitute", "jaggery", "jaggery", "Haylee Magendans", "Awesome Ayurveda"),
  post("Genesis of a Buddha part 1: the mystical origins of Gautama", "genesis-of-a-buddha-the-mystical-origins-of-gautama", "buddha-1", "Ramananda Mayi", "Secret teachings"),
  post("Genesis of a Buddha part 2: the “ancient path” as taught by Gautama", "genesis-of-a-buddha-the-ancient-path-as-taught-by-gautama", "buddha-2", "Ramananda Mayi", "Secret teachings"),
  post("16 practices to preserve the spiritual energy of malas", "16-practices-to-preserve-the-spiritual-energy-of-malas", "malas-care", "Lily", "Secret teachings"),
  post("Awakening the Goddess: the tantric practices of Shri Vidya (part 2)", "the-tantric-practices-of-shri-vidya", "shri-vidya-2", "Ramananda Mayi", "Secret teachings"),
  post("Awakening the Goddess – an introduction to Shri Vidya (part 1)", "an-introduction-to-shri-vidya", "shri-vidya-1", "Ramananda Mayi", "Secret teachings"),
  post("A yogi’s guide to eclipses", "a-yogi-guide-to-eclipses", "eclipses", "Lily", "Vedic astrology for yogis"),
  post("Everything you need to know about Vedic astrology readings (and where to get one)", "everything-need-know-vedic-astrology-readings", "vedic-astrology", "Ramananda Mayi", "Vedic astrology for yogis"),
  post("An introduction to Nyepi: Bali’s day of silence", "an-introduction-to-nyepi-the-bali-day-of-silence", "nyepi", "Bindi Stables", "Best of Bali"),
  post("Living with ahimsa: our 10 favorite vegetarian restaurants in Ubud", "living-with-ahimsa-our-10-favorite-vegetarian-restaurants-in-ubud", "vegetarian-ubud", "Bindi Stables", "Best of Bali"),
];

// ── Podcast: Drops of Nectar ──────────────────────────────────────────────
const MP3 = `${SOURCE}/wp-content/uploads/2019/12`;
export const podcastIntro =
  "These dharma talks were recorded live, during the intimate silent meditation retreats held at Blooming Lotus Yoga in Bali. We invite you to unwind, make a cup of tea, and listen to the timeless wisdom of the Vedic Dharma so that you may live a happier, more awakened and compassionate life.";

export const podcastEpisodes = [
  { title: "Introduction to Shri Vidya", src: `${MP3}/1.-Introduction-to-Shri-Vidya.mp3` },
  { title: "Reincarnation and the preciousness of human life", src: `${MP3}/2.-Reincarnation-and-the-Preciousness-of-Human-Life.mp3` },
  { title: "The foundations of Samkhya philosophy", src: `${MP3}/3.-The-Foundations-of-Samkhya-Philosophy.mp3` },
  { title: "Stages of concentration & the meditative absorptions", src: `${MP3}/4.-Stages-of-Concentration-and-the-Meditative-Absorbtions.mp3` },
  { title: "Developing the four preliminaries to self-inquiry", src: `${MP3}/5.-Developing-the-Four-Preliminaries-to-Self-Inquiry.mp3` },
  { title: "Glimpses into the Amritabindu Upanishad", src: `${MP3}/6.-Glimpses-into-the-Amritabindu-Upanishad.mp3` },
];

export const podcastListen = [
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/podcast/drops-of-nectar-satsang-with-ramananda-mayi/id1491411500" },
  { label: "Spotify", href: "https://open.spotify.com/show/4lUjBMv6MB8cGRsRgy4d8N" },
];
