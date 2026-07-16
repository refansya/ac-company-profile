import { AirVent, Tv, Zap, Building2 } from "lucide-react";

export const SERVICES = [
  {
    id: "01",

    title: "Air Conditioning",

    subtitle: "Installation • Repair • Cleaning",

    description:
      "Professional installation, repair, preventive maintenance, cleaning, and troubleshooting for residential and commercial air conditioning systems.",

    icon: AirVent,

    features: ["Installation", "Maintenance", "Repair"],
  },

  {
    id: "02",

    title: "Electronic Services",

    subtitle: "TV • Audio • Home Appliances",

    description:
      "Repair and maintenance services for televisions, audio systems, and various electronic equipment with reliable diagnostics.",

    icon: Tv,

    features: ["LED TV", "Audio System", "Electronics"],
  },

  {
    id: "03",

    title: "Electrical Services",

    subtitle: "Installation • Troubleshooting",

    description:
      "Professional electrical installation, cable management, power outlet installation, MCB panel maintenance, and troubleshooting.",

    icon: Zap,

    features: ["Installation", "MCB Panel", "Troubleshooting"],
  },

  {
    id: "04",

    title: "Commercial Support",

    subtitle: "Office • Building • Preventive Care",

    description:
      "Routine technical maintenance and preventive services for offices, retail stores, restaurants, hotels, and commercial buildings.",

    icon: Building2,

    features: ["Office", "Retail", "Preventive"],
  },
] as const;
