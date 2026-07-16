"use client";

import Link from "next/link";

import { NAV_LINKS } from "./navLinks";
import useActiveSection from "@/hooks/useActiveSection";

export default function NavbarDesktop() {
  const activeSection = useActiveSection();

  return (
    <nav
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {NAV_LINKS.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              group
              relative

              py-2

              text-sm
              font-medium
              tracking-wide

              transition-all
              duration-300

              ${
                isActive
                  ? "text-[var(--color-primary)]"
                  : "text-slate-700 hover:text-[var(--color-primary)]"
              }
            `}
          >
            {item.label}

            <span
              className={`
                absolute
                left-0
                -bottom-1

                h-[2px]
                rounded-full

                bg-[var(--color-primary)]

                transition-all
                duration-300

                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}
