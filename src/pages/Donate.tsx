import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Heart } from "lucide-react";
import { toast } from "sonner";
import { BibleVerseSection } from "@/components/DonationSection";

const donationOptions = [
  { amount: 20, impact: "Sends evangelistic materials to the streets" },
  { amount: 50, impact: "Supports a day of street ministry in local areas" },
  { amount: 100, impact: "Helps fund outreach in underserved communities" },
  { amount: 200, impact: "Sponsors evangelistic equipment and resources" },
  { amount: 500, impact: "Funds a missionary for a week-long outreach" },
  { amount: 1000, impact: "Supports a major international mission trip" },
];

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleContinue = async () => {
    if (!selectedAmount && !customAmount) {
      toast.error("Please select or enter a donation amount");
      return;
    }

    const donationAmount = selectedAmount || parseFloat(customAmount);

    if (isNaN(donationAmount) || donationAmount <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }

    const paypalUrl = `https://paypal.me/loyministries/${donationAmount}`;
    window.open(paypalUrl, "_blank");
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            Support Our Ministry
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Your generous donation helps bring the light of Yeshua to the
              streets of nations worldwide. Every contribution makes a
              difference in our mission to spread the Gospel.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center ">
                Join The Fight
              </h2>

              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Choose a donation amount
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {donationOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => {
                      setSelectedAmount(option.amount);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-lg transition-all duration-500 flex flex-col items-center relative overflow-hidden group 
                      ${
                        selectedAmount === option.amount
                          ? "border-2 border-gold bg-gradient-to-br from-gold/5 to-gold/10 dark:from-gold/10 dark:to-gold/5 shadow-xl transform -translate-y-1 scale-[1.02]"
                          : "border-2 border-gray-200 dark:border-gray-700 hover:border-gold/50"
                      }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 opacity-0 transition-opacity duration-500
                        ${
                          selectedAmount === option.amount
                            ? "animate-gold-shine-slow opacity-30"
                            : "group-hover:opacity-10"
                        }`}
                    />
                    <span
                      className={`text-xl font-bold mb-1 relative z-10 transition-all duration-500 ${
                        selectedAmount === option.amount
                          ? "bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 bg-clip-text text-transparent scale-110"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      ${option.amount}
                    </span>
                    <span
                      className={`text-xs text-center relative z-10 transition-all duration-500 ${
                        selectedAmount === option.amount
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {option.impact}
                    </span>
                    {selectedAmount === option.amount && (
                      <div className="absolute inset-0 bg-gold/5 dark:bg-gold/10 blur-sm animate-pulse-glow" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="flex items-center mb-8">
                <button
                  onClick={() => setIsMonthly(!isMonthly)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-500 ${
                    isMonthly
                      ? "bg-gradient-to-r from-gold-darkest via-gold to-gold-light animate-gold-shine-slow shadow-lg shadow-gold/30"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      isMonthly
                        ? "transform translate-x-6 animate-pulse-glow shadow-gold/50"
                        : ""
                    }`}
                  ></span>
                </button>
                <span
                  className={`ml-3 text-sm ${
                    isMonthly
                      ? "bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 bg-clip-text text-transparent font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Make this a monthly donation
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue}
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 text-white hover:shadow-xl font-bold text-lg py-4 px-8 transition-all duration-300"
              >
                Continue to Payment
              </motion.button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                All donations are secure and encrypted
              </p>
            </div>
            <BibleVerseSection />
            <div className="bg-white mt-4 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Why Your Support Matters
              </h3>
              <ul className="space-y-3">
                {[
                  "100% of donations go directly to evangelism efforts",
                  "Support missionaries taking the Gospel to unreached areas",
                  "Provide Bibles and evangelistic materials",
                  "Enable street preaching and outreach events",
                  "Help train new evangelists to spread the Word",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      className="text-teal-400 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
