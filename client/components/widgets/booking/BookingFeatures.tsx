import { ShieldCheck, Clock3, Wrench } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    text: "Certified Technician",
  },
  {
    icon: Clock3,
    text: "Fast Response",
  },
  {
    icon: Wrench,
    text: "Warranty Service",
  },
];

export default function BookingFeatures() {
  return (
    <div className="mt-8 space-y-4">
      {FEATURES.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.text} className="flex items-center gap-3">
            <div className="rounded-full bg-[var(--color-primary)]/10 p-2">
              <Icon className="h-5 w-5 text-[var(--color-primary)]" />
            </div>

            <span className="text-sm font-medium">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
