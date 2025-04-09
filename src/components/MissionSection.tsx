
import { motion } from "framer-motion";

const missionStatements = [
  "Global Streets. Eternal Souls.",
  "Expose Darkness. Preach Light.",
  "Yeshua Saves."
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 ministry-gradient-text">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We are called to share the Gospel of Yeshua across nations, 
            bringing light to dark places and hope to the lost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionStatements.map((statement, index) => (
            <motion.div
              key={index}
              className="mission-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <h3 className="text-2xl font-bold text-center ministry-gradient-text">
                {statement}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
