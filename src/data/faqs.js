import Link from "next/link";

// FAQ answers condensed from blooming-lotus-yoga.com (Oct 2026).

const shared = {
  beginner: {
    q: "I’m a beginner — will I be able to participate?",
    a: [
      "We love beginners! All of our classes are tailored to meet each person at their own level, with an emphasis on present-moment awareness, safety and a sequentially balanced class.",
      "Intermediate practitioners are very welcome, although advanced asana students may find the retreat asana is not challenging enough — we recommend our silent meditation retreats to explore the higher limbs of yoga.",
    ],
  },
  solo: {
    q: "I’m traveling to Bali alone. Is this suitable for solo female travelers?",
    a: [
      "Yes. Solo female guests who book a shared room are placed only with other women, and single male travelers book private rooms. Airport pickup from Denpasar (DPS) is included free on teacher trainings and can be arranged for US$35 for retreats. Our retreat center has a 24-hour front desk to assist you.",
    ],
  },
  restaurant: {
    q: "Is there a restaurant? Where do we eat?",
    a: [
      "Yes — our on-site Amrita restaurant serves organic, vegan cuisine made fresh with locally sourced ingredients. Following the yogic principle of ahimsa (non-violence), the menu is completely free of meat, dairy and eggs.",
      "We can accommodate low-gluten diets and peanut allergies. As meals are set for the group, we cannot cater to other special requests.",
    ],
  },
  location: {
    q: "Where in Bali are you located?",
    a: [
      "Blooming Lotus Yoga is in Lodtunduh, Ubud, in the Gianyar Regency of Bali — about 15 minutes from central Ubud and one hour from Bali’s international airport in Denpasar (DPS). All trainings and retreats are held at our own retreat center.",
    ],
  },
  visa: {
    q: "What about visas?",
    a: [
      "Most nationalities can enter on a visa on arrival (about US$35), valid for 30 days and extendable once for a further 30. Every foreign visitor must also pay the Bali Tourist Levy of IDR 150,000 (about US$10) per entry — pay it in advance through the official Love Bali portal and keep the QR code.",
    ],
  },
  alcohol: {
    q: "What is your smoking and alcohol policy?",
    a: [
      "Our retreats are completely alcohol-free, and smoking is not permitted in the villas or anywhere in the retreat venue. There is a designated area outside the venue where smoking is permitted.",
    ],
  },
};

const PRICE_REVIEW = "https://www.blooming-lotus-yoga.com/bali-yoga-teacher-training-cost/";

