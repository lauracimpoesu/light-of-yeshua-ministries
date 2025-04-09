
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";

const About = () => {
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
            About Our Ministry
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Light of Yeshua Ministries is dedicated to spreading the Gospel through bold street evangelism 
              across the nations. Founded on biblical principles, we are committed to sharing the truth
              of Jesus Christ (Yeshua) with those who need to hear it most.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe that the Bible is the Word of YHWH. Jesus Yeshua is God Almighty with the Father 
              and the Holy Spirit (Colossians 2:9). Our mission is to preach the gospel on the streets in 
              different nations and by God's grace bring people to the Light and salvation of Yeshua—and 
              also expose the enemy (Ephesians 5:11).
            </p>
          </div>
        </motion.div>
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
