import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";
import { defaultTestimonials } from "../data/testimonials";
import { getUsers } from "../lib/api";

const plans = [
  {
    title: "Starter Burn",
    price: "$29",
    blurb: "A clean entry plan for members building routine, confidence, and workout consistency.",
    features: ["Full equipment access", "2 classes per week", "Fitness onboarding"],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Strength Plus",
    price: "$59",
    blurb: "Best for lifters and ambitious members who want structure and regular progress checks.",
    features: ["Unlimited classes", "Custom training split", "Monthly body analysis"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Elite Transform",
    price: "$99",
    blurb: "Premium transformation coaching with recovery support, nutrition guidance, and accountability.",
    features: ["Trainer sessions", "Nutrition support", "Recovery zone access"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
];

const classes = [
  {
    name: "Power Lift Club",
    detail: "Barbell-focused classes for strength, technique, and progressive overload.",
  },
  {
    name: "HIIT Engine",
    detail: "Fast-paced conditioning designed to improve stamina and keep energy high.",
  },
  {
    name: "Core and Mobility",
    detail: "Recovery-driven sessions to improve flexibility, posture, and movement quality.",
  },
];

const spaces = [
  {
    title: "Strength floor",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Class studio",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Recovery zone",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cardio deck",
    image:
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=1200&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
};

const textWord = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const AnimatedWords = ({ text, className, delay = 0 }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    animate="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={{
      ...staggerText,
      visible: {
        ...staggerText.visible,
        transition: {
          ...staggerText.visible.transition,
          delayChildren: delay,
        },
      },
    }}
    className={className}
  >
    {text.split(" ").map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        variants={textWord}
        className="mr-[0.28em] inline-block"
      >
        {word}
      </motion.span>
    ))}
  </motion.span>
);

const starRow = (count) => "\u2605".repeat(count);

