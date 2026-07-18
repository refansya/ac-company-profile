import FadeUp from "@/components/motion/FadeUp";

import HeroButtons from "./HeroButtons";
import HeroRating from "./HeroRating";
import HeroStats from "./HeroStats";
import HeroServiceTags from "./HeroServiceTags";

export default function HeroContent() {
  return (
    <div className="flex flex-col">
      <FadeUp delay={0.1}>
        <span
          className="
            inline-flex
            w-fit
            rounded-full
            border
            border-[var(--color-primary)]/20
            bg-[var(--color-primary)]/10
            px-4
            py-2
            text-sm
            font-semibold
            tracking-wide
            text-[var(--color-primary)]
          "
        >
          PROJECT.ID SERVICES
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="mt-8 text-5xl font-black leading-[1.05] lg:text-7xl">
          Smart Cooling
          <br />
          & Electronic
          <br />
          Solutions
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-[var(--color-muted)]
          "
        >
          Professional air conditioning installation, maintenance, repair,
          preventive maintenance, and electronic solutions for residential,
          commercial, and industrial sectors.
        </p>
      </FadeUp>

      <FadeUp delay={0.4}>
        <div className="mt-10">
          <HeroButtons />
        </div>
      </FadeUp>

      <FadeUp delay={0.5}>
        <div className="mt-8">
          <HeroRating />
        </div>
      </FadeUp>

      <FadeUp delay={0.6}>
        <div className="mt-10">
          <HeroStats />
        </div>
      </FadeUp>

      <FadeUp delay={0.7}>
        <div className="mt-10">
          <HeroServiceTags />
        </div>
      </FadeUp>
    </div>
  );
}
