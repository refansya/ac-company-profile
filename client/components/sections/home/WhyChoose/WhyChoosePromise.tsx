import {
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
  UserCheck,
  Headphones,
} from "lucide-react";

const ITEMS = [
  {
    icon: BadgeCheck,
    label: "Professional Diagnosis",
  },
  {
    icon: Wrench,
    label: "Clean Installation",
  },
  {
    icon: ShieldCheck,
    label: "Warranty Service",
  },
  {
    icon: Sparkles,
    label: "Quality Workmanship",
  },
  {
    icon: UserCheck,
    label: "Friendly Technician",
  },
  {
    icon: Headphones,
    label: "After Sales Support",
  },
];

export default function WhyChoosePromise() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-xl font-bold">Our Service Promise</h3>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <item.icon className="text-[var(--color-primary)]" size={18} />
            </div>

            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
