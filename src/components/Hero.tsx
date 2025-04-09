
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602516102413-a74ae1a03a0c?q=80&w=1974')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-ministry-purple/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Take the Light of Yeshua to the Nations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Join the mission. Preach the truth. Set captives free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/donate">
              <button className="donate-button flex items-center justify-center gap-2 w-full sm:w-auto">
                Donate Now
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/mission">
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/20 w-full sm:w-auto">
                Our Mission
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
