import { COMPANY } from "@/constants/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200/80 bg-slate-50/95 shadow-[0_-12px_32px_-28px_rgba(15,23,42,0.28)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
        <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl justify-center px-5 py-6 sm:px-8">
        <div className="flex flex-col items-center gap-1.5 text-center text-xs">
          <p className="font-medium text-slate-600">
            © {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-slate-500">
            {COMPANY.address.city}, {COMPANY.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
