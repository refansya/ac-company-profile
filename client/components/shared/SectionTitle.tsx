import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;

  /**
   * Alignment
   * default: left
   */
  align?: "left" | "center";

  /**
   * Additional Classes
   */
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,

  align = "left",

  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <>
          <span
            className={cn(
              `
              inline-flex
              items-center

              rounded-full

              border
              border-blue-100

              bg-blue-50

              px-5
              py-2

              text-sm
              font-semibold

              uppercase
              tracking-[0.18em]

              text-[var(--color-primary)]
              `,
              badgeClassName,
            )}
          >
            {badge}
          </span>

          <div
            className={cn(
              "mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400",
              centered && "mx-auto",
            )}
          />
        </>
      )}

      <h2
        className={cn(
          `
          mt-6

          text-4xl
          font-black
          tracking-tight
          leading-tight

          md:text-5xl
          lg:text-6xl
          `,
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            `
            mt-7

            text-lg
            leading-8

            text-slate-600
            `,
            centered ? "mx-auto max-w-2xl" : "max-w-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
