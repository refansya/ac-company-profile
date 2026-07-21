import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/home/Hero/Hero";
import Services from "@/components/sections/home/Services/Services";
import WhyChoose from "@/components/sections/home/WhyChoose/WhyChoose";
import Contact from "@/components/sections/home/Contact/Contact";
import Footer from "@/components/sections/home/Footer/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { COMPANY } from "@/constants/company";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.legalName,
  description: COMPANY.seo.description,
  url: COMPANY.website,
  telephone: `+${COMPANY.phone}`,
  email: COMPANY.email,
  image: `${COMPANY.website}${COMPANY.logo}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COMPANY.address.street}, ${COMPANY.address.district}`,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.province,
    postalCode: COMPANY.address.postalCode,
    addressCountry: "ID",
  },
  areaServed: COMPANY.coverageArea.map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: Object.values(COMPANY.social).filter(Boolean),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan PROJECT.ID SERVICES",
    itemListElement: COMPANY.serviceCategories.map((name, position) => ({
      "@type": "Offer",
      position: position + 1,
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChoose />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
