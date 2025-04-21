
import React from "react";

/**
 * ContactBackground
 * - Minimal, vibrant, and color-matched to the main site palette.
 * - Lighter (almost white) in light mode with pops of cyan, teal, and indigo.
 * - Dramatic but deep in dark mode with lush, vivid gradients (teal, cyan, indigo).
 * - No animations, just clean glassy gradients and minimal design.
 */
const ContactBackground = () => (
  <div
    className="absolute inset-0 -z-10 overflow-hidden transition-colors duration-700"
    aria-hidden="true"
    style={{
      pointerEvents: "none",
    }}
  >
    {/* Main gradient base layers */}
    {/* LIGHT MODE: almost white with teal/cyan/indigo fade. DARK MODE: deep navy/indigo/blacks. */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-br
        from-white via-cyan-50 to-teal-50
        dark:from-[#0a1021] dark:via-[#10213f] dark:to-[#091724]
        transition-colors duration-700"
    />

    {/* Teal/Indigo blobs - GLASSY, big and subtle in light, punchier in dark */}
    {/* Top left spot */}
    <div
      className="
        absolute -top-28 -left-20
        w-[28rem] h-[18rem] rounded-full
        bg-gradient-to-br
        from-teal-400/25 via-cyan-200/20 to-indigo-300/10
        blur-[90px] opacity-60
        dark:from-cyan-600/30 dark:via-teal-600/20 dark:to-indigo-700/30
        dark:opacity-70
        pointer-events-none
      "
    />
    {/* Bottom right bright spot */}
    <div
      className="
        absolute bottom-0 -right-20
        w-[30rem] h-[18rem] rounded-full
        bg-gradient-to-tr
        from-cyan-300/25 via-indigo-200/25 to-teal-300/10
        blur-[90px] opacity-60
        dark:from-indigo-700/30 dark:via-cyan-500/25 dark:to-teal-800/30
        pointer-events-none
      "
    />
    {/* Top right concentrated indigo/cyan small puff */}
    <div
      className="
        absolute -top-24 right-20
        w-[13rem] h-[11rem] rounded-full
        bg-gradient-to-br
        from-indigo-300/30 via-cyan-400/20 to-transparent
        blur-[60px] opacity-30
        dark:from-indigo-600/50 dark:via-cyan-700/30 dark:to-transparent dark:opacity-40
        pointer-events-none
      "
    />
    {/* Center faint ellipse for 3D feeling */}
    <div
      className="
        absolute left-1/2 top-[44%]
        -translate-x-1/2 -translate-y-1/2
        w-[55vw] h-48
        bg-gradient-to-tr
        from-cyan-200/10 via-white/30 to-indigo-50/10
        dark:from-teal-800/30 dark:via-cyan-600/5 dark:to-indigo-800/10
        blur-3xl opacity-30
        rounded-full pointer-events-none
      "
    />

    {/* Minimal geometry: two lightly-colored, *very soft* diagonal lines */}
    <div
      className="
        absolute left-[28vw] top-28
        w-2/3 h-1
        bg-gradient-to-r
        from-cyan-500/10 via-indigo-400/10 to-transparent
        rounded pointer-events-none
        dark:from-cyan-400/20 dark:to-transparent
      "
    />
    <div
      className="
        absolute right-[15vw] bottom-16
        w-1/2 h-1
        bg-gradient-to-l
        from-teal-400/10 via-cyan-300/10 to-transparent
        rounded pointer-events-none
        dark:from-teal-400/20 dark:to-transparent
      "
    />

    {/* Glassy overlay at bottom to improve panel readability */}
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/75 via-white/40 to-transparent dark:from-[#191A24]/90 dark:via-[#191A24]/60 dark:to-transparent pointer-events-none" />
  </div>
);

export default ContactBackground;

