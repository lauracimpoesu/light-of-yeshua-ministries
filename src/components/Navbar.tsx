
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    { name: "Media", path: "/media" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-extrabold ministry-gradient-text">
            LIGHT OF YESHUA
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/donate">
            <Button className="donate-button ml-2">Donate</Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-4 border-b border-gray-100 dark:border-gray-800 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="px-3 py-4"
              onClick={() => setIsOpen(false)}
            >
              <Button className="donate-button w-full">Donate</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
