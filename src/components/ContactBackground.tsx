
import React from "react";

/**
 * A vibrant, minimal, creative static background for the Contact page.
 * Uses bold gradients and colorful blurred spots, inspired by the Hero section—no animation, just color pop.
 */
const ContactBackground = () => (
  <div
    className="absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
    style={{
      pointerEvents: "none",
      background:
        // Layered vibrant gradient base
        "linear-gradient(120deg, #f97316 15%, #8B5CF6 60%, #0EA5E9 100%)",
    }}
  >
    {/* Vivid magenta orange fade top left */}
    <div className="absolute -top-32 -left-32 w-[34rem] h-[30rem] rounded-full bg-gradient-to-br from-pink-400/60 via-orange-400/40 to-transparent blur-[110px] opacity-60 pointer-events-none" />

    {/* Deep violet/blue soft spot top right */}
    <div className="absolute -top-24 right-0 w-[30rem] h-[20rem] rounded-full bg-gradient-to-tr from-indigo-500/70 via-purple-500/40 to-transparent blur-[100px] opacity-50 pointer-events-none" />

    {/* Bright blue/cyan splash bottom right */}
    <div className="absolute bottom-0 -right-24 w-[32rem] h-80 rounded-full bg-gradient-to-br from-cyan-400/70 via-blue-500/60 to-transparent blur-[90px] opacity-50 pointer-events-none" />

    {/* Vivid gold/yellow glow bottom left */}
    <div className="absolute -bottom-28 -left-20 w-[24rem] h-[18rem] rounded-full bg-gradient-to-tr from-yellow-400/60 via-orange-300/40 to-transparent blur-3xl opacity-50 pointer-events-none" />

    {/* Fine, barely-there pink line for depth */}
    <div className="absolute left-1/3 top-16 w-1/2 h-1 bg-gradient-to-r from-pink-400/25 via-purple-500/10 to-transparent rounded pointer-events-none" />

    {/* Fine bright blue line bottom right for accent */}
    <div className="absolute right-1/4 bottom-8 w-1/3 h-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-transparent rounded pointer-events-none" />

    {/* Subtle glassmorphism overlay fade at the bottom */}
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/60 via-white/30 to-transparent dark:from-background/90 dark:via-background/50 dark:to-transparent" />

    {/* Optional: a faint central blurred ellipse for focus */}
    <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-2/3 h-64 bg-gradient-to-r from-indigo-200/20 via-cyan-100/10 to-pink-100/10 blur-3xl opacity-40 rounded-full pointer-events-none" />
  </div>
);

export default ContactBackground;
