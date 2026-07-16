interface Props {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "left",
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter ? "mx-auto mb-16 max-w-3xl text-center" : "mb-16 max-w-3xl"
      }
    >
      {badge && (
        <>
          <span
            className="
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
              tracking-wide
              uppercase

              text-[var(--color-primary)]
            "
          >
            {badge}
          </span>

          <div
            className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 ${
              isCenter ? "mx-auto" : ""
            }`}
          />
        </>
      )}

      <h2
        className="
          mt-6

          text-4xl
          font-black
          leading-tight
          tracking-tight

          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 text-lg leading-8 text-slate-600 ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
