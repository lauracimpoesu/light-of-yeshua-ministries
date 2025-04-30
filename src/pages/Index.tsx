
import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
// import DonationSection from "@/components/DonationSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <MissionSection />
      {/* <DonationSection /> */}
      <Footer />
    </>
  );
};

export default Index;
