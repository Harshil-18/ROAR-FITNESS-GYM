import React from "react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20join%20the%20gym"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-3 py-2 text-sm font-medium text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:bg-green-400"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.4 0 .01 5.39.01 12.04c0 2.12.55 4.19 1.6 6.02L0 24l6.11-1.6a12.01 12.01 0 005.94 1.52h.01c6.65 0 12.04-5.39 12.04-12.04 0-3.22-1.25-6.25-3.58-8.4zM12.05 21.8c-1.8 0-3.55-.48-5.08-1.38l-.36-.21-3.63.95.97-3.54-.23-.36a9.76 9.76 0 01-1.5-5.22c0-5.4 4.39-9.79 9.79-9.79 2.61 0 5.06 1.02 6.9 2.86a9.74 9.74 0 012.88 6.93c0 5.4-4.39 9.79-9.79 9.79z" />
      </svg>

      {/* Text (hidden on very small screens) */}
      <span className="hidden sm:inline">
        Chat
      </span>
    </a>
  );
};

export default WhatsAppFloat;