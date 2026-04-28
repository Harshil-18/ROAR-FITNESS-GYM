import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl">

      {/* 🔥 Glow Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr]">

        {/* LEFT GRID */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* BRAND */}
          <div className="space-y-4">
            <p className="font-display text-2xl font-bold tracking-[0.28em] text-white">
              ROAR FITNESS
            </p>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Serious training, expert coaching, and a high-energy environment built for real results.
            </p>
          </div>

          {/* LINKS */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Explore
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Get in Touch
            </p>
            <div className="space-y-2 text-sm leading-7 text-slate-300">
              <p>Vivek Vihar, Nandpuri, Jagatpura, Jaipur</p>
              <p>+91 96677 33536</p>
              <p>roarfitness@gmail.com</p>
              <p>
                Monday – Saturday <br />
                6:00 AM – 10:00 AM <br />
                4:00 PM – 9:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* MEMBERSHIP */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Membership
            </p>
            <p className="text-sm leading-7 text-slate-300">
              Join today and start your transformation with expert guidance and the right environment.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* MAP */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
                Find Us
              </p>
              <p className="text-xs text-slate-400">Visit our gym location</p>
            </div>

            <div className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30 p-2">
              <iframe
                title="Gym location map"
                src="https://www.google.com/maps/place/42,+Vivek+vihar,+mod,+Nandpuri+Colony,+Jagatpura,+Jaipur,+Rajasthan+302017,+India/@26.8360962,75.8266287,85m/data=!3m1!1e3!4m9!1m2!2m1!1sYour+Gym+Location!3m5!1s0x396db61928324c9d:0xe744ea988cc98640!8m2!3d26.8360962!4d75.827192!16s%2Fg%2F11vywjqdxt?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                // "https://www.google.com/maps?q=Your+Gym+Location&z=14&output=embed"
                className="h-[240px] w-full rounded-[1.25rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30 p-6 text-center space-y-4">
            <p className="text-lg font-semibold text-white">
              Start Your Fitness Journey Today
            </p>
            <p className="text-sm text-slate-300">
              Chat with us for memberships, timings, and trial sessions.
            </p>

            <a
              href="https://wa.me/919667733536?text=Hi%20I%20want%20to%20join%20the%20gym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:bg-green-400"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © 2026 Roar Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;