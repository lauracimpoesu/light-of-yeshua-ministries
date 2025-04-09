
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
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const lightX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const lightY = useTransform(mouseY, [0, 1000], [-50, 50]);
  
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
      {/* Enhanced 4K Background with Interactive Elements */}
      <div className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden will-change-transform" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=90&w=3840&auto=format&fit=crop')",
          backgroundSize: "cover",
          transform: `scale(1.05) perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
        }}>
        
        {/* Dynamic Gradient Overlay - Different for light/dark modes */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-black/70 dark:from-black/90 dark:via-purple-900/70 dark:to-black/80"
          style={{ 
            x: mouseX,
            y: mouseY,
            scale: 1.2,
          }}
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 100,
          }}
        />
        
        {/* Interactive Spotlight Effect */}
        <motion.div 
          className="absolute w-[60vw] h-[60vh] rounded-full blur-[120px] opacity-40 dark:opacity-50 will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(0,232,255,0.3) 50%, transparent 80%)',
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
            damping: 30,
            stiffness: 200,
          }}
        />
        
        {/* Enhanced Floating Particles with more variety */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 
                ? 'bg-[#dbff00]/60 dark:bg-[#8B5CF6]/80' 
                : i % 4 === 1 
                  ? 'bg-[#00e8ff]/70' 
                  : i % 4 === 2 
                    ? 'bg-[#00ffba]/60' 
                    : 'bg-white/50'
            }`}
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -Math.random() * 150 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
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
                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all duration-500 hover:bg-white/20 w-full sm:w-auto">
                  Our Mission
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Smoother Gradient Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
