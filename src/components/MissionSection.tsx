
import { motion } from "framer-motion";

const missionStatements = [
  {
    title: "Global Streets. Eternal Souls.",
    description:
      "We take the message of salvation to the streets of nations worldwide, reaching those who need to hear the Good News.",
  },
  {
    title: "Expose Darkness. Preach Light.",
    description:
      "As instructed in Ephesians 5:11, we boldly confront darkness while offering the light of Yeshua's truth.",
  },
  {
    title: "Yeshua Saves.",
    description:
      "The simple, powerful truth that drives our ministry: Jesus Christ (Yeshua) is the way, the truth, and the life.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ministry-gradient-text">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Taking the light of Yeshua to the nations through bold street evangelism and truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionStatements.map((statement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-4 ministry-gradient-text">
                {statement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {statement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-semibold italic max-w-2xl mx-auto gold-gradient-text">
              "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, 
              therefore, to send out workers into his harvest field."
              <footer className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                — Matthew 9:37-38
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
