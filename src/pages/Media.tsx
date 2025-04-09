
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mediaItems = [
  {
    type: "video",
    title: "Street Preaching in New York",
    thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470",
    description: "Sharing the Gospel in Times Square"
  },
  {
    type: "video",
    title: "Outreach in Los Angeles",
    thumbnail: "https://images.unsplash.com/photo-1576633565574-e9209b7e34bb?q=80&w=687",
    description: "Ministry on the streets of LA"
  },
  {
    type: "testimony",
    title: "Sarah's Testimony",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688",
    description: "How the Gospel changed her life"
  },
  {
    type: "testimony",
    title: "John's Transformation",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688",
    description: "From darkness to light"
  },
  {
    type: "video",
    title: "Ministry in London",
    thumbnail: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1470",
    description: "Preaching in Trafalgar Square"
  },
  {
    type: "testimony",
    title: "Michael's Journey",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470",
    description: "Finding Christ on the streets"
  }
];

const Media = () => {
  const [filter, setFilter] = useState("all");
  const [filteredMedia, setFilteredMedia] = useState(mediaItems);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (filter === "all") {
      setFilteredMedia(mediaItems);
    } else {
      setFilteredMedia(mediaItems.filter(item => item.type === filter));
    }
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
          
          <Tabs defaultValue="all" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="video" onClick={() => setFilter("video")}>Videos</TabsTrigger>
              <TabsTrigger value="testimony" onClick={() => setFilter("testimony")}>Testimonies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testimony" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.thumbnail} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-ministry-purple text-white text-xs px-2 py-1 rounded">
          {item.type === "video" ? "Video" : "Testimony"}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default Media;
