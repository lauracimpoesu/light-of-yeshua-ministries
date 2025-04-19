import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import whitelogo from "../assets/white.png";

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
    <footer className="bg-gradient-to-r from-indigo-900 via-cyan-900 to-teal-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 md:justify-start justify-around">
              <img
                src={whitelogo}
                alt="Light of Yeshua Logo"
                className="h-24 w-auto"
              />

              <h3 className="text-2xl mb-[-10px] font-bold bg-gradient-to-r from-ministry-gold via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Light of Yeshua
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Taking the light of Yeshua to the streets of nations worldwide.
              Join us in our mission to spread the Gospel and bring salvation.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://instagram.com/light.of.yeshua"
                className="hover:text-yellow-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@LightOfYeshuaMinistries"
                className="hover:text-yellow-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@light.of.yeshua"
                className="hover:text-yellow-300 transition-colors"
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
                    className="text-gray-400 hover:text-indigo-200 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
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
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-ministry-purple"
              />
              <button
                type="submit"
                className="ministry-gradient-bg text-black px-4 py-2 rounded-r-lg"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Light of Yeshua. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
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
