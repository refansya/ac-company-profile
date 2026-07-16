import { BadgeCheck } from "lucide-react";

export default function BookingHeader() {
  return (
    <div className="mb-6">
      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
        <BadgeCheck className="h-4 w-4" />
        Available Today
      </span>

      <h3 className="mt-4 text-2xl font-bold">Book Your Service</h3>

      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Schedule your AC service in less than one minute.
      </p>
    </div>
  );
}
