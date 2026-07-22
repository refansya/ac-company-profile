import type { Company } from "@/types/company";

const MAPS_ADDRESS =
  "Blok E, Nusa Idaman Residence No.50, Moncongloe, Kec. Moncong Loe, Kabupaten Maros, Sulawesi Selatan 90162";

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

  website: "https://project-id-services.com",

  logo: "/logo/logomain.svg",

  favicon: "/favicon.ico",

  ogImage: "/images/og-image.jpg",

  // ======================================================
  // Contact
  // ======================================================

  phone: "6281776756863",

  phoneDisplay: "+62 817-7675-6863",

  whatsappUrl: `https://wa.me/6281776756863?text=${encodeURIComponent(
    "Halo, Project.ID Services! Saya ingin berkonsultasi terkait layanan AC atau elektronik. Mohon informasinya, terima kasih.",
  )}`,

  email: "projectid@gmail.com",

  supportEmail: "support@project-id-services.com",

  salesEmail: "sales@project-id-services.com",

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

    instagram: "",

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
    maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_ADDRESS)}`,

    // URL khusus iframe embed
    embed: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_ADDRESS)}&output=embed`,

    review: "",
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
    title: "PROJECT.ID SERVICES | Smart Cooling & Electronic Solutions",

    description:
      "Professional AC installation, AC maintenance, AC repair, preventive maintenance, and electronic solutions in Makassar and surrounding areas.",

    keywords: [
      "Service AC Makassar",
      "Cuci AC Makassar",
      "Instalasi AC Makassar",
      "Perbaikan AC Makassar",
      "Maintenance AC Makassar",
      "Preventive Maintenance AC",
      "Service Elektronik Makassar",
      "Teknisi AC Makassar",
      "Smart Cooling",
      "PROJECT.ID SERVICES",
    ],
  },
};

export default COMPANY;
