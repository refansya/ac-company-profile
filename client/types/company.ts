export interface Company {
  // ======================================================
  // Brand Identity
  // ======================================================

  name: string;
  shortName: string;
  legalName: string;

  tagline: string;
  slogan: string;

  description: string;

  founded: number;

  // ======================================================
  // Website
  // ======================================================

  website: string;
  logo: string;
  favicon: string;
  ogImage: string;

  // ======================================================
  // Contact
  // ======================================================

  phone: string;
  phoneDisplay: string;

  email: string;
  supportEmail: string;
  salesEmail: string;

  whatsappUrl: string;

  // ======================================================
  // Address
  // ======================================================

  address: {
    street: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };

  // ======================================================
  // Coverage Area
  // ======================================================

  coverageArea: string[];

  // ======================================================
  // Business Hours
  // ======================================================

  businessHours: {
    mondayFriday: string;
    saturday: string;
    sunday: string;
  };

  // ======================================================
  // Services
  // ======================================================

  serviceCategories: string[];

  // ======================================================
  // Social Media
  // ======================================================

  social: {
    whatsapp: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
  };

  // ======================================================
  // Google Business
  // ======================================================

  google: {
    maps: string;
    embed: string;
    review: string;
  };

  // ======================================================
  // Highlights
  // ======================================================

  highlights: string[];

  // ======================================================
  // SEO
  // ======================================================

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // ======================================================
  // Footer
  // ======================================================

  copyright: string;
}
