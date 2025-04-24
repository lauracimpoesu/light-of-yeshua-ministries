
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { gallery } from "@/data/gallery";

const MediaGallerySection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 ministry-gradient-text">
            Our Ministry in Action
          </h2>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="all">All Media</TabsTrigger>
                <TabsTrigger value="israel">Israel</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.map((item, index) => (
                    <GalleryItem key={index} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="israel" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery
                    .filter((item) => item.category === "israel")
                    .map((item, index) => (
                      <GalleryItem key={index} item={item} index={index} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-ministry-purple/80 text-white text-xs px-2 py-1 rounded">
          {item.location}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.caption}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default MediaGallerySection;
