
import { motion } from "framer-motion";

const Events = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">
              Events & Outreach
            </span>
          </motion.h1>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center ministry-gradient-text">
            Coming Soon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Events;
