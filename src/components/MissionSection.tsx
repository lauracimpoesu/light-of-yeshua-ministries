import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpenText, Globe, Heart, Users } from "lucide-react";

const MissionSection = () => {
  const missionData = [
    {
      title: "Evangelism",
      description:
        "Taking the Gospel to the streets and public places, sharing the truth of salvation through Yeshua.",
      icon: (
        <BookOpenText className="h-8 w-8 text-teal-500 dark:text-teal-300" />
      ),
    },
    {
      title: "Outreach",
      description:
        "Reaching communities in need with both spiritual guidance and practical support.",
      icon: <Heart className="h-8 w-8 text-indigo-500 dark:text-indigo-300" />,
    },
    {
      title: "Discipleship",
      description:
        "Training believers to grow in their faith and effectively share the Gospel with others.",
      icon: <Users className="h-8 w-8 text-indigo-400 dark:text-indigo-300" />,
    },
    {
      title: "Global Impact",
      description:
        "Extending our ministry beyond borders to reach people of all nations with the light of Yeshua.",
      icon: <Globe className="h-8 w-8 text-teal-500 dark:text-teal-300" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ministry-gradient-text">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Bringing the light of Yeshua to the nations through strategic
            evangelism and discipleship.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                },
              }}
            >
              <Card className="p-6 h-full border-0 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/mission">
            <Button className="bg-teal-600 hover:bg-teal-500 text-black dark:bg-[#dbff00] dark:text-black dark:hover:bg-[#dbff00]/90 rounded-full px-8 py-6 font-bold">
              Learn More About Our Mission
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
