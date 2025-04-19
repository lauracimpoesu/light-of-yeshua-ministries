import { useState } from "react";
import { Check, CircleDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const donationOptions = [
  { amount: 20, impact: "Sends evangelistic materials to the streets" },
  { amount: 50, impact: "Supports a day of street ministry in local areas" },
  { amount: 100, impact: "Helps fund outreach in underserved communities" },
  { amount: 200, impact: "Sponsors evangelistic equipment and resources" },
  { amount: 500, impact: "Funds a missionary for a week-long outreach" },
  { amount: 1000, impact: "Supports a major international mission trip" },
];

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    
    // Redirect to PayPal.me with the specified amount
    const paypalUrl = `https://paypal.me/loyministries/${amount}`;
    window.open(paypalUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 ministry-gradient-text"
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
              Your generous donation helps bring the light of Yeshua to the streets of nations worldwide.
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
                  className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center ${
                    selectedAmount === option.amount
                      ? "border-ministry-purple bg-ministry-purple/10"
                      : "border-gray-200 dark:border-gray-700 hover:border-ministry-purple/50"
                  }`}
                >
                  <span className="text-xl font-bold mb-1">${option.amount}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    {option.impact}
                  </span>
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
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isMonthly ? "bg-ministry-purple" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                    isMonthly ? "transform translate-x-6" : ""
                  }`}
                ></span>
              </button>
              <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                Make this a monthly donation
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonateClick}
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-lg ministry-gradient-bg text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <CircleDollarSign size={20} />
                  {isMonthly
                    ? `Donate $${selectedAmount || customAmount || "0"} Monthly`
                    : `Donate $${selectedAmount || customAmount || "0"} Now`}
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              All donations are secure and encrypted
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
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
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
