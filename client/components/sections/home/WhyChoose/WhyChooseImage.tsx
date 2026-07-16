import { BadgeCheck, ShieldCheck } from "lucide-react";

export default function WhyChooseImage() {
  return (
    <div className="relative">
      <div
        className="
          aspect-[4/5]

          overflow-hidden

          rounded-[40px]

          bg-gradient-to-br
          from-blue-100
          via-slate-100
          to-cyan-100
        "
      />

      <div
        className="
          absolute
          left-6
          top-6

          rounded-2xl

          bg-white

          px-5
          py-4

          shadow-xl
        "
      >
        <div className="flex items-center gap-3">
          <BadgeCheck className="text-blue-600" size={22} />

          <div>
            <h4 className="font-bold">Certified Team</h4>

            <p className="text-sm text-slate-500">Professional Technicians</p>
          </div>
        </div>
      </div>

      <div
        className="
          absolute
          bottom-6
          right-6

          rounded-2xl

          bg-white

          px-5
          py-4

          shadow-xl
        "
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-600" size={22} />

          <div>
            <h4 className="font-bold">Service Warranty</h4>

            <p className="text-sm text-slate-500">Guaranteed Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}
