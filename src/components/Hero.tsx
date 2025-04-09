
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create transforms for parallax effect
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  const lightX = useTransform(mouseX, [0, 1000], [-30, 30]);
  const lightY = useTransform(mouseY, [0, 1000], [-30, 30]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x - rect.width / 2);
      mouseY.set(y - rect.height / 2);
      
      setMousePosition({
        x: x / rect.width,
        y: y / rect.height,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Clean gradient background instead of photo */}
      <div className="absolute inset-0 z-0 overflow-hidden will-change-transform" 
        style={{ 
          transform: `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
        }}>
        
        {/* Enhanced purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-indigo-900/90 dark:from-purple-900 dark:via-purple-700 dark:to-indigo-900"></div>
        
        {/* Enhanced Gradient Overlay with stronger purple */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-purple-900/60 to-black/50 dark:from-black/70 dark:via-purple-900/80 dark:to-black/70"
          style={{ 
            x: mouseX,
            y: mouseY,
            scale: 1.2,
          }}
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{
            type: "spring",
            damping: 60,
            stiffness: 90,
          }}
        />
        
        {/* Enhanced Interactive Spotlight Effect */}
        <motion.div 
          className="absolute w-[70vw] h-[70vh] rounded-full blur-[100px] opacity-50 dark:opacity-70 will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(0,232,255,0.5) 50%, transparent 80%)',
            left: lightX,
            top: lightY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 180,
          }}
        />
        
        {/* More vibrant floating particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 
                ? 'bg-[#dbff00]/80 dark:bg-[#8B5CF6]/90' 
                : i % 4 === 1 
                  ? 'bg-[#00e8ff]/80' 
                  : i % 4 === 2 
                    ? 'bg-[#00ffba]/70' 
                    : 'bg-white/70'
            }`}
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -Math.random() * 180 - 50, 0],
              x: [0, Math.random() * 120 - 60, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, Math.random() * 0.7 + 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
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
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Take the Light of Yeshua to the Nations
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
                <button className="donate-button flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full">
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
                <button className="bg-white/15 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full transition-all duration-500 hover:bg-white/25 w-full sm:w-auto">
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
