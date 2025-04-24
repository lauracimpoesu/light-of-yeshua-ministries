
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gallery, videos } from "@/data/gallery";

const Media = () => {
  const [filter, setFilter] = useState("photos");
  const [filteredMedia, setFilteredMedia] = useState(gallery);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredMedia(filter === "photos" ? gallery : videos);
  }, [filter]);

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
            Media Gallery
          </h1>
          
          <Tabs defaultValue="photos" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="photos" onClick={() => setFilter("photos")}>Photos</TabsTrigger>
              <TabsTrigger value="videos" onClick={() => setFilter("videos")}>Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="photos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((item: any, index) => (
                  <VideoCard key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

const MediaCard = ({ item, index }: { item: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="group overflow-hidden aspect-[4/3]">
      <div className="relative h-full">
        <img 
          src={item.imageUrl} 
          alt={item.location} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-gold/80 text-black text-xs px-2 py-1 rounded-full font-medium">
          {item.location}
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset rounded-lg group-hover:ring-gold/30 transition-all duration-500"></div>
      <div className="absolute inset-0 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500"></div>
    </Card>
  </motion.div>
);

const VideoCard = ({ item, index }: { item: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="group overflow-hidden aspect-[4/3]">
      <div className="relative h-full">
        <iframe
          src={item.videoUrl}
          title={`Video from ${item.location}`}
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute top-2 right-2 bg-gold/80 text-black text-xs px-2 py-1 rounded-full font-medium">
          {item.location}
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-gold/10 ring-inset rounded-lg group-hover:ring-gold/30 transition-all duration-500"></div>
      <div className="absolute inset-0 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500"></div>
    </Card>
  </motion.div>
);

export default Media;
