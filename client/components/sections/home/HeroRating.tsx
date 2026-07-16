import { Star } from "lucide-react";

export default function HeroRating() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}

        <span className="ml-2 text-sm font-semibold">
          4.9 Google Rating
        </span>
      </div>

      <p className="text-sm text-[var(--color-muted)]">
        Trusted by 250+ customers
      </p>
    </div>
  );
}