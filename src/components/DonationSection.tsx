
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Euro, Heart } from "lucide-react";

const donationImpacts = [
  { amount: 20, impact: "Funds 2 hours of street evangelism" },
  { amount: 50, impact: "Provides 10 Bibles for new believers" },
  { amount: 100, impact: "Sponsors a day of outreach in a major city" },
  { amount: 250, impact: "Helps with travel costs for missionary work" },
  { amount: 500, impact: "Funds a week-long evangelistic campaign" },
  { amount: 1000, impact: "Sponsors a full mission trip to a new region" }
];

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Support Our Mission
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your generous gift helps us take the light of Yeshua to the darkest places on earth.
            Every donation directly supports our street evangelism efforts.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Choose Your Impact</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {donationImpacts.slice(0, 6).map((option) => (
                  <motion.button
                    key={option.amount}
                    className={`p-4 rounded-xl border ${
                      selectedAmount === option.amount 
                        ? 'border-amber-400 bg-white/20' 
                        : 'border-white/20 hover:bg-white/10'
                    } transition-all duration-300`}
                    onClick={() => setSelectedAmount(option.amount)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-xl font-bold mb-1 flex items-center justify-center">
                      <Euro className="w-4 h-4 mr-1" />
                      {option.amount}
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <div className="mb-8 p-6 rounded-xl bg-white/10">
                <div className="flex items-center text-amber-300 mb-3">
                  <Heart className="w-5 h-5 mr-2 fill-amber-300" />
                  <p className="font-semibold">Your Impact</p>
                </div>
                <p className="text-lg">
                  {donationImpacts.find(d => d.amount === selectedAmount)?.impact}
                </p>
              </div>
              
              <Link to="/donate">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 shadow-lg hover:shadow-amber-500/30 h-14 text-lg"
                >
                  Donate €{selectedAmount}
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Become a Monthly Partner</h3>
                <p className="mb-8">
                  Join our community of dedicated supporters who make our ongoing ministry possible through monthly giving.
                </p>
                <div className="bg-white/10 rounded-xl p-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 mr-3 mt-1" />
                      <p>Regular prayer updates and ministry news</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 mr-3 mt-1" />
                      <p>Exclusive video content from the mission field</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 mr-3 mt-1" />
                      <p>Special partnership gifts throughout the year</p>
                    </li>
                  </ul>
                </div>
                <Link to="/donate?partner=true">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-white/80 text-white hover:bg-white/10 transition-all duration-300 h-14 text-lg"
                  >
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
