import React from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";

const values = [
  {
    title: "Expert Coaching",
    description:
      "Expert coache who guide, correct, and push you to improve every day.",
  },
  {
    title: "Premium Space",
    description:
      "A clean, high-energy space built for serious training and recovery.",
  },
  {
    title: "Real Community",
    description:
      "A supportive community where everyone trains, improves, and grows together.",
  },
];

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "100+", label: "Transformations Achieved" },
  { value: "35", label: "Classes Every Week" },
  { value: "Mon–Sat", label: "Training Schedule" },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Head Strength Coach/Mobility and Conditioning/Nutrition and Transformation",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80",
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

const About = () => {
  return (
    <div className="page-shell stack-scroll">
      <ScrollPanel
        zIndex={1}
        className="page-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(2, 6, 23, 0.78), rgba(15, 23, 42, 0.3)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="page-hero__content mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="section-tag"
          >
            About Us
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            A gym built for discipline, energy, and real results—every single day.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Built for those who take fitness seriously—with powerful equipment, expert coaching, and an environment that keeps you consistent.
          </motion.p>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={2} className="content-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="panel-card space-y-5"
          >
            <p className="section-tag">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Where serious training meets smart coaching and a focused environment.
            </h2>
            <p className="text-base leading-8 text-slate-300">
              Our goal is simple—when you walk in, you feel ready to train. Clean space, powerful setup, and coaching that drives results.
            </p>
            <p className="text-base leading-8 text-slate-300">
              Whether your goal is fat loss, strength, or overall fitness, we help you stay motivated and consistent at every stage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={fadeUp}
            className="panel-card space-y-5"
          >
            <p className="section-tag">Coach Details</p>
            <h3 className="font-display text-3xl font-bold text-white">
              Rahul Sharma
            </h3>
            <p className="text-sm uppercase tracking-[0.26em] text-orange-200">
              Head Strength Coach
            </p>
            <p className="leading-8 text-slate-300">
              Rahul specializes in strength training, mobility, and body transformations—focused on proper form, steady progress, and long-term results.
            </p>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                Expertise
              </p>
              <p className="mt-3 leading-7 text-slate-200">
                Strength • Conditioning • Mobility • Nutrition
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollPanel>

      <ScrollPanel
        zIndex={3}
        className="content-section content-section--image"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <p className="section-tag">Why Members Stay</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              More than a gym—it’s a complete fitness experience.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.1}
                variants={fadeUp}
                className="panel-card"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={4} className="content-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                variants={fadeUp}
                className="panel-card text-center"
              >
                <p className="text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={5} className="content-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <p className="section-tag">Our Team</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Coach with different experties, one shared standard.
            </h2>
          </div>
          <div className="grid items-start gap-y-6 gap-x-4 grid-cols-1 lg:grid-cols-[1fr_2fr]">
            {/* LEFT SIDE */}
            <div className="grid gap-6 max-w-sm">
              {team.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.1}
                  variants={fadeUp}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70"
                >
                  <div
                    className="h-80 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.05), rgba(2, 6, 23, 0.55)), url('${member.image}')`,
                    }}
                  />
                  <div className="space-y-2 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-orange-200">
                      {member.role}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* RIGHT SIDE (FIXED) */}
            <div className="flex flex-col gap-6 h-full">
              {/* TOP CARD */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.12}
                variants={fadeUp}
                className="panel-card space-y-5"
              >
                <p className="section-tag">Coach Details</p>
                <h3 className="font-display text-3xl font-bold text-white">
                  Rahul Sharma
                </h3>
                <p className="text-sm uppercase tracking-[0.26em] text-orange-200">
                  Head Strength Coach
                </p>
                <p className="leading-8 text-slate-300">
                  Rahul leads advanced strength programming, mobility
                  corrections, and transformation planning.
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                    Specialties
                  </p>
                  <p className="mt-3 leading-7 text-slate-200">
                    Strength Training • Conditioning • Mobility • Nutrition
                    Guidance
                  </p>
                </div>
              </motion.div>

              {/* BOTTOM CARD */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.2}
                variants={fadeUp}
                className="panel-card space-y-5"
              >
                <p className="section-tag">Experience</p>
                <p className="text-slate-300 leading-7">
                  8+ years of coaching experience with 1000+ successful
                  transformations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollPanel>
    </div>
  );
};

export default About;