// Homepage FAQ — all 12 questions with the full answers from the source homepage.
export const homeFaqs = [
  {
    q: "What makes the Blooming Lotus Yoga teacher training so unique?",
    a: [
      "Our yoga teacher training is a beautiful synthesis of the essence of Yoga, Tantra and Vedanta adapted for the modern world. It is a rare opportunity to fully immerse yourself in the essence of the yogic way of life—which abounds in truth, love and bliss. It is designed for both aspiring teachers and those that wish to deepen their practice by living Yoga to the fullest.",
      "The content and focus of various yoga teacher training programs around the world can be quite dramatically different, and our particular 225-hour yoga and meditation teacher training course offers a mystical, yet modern approach, that is grounded and practical as it integrates the authentic and spiritual yoga of the Vedic tradition with the needs of the modern yogi.",
      "If you’re wanting to deepen your personal practice or want to share the gift of yoga through teaching, this yoga teacher training course offers one of the most authentic and spiritually focused trainings in the world so you can awaken your highest potential & live your best life.",
      "In the yoga teacher training, we have two main objectives:",
      {
        list: [
          "To provide you with a strong foundation in yoga asana so that you may teach yoga classes with confidence and skill. This comprises developing an in-depth knowledge of 60+ yoga asanas, as well as understanding how to intelligently and safely sequence postures while offering variations to meet the needs of people at different levels.",
          "To develop a personal spiritual practice that will allow you to directly experience the deeper dimensions of yoga that are beyond yoga asana. For this, we teach the theory and practical application of the four paths of yoga. We focus on developing a meditation practice that utilizes pranayama, mudras, self-inquiry, and mantra as aids to developing awareness, focus, and stilling the mind.",
        ],
      },
      <>
        If you look at <Link href="/yoga-teacher-training#testimonials">our testimonials</Link>, you can get a feel for
        the course content and what our students have experienced through the program. What we offer tends to be
        drastically different than the majority of yoga teacher training programs worldwide.
      </>,
    ],
  },
  {
    q: "How are the yoga teacher training courses and the yoga retreats different?",
    a: [
      <>
        Our 225-hour <Link href="/yoga-teacher-training">YTT program</Link> is designed for beginner and intermediate
        yoga practitioners who wish to start teaching yoga to others or deepen their own practice. Our daily sessions
        include yoga classes, asana breakdown workshops, lectures on the art of teaching, as well as yogic philosophy and
        homework assignments.
      </>,
      "If you’re wanting to deepen your personal practice or want to share the gift of yoga through teaching, this yoga teacher training course offers one of the most holistic and spiritually focused trainings in the world, with a strong emphasis on self-growth and self-realization so you can awaken your highest potential & live your best life.",
      <>
        Our <Link href="/yoga-retreats/4-day-escape">4-day yoga retreats</Link> start every Sunday and Wednesday, and
        our <Link href="/yoga-retreats/7-day-bliss">7-day yoga retreats</Link> start every Sunday. Both are open to
        beginning and intermediate students, and each class is adapted to the general needs of the group.
      </>,
      "There are 2 yoga and meditation classes each day, and each class is approximately 2 hours long. Each class includes:",
      {
        list: [
          "Easy-to-understand instructions on yoga, meditation and technique",
          "15–30 minutes of meditation (building progressively class by class)",
          "90 minutes of Yoga Asana (poses)",
        ],
      },
      "In addition, during our yoga retreats, we also offer yin yoga classes, plus workshops that focus on philosophical and practical aspects of yoga such as lifestyle, how to practice meditation, and other yogic themes.",
    ],
  },
  {
    q: "I’m a beginner, will I be able to participate in a yoga retreat?",
    a: [
      <>
        We love beginners! All of our <Link href="/yoga-retreats">yoga retreat classes</Link> are specifically tailored
        to meet each person at their own personal level with an emphasis on awareness of the present moment, safety, a
        sequentially balanced class, and an opportunity for each person to witness where they are at mentally,
        emotionally, physically, and spiritually at each moment. We encourage our students to honor and respect their own
        bodies and intuition in order to determine what is best for them as each moment unfolds, engaging in the way that
        feels right for them.
      </>,
      <>
        Our sessions focus on love, compassion, fun, letting go and being as you are, as we align and open our body and
        energy fields to allow for the fullest growth and expansion into who we truly are. We definitely encourage
        intermediate practitioners to join us as we explore the depths of Yoga, however advanced students may find that
        the yoga asana component of the retreat is not challenging enough. As such, we recommend that advanced yoga asana
        students join us for silent <Link href="/meditation-retreats">meditation retreats</Link> and learn the higher
        limbs of yoga.
      </>,
    ],
  },
  {
    q: "I’m traveling to Bali alone. Is this suitable for solo female travelers?",
    a: [
      "Yes. Solo female guests at Blooming Lotus Yoga who book a shared room are placed only with other women, and single male travelers can only book private rooms. Airport pickup from Denpasar (DPS) is included free on teacher trainings, and can be arranged for US$35 for retreats. Our retreat center has a 24-hour front desk to assist you.",
    ],
  },
  {
    q: "How much does a yoga teacher training or retreat in Bali cost?",
    a: [
      "The 225-hour yoga and meditation teacher training at Blooming Lotus Yoga costs from US$2,770 per person all-inclusive in a shared room, or from US$3,670 in a private room. The price covers tuition, accommodation for the whole course, three meals a day on training days, airport pickup, a Balinese massage and a trip to the beach. There are no added fees, taxes or payment processing charges, so the price shown is the price you pay.",
      <>
        Across Bali, a 200-hour yoga teacher training costs US$2,858 on average for an all-inclusive package in 2026–27,
        with prices from US$1,450 to US$5,252. Tuition-only courses look cheaper, at US$2,366 on average, but a room and
        meals add about US$40 a day, and 8 of 29 schools add card or payment fees of up to 8%, so compare the full cost
        rather than the headline price.{" "}
        <a href={PRICE_REVIEW} target="_blank" rel="noopener noreferrer">
          See our 2026–27 price review of 29 Bali schools
        </a>
        .
      </>,
      "A 7-day yoga retreat at Blooming Lotus Yoga costs from US$700 per person, and a 4-day retreat from US$350, including accommodation, breakfast and dinner, twice-daily yoga classes, workshops and daily meditation.",
    ],
  },
  {
    q: "Is this yoga teacher training Bali program (YTT) recognized by the Yoga Alliance?",
    a: [
      "Yes, we are a Yoga Alliance certified school. However, it is good to know that being a part of this organization is not a necessity to teach yoga.",
      "The Yoga Alliance is an American company that simply acts as a registry for yoga schools and teachers. You can choose to register with them, or choose from any of the numerous other international registries – but this is not mandatory.",
      <>
        Once you receive a certificate from us, you can then submit it to Yoga Alliance and pay an annual fee to be on
        their registry. But make sure to check with the studios you want to teach in before you register with Yoga
        Alliance. Because, even though you are eligible to register with them after completing our course, your studio
        may only require the certificate you obtain from our{" "}
        <Link href="/yoga-teacher-training">yoga teacher training courses</Link>.
      </>,
    ],
  },
  {
    q: "Are there any pre-requisites required for a yoga teacher training (YTT)?",
    a: [
      "There is no minimum number of years of practice required to join our yoga teacher training. Blooming Lotus Yoga welcomes both beginner and intermediate practitioners, and our teachers adapt instruction to meet each student at their own level.",
      "We recommend arriving with some yoga practice behind you — and make sure to practice more regularly before the course begins. A little background in meditation or healing practices is also a real advantage.",
      "Courses are conducted in English, and therefore we ask that all students have a good grasp of the English language in order to understand, read, write, and communicate the course material.",
    ],
  },
  {
    q: "Can I start teaching after I receive my yoga training certification?",
    a: [
      "Yes. You can start teaching yoga after the yoga teacher training (YTT) is complete.",
      "During the YTT course, you will learn all the essential skills needed to teach safe vinyasa, hatha, and yin-restorative classes to your own students.",
    ],
  },
  {
    q: "What type of yoga classes do you offer during a retreat?",
    a: [
      "We offer Hatha-Vinyasa and Restorative-Yin style yoga classes.",
      "Our main approach to yoga asana could be best described as Hatha-Flow or Vinyasa. Yoga asanas are sequenced in a graceful, flowing way in order to create a seamless movement pattern, that is synchronized with the breath, so that unbroken awareness in the present moment can be established.",
      "If you are looking for Ashtanga, Bikram, or Hot yoga classes it is best to look elsewhere.",
    ],
  },
  {
    q: "Is there a restaurant? Where do we eat?",
    a: [
      "Yes, our Amrita restaurant serves organic and vegan cuisine made fresh with locally sourced ingredients.",
      "Amrita restaurant’s healthy menu serves food that is good for you, good for our planet and good for all of its creatures. Following the yogic principle of ahimsa (non-violence), Amrita’s healthy vegan menu contains no animal products. Our healthy menu is completely free of meat, dairy and eggs – an ideal yogic diet that supports your practices.",
    ],
  },
  {
    q: "Do you have a spa for massage & healing treatments?",
    a: [
      <>
        Yes, there is an in-house <Link href="/retreat-center">healing spa</Link> overlooking the river and temple where
        various massages and healing treatments can be booked.
      </>,
    ],
  },
  {
    q: "Where in Bali are you located, and do you travel?",
    a: [
      "Blooming Lotus Yoga is located in Lodtunduh, Ubud, in the Gianyar Regency of Bali — about 15 minutes from central Ubud and one hour from Bali’s international airport in Denpasar (DPS). All our teacher trainings, yoga retreats and meditation retreats are held here at our own retreat center.",
      "We also teach private yoga classes at homes, hotels and villas in Ubud and the surrounding area. If you’re elsewhere in Bali, contact us and we’ll let you know what’s possible.",
    ],
  },
];

