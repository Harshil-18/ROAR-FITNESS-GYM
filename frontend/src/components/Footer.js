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
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="font-display text-2xl font-bold tracking-[0.28em] text-white">
              ROAR FITNESS
            </p>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Strength-focused training, energetic classes, and real coaching for
              members who want visible progress and a sharp gym experience.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Quick Links
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Contact
            </p>
            <div className="space-y-2 text-sm leading-7 text-slate-300">
              <p>Vivek Vihar, Jagatpura</p>
              <p>+91 98765 43210</p>
              <p>roarfitness@gmail.com</p>
              <p>Opens Monday - Saturday: Morning - 6:00 AM - 10:00 AM, Evening - 5:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Membership
            </p>
            <p className="text-sm leading-7 text-slate-300">
              Replace the map address and contact details with your gym’s real
              location once you’re ready.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
              Roar Fitness Location
            </p>
            <p className="text-xs text-slate-400">Map placeholder on the right side</p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2">
            <iframe
              title="Gym location map"
              src="https://www.google.com/maps?q=Your+Gym+Location&z=14&output=embed"
              className="h-[320px] w-full rounded-[1.25rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