const Home = () => {
  const [reviews, setReviews] = useState(defaultTestimonials);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await getUsers();
        const feedbackEntries = Array.isArray(data)
          ? data
              .filter((entry) => entry.feedback && entry.ratings)
              .map((entry) => ({
                id: entry.id,
                name: entry.name,
                feedback: entry.feedback,
                rating: Number(entry.ratings),
              }))
          : [];

        if (feedbackEntries.length) {
          setReviews(feedbackEntries);
        } else {
          setReviews(defaultTestimonials);
        }
      } catch (error) {
        console.error("Unable to load feedbacks", error);
        setReviews(defaultTestimonials);
      } finally {
        setIsLoadingReviews(false);
      }
    };

    loadTestimonials();
  }, []);

  const averageRating = useMemo(() => {
    if (!reviews.length) {
      return "0.0";
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <div className="page-shell stack-scroll">
      <ScrollPanel
        zIndex={1}
        className="page-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(2, 6, 23, 0.82), rgba(15, 23, 42, 0.4)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="page-hero__content mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <p className="section-tag">Elite Fitness Experience</p>
            <AnimatedWords
              text="Train in an environment designed to push limits, build strength, and deliver real results."
              className="max-w-3xl font-display text-5xl font-bold leading-tight text-white md:text-6xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="max-w-2xl text-lg leading-8 text-slate-200"
            >
              We combine world-class equipment, expert coaching, and structured programs to help you become stronger, fitter, and more confident every day.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#plans"
                className="rounded-full bg-brand-accent px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
              >
                Explore Memberships
              </a>
              <a
                href="#spaces"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Discover Our Gym
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="grid gap-5"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.28}
              variants={imageReveal}
              className="panel-card"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-[1.75rem] bg-cover bg-center p-5 text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(249, 115, 22, 0.25), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80')",
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-100">
                    Open Access
                  </p>
                  <p className="mt-10 text-4xl font-extrabold">Mon–Sat</p>
                  <p className="mt-2 text-sm text-slate-100">Morning: 6AM – 10AM | Evening: 4PM – 9PM</p>
                </motion.div>
                <motion.div
                  className="rounded-[1.75rem] bg-cover bg-center p-5 text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(14, 165, 233, 0.18), rgba(2, 6, 23, 0.8)), url('https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=80')",
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-200">
                    Proven Results
                  </p>
                  <p className="mt-10 text-4xl font-extrabold">92%</p>
                  <p className="mt-2 text-sm text-slate-100">
                    Members see real progress in just 90 days.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["Strength", "Conditioning", "Recovery"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                  className="panel-card text-center"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-200">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-xl font-bold text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={2} className="content-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="panel-card space-y-5"
          >
            <p className="section-tag">Why Choose Us</p>
            <AnimatedWords
              text="More than a gym—this is where transformation begins."
              className="block font-display text-3xl font-bold text-white md:text-4xl"
            />
            <p className="leading-8 text-slate-300">
              Every corner of our gym is designed to energize you—different zones, one powerful experience focused on your growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={imageReveal}
            className="image-panel min-h-[420px] overflow-hidden"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1400&q=80"
              alt="Gym interior"
              className="h-full w-full object-cover"
              initial={{ scale: 1.14 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              whileHover={{ scale: 1.06 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/10 to-slate-950/70" />
          </motion.div>
        </div>
      </ScrollPanel>

      <ScrollPanel id="plans" zIndex={3} className="content-section content-section--image">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-tag">Choose Your Plan</p>
              <AnimatedWords
                text="Flexible plans built for beginners, dedicated members, and complete transformations."
                className="block font-display text-3xl font-bold text-white md:text-4xl"
              />
            </div>
            <p className="max-w-xl text-slate-300">
              Simple pricing, powerful features—everything you need to start and stay consistent on your fitness journey.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.1}
                variants={imageReveal}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={plan.image}
                    alt={plan.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 to-slate-950/75" />
                </div>
                <div className="space-y-4 p-7">
                  <motion.p
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="text-sm uppercase tracking-[0.28em] text-orange-200"
                  >
                    {plan.title}
                  </motion.p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                    <span className="pb-2 text-slate-400">/ month</span>
                  </div>
                  <p className="leading-7 text-slate-300">{plan.blurb}</p>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ duration: 0.35, delay: 0.12 + featureIndex * 0.06 }}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={4} className="content-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <p className="section-tag">Training Programs</p>
            <AnimatedWords
              text="High-energy classes designed to build strength, endurance, and discipline."
              className="block font-display text-3xl font-bold text-white md:text-4xl"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {classes.map((item, index) => (
              <motion.article
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.1}
                variants={fadeUp}
                className="panel-card"
              >
                <motion.p
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-sm uppercase tracking-[0.28em] text-orange-200"
                >
                  Class 0{index + 1}
                </motion.p>
                <AnimatedWords
                  text={item.name}
                  className="mt-4 block text-2xl font-bold text-white"
                />
                <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollPanel>

      <ScrollPanel id="spaces" zIndex={5} className="content-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <p className="section-tag">Our Facilities</p>
            <AnimatedWords
              text="Explore premium spaces built for performance, recovery, and results."
              className="block font-display text-3xl font-bold text-white md:text-4xl"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {spaces.map((space, index) => (
              <motion.div
                key={space.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                variants={imageReveal}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <div className="relative min-h-[300px] overflow-hidden">
                  <motion.img
                    src={space.image}
                    alt={space.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ scale: 1.14 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.95, ease: "easeOut" }}
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 to-slate-950/75" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-200">
                    Zone 0{index + 1}
                  </p>
                  <AnimatedWords
                    text={space.title}
                    className="mt-2 block text-2xl font-bold text-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={6} className="content-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-tag">What Our Members Say</p>
              <AnimatedWords
                text="Real feedback from real members who trusted the process and achieved results."
                className="block font-display text-3xl font-bold text-white md:text-4xl"
              />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="panel-card min-w-[180px] px-5 py-4 text-center">
                <p className="text-4xl font-extrabold text-white">{averageRating}</p>
                <p className="mt-1 text-amber-300">
                  {starRow(Math.round(Number(averageRating) || 0))}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300">
                  Overall Rating
                </p>
              </div>
              <div className="panel-card min-w-[180px] px-5 py-4 text-center">
                <p className="text-4xl font-extrabold text-white">{reviews.length}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300">
                  Member Reviews
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="max-w-2xl text-slate-300">
              See the latest experiences shared by our members.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {isLoadingReviews ? (
              <div className="panel-card text-slate-300">
                Loading member experiences...
              </div>
            ) : null}
            {reviews.map((review, index) => (
              <motion.article
                key={review.id || `${review.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="panel-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{review.name}</h3>
                  <span className="text-lg tracking-wider text-amber-300">
                    {starRow(review.rating)}
                  </span>
                </div>
                <p className="mt-5 leading-8 text-slate-300">{review.feedback}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </ScrollPanel>
    </div>
  );
};

export default Home;
