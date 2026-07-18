import WhyChooseImage from "./WhyChooseImage";
import WhyChooseFeature from "./WhyChooseFeature";
import WhyChoosePromise from "./WhyChoosePromise";

export default function WhyChooseContent() {
  return (
    <div
      className="
    mt-24
    grid
    items-center
    gap-20

    lg:grid-cols-[580px_1fr]
  "
    >
      <WhyChooseImage />

      <div>
        <WhyChooseFeature />

        <WhyChoosePromise />
      </div>
    </div>
  );
}
