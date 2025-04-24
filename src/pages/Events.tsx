import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "London, England",
    date: "TO BE DECIDED",
    time: "To Be Decided",
    location: "New York City, NY",
    description:
      "Learn effective techniques for sharing the Gospel on the streets.",
    attendees: 28,
  },
  {
    title: "Cyprus, Middle East",
    date: "TO BE DECIDED",
    time: "All Day",
    location: "London, UK",
    description: "Join us for 10 days of ministry on the streets of London.",
    attendees: 15,
  },
  {
    title: "Oslo, Norway",
    date: "TO BE DECIDED",
    time: "7:00 PM - 9:00 PM",
    location: "Los Angeles, CA",
    description: "A night of worship and prayer for our upcoming missions.",
    attendees: 45,
  },
  {
    title: "Israel",
    date: "TO BE DECIDED",
    time: "TO BE DECIDED",
    location: "Dallas, TX",
    description: "Three days of teaching on making disciples of all nations.",
    attendees: 120,
  },
];

const Events = () => {
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
            Next Events
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Join us for our upcoming events and outreach opportunities. Be
              part of taking the light of Yeshua to the nations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 ministry-gradient-text">
                      {event.title}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="italic">{event.date}</span>
                    </div>

                    {/*   <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div> */}

                    {/*   <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div> */}

                    {/* <p className="mb-4 text-gray-700 dark:text-gray-300">
                      {event.description}
                    </p> */}

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-ministry-purple">
                        {/*  <Users size={16} className="mr-1" />
                        <span className="text-sm">
                          {event.attendees} attending
                        </span> */}
                        <p className="">Contact us to join!</p>
                      </div>

                      <Button
                        variant="outline"
                        className="hover:bg-ministry-purple/10 hover:text-ministry-purple transition-all duration-500"
                      >
                        Contact Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
