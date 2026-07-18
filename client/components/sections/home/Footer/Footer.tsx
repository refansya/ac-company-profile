"use client";

import Logo from "@/components/shared/Logo";
import { COMPANY } from "@/constants/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#23324A] shadow-[0_-20px_40px_-20px_rgba(35,50,74,0.25)]">
      {/* Soft Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-24 w-64 -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-8">
        {/* Logo */}
        <Logo className="h-8 w-auto opacity-95" />

        {/* Copyright */}
        <p className="text-center text-xs text-slate-300">
          © {year} {COMPANY.legalName}. All rights reserved.
        </p>

        {/* Address */}
        <p className="flex items-center gap-2 text-xs text-slate-400">
          {COMPANY.address.city}, {COMPANY.address.country}
        </p>
      </div>
    </footer>
  );
}
