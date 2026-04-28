import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";
import { createUser } from "../lib/api";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setSubmitState({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    try {
      await createUser({
        name: form.name,
        email: form.email,
        contact: form.phone,
        ratings: null,
        query: form.message,
        feedback: "",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitState({
        type: "success",
        message: "Thanks! We’ll get back to you shortly.",
      });
    } catch (error) {
      console.error("Unable to save contact message", error);
      setSubmitState({
        type: "error",
        message: error.message || "Unable to send your message right now.",
      });
    }
  };

  return (
    <div className="page-shell stack-scroll">
      <ScrollPanel
        zIndex={1}
        className="page-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(2, 6, 23, 0.84), rgba(15, 23, 42, 0.35)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1700&q=80')",
        }}
      >
        <div className="page-hero__content mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="section-tag">
            Contact
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Start your fitness journey—ask about memberships, training, or your first visit.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Reach out to us and our team will help you get started with the right plan.
          </motion.p>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={2} className="content-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="space-y-5"
          >
            <div className="panel-card space-y-4">
              <p className="section-tag">Visit Us</p>
              <h2 className="font-display text-3xl font-bold text-white">
                Book a gym tour or your first trial session.
              </h2>
              <p className="leading-8 text-slate-300">
                Have questions about memberships or training? We’re here to guide you.
              </p>
            </div>

            <div className="panel-card space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email Us</p>
                <p className="mt-1 text-lg font-semibold text-white">roarfitness@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Call Us</p>
                <p className="mt-1 text-lg font-semibold text-white">+91 96677 33536</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Training Hours</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Monday – Saturday | Morning: 6:00 AM – 10:00 AM | Evening: 4:00 PM – 9:00 PM | Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={fadeUp}
            className="panel-card space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="input-field"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              className="input-field"
            />
            <textarea
              placeholder="What’s your fitness goal?"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              rows="6"
              className="input-field"
            />

            {submitState.message ? (
              <p
                className={`text-sm ${
                  submitState.type === "error" ? "text-rose-300" : "text-emerald-300"
                }`}
              >
                {submitState.message}
              </p>
            ) : null}

            <button
              type="submit"
              className="rounded-full bg-brand-accent px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              Get Started
            </button>
          </motion.form>
        </div>
      </ScrollPanel>
    </div>
  );
};

export default Contact;
