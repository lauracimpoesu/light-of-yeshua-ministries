import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            <a
              href="https://instagram.com/lightofyeshuaministries"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="mailto:info@example.com"
              className="transition-transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
            <Link
              to="/"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              About
            </Link>
            <Link
              to="/mission"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Mission
            </Link>
            <Link
              to="/media"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Media
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm hover:text-ministry-purple transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Light of Yeshua Ministries. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
