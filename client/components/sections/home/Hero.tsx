import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

import HeroBackground from "@/components/backgrounds/HeroBackground";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <Section
      id="home"
      className="
        relative
        overflow-hidden
        pt-32
        pb-20

        lg:pt-36
        lg:pb-24
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            items-start
            gap-16

            lg:grid-cols-[1fr_520px]
            lg:gap-24
          "
        >
          {/* Left */}
          <div className="max-w-3xl">
            <HeroContent />
          </div>

          {/* Right */}
          <div className="relative lg:pt-6">
            <HeroCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
