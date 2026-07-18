import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Wrench,
  Users,
  ReceiptText,
} from "lucide-react";

export const ADVANTAGES = [
  {
    icon: BadgeCheck,
    title: "Certified Technician",
    description:
      "Handled by experienced technicians with professional service standards.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "Quick scheduling and responsive support for urgent service requests.",
  },
  {
    icon: ShieldCheck,
    title: "Service Warranty",
    description: "Every completed service includes a workmanship warranty.",
  },
  {
    icon: Wrench,
    title: "Quality Spare Parts",
    description: "We use reliable and high-quality replacement components.",
  },
  {
    icon: Users,
    title: "Residential & Commercial",
    description:
      "Serving homes, offices, schools, restaurants, and commercial buildings.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    description: "Clear quotations with no hidden costs before work begins.",
  },
] as const;
