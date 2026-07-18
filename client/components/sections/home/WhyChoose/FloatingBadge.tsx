import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function FloatingBadge({ icon, title, subtitle }: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3

        rounded-2xl

        border
        border-white/70

        bg-white/90

        px-4
        py-3

        shadow-[0_18px_50px_rgba(15,23,42,.14)]

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-1
        hover:scale-[1.03]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          bg-gradient-to-br
          from-blue-600
          to-cyan-400

          text-white
        "
      >
        {icon}
      </div>

      <div>
        <h4 className="text-[15px] font-semibold leading-none">{title}</h4>

        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}
