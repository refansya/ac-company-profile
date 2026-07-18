import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/home/Hero/Hero";
import Services from "@/components/sections/home/Services/Services";
import WhyChoose from "@/components/sections/home/WhyChoose/WhyChoose";
import Contact from "@/components/sections/home/Contact/Contact";
import Footer from "@/components/sections/home/Footer/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