// “People also ask…” — the four long answers from the source homepage.
export const peopleAlsoAsk = [
  {
    q: "How do I become a yoga instructor in Bali?",
    a: [
      "There are two different questions hiding inside this one, and most guides blur them together. Training in Bali and working in Bali have almost nothing to do with each other legally.",
      <>
        <strong>Training in Bali is straightforward.</strong> You attend a 200-hour yoga teacher training as a tourist.
        Most nationalities can enter on a visa on arrival, currently around IDR 500,000 (about US$28), valid for 30 days
        and extendable once for a further 30. Because most Bali trainings run 16 to 27 days, a visa on arrival usually
        covers a 200-hour course with a few days to spare — but if you want time to travel afterwards, the 60-day C1
        visit visa (roughly US$100–150, applied for before you fly, extendable twice to a maximum of 180 days) removes the
        pressure entirely.
      </>,
      <>
        Two things now catch people out at Ngurah Rai airport. Every foreign visitor must pay the{" "}
        <strong>Bali Tourist Levy of IDR 150,000</strong> (about US$10) per entry, separate from your visa — pay it in
        advance at the official Love Bali portal and keep the QR code, because enforcement tightened significantly in
        2026. And immigration officers may ask for <strong>proof of funds</strong>, typically three months of bank
        statements showing around US$2,000.
      </>,
      <>
        <strong>Working in Bali afterwards is an entirely different matter,</strong> and it’s where most people’s plans
        quietly fall apart. Completing a training in Bali gives you no right to teach here. See the next question.
      </>,
      <>
        <strong>What actually makes you employable</strong> is less about where you trained than what you can do when
        you finish. Studios and retreat centers hire teachers who can hold a room, sequence intelligently and adapt to
        mixed levels — not teachers who can list asanas. That comes from practicum time: actually teaching, being
        watched, and being corrected. When you compare courses, ask how many hours you will spend teaching in front of
        other people, and how many teachers will be there to give you feedback. Blooming Lotus Yoga graduates may also
        retake the YTT free of charge, without limit, which means the learning does not stop on graduation day.
      </>,
    ],
  },
  {
    q: "Can you work as a yoga teacher in Bali?",
    a: [
      <>
        <strong>Yes, but only with a work permit.</strong> Teaching yoga for payment in Indonesia requires a{" "}
        <strong>Working KITAS</strong>, issued under the business classification for sports and recreation education
        services. It must be sponsored by an Indonesian company that employs you and holds the necessary RPTKA and work
        permit notification. A tourist visa does not permit paid work of any kind, including teaching a single paid
        class.
      </>,
      "All teaching staff at Blooming Lotus Yoga hold current Indonesian work permits, which is why we can describe this process from direct experience rather than from research.",
      <>
        <strong>What it costs.</strong> The Indonesian government levies a DPKK fee of{" "}
        <strong>US$600 for a six-month permit or US$1,200 for twelve months</strong>, paid by the sponsoring employer.
        Applying from outside Indonesia typically takes about three weeks for the e-visa plus roughly ten days to convert
        to a KITAS after arrival; switching onshore from an existing visa takes around four weeks and costs approximately
        IDR 2,500,000 more.
      </>,
      <>
        <strong>What you’ll need:</strong> a passport valid at least 18 months, a CV, a certificate of your
        qualification, a reference letter evidencing around five years of cumulative work experience, health insurance,
        and a bank statement showing roughly US$2,000.
      </>,
    ],
  },
  {
    q: "What is the best yoga teacher training course?",
    a: [
      "There is no single best course, but there are questions that separate a serious training from a holiday with a certificate at the end. These are the ones we’d ask if we were choosing.",
      <>
        <strong>Ask how the course handles mixed levels.</strong> Almost nobody asks this, and it has a bigger effect on
        what you actually learn than anything else on the brochure. Every training takes in students at different stages.
        The question is whether the school has a real method for that, or whether it simply teaches to the middle and lets
        the rest fall behind or coast. Ask what happens if a posture is beyond you on day three, and ask what happens if it
        is too easy. A school that cannot answer specifically has not thought about it. At Blooming Lotus Yoga we teach to
        the individual, offer variations in every session, and place as much weight on philosophy, pranayama and
        meditation as on asana — which is why beginners and experienced practitioners can train together.
      </>,
      <>
        <strong>Ask for the all-in price, not the tuition.</strong> Two in three Bali trainings advertise a price without
        a room. A shared room and three meals a day add about US$40 a day at the schools’ own rates, so two courses
        advertised at the same price can end up roughly US$900 apart over a 22-day course. Tuition-only courses look
        cheaper, at US$2,366 on average, but once a room and meals are added they usually cost more than an all-inclusive
        package, which averages US$2,858. It’s also worth asking whether paying by card or PayPal adds a fee: 8 of 29
        schools charge one.{" "}
        <a href={PRICE_REVIEW} target="_blank" rel="noopener noreferrer">
          See our 2026–27 price review of 29 Bali schools
        </a>
        .
      </>,
      <>
        <strong>Ask how many students are in the group, and how many teachers.</strong> Twenty-four students with one
        teacher is a very different training from twelve with three. Practicum time — actually teaching, and being
        corrected — is where confidence comes from, and it divides by group size.
      </>,
      <>
        <strong>Ask whether the teachers hold Indonesian work permits.</strong> Almost nobody asks this, and it tells you a
        great deal about how the school operates. Trainings led by teachers working on tourist visas are vulnerable to
        disruption.
      </>,
      <>
        <strong>Ask what happens if the course doesn’t fill.</strong> Small schools cancel under-subscribed courses,
        sometimes weeks out, after you’ve booked flights. Ask directly whether courses have ever been canceled and what
        the policy is.
      </>,
      <>
        <strong>Ask about the refund and transfer policy before you pay a deposit.</strong> Deposits are commonly
        non-refundable. Find out what happens if you get ill, if your visa is refused, or if your circumstances change.
      </>,
      <>
        <strong>Ask what you get afterwards.</strong> Some schools hand you a certificate and end the relationship. Ask
        about continuing support, alumni access, and whether you can retake the course. We allow our graduates to retake
        the YTT free of charge, without limit, because learning to teach doesn’t finish on graduation day.
      </>,
    ],
  },
  {
    q: "How long is yoga teacher training in Bali?",
    a: [
      <>
        200-hour yoga teacher trainings in Bali run anywhere from 16–28 days.{" "}
        <strong>The number of days matters less than how those days are structured</strong>, and this is where courses
        differ most.
      </>,
      "Yoga Alliance requires 200 contact hours, and every registered school delivers them — but a school can fit 200 hours into 16 days or spread them across 28. A compressed course is ideal for those who don’t have the ability to spend a lot of time abroad and is significantly cheaper due to the reduced price of daily accommodations and food. A longer course covers the same syllabus at a slower pace but will cost more.",
      "Blooming Lotus Yoga offers 21-day and 23-day long YTT courses depending on the cohort.",
      <>
        <strong>Practical note on visas:</strong> a 30-day visa on arrival covers most 200-hour trainings but leaves
        little margin. If your course runs longer and you want any time to travel, either plan to extend on arrival or
        apply for a 60-day visit visa before you fly.
      </>,
    ],
  },
];

