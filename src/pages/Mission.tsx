import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionStatements = [
    {
      title: "Eternal Souls.",
      description:
        "We take the message of salvation to the streets of nations worldwide, reaching those who need to hear the Good News. Every soul matters in the eyes of God.",
    },
    {
      title: "Exposing Darkness.",
      description:
        "As instructed in Ephesians 5:11, we boldly confront darkness while offering the light of Yeshua's truth. We shine His light where it's needed most.",
    },
    {
      title: "Yeshua Saves.",
      description:
        "The simple, powerful truth that drives our ministry: Jesus Christ (Yeshua) is the way, the truth, and the life. There is no salvation apart from Him.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 dark:bg-[#101827]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-transparent bg-clip-text text-center">
            Our Mission
          </h1>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Taking the light of Yeshua to the nations through bold street
              evangelism is the heart of our ministry. We are committed to
              reaching the lost, proclaiming truth, and making disciples of all
              nations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {missionStatements.map((statement, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,232,255,0.2)",
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#dbff00]/30 via-[#00e8ff]/20 to-transparent pointer-events-none z-0 opacity-60"></div>
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#dbff00]/30 via-transparent to-[#00e8ff]/30 z-0 rounded-lg"></div>
                <div className="p-8 relative z-10 bg-white/80 dark:bg-gray-900/80">
                  <h3 className="text-2xl font-bold mb-4 ministry-gradient-text">
                    {statement.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {statement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-xl md:text-3xl font-semibold italic max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 via-cyan-600 to-indigo-400 bg-clip-text text-transparent text-center dark:from-indigo-300 dark:via-cyan-300 dark:to-indigo-200">
              "The harvest is plentiful, but the workers are few. Ask the Lord
              of the harvest, therefore, to send out workers into his harvest
              field."
              <footer className="mt-4 text-lg bg-gradient-to-r from-cyan via-indigo to-gold bg-clip-text text-transparent">
                — Matthew 9:37-38
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
