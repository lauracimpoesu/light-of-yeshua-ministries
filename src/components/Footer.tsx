
import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, FileVideo2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the email to your newsletter service here
      console.log("Newsletter subscription:", email);
      
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-cyan-900 to-teal-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Light of Yeshua Ministries
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Taking the light of Yeshua to the streets of nations worldwide.
              Join us in our mission to spread the Gospel and bring salvation.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://instagram.com/light.of.yeshua"
                className="hover:text-indigo-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@LightOfYeshuaMinistries"
                className="hover:text-indigo-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@light.of.yeshua"
                className="hover:text-indigo-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileVideo2 size={24} />
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
                    className="text-gray-400 hover:text-white transition-colors"
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
                disabled={isSubmitting}
                className="ministry-gradient-bg px-4 py-2 rounded-r-lg"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                ) : (
                  <ArrowRight size={20} />
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Light of Yeshua Ministries. All
            rights reserved.
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
