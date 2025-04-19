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
      <div className="pt-20 dark:bg-[#101827]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-transparent bg-clip-text text-center">
            About Our Ministry
          </h1>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Light of Yeshua Ministries is a Spirit-filled evangelistic
              movement devoted to boldly proclaiming the Gospel of Christ Jesus
              (YESHUA) through street evangelism across nations.
              <br /> <br />
              Founded on unwavering biblical principles, we are called to reach
              the lost, the broken, and the forgotten with the truth that sets
              souls free.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe that the Bible is the inspired, infallible Word of
              God/YHWH — our ultimate authority in all things. We boldly affirm
              that Jesus is God Almighty, fully ONE WITH The Father and The Holy
              Spirit (Colossians 2:9).
            </p>{" "}
            <br />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Empowered by His Spirit, we go into the streets, cities, and
              nations to declare the message of repentance, salvation, and
              eternal life through Yeshua.
              <br />
              <br />
              Our mission is not only to lead people into the Light and love of
              Christ, but also to expose the works of darkness (Ephesians 5:11)
              and call the world back to righteousness, holiness, and truth.
            </p>
          </div>
        </motion.div>

        {/* Custom version of AboutSection without duplicate title */}
        <section className="pb-32 pt-24 md:pt-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((scripture, index) => (
                <motion.div
                  key={index}
                  className="scripture-card backdrop-blur-md relative overflow-hidden"
                  style={{
                    borderRadius: "1rem",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                    background: `linear-gradient(145deg, rgba(219,255,0,0.05) 0%, rgba(0,232,255,0.05) 100%)`,
                    WebkitBackdropFilter: "blur(8px)",
                    backdropFilter: "blur(8px)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 z-0"
                    whileHover={{
                      opacity: 0.15,
                      background: `linear-gradient(135deg, rgba(219,255,0,0.7) 0%, rgba(0,232,255,0.7) 50%, rgba(0,255,186,0.7) 100%)`,
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
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 50%, rgba(219,255,0,0.3) 50%)",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
