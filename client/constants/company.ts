import type { Company } from "@/types/company";

export const COMPANY: Company = {
  // ======================================================
  // Brand Identity
  // ======================================================

  name: "PROJECT.ID SERVICES",

  shortName: "Project.id",

  legalName: "PROJECT.ID SERVICES",

  tagline: "Smart Cooling & Electronic Solutions",

  slogan: "Reliable Cooling, Trusted Service.",

  description:
    "PROJECT.ID SERVICES provides professional air conditioning installation, maintenance, repair, preventive maintenance, and electronic solutions for residential, commercial, and industrial sectors.",

  founded: 2026,

  // ======================================================
  // Website
  // ======================================================

  website: "https://projectidservice.com",

  logo: "/logo/logomain.svg",

  favicon: "/logo/logomain.svg",

  ogImage: "/images/why-choose/foto1.jpg",

  // ======================================================
  // Contact
  // ======================================================

  phone: "6281776756863",

  phoneDisplay: "+62 817-7675-6863",

  whatsappUrl: `https://wa.me/6281776756863?text=${encodeURIComponent(
    "Halo, Project.ID Services! Saya ingin berkonsultasi terkait layanan AC atau elektronik. Mohon informasinya, terima kasih.",
  )}`,

  email: "projectidservice@gmail.com",

  supportEmail: "projectidservice@gmail.com",

  salesEmail: "projectidservice@gmail.com",

  // ======================================================
  // Address
  // ======================================================

  address: {
    street: "Blok E, Nusa Idaman Residence No.50",

    district: "Moncongloe, Kec. Moncong Loe",

    city: "Kabupaten Maros",

    province: "Sulawesi Selatan",

    postalCode: "90162",

    country: "Indonesia",
  },

  // ======================================================
  // Coverage Area
  // ======================================================

  coverageArea: ["Makassar", "Gowa", "Maros", "Takalar"],

  // ======================================================
  // Business Hours
  // ======================================================

  businessHours: {
    mondayFriday: "08:00 - 17:00",

    saturday: "08:00 - 15:00",

    sunday: "Emergency Service",
  },

  // ======================================================
  // Service Categories
  // ======================================================

  serviceCategories: [
    "Air Conditioner Installation",
    "Air Conditioner Maintenance",
    "Air Conditioner Repair",
    "Preventive Maintenance",
    "Electronic Repair",
    "Television Repair",
  ],

  // ======================================================
  // Social Media
  // ======================================================

  social: {
    whatsapp: "https://wa.me/6281776756863",

    instagram: "https://www.instagram.com/projectid_service",

    facebook: "",

    linkedin: "",

    youtube: "",

    tiktok: "",
  },

  // ======================================================
  // Google Business
  // ======================================================

  google: {
    // URL untuk tombol "Open in Google Maps"
    maps: "https://www.google.com/maps/place/Project.id+Services/@-5.1566039,119.5357770,17z",

    // URL khusus iframe embed (dari iframe resmi Google Maps)
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.35441012027064!2d119.53577698562064!3d-5.156603929669747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x281fcefda4f2f097%3A0x1a226f71515c52db!2sProject.id%20Services!5e0!3m2!1sid!2sid!4v1793481371877!5m2!1sid!2sid",

    review: "",

    coordinates: {
      latitude: -5.1566039,
      longitude: 119.535777,
    },
  },

  // ======================================================
  // Highlights
  // ======================================================

  highlights: ["Fast Response", "Professional Technician", "Warranty Service"],

  // ======================================================
  // Footer
  // ======================================================

  copyright: `© ${new Date().getFullYear()} PROJECT.ID SERVICES. All rights reserved.`,

  // ======================================================
  // SEO
  // ======================================================

  seo: {
    title: "PROJECT.ID SERVICES | Service AC & Solusi Elektronik Makassar",

    description:
      "Jasa service AC, cuci AC, perbaikan, instalasi, dan maintenance AC serta perangkat elektronik terpercaya di Makassar, Maros, dan Gowa. Teknisi profesional & bergaransi.",

    keywords: [
      "Service AC Makassar",
      "Cuci AC Makassar",
      "Instalasi AC Makassar",
      "Perbaikan AC Makassar",
      "Maintenance AC Makassar",
      "Preventive Maintenance AC",
      "Service Elektronik Makassar",
      "Teknisi AC Makassar",
      "Service AC Maros",
      "Service AC Gowa",
      "Smart Cooling",
      "PROJECT.ID SERVICES",
    ],
  },
};

export default COMPANY;
