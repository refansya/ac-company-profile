import Image from "next/image";

export default function WhyChooseImage() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Ambient Glows */}
      <div
        className="
          absolute
          -left-10
          top-10
          -z-10
          h-64
          w-64
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />
      <div
        className="
          absolute
          -right-10
          bottom-10
          -z-10
          h-64
          w-64
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/60
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,.14)]
        "
      >
        <Image
          src="/images/why-choose/foto1.jpg"
          alt="Layanan Profesional Service & Maintenance AC"
          width={718}
          height={957}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
          priority
          className="
            h-[480px]
            sm:h-[560px]
            lg:h-[600px]
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Bottom gradient */}
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

        {/* Inset frame */}
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
    </div>
  );
}
