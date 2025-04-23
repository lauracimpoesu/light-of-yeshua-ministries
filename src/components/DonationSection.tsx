
import { useState } from "react";
import { Check, CircleDollarSign, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import blacklogo from "../assets/black.png";
import { DonationModal } from "./DonationModal";

const donationOptions = [
  { amount: 20, impact: "Sends evangelistic materials to the streets" },
  { amount: 50, impact: "Supports a day of street ministry in local areas" },
  { amount: 100, impact: "Helps fund outreach in underserved communities" },
  { amount: 200, impact: "Sponsors evangelistic equipment and resources" },
  { amount: 500, impact: "Funds a missionary for a week-long outreach" },
  { amount: 1000, impact: "Supports a major international mission trip" },
];

export const BibleVerseSection = () => {
  return (
    <div className="mt-8 bg-gradient-to-br dark:from-cyan-800 dark:to-teal-600 from-white to-cyan-100 rounded-xl p-6 border border-[#FFD700]/20 dark:border-[#00CED1]/10 dark:text-white">
      <div className="flex items-start space-x-4 mb-4">
        <Quote className="text-indigo-400 dark:text-indigo-400 w-8 h-8 flex-shrink-0" />
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Thank you for your support!
          </h4>
          <div className="space-y-4">
            <blockquote className="italic text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                "Let him that is taught in the word communicate unto him that
                teacheth in all good things."
                <span className="block text-sm mt-1 text-gray-500 dark:text-gray-400">
                  - Galatians 6:6 (KJV)
                </span>
              </p>
            </blockquote>
            <blockquote className="italic text-gray-700 dark:text-gray-300">
              <p>
                "Even so hath the Lord ordained that they which preach the
                gospel should live of the gospel."
                <span className="block text-sm mt-1 text-gray-500 dark:text-gray-400">
                  - 1 Corinthians 9:14 (KJV)
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonateClick = () => {
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

    if (!amount || amount <= 0) {
      toast.error("Please select or enter a valid donation amount");
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-transparent bg-clip-text"
              >
                Support Our Global Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300"
              >
                Your generous donation helps bring the light of Yeshua to the
                streets of nations worldwide.
              </motion.p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
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
                        ${selectedAmount === option.amount ? 'animate-gold-shine-slow opacity-30' : 'group-hover:opacity-10'}`}
                    />
                    <span 
                      className={`text-xl font-bold mb-1 relative z-10 transition-all duration-500 ${
                        selectedAmount === option.amount 
                          ? 'bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 bg-clip-text text-transparent scale-110'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      ${option.amount}
                    </span>
                    <span 
                      className={`text-xs text-center relative z-10 transition-all duration-500 ${
                        selectedAmount === option.amount
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {option.impact}
                    </span>
                    {selectedAmount === option.amount && (
                      <div className="absolute inset-0 bg-gold/5 dark:bg-gold/10 blur-sm animate-pulse-glow"/>
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
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all duration-500 ${
                      isMonthly ? "transform translate-x-6 animate-pulse-glow shadow-gold/50" : ""
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
                onClick={handleDonateClick}
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <CircleDollarSign size={20} />
                    {isMonthly
                      ? `Donate $${selectedAmount || customAmount || "0"} Monthly`
                      : `Donate Now`}
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                All donations are secure and encrypted
              </p>
            </div>
            <BibleVerseSection />
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-10">
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
        </div>
      </section>
      
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={selectedAmount || (customAmount ? parseFloat(customAmount) : 0)}
        isMonthly={isMonthly}
      />
    </>
  );
};

export default DonationSection;
