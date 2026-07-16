import WhyChooseImage from "./WhyChooseImage";
import WhyChooseFeature from "./WhyChooseFeature";
import WhyChooseStats from "./WhyChooseStats";

export default function WhyChooseContent() {
  return (
    <div
      className="
        mt-20
        grid
        items-center
        gap-20

        lg:grid-cols-[520px_1fr]
      "
    >
      <WhyChooseImage />

      <div>
        <WhyChooseFeature />

        <WhyChooseStats />
      </div>
    </div>
  );
}
