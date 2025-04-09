
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Enhanced Background with Animated Overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602516102413-a74ae1a03a0c?q=80&w=1974')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-ministry-purple/60"></div>
        
        {/* Animated Light Rays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ministry-purple/20 via-transparent to-transparent"
        ></motion.div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Take the Light of Yeshua to the Nations
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the mission. Preach the truth. Set captives free.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/donate">
                <button className="donate-button flex items-center justify-center gap-2 w-full sm:w-auto">
                  Donate Now
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to="/mission">
                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold py-3 px-6 rounded-lg transition-all duration-500 hover:bg-white/20 w-full sm:w-auto">
                  Our Mission
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
