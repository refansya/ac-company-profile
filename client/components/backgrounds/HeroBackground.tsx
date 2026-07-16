import Aurora from "./Aurora";
import GridPattern from "./GridPattern";

export default function HeroBackground() {
  return (
    <>
      <GridPattern />

      <Aurora />

      {/* Base Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef7ff]" />

      {/* Floating Elements */}
      <div className="absolute right-20 top-40 h-20 w-20 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl" />

      <div className="absolute left-40 bottom-32 h-10 w-10 rounded-full bg-[var(--color-primary)]/30 blur-xl" />
    </>
  );
}