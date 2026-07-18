import Image from "next/image";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

import Float from "@/components/motion/Float";

function FloatingBadge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
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

        shadow-[0_18px_50px_rgba(15,23,42,.15)]

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
          via-blue-500
          to-cyan-400

          text-white

          shadow-lg
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-[15px] font-semibold leading-none">{title}</p>

        <span className="mt-1 block text-xs text-slate-500">{subtitle}</span>
      </div>
    </div>
  );
}

export default function WhyChooseImage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Glow */}

      <div
        className="
          absolute
          -left-16
          top-10
          -z-10

          h-72
          w-72

          rounded-full

          bg-blue-500/20

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -right-16
          bottom-10
          -z-10

          h-72
          w-72

          rounded-full

          bg-cyan-400/20

          blur-[140px]
        "
      />

      {/* Image */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[32px]

          border
          border-white/50

          bg-white

          shadow-[0_40px_90px_rgba(15,23,42,.18)]
        "
      >
        <Image
          src="/images/why-choose/ac-cleaning-demo.jpg"
          alt="Professional AC Cleaning Service"
          width={560}
          height={760}
          priority
          className="
            h-[720px]
            w-full

            object-cover

            transition-transform
            duration-700

            hover:scale-105
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-slate-950/35
            via-transparent
            to-transparent
          "
        />

        {/* Frame */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-[32px]

            ring-1
            ring-inset
            ring-white/20
          "
        />
      </div>

      {/* Floating Badge */}

      <Float
        delay={0}
        className="
          absolute
          left-6
          top-6

          z-20

          hidden

          md:block
        "
      >
        <FloatingBadge
          icon={<Sparkles size={18} />}
          title="Trusted Service"
          subtitle="Reliable & Professional"
        />
      </Float>

      <Float
        delay={1}
        className="
          absolute
          bottom-6
          left-6

          z-20

          hidden

          md:block
        "
      >
        <FloatingBadge
          icon={<BadgeCheck size={20} />}
          title="Certified Team"
          subtitle="Experienced Technician"
        />
      </Float>

      <Float
        delay={2}
        className="
          absolute
          bottom-6
          right-6

          z-20

          hidden

          md:block
        "
      >
        <FloatingBadge
          icon={<ShieldCheck size={20} />}
          title="Warranty Service"
          subtitle="Guaranteed Workmanship"
        />
      </Float>
    </div>
  );
}
