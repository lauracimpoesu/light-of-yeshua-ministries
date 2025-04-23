
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    window.scrollTo(0, 0);
    // In a production app, you might verify the payment status with Stripe here
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
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4">
                Thank You For Your Donation!
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
                Your generous contribution will help spread the light of Yeshua to the nations. May God bless you abundantly for your support.
              </p>

              <Button
                onClick={() => navigate("/")}
                className="flex items-center gap-2"
              >
                Return Home <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default DonationSuccess;
