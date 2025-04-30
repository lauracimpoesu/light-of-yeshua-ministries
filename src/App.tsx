
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
// import Donate from "./pages/Donate";
// import DonationSuccess from "./pages/DonationSuccess";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
// import Events from "./pages/Events";
import Media from "./pages/Media";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('fonts-loaded');
    document.fonts.ready.then(() => {
      console.log('Fonts are loaded and ready');
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/contact" element={<Contact />} />
              {/* Donation routes commented out
              <Route path="/donate" element={<Donate />} />
              <Route path="/donation-success" element={<DonationSuccess />} />
              */}
              <Route path="/media" element={<Media />} />
              {/* Events route commented out
              <Route path="/events" element={<Events />} />
              */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
