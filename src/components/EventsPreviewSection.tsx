
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";

const upcomingEvents = [
  {
    location: "Rome, Italy",
    date: "June 15-20, 2025",
    title: "Vatican City Outreach",
    description: "Street evangelism in the heart of Rome, reaching pilgrims from around the world."
  },
  {
    location: "Jerusalem, Israel",
    date: "August 5-15, 2025",
    title: "Jerusalem Prayer Walk",
    description: "Prayer walking through the Old City and evangelism at key locations."
  },
  {
    location: "Amsterdam, Netherlands",
    date: "September 10-18, 2025",
    title: "Red Light District Mission",
    description: "Bringing the light of Yeshua to the darkness in Amsterdam's notorious district."
  }
];

const EventsPreviewSection = () => {
  const today = new Date();
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ministry-gradient-text">
            Upcoming Missions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Join us as we take the Gospel to the streets of cities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => {
            const eventDate = new Date(event.date.split('-')[0]);
            const daysLeft = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
            
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 ministry-gradient-text">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{daysLeft} days left</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    >
                      Join Mission
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/events">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
            >
              View All Missions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;
