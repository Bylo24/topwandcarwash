/**
 * INDEX PAGE
 * Composes all template sections. Comment out any section below to remove
 * it from the page — every component is self-contained.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24 sm:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
