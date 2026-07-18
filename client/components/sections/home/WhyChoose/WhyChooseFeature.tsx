import { ADVANTAGES } from "@/constants/advantages";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseFeature() {
  return (
    <div
      className="
        grid
        gap-7

        md:grid-cols-2
    "
    >
      {ADVANTAGES.map((item, index) => (
        <WhyChooseCard key={item.title} index={index + 1} {...item} />
      ))}
    </div>
  );
}
