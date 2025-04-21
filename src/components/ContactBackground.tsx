
import React from "react";

// A static, layered background for the Contact page with no animation, matching the Hero vibe.
const ContactBackground = () => (
  <div
    className="absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
    style={{
      pointerEvents: "none",
      background: "linear-gradient(120deg, #181b1f 30%, #161926 80%)",
    }}
  >
    {/* Gold/Indigo/Cyan gradient layer */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold-dark/30 via-cyan-700/30 to-indigo-900/40 dark:from-gold-darkest/35 dark:via-cyan-800/45 dark:to-gold-dark/20" />

    {/* Subtle blurred golden "halo" top left */}
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/40 blur-3xl opacity-70 pointer-events-none" />
    {/* Subtle blurred cyan accent bottom right */}
    <div className="absolute -bottom-24 -right-32 w-80 h-72 rounded-full bg-cyan-400/30 blur-3xl opacity-60 pointer-events-none" />
    {/* Fine white/indigo soft spot center right */}
    <div className="absolute top-1/3 right-0 w-64 h-56 rounded-full bg-white/10 dark:bg-indigo-200/15 blur-2xl opacity-40 pointer-events-none" />

    {/* Glassmorphism fade at the bottom, so the panel reads well */}
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

    {/* Ultra-faint fine lines for elegant touch */}
    <div className="absolute left-1/3 top-10 w-1/2 h-0.5 bg-gradient-to-r from-cyan-300/20 via-gold/20 to-indigo-200/0 rounded-full pointer-events-none" />
    <div className="absolute right-1/4 bottom-8 w-1/3 h-0.5 bg-gradient-to-r from-indigo-200/30 via-cyan-300/15 to-gold/0 rounded-full pointer-events-none" />
  </div>
);

export default ContactBackground;

