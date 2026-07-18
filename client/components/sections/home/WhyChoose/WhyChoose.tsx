import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseContent from "./WhyChooseContent";

export default function WhyChoose() {
  return (
    <Section
      id="why-choose"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <Container className="relative z-10">
        <WhyChooseHeader />

        <WhyChooseContent />
      </Container>
    </Section>
  );
}
