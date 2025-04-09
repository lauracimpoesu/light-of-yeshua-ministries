
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Image, Youtube } from "lucide-react";

const mediaItems = [
  {
    title: "Street Preaching in Paris",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1431818563807-927945a59a29?q=80&w=1000",
    icon: Play
  },
  {
    title: "Testimony from New Believer",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000",
    icon: Play
  },
  {
    title: "Jerusalem Mission Gallery",
    type: "gallery",
    thumbnail: "https://images.unsplash.com/photo-1518351358233-9626ea2f8380?q=80&w=1000",
    icon: Image
  },
  {
    title: "Watch Live Stream",
    type: "youtube",
    thumbnail: "https://images.unsplash.com/photo-1492297874595-be9bfb7c869c?q=80&w=1000",
    icon: Youtube
  }
];

const MediaPreviewSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ministry-gradient-text">
            Ministry in Action
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Watch videos, view photos, and hear testimonies from our street evangelism around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-64">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                  <item.icon className="text-white w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/media">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
            >
              View Media Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaPreviewSection;
