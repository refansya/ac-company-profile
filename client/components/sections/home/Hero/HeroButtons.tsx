import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { COMPANY } from "@/constants/company";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex">
      <Link
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 text-base font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-[var(--color-primary)] hover:shadow-md"
      >
        <PhoneCall className="h-4 w-4" />
        {COMPANY.phoneDisplay}
      </Link>
    </div>
  );
}
