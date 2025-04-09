
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Enhanced Background with Animated Overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454709359660-832555be6d91?q=80&w=2064&h=1380&auto=format&fit=crop&ixlib=rb-4.0.3')" }}>
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 to-purple/70"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
        
        {/* Interactive Light Effect */}
        <div 
          className="absolute w-[80vw] h-[80vh] rounded-full blur-[100px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0,232,255,0.4) 0%, rgba(0,255,186,0.2) 50%, transparent 80%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        ></div>
        
        {/* Animated Light Rays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00e8ff]/30 via-transparent to-transparent"
        ></motion.div>
        
        {/* Enhanced Floating Particles with more variety */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-[#dbff00]/80' : i % 3 === 1 ? 'bg-[#00e8ff]/80' : 'bg-[#00ffba]/80'}`}
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.9, 0.2],
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
                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold py-3 px-6 rounded-lg transition-all duration-700 hover:bg-white/20 w-full sm:w-auto">
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
