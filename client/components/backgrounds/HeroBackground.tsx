import Aurora from "./Aurora";
import GridPattern from "./GridPattern";

export default function HeroBackground() {
  return (
    <>
      <GridPattern />

      <Aurora />

      {/* Base Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef7ff]" />

      {/* Floating Circle (Desktop Only) */}
      <div
        className="
          absolute
          right-20
          top-40

          hidden
          lg:block

          h-20
          w-20

          rounded-full

          border
          border-white/40

          bg-white/20
          backdrop-blur-xl
        "
      />

      {/* Small Glow */}
      <div
        className="
          absolute

          bottom-20
          left-8

          h-6
          w-6

          rounded-full

          bg-[var(--color-primary)]/20

          blur-lg

          lg:bottom-32
          lg:left-40
          lg:h-10
          lg:w-10
          lg:bg-[var(--color-primary)]/30
          lg:blur-xl
        "
      />
    </>
  );
}
