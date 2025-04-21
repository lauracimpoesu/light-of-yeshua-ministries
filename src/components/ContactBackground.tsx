
import React from "react";
import { motion } from "framer-motion";

// 20 softly blurred gold/cyan/white bubbles for background effect
const bubbles = Array.from({ length: 20 }, (_, i) => ({
  size: Math.random() * 60 + 40,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  blur: Math.random() * 12 + 8,
  colorClass:
    i % 4 === 0
      ? "from-gold-dark to-gold-light"
      : i % 4 === 1
      ? "from-cyan-400 to-indigo-400"
      : i % 4 === 2
      ? "from-indigo-400 to-cyan-400"
      : "from-white/90 to-gold/80",
  delay: Math.random() * 8,
  duration: 7 + Math.random() * 10,
}));

const ContactBackground = () => (
  <div
    className="absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
    style={{
      pointerEvents: "none",
      background:
        "linear-gradient(120deg, #181b1f 30%, #161926 80%)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gold-dark/10 via-cyan-700/20 to-gold-light/5 dark:from-gold-darkest/20 dark:via-cyan-800/30 dark:to-gold-dark/10" />
    {/* Animated blurry "bubbles" */}
    {bubbles.map((bubble, i) => (
      <motion.div
        key={i}
        initial={{
          opacity: 0.15 + Math.random() * 0.15,
          y: 0,
        }}
        animate={{
          opacity: [0.12, 0.3 + Math.random() * 0.2, 0.12],
          y: [-bubble.size / 2, bubble.size / 1.5, -bubble.size / 2],
        }}
        transition={{
          duration: bubble.duration,
          repeat: Infinity,
          repeatType: "loop",
          delay: bubble.delay,
        }}
        style={{
          width: bubble.size,
          height: bubble.size,
          left: bubble.left,
          top: bubble.top,
          filter: `blur(${bubble.blur}px)`,
        }}
        className={`absolute rounded-full bg-gradient-to-br ${bubble.colorClass}`}
      />
    ))}
    {/* Bottom fade for glassmorphism panel */}
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
  </div>
);

export default ContactBackground;
