import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

import ServiceCard from "@/components/sections/home/Services/ServiceCard";

import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <Section
      id="services"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50/40" />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-10
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      <Container className="relative z-10">
        <SectionTitle
          align="center"
          badge="OUR SERVICES"
          title="Professional Cooling & Electronic Solutions"
          description="Providing reliable air conditioning, HVAC, preventive maintenance, and electronic services for residential, commercial, and industrial environments."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Section Divider */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </Container>
    </Section>
  );
}
