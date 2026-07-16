import { BadgeCheck, Clock3, ShieldCheck, Headset } from "lucide-react";

export const ADVANTAGES = [
  {
    title: "Professional Technicians",
    description:
      "Experienced technicians delivering neat, safe, and professional workmanship for every project.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Response",
    description:
      "Quick scheduling and responsive support whenever you need technical assistance.",
    icon: Clock3,
  },
  {
    title: "Service Warranty",
    description:
      "We stand behind our work with a service warranty for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "After Sales Support",
    description:
      "Friendly consultation and continuous support even after the job is completed.",
    icon: Headset,
  },
] as const;
