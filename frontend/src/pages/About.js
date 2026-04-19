import React from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";

const values = [
  {
    title: "Expert Coaching",
    description: "Trainers combine strength science, technique correction, and motivation that keeps members improving.",
  },
  {
    title: "Premium Space",
    description: "From heavy lifting zones to recovery corners, the layout is designed to feel focused, clean, and high energy.",
  },
  {
    title: "Real Community",
    description: "Members train with shared ambition, so beginners and advanced athletes both feel supported and challenged.",
  },
];

const stats = [
  { value: "8+", label: "Years coaching results" },
  { value: "1200+", label: "Members transformed" },
  { value: "35", label: "Weekly classes" },
  { value: "24/7", label: "Member access" },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Head Strength Coach/Mobility and Conditioning/Nutrition and Transformation",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80",
  }
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
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="section-tag">
            About Us
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            A gym built to feel cinematic, disciplined, and welcoming every single day.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Roar Fitness is designed for people who want serious equipment, coaching that
            actually helps, and a premium training atmosphere that keeps momentum high.
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
              We mix heavy training culture with polished design and modern coaching.
            </h2>
            <p className="text-base leading-8 text-slate-300">
              The goal is simple: when members walk in, they should instantly feel like
              they want to train. That means strong visuals, clean equipment lines,
              supportive coaches, and programming that works for both transformations and
              performance.
            </p>
            <p className="text-base leading-8 text-slate-300">
              Whether someone is coming in for body recomposition, strength gain, or
              general fitness, the experience is built to be motivating at every stage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={fadeUp}
            className="image-panel min-h-[420px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(15, 23, 42, 0.1), rgba(2, 6, 23, 0.55)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={3} className="content-section content-section--image">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8">
            <p className="section-tag">Why Members Stay</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              More than equipment, it is the full experience.
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
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{value.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{value.description}</p>
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
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
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
              Coach with different specialties, one shared standard.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollPanel>
    </div>
  );
};

export default About;
