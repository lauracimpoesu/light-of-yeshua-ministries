
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

const AboutSection = () => {
  const cardsData = [
    {
      title: "Who We Are",
      description:
        "A dedicated ministry spreading the light of Yeshua to all nations through evangelism and outreach.",
    },
    {
      title: "Our Vision",
      description:
        "To see lives transformed by the truth of the Gospel, bringing hope and salvation to the world.",
    },
    {
      title: "Our Approach",
      description:
        "Meeting people where they are, speaking truth with love, and discipleship training.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(212, 175, 55, 0.2), 0 10px 10px -5px rgba(212, 175, 55, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-transparent bg-clip-text">
            About Our Ministry
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Dedicated to spreading the Gospel and bringing the light of Yeshua
            to the darkest corners of the world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="border-0 overflow-hidden h-full shadow-md dark:shadow-gold-dark/10 relative rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 -z-10 rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark animate-gold-shine-slow rounded-t-lg" />

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
                    {card.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="pt-2">
                  <Link
                    to="/about"
                    className="text-gold dark:text-gold-light font-medium text-sm inline-flex items-center group"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
