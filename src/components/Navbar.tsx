
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Mission", path: "/mission" },
    /* { name: "Media", path: "/media" },
    { name: "Events", path: "/events" }, */
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-lg md:text-2xl font-heading font-bold text-gray-900 dark:text-white">
            <span className="text-yellow-100 font-light">Light of</span>{" "}
            <span className="text-teal-200 italic">Yeshua</span>
          </h1>
        </Link>

        {/* Desktop Menu with improved animations */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                  scrolled 
                    ? "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/15" 
                    : "text-white hover:bg-white/15"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/donate">
              <Button className="donate-button ml-2 text-white rounded-full">Donate</Button>
            </Link>
          </motion.div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className={cn(
              "ml-2 p-2 rounded-full",
              scrolled 
                ? "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/15" 
                : "text-white hover:bg-white/15"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Instagram-inspired design */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-4 border-b border-gray-100 dark:border-gray-800 text-sm font-medium 
                           text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 
                           transition-colors rounded-lg my-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="px-3 py-4 mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Button className="donate-button w-full text-white rounded-full">Donate</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
