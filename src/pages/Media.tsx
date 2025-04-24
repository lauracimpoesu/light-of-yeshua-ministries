import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { gallery, videos } from "@/data/gallery";

// Define types for our media items
type PhotoItem = {
  imageUrl: string;
  location: string;
  category: string;
};

type VideoItem = {
  videoUrl: string;
  location: string;
  category: string;
};

const Media = () => {
  const [filter, setFilter] = useState("photos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <TabsTrigger value="photos" onClick={() => setFilter("photos")}>
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" onClick={() => setFilter("videos")}>
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item, index) => (
                  <MediaCard key={index} item={item} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((item, index) => (
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

const MediaCard = ({ item, index }: { item: PhotoItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden aspect-[4/3]">
      <div className="relative h-full">
        <img
          src={item.imageUrl}
          alt={item.location}
          className="w-full h-full object-cover"
        />
      </div>
    </Card>
  </motion.div>
);

const VideoCard = ({ item, index }: { item: VideoItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden aspect-[4/3] cursor-pointer">
          <div className="relative h-full flex items-center justify-center bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black/50 w-16 h-16 flex items-center justify-center">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-16 border-l-white ml-1"></div>
              </div>
            </div>
            <div className="w-full h-full bg-gray-800 opacity-80">
              <img
                src="/placeholder.svg"
                alt={`Video thumbnail from ${item.location}`}
                className="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] h-[80vh] p-0 border-none bg-transparent shadow-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded-full z-10"
            onClick={() =>
              document
                .querySelector('[data-state="open"]')
                ?.dispatchEvent(new Event("close", { bubbles: true }))
            }
          >
            <X className="h-6 w-6" />
          </button>
          {item.videoUrl.endsWith(".MOV") ? (
            <video
              src={item.videoUrl}
              controls
              className="w-full h-full rounded-lg object-contain"
            />
          ) : (
            <iframe
              src={item.videoUrl}
              title={`Video from ${item.location}`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  </motion.div>
);

export default Media;
