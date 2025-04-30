import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import whitelogo from "../assets/white.png";
import { motion } from "framer-motion";

const TiktokIcon = (props: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Email submitted:", email);
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="relative text-white pt-16 pb-8">
      {/* Hero-like background for footer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-indigo-600 to-teal-600 dark:from-black dark:via-gold-darkest/30 dark:to-gold-dark/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br  dark:from-gold-darkest/40 dark:via-gold-dark/30 dark:to-gold/20 opacity-80"></div>

        {/* Subtle particles for footer */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0
                ? "bg-gold/60 dark:bg-gold/70"
                : i % 4 === 1
                ? "bg-cyan/50"
                : i % 4 === 2
                ? "bg-indigo-light/40"
                : "bg-white/40"
            }`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -Math.random() * 50 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 md:justify-start justify-around">
              <img
                src={whitelogo}
                alt="Light of Yeshua Logo"
                className="h-24 w-auto"
              />

              <h3 className="text-2xl mb-[-10px] font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark text-transparent bg-clip-text">
                Light of Yeshua
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Taking the light of Yeshua to the streets of nations worldwide.
              Join us in our mission to spread the Gospel and bring salvation.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://instagram.com/lightofyeshuaministries"
                className="hover:text-gold transition-colors transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@LightOfYeshuaMinistries"
                className="hover:text-gold transition-colors transform hover:scale-110 duration-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@light.of.yeshua"
                className="hover:text-gold transition-colors transform hover:scale-110 duration-300"
                aria-label="TikTok"
              >
                <TiktokIcon size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Mission", "Contact", "Donate"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our missions and
              outreach.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="bg-gray-800/70 backdrop-blur-sm text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black px-4 py-2 rounded-r-lg hover:from-gold-dark hover:via-gold hover:to-gold-light transition-all duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300/30">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Light of Yeshua. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