export const yttFaqs = [
  {
    q: "What are the pre-requisites?",
    a: [
      "There is no minimum number of years of practice required. We welcome beginner and intermediate practitioners, and our teachers adapt instruction to meet each student at their own level.",
      "We speak with every applicant before accepting them — not as a test, but to make sure the course is right for you. Courses are taught in English, so students need to be able to read, write and discuss the material.",
    ],
  },
  {
    q: "How do I pay for the course?",
    a: [
      "Step 1 — a deposit of US$500 by credit/debit card or PayPal secures your space.",
      "Step 2 — the second payment is due within 30 days of registration if you apply more than 2 months before the course; for late registrations, the deposit and second payment are due within 48 hours.",
      "Step 3 — the final payment is due on arrival in USD or Indonesian Rupiah, by cash or card. Payment plans and scholarships are available — just ask.",
    ],
  },
  {
    q: "What is your refund policy?",
    a: [
      "You can transfer your tuition to another course within 1 year (once) with a minimum of 2 months’ notice. The US$500 deposit is fully refundable for 7 days and transferable.",
      "The remaining tuition is fully refundable before 6 months, 50% refundable before 2 months, and non-refundable less than 2 months before the start date (minus 3.6% card or 4.4% PayPal processing fees).",
    ],
  },
  {
    q: "How many students are on each course?",
    a: [
      "A maximum of 18 students per teacher training, so that each student gets the personal attention and practicum time they deserve.",
    ],
  },
  {
    q: "Can I really take the course again for free?",
    a: [
      "Absolutely! After you graduate you are welcome to retake the full 200-hour training with us again at no cost, as often as you want, and become part of our global yoga family.",
    ],
  },
  {
    q: "Are meals included?",
    a: [
      "Yes — three organic vegan meals a day at Amrita restaurant, excluding your days off (most students explore Bali and eat out). Students living off-site can opt in to the meal plan for US$360.",
    ],
  },
  {
    q: "How are people paired in shared rooms?",
    a: [
      "Shared rooms are for 2 people. Women are placed with women and men with men, unless you register together as partners or friends. Single men can register with a friend, choose a private room, live off-site, or contact us about shared availability.",
    ],
  },
];

