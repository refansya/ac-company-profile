import { ADVANTAGES } from "@/constants/advantages";

import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseGrid() {
  return (
    <div
      className="
        mt-20
        grid
        gap-8

        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {ADVANTAGES.map((item, index) => (
        <WhyChooseCard key={item.title} index={index + 1} {...item} />
      ))}
    </div>
  );
}
