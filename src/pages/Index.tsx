
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden"
        style={{ zIndex: -10 }}
      >
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                opacity: Math.random() * 0.5,
                filter: 'blur(40px)',
                transform: `translate(${(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 20}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto pt-16 px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">
              Yeshua Shines Forth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bringing the light of Christ to a world in darkness, through truth, love and unwavering faith.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300"
            >
              Join Our Mission
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/70 text-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scripture Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
            <CardContent className="p-6">
              <p className="text-amber-200 font-semibold mb-2">Colossians 2:9</p>
              <p className="text-white">
                "For in Christ all the fullness of the Deity lives in bodily form."
              </p>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
            <CardContent className="p-6">
              <p className="text-amber-200 font-semibold mb-2">Ephesians 5:11</p>
              <p className="text-white">
                "Have nothing to do with the fruitless deeds of darkness, but rather expose them."
              </p>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
            <CardContent className="p-6">
              <p className="text-amber-200 font-semibold mb-2">Matthew 28:19-20</p>
              <p className="text-white">
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Quote Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto p-8 rounded-xl backdrop-blur-lg bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-white/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-2xl md:text-3xl font-light italic text-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
            "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field."
          </p>
          <p className="mt-4 text-white/80">Matthew 9:37-38</p>
        </div>
      </div>

      {/* Add custom keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