export const retreatsFaqs = [
  {
    q: "Do I need yoga experience to go on a retreat?",
    a: ["No. Our retreats are open to beginner and intermediate practitioners, and no previous yoga experience is required."],
  },
  {
    q: "Are Bali yoga retreats good for solo female travelers?",
    a: [
      "Yes. Solo female guests who book a shared room are placed only with other women, airport pickup can be arranged, and the retreat center has a 24-hour front desk. Retreats are capped at 16 guests, so groups stay small.",
    ],
  },
  {
    q: "What’s included in a Blooming Lotus yoga retreat?",
    a: [
      "Accommodation, two yoga classes daily, daily meditation, workshops, two meals a day, a Balinese ceremony, pool access, wi-fi, a welcome drink and a free shuttle to Ubud. Lunch is not included. Airport transfer costs US$35 each way.",
    ],
  },
  {
    q: "How long should my first yoga retreat be?",
    a: [
      "Three nights is enough to learn a complete practice you can continue at home and suits people with limited time in Bali. Six nights gives the practice more time to settle and includes all three workshops. Both are suitable for a first retreat.",
    ],
  },
  {
    q: "Can I attend classes without staying at the retreat?",
    a: ["Yes. Attending classes and workshops without accommodation costs US$150 for the 4-day retreat and US$300 for the 7-day retreat."],
  },
  shared.visa,
];

