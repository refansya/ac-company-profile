import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import WhyChoose from "@/components/sections/home/WhyChoose/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />
        <WhyChoose />
      </main>
    </>
  );
}
