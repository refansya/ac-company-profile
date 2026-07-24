import { LucideIcon, ArrowUpRight } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
  index,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-slate-200/80

        bg-white/80

        p-8

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_30px_70px_rgba(0,87,255,.12)]
      "
    >
      {/* Hover Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0

          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-cyan-400

          transition-all
          duration-500

          group-hover:w-full
        "
      />

      {/* Number */}
      <span
        className="
          absolute
          right-7
          top-5

          text-5xl
          font-black

          text-slate-100

          transition

          group-hover:text-blue-100
        "
      >
        {String(index).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className="
          flex

          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-blue-600
          to-cyan-400

          text-white

          shadow-lg

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={28} />
      </div>

      <h3
        className="
          mt-8

          text-xl
          font-bold

          tracking-tight

          transition-colors

          group-hover:text-[var(--color-primary)]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4

          leading-7

          text-slate-600
        "
      >
        {description}
      </p>

      <div
        className="
          mt-8

          flex
          items-center
          gap-2

          text-sm
          font-semibold

          text-[var(--color-primary)]

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100
        "
      ></div>
    </div>
  );
}
