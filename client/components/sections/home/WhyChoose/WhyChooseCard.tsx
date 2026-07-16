interface Props {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function WhyChooseCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <article
      className="
        group

        rounded-[28px]

        border
        border-slate-200

        bg-white

        p-8

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_20px_60px_rgba(0,87,255,.10)]
      "
    >
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

          transition-transform
          duration-500

          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
