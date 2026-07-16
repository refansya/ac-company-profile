import Link from "next/link";

import { ArrowRight, MessageCircleMore } from "lucide-react";

import Container from "@/components/shared/Container";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

import ServiceCard from "@/components/cards/ServiceCard";

import { COMPANY } from "@/constants/company";
import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <Section
      id="services"
      className="
        relative
        overflow-hidden
        py-28
        lg:py-36
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50/40" />

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

      <div
        className="
          absolute
          right-0
          bottom-0
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

        {/* Bottom CTA */}
        <div
          className="
            mx-auto
            mt-24
            max-w-4xl

            rounded-[32px]

            border
            border-white/60

            bg-white/80

            p-10

            text-center

            shadow-[0_20px_60px_rgba(15,23,42,.08)]

            backdrop-blur-xl
          "
        >
          <div
            className="
              mx-auto
              mb-6

              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-blue-600
              to-cyan-400

              text-white

              shadow-lg
            "
          >
            <MessageCircleMore size={30} />
          </div>

          <h3 className="text-3xl font-black tracking-tight">
            Need a Custom HVAC Solution?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you need a new installation, preventive maintenance,
            commercial HVAC systems, or electronic solutions, our experienced
            engineers are ready to help you choose the right solution for your
            home or business.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton size="lg" icon={<ArrowRight size={18} />}>
                Talk with Our Engineer
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
