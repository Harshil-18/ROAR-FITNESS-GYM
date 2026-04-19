import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollPanel from "../components/ScrollPanel";
import { createEntry, getEntries } from "../lib/api";
import { defaultTestimonials } from "../data/testimonials";

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

const starRow = (count) => "\u2605".repeat(count);

const Testimonials = () => {
  const [form, setForm] = useState({ name: "", feedback: "", rating: 0 });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviews, setReviews] = useState(defaultTestimonials);
  const [isLoading, setIsLoading] = useState(true);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await getEntries();
        const feedbackEntries = Array.isArray(data)
          ? data
              .filter((entry) => entry.feedbackdescription && entry.rating)
              .map((entry) => ({
                id: entry.id,
                name: entry.name,
                feedback: entry.feedbackdescription,
                rating: Number(entry.rating),
              }))
          : [];

        setReviews(feedbackEntries.length ? feedbackEntries : defaultTestimonials);
      } catch (error) {
        console.error("Unable to load testimonials", error);
        setSubmitState({
          type: "error",
          message: "API not reachable, so fallback testimonials are being shown.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);

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
      const createdReview = await createEntry({
        name: form.name,
        email: "",
        phonenumber: "",
        rating: form.rating,
        contactdescription: "",
        feedbackdescription: form.feedback,
      });

      setReviews((current) => [
        {
          id: createdReview.id,
          name: createdReview.name,
          feedback: createdReview.feedbackdescription,
          rating: Number(createdReview.rating),
        },
        ...current,
      ]);
      setForm({ name: "", feedback: "", rating: 0 });
      setHoveredRating(0);
      setSubmitState({
        type: "success",
        message: "Your testimonial has been saved to the database.",
      });
    } catch (error) {
      console.error("Unable to save testimonial", error);
      setSubmitState({
        type: "error",
        message: error.message || "Unable to save testimonial right now.",
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
            Results feel more believable when real members tell the story.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            This page now sends review data to Postgres and loads the latest testimonials
            back from the API.
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
              Submit Review
            </button>
          </motion.form>

          {/* <div className="grid gap-5 md:grid-cols-2">
            {isLoading ? (
              <div className="panel-card text-slate-300">Loading testimonials...</div>
            ) : null}

            {reviews.map((review, index) => (
              <motion.article
                key={review.id || `${review.name}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                variants={fadeUp}
                className="panel-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <span className="text-lg tracking-wider text-amber-300">
                    {starRow(review.rating)}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{review.feedback}</p>
              </motion.article>
            ))}
          </div> */}
        </div>
      </ScrollPanel>
    </div>
  );
};

export default Testimonials;
