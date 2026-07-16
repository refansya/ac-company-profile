"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRight, Menu, PhoneCall, X } from "lucide-react";

import Logo from "@/components/shared/Logo";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { COMPANY } from "@/constants/company";
import useActiveSection from "@/hooks/useActiveSection";

import { NAV_LINKS } from "./navLinks";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="lg:hidden">
      {/* Hamburger */}

      <button
        type="button"
        aria-label="Open Navigation"
        onClick={() => setOpen(true)}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white/80
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white
          hover:shadow-md
        "
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-sm
          transition-all
          duration-300

          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50

          flex
          h-screen
          w-[340px]
          max-w-[90vw]
          flex-col

          bg-white

          p-6

          shadow-2xl

          transition-transform
          duration-300

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between">
          <Logo />

          <button
            type="button"
            aria-label="Close Navigation"
            onClick={() => setOpen(false)}
            className="
              rounded-xl
              p-2
              transition-colors
              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        <div className="my-8 h-px bg-slate-200" />

        {/* Menu */}

        <nav className="space-y-2">
          {NAV_LINKS.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-blue-50 text-[var(--color-primary)]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[var(--color-primary)]"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}

        <div className="mt-auto space-y-4">
          <Link
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-slate-200

              py-3

              text-sm
              font-medium

              transition

              hover:border-blue-200
              hover:text-[var(--color-primary)]
            "
          >
            <PhoneCall size={18} />

            {COMPANY.phoneDisplay}
          </Link>

          <PrimaryButton
            fullWidth
            icon={<ArrowRight size={18} />}
            onClick={() =>
              window.open(COMPANY.whatsappUrl, "_blank", "noopener,noreferrer")
            }
          >
            Book Service
          </PrimaryButton>
        </div>
      </aside>
    </div>
  );
}
