
import { useState } from "react";
import { motion } from "framer-motion";

const scriptures = [
  {
    verse: "Colossians 2:9",
    text: "For in Christ all the fullness of the Deity lives in bodily form.",
  },
  {
    verse: "Ephesians 5:11",
    text: "Have nothing to do with the fruitless deeds of darkness, but rather expose them.",
  },
  {
    verse: "Matthew 28:19-20",
    text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.",
  },
];

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ministry-gradient-text">
            About Our Ministry
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We believe that the Bible is the Word of YHWH. Jesus Yeshua is God Almighty 
            with the Father and the Holy Spirit.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our mission is to preach the gospel on the streets in different nations and 
            by God's grace bring people to the Light and salvation of Yeshua—and also 
            expose the enemy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scriptures.map((scripture, index) => (
            <motion.div
              key={index}
              className="scripture-card backdrop-blur-md relative overflow-hidden"
              style={{
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                background: `linear-gradient(145deg, ${hoveredCard === index ? 'rgba(219,255,0,0.1)' : 'rgba(219,255,0,0.05)'} 0%, ${hoveredCard === index ? 'rgba(0,232,255,0.2)' : 'rgba(0,232,255,0.05)'} 100%)`,
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,232,255,0.3)"
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 z-0"
                animate={{
                  opacity: hoveredCard === index ? 0.15 : 0,
                  background: `linear-gradient(135deg, rgba(219,255,0,0.7) 0%, rgba(0,232,255,0.7) 50%, rgba(0,255,186,0.7) 100%)`
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4 ministry-gradient-text">
                  {scripture.verse}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {scripture.text}
                </p>
              </div>
              
              {/* Animated corner decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-12 h-12"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: hoveredCard === index ? 1 : 0,
                  scale: hoveredCard === index ? 1 : 0,
                  rotate: hoveredCard === index ? 0 : -90
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "linear-gradient(135deg, transparent 50%, rgba(219,255,0,0.3) 50%)",
                  borderTopRightRadius: "0.5rem"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
