import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { COMPANY } from "@/constants/company";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function NavbarCTA() {
  const openWhatsApp = () => {
    window.open(COMPANY.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hidden items-center gap-4 lg:flex">
      {/* WhatsApp Number */}
      <Link
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="
          group
          flex
          items-center
          gap-3

          rounded-full
          border
          border-slate-200

          bg-white/80
          px-4
          py-2.5

          backdrop-blur-xl

          text-sm
          font-medium
          text-slate-700

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-white
          hover:text-[var(--color-primary)]
          hover:shadow-md
        "
      >
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            bg-blue-50
            text-[var(--color-primary)]

            transition-colors
            duration-300

            group-hover:bg-blue-100
          "
        >
          <PhoneCall size={16} />
        </span>

        <span>{COMPANY.phoneDisplay}</span>
      </Link>

      {/* Book Service */}
      <PrimaryButton
        size="sm"
        icon={<ArrowRight size={18} />}
        onClick={openWhatsApp}
      >
        Book Service
      </PrimaryButton>
    </div>
  );
}
