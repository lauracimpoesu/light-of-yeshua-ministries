
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20">
        <div className="text-center max-w-md p-8">
          <h1 className="text-6xl font-bold mb-4 ministry-gradient-text">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="ministry-gradient-bg text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
