import { ADVANTAGES } from "@/constants/advantages";

export default function WhyChooseFeature() {
  return (
    <div className="space-y-8">
      {ADVANTAGES.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="flex gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center

                rounded-2xl

                bg-blue-50

                text-blue-600
              "
            >
              <Icon size={26} />
            </div>

            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-2 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
