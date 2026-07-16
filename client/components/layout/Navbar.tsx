"use client";

import { useEffect, useState } from "react";

import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";

import NavbarBrand from "./NavbarBrand";
import NavbarDesktop from "./NavbarDesktop";
import NavbarCTA from "./NavbarCTA";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300")}
    >
      <Container>
        <nav
          className={cn(
            "mt-5 flex h-24 items-center justify-between rounded-3xl border px-8 transition-all duration-300",

            scrolled
              ? `
                  border-white/60
                  bg-white/90
                  shadow-[0_20px_60px_rgba(8,17,32,.12)]
                  backdrop-blur-2xl
                `
              : `
                  border-white/40
                  bg-white/70
                  shadow-[0_12px_40px_rgba(8,17,32,.08)]
                  backdrop-blur-xl
                `,
          )}
        >
          {/* Logo */}
          <NavbarBrand />

          {/* Desktop Menu */}
          <NavbarDesktop />

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <NavbarCTA />

            <NavbarMobile />
          </div>
        </nav>
      </Container>
    </header>
  );
}
