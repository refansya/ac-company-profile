import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: readonly string[];
}

export default function ServiceCard({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  features,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[32px]

        border
        border-white/70

        bg-white/80

        p-8

        backdrop-blur-xl

        shadow-[0_12px_40px_rgba(15,23,42,.08)]

        transition-all
        duration-500

        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-[0_30px_80px_rgba(0,87,255,.15)]
      "
    >
      {/* Number */}
      <span
        className="
          absolute
          right-7
          top-7

          text-5xl
          font-black

          text-slate-100

          transition-colors
          duration-300

          group-hover:text-blue-100
        "
      >
        {id}
      </span>

      {/* Icon */}
      <div
        className="
          relative

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-3xl

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
        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-white/10
          "
        />

        <Icon size={38} className="relative" />
      </div>

      {/* Title */}
      <h3
        className="
          mt-8

          text-2xl
          font-black

          tracking-tight

          transition-colors

          group-hover:text-[var(--color-primary)]
        "
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="
          mt-2

          text-sm
          font-semibold

          text-[var(--color-primary)]
        "
      >
        {subtitle}
      </p>

      {/* Description */}
      <p
        className="
          mt-6

          flex-1

          leading-7

          text-slate-600
        "
      >
        {description}
      </p>

      {/* Features */}
      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3

              text-sm
              font-medium

              text-slate-700
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center

                rounded-full

                bg-blue-50

                text-[var(--color-primary)]
              "
            >
              <Check size={14} />
            </span>

            {feature}
          </div>
        ))}
      </div>
    </article>
  );
}
