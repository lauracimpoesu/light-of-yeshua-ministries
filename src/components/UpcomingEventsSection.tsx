
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "London Mission",
    location: "London, United Kingdom",
    date: "May 2025",
    description: "Street evangelism and outreach in central London."
  },
  {
    title: "Cyprus Outreach",
    location: "Nicosia, Cyprus",
    date: "June 2025",
    description: "Sharing the Gospel in Cyprus communities."
  },
  {
    title: "Oslo Mission",
    location: "Oslo, Norway",
    date: "July 2025",
    description: "Street ministry and community outreach in Oslo."
  },
  {
    title: "Israel Mission",
    location: "Jerusalem, Israel",
    date: "August 2025",
    description: "Ministry in the Holy Land."
  }
];

const UpcomingEventsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 ministry-gradient-text">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      {event.description}
                    </p>
                    
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
