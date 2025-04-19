import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Gradient Background - Gold tones */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-indigo-600 to-teal-600 dark:from-black dark:via-gold-darkest/30 dark:to-gold-dark/20"></div>

        {/* Enhanced Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br  dark:from-gold-darkest/40 dark:via-gold-dark/30 dark:to-gold/20 opacity-80"></div>

        {/* Subtle Gold Particle Effect */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0
                ? "bg-gold/60 dark:bg-gold/70"
                : i % 4 === 1
                ? "bg-gold-light/50"
                : i % 4 === 2
                ? "bg-gold-lighter/40"
                : "bg-white/40"
            }`}
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -Math.random() * 100 - 30, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content with Improved Animation */}
      <div className="container mx-auto px-4 z-10 pt-20 md:pt-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Take the{" "}
            <span className="bg-gradient-to-r from-gold-lightest via-gold to-gold-dark bg-clip-text text-transparent font-black">
              Light of Yeshua
            </span>{" "}
            to the Nations
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-10 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the mission. Preach the truth. Set captives free.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/donate">
                <button className="bg-gradient-to-r from-gold-lightest via-gold to-gold-dark hover:from-gold-dark hover:via-gold hover:to-gold-lightest text-black flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-gold/50 font-bold animate-royal-pulse">
                  Donate Now
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/mission">
                <button className="bg-white/15 backdrop-blur-md text-white border border-gold/30 font-bold py-4 px-8 rounded-full transition-all duration-500 hover:bg-gold/20 hover:border-gold w-full sm:w-auto">
                  Our Mission
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Smoother Gradient Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
