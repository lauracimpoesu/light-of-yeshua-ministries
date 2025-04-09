
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import { motion } from "framer-motion";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 ministry-gradient-text text-center">
            Our Mission
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Taking the light of Yeshua to the nations through bold street evangelism is the heart of our ministry.
              We are committed to reaching the lost, proclaiming truth, and making disciples of all nations.
            </p>
          </div>
        </motion.div>
        <MissionSection />
      </div>
      <Footer />
    </>
  );
};

export default Mission;