const retreatCommon = [
  {
    q: "How are people paired in shared rooms?",
    a: [
      "The Shared Suite, Shared Deluxe and Shared Villa options are for 2 people per room. If you register together as a couple or friends you will share a room. Solo female travelers only share with another woman; single male travelers book a private room.",
    ],
  },
  {
    q: "What is your refund policy?",
    a: [
      "We have a risk-free policy: if you need to cancel for any reason you can transfer to another retreat within the next 3 years, or receive a refund on your deposit (minus 5.6% service fees) with a minimum of 7 days’ notice. Once the retreat has begun, costs are non-refundable.",
    ],
  },
  {
    q: "How do I get to the retreat?",
    a: [
      "Bali’s airport in Denpasar (DPS) is about a 1-hour drive away. We can arrange an airport pick-up for US$35. From elsewhere in Bali, a taxi costs around US$10–40.",
    ],
  },
  {
    q: "Are meals included?",
    a: [
      "Every package includes a vegan breakfast and dinner at Amrita each day (dinner on arrival day, breakfast on departure day). Lunch is open, so you can order from the à la carte menu or take the free shuttle into Ubud.",
    ],
  },
  {
    q: "What are my payment options?",
    a: [
      "Pay a 50% deposit online by card or PayPal to secure your space (+5.6% tax & service fees). The remaining balance is due at check-in in USD cash, Rupiah cash or by card.",
    ],
  },
  shared.alcohol,
  {
    q: "Is there a minimum age, and can I bring my children?",
    a: [
      "There is no minimum age, and children are welcome in classes when a parent is attending the retreat — as long as they don’t disturb the retreat atmosphere.",
    ],
  },
];

