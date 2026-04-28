import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";
import { createUser } from "../lib/api";

const StarButton = ({ filled, onSelect, onHover, onLeave }) => (
  <button
    type="button"
    onClick={onSelect}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`text-3xl transition ${
      filled ? "scale-110 text-amber-300" : "text-slate-500 hover:text-amber-200"
    }`}
    aria-label="Select star"
  >
    {"\u2605"}
  </button>
);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

const Testimonials = () => {
  const [form, setForm] = useState({ name: "", feedback: "", rating: 0 });
  const [hoveredRating, setHoveredRating] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useState([]);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.feedback || !form.rating) {
      setSubmitState({
        type: "error",
        message: "Please complete name, feedback, and rating.",
      });
      return;
    }

    try {
      const createdReview = await createUser({
        name: form.name,
        email: "",
        contact: "",
        ratings: form.rating,
        query: "",
        feedback: form.feedback,
      });

      setReviews((current) => [
        {
          id: createdReview.id,
          name: createdReview.name,
          feedback: createdReview.feedback,
          rating: Number(createdReview.ratings),
        },
        ...current,
      ]);
      setForm({ name: "", feedback: "", rating: 0 });
      setHoveredRating(0);
      setSubmitState({
        type: "success",
        message: "Thanks for your feedback—we appreciate it and are working to improve your gym experience.",
      });
    } catch (error) {
      console.error("Unable to save feedback", error);
      setSubmitState({
        type: "error",
        message: error.message || "Unable to save feedback right now.",
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
            "linear-gradient(120deg, rgba(2, 6, 23, 0.82), rgba(15, 23, 42, 0.35)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1700&q=80')",
        }}
      >
        <div className="page-hero__content mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="section-tag">
            Testimonials
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Real transformations speak louder—hear directly from members who’ve lived the journey.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            See what our members are saying and share your own fitness journey with us.
          </motion.p>
        </div>
      </ScrollPanel>

      <ScrollPanel zIndex={2} className="content-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="panel-card space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Feedback</label>
              <textarea
                placeholder="Tell us how your experience feels"
                value={form.feedback}
                onChange={(event) => setForm({ ...form, feedback: event.target.value })}
                rows="5"
                className="input-field"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    filled={star <= (hoveredRating || form.rating)}
                    onSelect={() => setForm({ ...form, rating: star })}
                    onHover={() => setHoveredRating(star)}
                    onLeave={() => setHoveredRating(0)}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {form.rating ? `${form.rating} out of 5 selected` : "Choose a star rating"}
              </p>
            </div>

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
              Share Your Experience
            </button>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80"
                alt="Members training in gym"
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-orange-200">
                  Success Stories from Our Members
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Your story inspires others to start their fitness journey with confidence.
                </h3>
              </div>
            </div>

            <div className="panel-card space-y-4">
              <p className="section-tag">Why Member Feedback Matters</p>
              <p className="leading-8 text-slate-300">
                Honest feedback builds trust and shows what new members can achieve here—real support, real progress, real results.
              </p>
              <p className="leading-8 text-slate-300">
                Your feedback helps us grow and motivates others—share your experience and be part of someone else’s transformation.
              </p>
            </div>
          </motion.div>

        </div>
      </ScrollPanel>
    </div>
  );
};

export default Testimonials;
