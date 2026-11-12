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
  image: `${COMPANY.website}${COMPANY.ogImage}`,
  hasMap: COMPANY.google.maps,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COMPANY.address.street}, ${COMPANY.address.district}`,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.province,
    postalCode: COMPANY.address.postalCode,
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.google.coordinates?.latitude || -5.1566039,
    longitude: COMPANY.google.coordinates?.longitude || 119.535777,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  areaServed: COMPANY.coverageArea.map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: [
    COMPANY.social.instagram,
    COMPANY.google.maps,
  ].filter(Boolean),
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