export const escapeFaqs = [
  {
    q: "Should I book the 4-day or the 7-day retreat?",
    a: [
      "Both run at the same venue with the same teachers, accommodation and daily rhythm. The 4-day suits limited time in Bali, a first retreat, or the lowest-cost way in (from US$350). The 7-day suits you if you want to go deeper, want all three workshops, or are flying a long way.",
    ],
  },
  {
    q: "Is 4 days long enough for a yoga retreat?",
    a: [
      "Four days and three nights is enough to learn a complete practice you can continue at home. If you want the practice to be deeper and want all three workshops, the 7-Day Bliss Retreat is the better choice.",
    ],
  },
  {
    q: "What days does the 4-day retreat start and finish?",
    a: [
      "Every Sunday and every Wednesday. A Sunday retreat runs to Wednesday and a Wednesday retreat runs to Saturday. Check-in is 1:30–3:30 pm on the first day; check-out by 12:00 noon on the last day.",
    ],
  },
  shared.beginner,
  ...retreatCommon,
];

export const blissFaqs = [
  {
    q: "What makes these retreats so unique?",
    a: [
      "Unlike many other retreats in Bali, Blooming Lotus Yoga is first and foremost a yoga school. Our aim is to empower you with the essential practices to deepen your understanding of the art and science of yoga.",
      "A portion of your retreat costs is donated to charities serving some of the most impoverished communities in Bali and rural India.",
    ],
  },
  {
    q: "What are the check-in and check-out times?",
    a: [
      "Check-in is on Sunday between 1:30 and 3:30 pm so you can settle in, followed by a group orientation at 5:00 pm and dinner at 6:30 pm. Check-out is by 12:00 noon on Saturday. Early check-in and late check-out are possible on request.",
    ],
  },
  {
    q: "Can I attend the classes and stay elsewhere?",
    a: [
      "Yes — you can live off-site and attend only the classes and workshops (US$300 for the 7-day). You will need a driver or a rented motorbike, as accommodation within walking distance is limited.",
    ],
  },
  shared.beginner,
  ...retreatCommon,
];

export const meditationFaqs = [
  {
    q: "Which meditation retreat is right for me?",
    a: [
      "If you are new to meditation, the Beginner Retreat combines 7 days of yoga and meditation with lifestyle workshops and cultural events. If you already have a meditation practice, the Advanced Retreat is a 7-day silent retreat with 5 days of complete silence and 4 intensive meditation sessions daily.",
    ],
  },
  {
    q: "What does the meditation retreat cost?",
    a: [
      "The meditation teachings are offered freely. Only food and accommodation are charged.",
    ],
  },
  {
    q: "What technique will I learn?",
    a: [
      "A complete method of silent meditation from the yogic tradition: controlled breathing to stabilise the mind (pranayama), and three root practices to concentrate the mind upon silence — breath awareness, mantra and self-inquiry.",
    ],
  },
  {
    q: "Will this qualify me to teach meditation?",
    a: [
      "The beginner and intermediate courses provide a strong foundation for a home meditation and pranayama practice, and qualify you to teach meditation to others.",
    ],
  },
  {
    q: "What is the cancellation policy for meditation retreats?",
    a: [
      "You can transfer to another retreat within the next 3 years or receive a full refund with a minimum of 48 hours’ notice before check-in. Once the retreat has begun, costs are non-refundable.",
    ],
  },
  shared.restaurant,
];
